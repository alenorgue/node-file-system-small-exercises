/**
 * Crea un script que muestre por consola cada uno de los archivos del directorio 'backup-files'.
 * 
 * REsultado esperado: https://oscarm.tinytake.com/msc/OTcyMDU5MV8yMzM1NjMzNA
 * 
 */
const fs = require('fs');
const path = require('path');

const dir = './backup-files';

fs.readdir(dir, (err, files) => {
  if (err) {
    console.error('Error al leer el directorio:', err);
    return;
  }

  files.forEach(file => {
    console.log(file);
  });
});