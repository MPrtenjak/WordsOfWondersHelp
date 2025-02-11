window.populateLanguages = function() {
    fetch(`${DATA_FOLDER}/languages.json`)
        .then(response => response.json())
        .then(data => {
            const languageSelect = document.getElementById('language');
            const storedLanguage = localStorage.getItem('selectedLanguage');
            let selectedLanguage = storedLanguage || data[0];

            data.forEach(language => {
                const option = document.createElement('option');
                option.value = language;
                option.textContent = language;
                if (language === selectedLanguage) {
                    option.selected = true;
                }
                languageSelect.appendChild(option);
            });

            applyLocalization(selectedLanguage);            
            if (!storedLanguage) {
                localStorage.setItem('selectedLanguage', selectedLanguage);
            }

            languageSelect.addEventListener('change', function() {
                localStorage.setItem('selectedLanguage', this.value);
                applyLocalization(this.value);            
            });
        })
        .catch(error => console.error('Error loading languages:', error));
}
