/**
 * Borra el fichero 'borrame.txt' situado en este mismo directorio
 */
const fs = require('fs');
fs.unlink('borrame.txt',  (error)=> {
    if (error){
        console.error('Error al borrar el archivo:', err);
        return;
    }
    console.log('Archivo eliminado correctamente.');
});