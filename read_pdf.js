const fs = require('fs');
const pdf = require('pdf-parse');

async function readPDF() {
    try {
        const dataBuffer = fs.readFileSync('Zusammenfassung_Informatik.pdf');
        const data = await pdf(dataBuffer);
        console.log(data.text);
    } catch (error) {
        console.error('Fehler beim Lesen der PDF:', error);
    }
}

readPDF(); 