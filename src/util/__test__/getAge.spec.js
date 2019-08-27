let getAge = require('../getAge')

describe('getAge', () => {
  it('should return current age', () => {
    let input = getAge('2017-01-01', '2019-08-27')
    let actual = "2.7"
    expect(input).toBe(actual)
  })
})