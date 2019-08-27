let validator = require('../index')
let profileSchema = require('../../profile/profile-schema.js')
let profileValidator = validator(profileSchema)

describe('profileValidator', () => {
  it('validates name:string:required, grade:number, age:number, prefect:boolean', () => {
    let validPayload = {
      name: 'felix mann',
      dob: '2016-11-05',
      bio: 'felix is a money who loves bananas',
      theme: '#ffff',
      avatar: 'http://www.example.com'
    }
    let input = profileValidator(validPayload)
    let actual = true
    expect(input).toBe(actual)
  })

  it('returns error messages if invalid', () => {
    let invalidPayload = {
      dob: null,
      bio: null,
      theme: 1,
      avatar: true,
      secret: 'virus'
    }
    let input = profileValidator(invalidPayload)
    let errorMessage = [
      'must have name as string',
      'dob must be a string',
      'bio must be a string',
      'theme must be a string',
      'avatar must be a string',
      '"secret" is not allowed'
    ].join('\n')

    let actual = {
      error: errorMessage
    }

    expect(input).toEqual(actual)
  })
})
