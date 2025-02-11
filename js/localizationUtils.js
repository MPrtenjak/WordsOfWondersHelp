window.applyLocalization = function(language) {
    fetch(`data/${language}/translations.json`)
        .then(response => response.json())
        .then(data => {
            document.title = data.title;
            document.getElementById('title').textContent = data.title;
            document.querySelector('label[for="language"]').textContent = data.languageLabel;
            document.getElementById('characters').placeholder = data.charactersPlaceholder;
            document.getElementById('requiredCharacters').placeholder = data.requiredCharactersPlaceholder;
            document.querySelector('label[for="wordLength"]').textContent = data.wordLengthLabel;
            document.getElementById('searchButton').textContent = data.searchButton;
        })
        .catch(error => console.error('Error loading localization:', error));
}
