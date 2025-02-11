const fs = require('fs');
const path = require('path');

function processLanguages() {
    const dataDir = path.join(__dirname);
    const outputFilePath = path.join(__dirname, 'languages.json');

    fs.readdir(dataDir, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error('Error reading the directory:', err);
            return;
        }

        const folders = files
            .filter(file => file.isDirectory())
            .map(folder => folder.name);

        fs.writeFile(outputFilePath, JSON.stringify(folders, null, 2), 'utf8', err => {
            if (err) {
                console.error('Error writing the JSON file:', err);
            } else {
                console.log('languages.json file written successfully.');
            }
        });
    });
}

processLanguages();
