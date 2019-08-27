let makeProfile = require('../index')

describe('makeProfile', () => {
  it('throws error if invalid payload', () => {
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
  it('must have name', () => {
    let profile = makeProfile({
      name: 'felix mann',
    })
    let input = profile.getName()
    let actual = 'felix mann'
    expect(input).toBe(actual)
  })
  it('can have dob', () => {
    let profile = makeProfile({
      name: 'felix mann',
      dob: '2016-11-05'
    })
    let input = profile.getDOB()
    let actual = '2016-11-05'
    expect(input).toBe(actual)
  })
  it('can have bio', () => {
    let profile = makeProfile({
      name: 'felix mann',
      bio: 'felix likes to eat bananas'
    })
    let input = profile.getBio()
    let actual = 'felix likes to eat bananas'
    expect(input).toBe(actual)
  })
  it('can have theme', () => {
    let profile = makeProfile({
      name: 'felix mann',
      theme: '#ffff'
    })
    let input = profile.getTheme()
    let actual = '#ffff'
    expect(input).toBe(actual)
  })
  it('sets theme to default color', () => {
    let profile = makeProfile({
      name: 'felix mann'
    })
    let input = profile.getTheme()
    let actual = '#767676'
    expect(input).toBe(actual)
  })
  it('can have avatar', () => {
    let profile = makeProfile({
      name: 'felix mann',
      avatar: 'www.avatar.com'
    })
    let input = profile.getAvatar()
    let actual = 'www.avatar.com'
    expect(input).toBe(actual)
  })
})