function findMostRepeatedLetter(text) {
    text = text.toLowerCase();
    const letterFrequency = {};
    for (let char of text) {
        if (char.match(/[a-z]/i)) {
            letterFrequency[char] = (letterFrequency[char] || 0) + 1;
        }
    }
    let mostRepeatedLetter;
    let maxFrequency = 0;
    for (let letter in letterFrequency) {
        if (letterFrequency[letter] > maxFrequency) {
            mostRepeatedLetter = letter;
            maxFrequency = letterFrequency[letter];
        }
    }
    return mostRepeatedLetter;
}

module.exports = {findMostRepeatedLetter}