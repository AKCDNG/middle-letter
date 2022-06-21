const middleLetterFinder = require('./middleLetter')

require('./middleLetter')

describe('Middle Letter tests', () => {
  it('Returns t when dentist is inputted', () => {

    const middleLetterClass = new middleLetterFinder();
    expect(middleLetterClass.middleLetter('dentist')).toEqual('t')
  })

  it('Returns eb when whiteboard is inputted', () => {
    const middleLetterClass = new middleLetterFinder();
    expect(middleLetterClass.middleLetter('whiteboard')).toEqual('eb')
  })
})