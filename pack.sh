#!/bin/bash -e
VERSION="$(ruby -rjson -e "puts JSON.parse(File.read('manifest.json'))['version']")"
ZIP_FILENAME="chrome-quicktime-$VERSION.zip"
rm -f "$ZIP_FILENAME"
zip -9 "$ZIP_FILENAME" manifest.json README.markdown *.js icon*.png qtbutton.mov
