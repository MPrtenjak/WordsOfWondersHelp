const fs = require('fs');
const path = require('path');
const readline = require('readline');

const inputFilePath = path.join(__dirname, 'all-words.txt');
const outputDir = path.join(__dirname, '../');

const rl = readline.createInterface({
    input: fs.createReadStream(inputFilePath),
    terminal: false
});

const wordGroups = {};

// Process each line
rl.on('line', (line) => {
    line = line.trim();
    let firstWord;
    if (line.includes('(')) {
        firstWord = line.split(' ')[0];
        const bracketContent = line.match(/\(([^)]+)\)/)[1];
        const wordsInBrackets = bracketContent.split(',').map(word => word.trim().split(' ')[0]);
        wordsInBrackets.forEach(word => addWordToGroup(word));
    } else if (line.includes(' ')) {
        firstWord = line.split(' ')[0];
    } else {
        firstWord = line;
    }
    addWordToGroup(firstWord);
});

rl.on('close', () => {
    // Write words to respective files based on their length
    Object.keys(wordGroups).forEach(length => {
        const outputFilePath = path.join(outputDir, `words-${length}.txt`);
        fs.writeFile(outputFilePath, wordGroups[length].join('\n'), 'utf8', err => {
            if (err) {
                console.error(`Error writing to file ${outputFilePath}:`, err);
            } else {
                console.log(`File ${outputFilePath} written successfully.`);
            }
        });
    });
});

function addWordToGroup(word) {
    const length = word.length;
    if (length >= 3) {
        if (!wordGroups[length]) {
            wordGroups[length] = [];
        }
        wordGroups[length].push(word);
    }
}
