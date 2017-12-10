setup-env:
	bash scripts/venv-install.sh
	bash scripts/aws-configure.sh

deploy-staging:
	yarn --freeze-lockfile
	yarn qa
	bash scripts/venv-update.sh
	bash scripts/local-deploy.sh test
