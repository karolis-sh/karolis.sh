_venv_dir := ./deployment/venv
_python := $(_venv_dir)/bin/python3
_pip :=  $(_python) $(_venv_dir)/bin/pip3
_aws := $(_python) $(_venv_dir)/bin/aws
_s3 := $(_aws) s3

_build_dir := ./public
_bucket_region := --region eu-central-1
_bucket_acl := --acl public-read
_no_cache := --cache-control "private, no-cache, no-store, must-revalidate"
_one_day_cache := --cache-control "public, max-age=86400"
_one_year_cache := --cache-control "public, max-age=31536000"

_test_bucket := s3://test.kode.lt
_test_cloudfront := E2AP5DCC9LWDEN
_test_url := https://d21ippl8cthwe2.cloudfront.net/
_prod_bucket := s3://kode.lt
_prod_cloudfront := ERWVMIVW1VDHQ
_prod_url := https://kode.lt/


# ################################################################
# Main commands
# ################################################################

install:
	python3 -m venv $(_venv_dir)
	make update
	make setup.aws

deploy.test:
	export _url=$(_test_url) && \
		export _bucket=$(_test_bucket) && \
		export _cloudfront=$(_test_cloudfront) && \
		make _deploy

deploy.prod:
	export _url=$(_prod_url) && \
		export _bucket=$(_prod_bucket) && \
		export _cloudfront=$(_prod_cloudfront) && \
		make _deploy

_deploy: update build
	$(_s3) rm $(_bucket) --recursive $(_bucket_region)
	$(_s3) cp $(_build_dir)/index.html $(_bucket)/index.html \
		$(_bucket_region) $(_bucket_acl) $(_no_cache)
	$(_s3) cp $(_build_dir) $(_bucket) \
		--include "*" \
		--exclude "index.html" \
		--exclude "static/*" \
		--exclude "*.js" --exclude "*.js.map" \
		--recursive $(_bucket_region) $(_bucket_acl) $(_one_day_cache)
	$(_s3) cp $(_build_dir) $(_bucket) \
		--exclude "*" \
		--include "*.js" --include "*.js.map" \
		--recursive $(_bucket_region) $(_bucket_acl) $(_one_year_cache)
	$(_s3) cp $(_build_dir)/static $(_bucket)/static \
		--recursive $(_bucket_region) $(_bucket_acl) $(_one_year_cache)
	$(_aws) configure set preview.cloudfront true
	$(_aws) cloudfront create-invalidation --distribution-id $(_cloudfront) --paths "/*"
	@echo ==============================================
	@echo
	@echo -e Deployed to '\033[0;32m'$(_url)'\033[0m' 
	@echo
	@echo ==============================================


# ################################################################
# Other
# ################################################################

setup.aws:
	$(_aws) configure

update:
	$(_pip) install -r ./deployment/requirements.txt
	yarn

freeze:
	$(_pip) freeze > ./deployment/requirements.txt

build:
	yarn validate
	yarn build
