setup:
	bash scripts/venv-install.sh
	bash scripts/venv-update.sh
	bash scripts/aws-configure.sh

deploy-test:
	npm ci
	bash scripts/venv-update.sh
	bash scripts/local-deploy.sh test
