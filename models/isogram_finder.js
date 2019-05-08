const IsogramFinder = function (string) {
  this.string = string.toLowerCase();
}

IsogramFinder.prototype.isIsogram = function () {
  const chars = this.string.split('')
  const result = chars.reduce((allChars, char) => {
    if (char in allChars) {
      allChars[char]++;
    }
    else {
      allChars[char] = 1;
    }
    return allChars;
  }, {});
  return chars.every((char) => {
    return result[char] === 1;
  })
}

module.exports = IsogramFinder;
