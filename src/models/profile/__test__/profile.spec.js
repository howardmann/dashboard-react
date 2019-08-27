let makeProfile = require('../index')

describe('makeProfile', () => {
  it.only('throws error if invalid payload', () => {
    let errorMessage = [
      'must have name as string',
      'dob must be a string',
      'bio must be a string',
      'theme must be a string',
      'avatar must be a string'
    ].join('\n')

    expect(() => {
      makeProfile({
        dob: null,
        bio: null,
        theme: 1,
        avatar: true,
        secret: 'virus'
      })
    }).toThrow(errorMessage)
  })
  // it('must have name', () => {
  //   let student = makeStudent({
  //     name: 'howie',
  //   })
  //   let input = student.getName()
  //   let actual = 'howie'
  //   expect(input).to.equal(actual)
  // })
  // it('can have grade', () => {
  //   let student = makeStudent({
  //     name: 'howie',
  //     grade: 2
  //   })
  //   let input = student.getGrade()
  //   let actual = 2
  //   expect(input).to.equal(actual)
  // })
  // it('can have age', () => {
  //   let student = makeStudent({
  //     name: 'howie',
  //     age: 12
  //   })
  //   let input = student.getAge()
  //   let actual = 12
  //   expect(input).to.equal(actual)
  // })
  // it('sets prefect to false by default', () => {
  //   let student = makeStudent({
  //     name: 'howie'
  //   })
  //   let input = student.isPrefect()
  //   let actual = false
  //   expect(input).to.equal(actual)
  // })
})