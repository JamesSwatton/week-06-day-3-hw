const AnagramFinder = function (string) {
  this.string = string.toLowerCase();
}

AnagramFinder.prototype.findAnagrams = function(wordsToCheck) {
  const chars = this.string.split('');

  const result = wordsToCheck.filter((word) => {
    const wordToCheck = word.toLowerCase().split('');
    return wordToCheck.every((char) => {
      return chars.includes(char);
    })
  })
  if (result[0] !== this.string) {
    return result;
  } else {
    return []
  }

}

module.exports = AnagramFinder;
