const PangramFinder = function(phrase) {
  this.phrase = phrase.toLowerCase();
  this.abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
}

PangramFinder.prototype.isPangram = function () {
  const chars = this.phrase.split('')
  return result = this.abc.every((letter) => {
    return chars.includes(letter);
  })
}

module.exports = PangramFinder;
