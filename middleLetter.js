class middleLetterFinder {
  middleLetter(word) {
    this.arr = word.split("");
    this.letterIndex = (this.arr.length / 2);
    this.letter = this.arr.at(this.letterIndex)
    return this.letter
  }
}

module.exports = middleLetterFinder;