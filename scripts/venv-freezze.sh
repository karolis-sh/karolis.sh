#!/bin/bash
. $(dirname "$(readlink -f "$0")")/config.sh

. $SCRIPTS_DIR/venv-activate.sh

pip3 freeze > $VENV_REQUIREMENTS_PATH
echo -e "${C_BLUE}venv dependiencies saved - ${C_GREEN}${VENV_REQUIREMENTS_PATH}${C_DEFAULT}\n"
