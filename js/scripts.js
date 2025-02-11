document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchButton').addEventListener('click', function() {
        let characters = document.getElementById('characters').value.toLowerCase();
        let requiredCharacters = document.getElementById('requiredCharacters').value.toLowerCase();
        const wordLength = document.getElementById('wordLength').value;
        const resultsTable = document.getElementById('resultsTable');
        const tableHeader = document.getElementById('tableHeader');
        const selectedLanguage = document.getElementById('language').value;
        
        // Clear the table and header
        resultsTable.innerHTML = '';
        tableHeader.innerHTML = '';

        // Create table headers
        const headerRow = document.createElement('tr');
        for (let i = 1; i <= wordLength; i++) {
            const headerCell = document.createElement('th');
            headerCell.textContent = i;
            headerCell.addEventListener('click', () => sortTable(i - 1));
            headerRow.appendChild(headerCell);
        }
        tableHeader.appendChild(headerRow);

        // Load the file words-N.txt from the /data subfolder
        console.log(`data/${selectedLanguage}/words-${wordLength}.txt`);
        fetch(`data/${selectedLanguage}/words-${wordLength}.txt`)
            .then(response => response.text())
            .then(data => {
                const words = data.split('\n').map(word => word.trim());
                words.forEach(word => {
                    if (canFormWord(word, characters, requiredCharacters)) {
                        const row = document.createElement('tr');
                        word.toUpperCase().split('').forEach(char => {
                            const cell = document.createElement('td');
                            cell.textContent = char;
                            row.appendChild(cell);
                        });
                        resultsTable.appendChild(row);
                    }
                });
            })
            .catch(error => console.error('Error loading the file:', error));
    });

    populateLanguages();
});
