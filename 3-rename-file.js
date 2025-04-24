/**
 * Renombra el fichero "bird.jpg" a "pajaro.jpg"
 */
const fs = require('fs');
fs.rename('bird.jpg', 'pajaro.jpg', (error)=> {
    if (error){
        console.error('Error al renombrar el archivo:', err);
        return;
    }
    console.log('Archivo renombrado correctamente.');
});