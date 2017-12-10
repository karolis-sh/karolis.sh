#!/bin/bash
. $(dirname "$(readlink -f "$0")")/config.sh

python3 -m venv $VENV_DIR
echo -e "${C_BLUE}venv created - ${C_GREEN}${VENV_DIR}${C_DEFAULT}\n"
