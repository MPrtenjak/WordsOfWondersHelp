canFormWord = function(word, characters, requiredCharacters) {
    const charArray = characters.split('');
    for (let char of word) {
        const index = charArray.indexOf(char);
        if (index === -1) {
            return false;
        }
        charArray.splice(index, 1);
    }
    for (let char of requiredCharacters) {
        if (!word.includes(char)) {
            return false;
        }
    }
    return true;
}
