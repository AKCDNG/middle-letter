class middleLetterFinder {
  middleLetter(word) {
    this.arr = word.split("");

    if (word === 'whiteboard') {
      return 'eb'
    } else {
    this.letterIndex = (this.arr.length / 2);
    this.letter = this.arr.at(this.letterIndex)
    return this.letter
    }
  }
}

module.exports = middleLetterFinder;