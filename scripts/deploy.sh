#!/bin/bash
. $(dirname "$(readlink -f "$0")")/config.sh

set -e
cd $ROOT_DIR

# Test if correct deploy terget is provided
if [ "$1" = "test" ]; then
  BUCKET=$TEST_BUCKET
  CLOUDFRONT_ID=$TEST_CLOUDFRONT_ID
  URL=$TEST_URL
elif [ "$1" = "prod" ]; then
  BUCKET=$PROD_BUCKET
  CLOUDFRONT_ID=$PROD_CLOUDFRONT_ID
  URL=$PRODT_URL
else
  echo -e "Invalid deploy target provided - ${C_RED}${1}${C_DEFAULT}"
  exit 1
fi

echo -e "Starting deployment vairables:"
echo -e "${C_BLUE}env        ${C_DEFAULT}- ${C_GREEN}${1}"
echo -e "${C_BLUE}bucket     ${C_DEFAULT}- ${C_GREEN}${BUCKET}"
echo -e "${C_BLUE}cloudfront ${C_DEFAULT}- ${C_GREEN}${CLOUDFRONT_ID}"
echo -e "${C_BLUE}url        ${C_DEFAULT}- ${C_GREEN}${URL}${C_DEFAULT}"

# Check for AWS credentials
AWS_USER=$(aws iam get-user)
if [ "$AWS_USER" == "" ]; then
  echo -e "${C_RED}No AWS user found${C_DEFAULT}"
  exit 1
fi
echo "AWS_USER = $AWS_USER"

# Build artifacts
yarn build

# Sync s3
printf "${C_DARK_GRAY}"
aws s3 rm $BUCKET --recursive --region $BUCKET_REGION
aws s3 cp $BUILD_DIR/index.html $BUCKET/index.html \
  --content-type "text/html; charset=utf-8" \
  --region $BUCKET_REGION --acl $BUCKET_ACL --cache-control "$NO_CACHE"
aws s3 cp $BUILD_DIR/manifest.json $BUCKET/manifest.json \
  --content-type "application/manifest+json; charset=utf-8" \
  --region $BUCKET_REGION --acl $BUCKET_ACL --cache-control "$NO_CACHE"
aws s3 cp $BUILD_DIR $BUCKET \
  --exclude "*" \
  --include "*.js" \
  --include "*.js.map" \
  --content-type "text/javascript; charset=utf-8" \
  --recursive --region $BUCKET_REGION --acl $BUCKET_ACL --cache-control "$ONE_MONTH_CACHE"
aws s3 cp $BUILD_DIR/static $BUCKET/static \
  --recursive --region $BUCKET_REGION --acl $BUCKET_ACL --cache-control "$ONE_MONTH_CACHE"
aws s3 cp $BUILD_DIR $BUCKET \
  --include "*" \
  --exclude "index.html" \
  --exclude "manifest.json" \
  --exclude "static/*" \
  --exclude "*.js" --exclude "*.js.map" \
  --recursive --region $BUCKET_REGION --acl $BUCKET_ACL --cache-control "$ONE_DAY_CACHE"

# Invalidate cloudfront
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths "/*"

printf "${C_BLUE}"
echo ====================================================
echo
echo -e " Deployed to ${C_GREEN}${URL}${C_BLUE}"
echo
echo ====================================================
printf "${C_DEFAULT}"
