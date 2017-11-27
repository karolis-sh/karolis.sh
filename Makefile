_venv := ./deployment/venv
_python := $(_venv)/bin/python3
_pip :=  $(_python) $(_venv)/bin/pip3
_aws := $(_python) $(_venv)/bin/aws


# ################################################################
# Main commands
# ################################################################

install:
	python3 -m venv $(_venv)
	make update
	make setup.aws

deploy: update
	npm run ci:test
	npm run build
	$(_aws) s3 rm s3://kode.lt --recursive --region eu-central-1
	$(_aws) s3 cp ./build s3://kode.lt --recursive --region eu-central-1 --acl public-read \
		--cache-control "public, max-age=86400" --exclude "index.html" --exclude "static/*" --exclude "img/*"
	$(_aws) s3 cp ./build/index.html s3://kode.lt/index.html --region eu-central-1 --acl public-read \
		--cache-control "private, no-cache, no-store, must-revalidate"
	$(_aws) s3 cp ./build/img s3://kode.lt/img --recursive --region eu-central-1 --acl public-read \
		--cache-control "public, max-age=604800"
	$(_aws) s3 cp ./build/static s3://kode.lt/static --recursive --region eu-central-1 --acl public-read \
		--cache-control "public, max-age=31536000"
	$(_aws) configure set preview.cloudfront true
	$(_aws) cloudfront create-invalidation --distribution-id ERWVMIVW1VDHQ --paths "/*"


# ################################################################
# Other
# ################################################################

setup.aws:
	$(_aws) configure

update:
	$(_pip) install -r ./deployment/requirements.txt

freeze:
	$(_pip) freeze > ./deployment/requirements.txt
