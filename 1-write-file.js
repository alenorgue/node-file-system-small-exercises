/**
 * Escribe un fichero de nombre "test.txt" con el texto "Hello World!".
 * 
 */
const fs = require('fs');
fs.writeFile('test.txt', 'Hello World!', (err) => {
	if (err) {
		console.error('Error writing file:', err);
	} else {
		console.log('File written successfully!');
	}
});