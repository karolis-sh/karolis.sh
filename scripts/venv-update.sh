#!/bin/bash
. $(dirname "$(readlink -f "$0")")/config.sh

. $SCRIPTS_DIR/venv-activate.sh

echo -e "${C_DEFAULT}Updating python venv${C_DARK_GRAY}"
pip install --upgrade pip
pip3 install awscli==1.14.7
echo -e "${C_BLUE}venv up-to-date${C_DEFAULT}\n"
