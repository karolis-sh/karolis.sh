#!/bin/bash
SCRIPT=$(readlink -f "$0")
SCRIPTS_DIR=$(dirname "$SCRIPT")
ROOT_DIR=$(dirname "$SCRIPTS_DIR")
VENV_DIR=$ROOT_DIR/venv
VENV_REQUIREMENTS_PATH=$ROOT_DIR/requirements.txt

# https://misc.flogisoft.com/bash/tip_colors_and_formatting
# Colors
C_DEFAULT="\e[39m"
C_DARK_GRAY="\e[90m"
C_GREEN="\e[32m"
C_BLUE="\e[34m"
C_RED="\e[31m"

# Build
BUILD_DIR=./public
BUCKET_REGION="eu-central-1"
BUCKET_ACL="public-read"
NO_CACHE="private, no-cache, no-store, must-revalidate"
ONE_DAY_CACHE="public, max-age=86400"
ONE_WEEK_CACHE="public, max-age=604800"
ONE_MONTH_CACHE="public, max-age=2628000"
ONE_YEAR_CACHE="public, max-age=31536000"

TEST_BUCKET=s3://test.karolis.sh
TEST_CLOUDFRONT_ID=EDMOCYPD575CO
TEST_URL=https://test.karolis.sh/
PROD_BUCKET=s3://karolis.sh
PROD_CLOUDFRONT_ID=E26XV9XZP5F4KB
PROD_URL=https://karolis.sh/
