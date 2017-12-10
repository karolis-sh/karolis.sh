#!/bin/bash
. $(dirname "$(readlink -f "$0")")/config.sh

. $SCRIPTS_DIR/venv-activate.sh
. $SCRIPTS_DIR/deploy.sh $@
