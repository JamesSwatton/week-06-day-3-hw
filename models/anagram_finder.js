const AnagramFinder = function (string) {
  this.string = string.toLowerCase();
}

AnagramFinder.prototype.findAnagrams = function(wordsToCheck) {
  const chars = this.string.split('');

  const filteredWords = wordsToCheck.filter((word) => {
    return word.length === this.string.length && word !== this.string;
  })

  const result = filteredWords.filter((word) => {
    const wordToCheck = word.toLowerCase().split('');
    return wordToCheck.every((char) => {
      return chars.includes(char);
    })
  })
  return result
}

module.exports = AnagramFinder;
