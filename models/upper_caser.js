const UpperCaser = function (string) {
  this.string = string
}

UpperCaser.prototype.toUpperCase = function () {
  const result = this.string.map((word) => {
    return word.toUpperCase();
  })
  return result;
}

module.exports = UpperCaser;
