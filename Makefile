_venv := ./deployment/venv
_python := $(_venv)/bin/python3
_pip :=  $(_python) $(_venv)/bin/pip3
_aws := $(_python) $(_venv)/bin/aws


# ################################################################
# Main commands
# ################################################################

install:
	virtualenv -p python3 $(_venv)
	make update
	make setup.aws

deploy: update
	npm run validate
	npm run build
	$(_aws) s3 rm s3://kode.lt/ --recursive --region eu-central-1
	$(_aws) s3 cp ./build/ s3://kode.lt/ --exclude ./build/static --cache-control 'public, max-age=86400' --recursive --region eu-central-1
	$(_aws) s3 cp ./build/static/ s3://kode.lt/static/ --cache-control 'public, max-age=31536000' --recursive --region eu-central-1
	$(_aws) configure set preview.cloudfront true
	$(_aws) cloudfront create-invalidation --distribution-id ERWVMIVW1VDHQ --paths /


# ################################################################
# Other
# ################################################################

setup.aws:
	$(_aws) configure

update:
	$(_pip) install -r ./deployment/requirements.txt

freeze:
	$(_pip) freeze > ./deployment/requirements.txt
	