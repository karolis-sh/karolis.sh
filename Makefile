setup:
	bash scripts/venv-install.sh
	bash scripts/venv-update.sh
	bash scripts/aws-configure.sh

deploy-test:
	yarn --freeze-lockfile
	yarn qa
	bash scripts/venv-update.sh
	bash scripts/local-deploy.sh test
