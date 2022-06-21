class middleLetterFinder {
  middleLetter(word) {
    this.arr = word.split("");
    this.letterIndex = (this.arr.length / 2);
    
    if (word.length % 2 === 0) {
      this.letter1 = this.arr.at((this.letterIndex)- 1);
      this.letter2 = this.arr.at(this.letterIndex)

      this.totalLetters = `${this.letter1}${this.letter2}`
      return this.totalLetters
    } else {
    this.letter = this.arr.at(this.letterIndex)
    return this.letter
    }
  }
}

module.exports = middleLetterFinder;