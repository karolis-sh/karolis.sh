#!/bin/sh
minify () {
  # Best quality - 82
  FROM=$1
  TO=$2
  WIDTH=$3
  cp $FROM $TO
  mogrify \
    -filter Triangle \
    -define filter:support=2 \
    -unsharp 0.25x0.25+8+0.065 \
    -dither None -posterize 136 \
    -define jpeg:fancy-upsampling=off \
    -define png:compression-filter=5 \
    -define png:compression-level=9 \
    -define png:compression-strategy=1 \
    -define png:exclude-chunk=all \
    -interlace none \
    -strip \
    -colorspace Gray \
    -quality 40 \
    -thumbnail $WIDTH \
    $TO
  echo "Minified \033[0;32m$TO\033[0m"
}

minify resources/milky-way.jpg src/style/img/milky-way-small.jpg 600
minify resources/milky-way.jpg src/style/img/milky-way-medium.jpg 1200
minify resources/milky-way.jpg src/style/img/milky-way-high.jpg 1920
echo "Minifying complete!\n"
