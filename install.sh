#!/bin/bash

npm install
echo "Preparando archivo .sh para iniciar..."
mv ./init/init.sh ./init.sh
rm -- ./init/init.cmd
rm -rf ./init
echo "Borrando Archivos innecesarios..."
rm -rf ./install.cmd
echo "Se borrará el archivo de instalación..."
rm -- "$0"
