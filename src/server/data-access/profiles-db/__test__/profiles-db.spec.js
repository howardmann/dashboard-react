let profilesDb = require('../index')

describe('profilesDb', () => {
  beforeEach(async () => {
    await profilesDb.dropAll();
    let felix = {
      id: 1,
      name: 'Felix Mann',
      dob: '2016-11-05',
      bio: 'Felix is a monkey who loves bananas all the time',
      theme: '#767676',
      avatar: 'https://www.fillmurray.com/150/150'
    }
    let howie = {
      id: 2,
      name: 'Howie Mann',
      dob: '1980-11-05',
      bio: 'Howie is a handsome devil, just amazing',
      theme: '#767676',
      avatar: 'https://www.fillmurray.com/150/150'
    }

    await profilesDb.addProfile(felix)
    await profilesDb.addProfile(howie)
  })

  it('drops database', async () => {
    await profilesDb.dropAll()
    let profiles = await profilesDb.listProfiles()
    let input = profiles.length
    let actual = 0
    expect(input).toBe(actual)
  })

  it('lists profiles', async () => {
    let input = await profilesDb.listProfiles()
    let actual = 2
    expect(input.length).toBe(actual)
  })

  it('find single profile by id', async () => {
    let profiles = await profilesDb.listProfiles()
    let id = profiles[0].id

    let profile = await profilesDb.findProfile('id', id)
    let input = profile.id
    let actual = id
    expect(input).toEqual(actual)
  })

  it('inserts a profile', async () => {
    let hela = {
      name: 'hela mann',
      dob: '1985-06-01',
      bio: 'hela is a magical beast',      
      avatar: 'www.example.com'
    }
    let newprofile = await profilesDb.addProfile(hela)
    let {
      id,
      ...input
    } = newprofile
    let actual = {
      name: 'hela mann',
      dob: '1985-06-01',
      bio: 'hela is a magical beast',
      theme: '#767676',
      avatar: 'www.example.com'
    }
    expect(input).toEqual(actual)
  })

  it('throws error if inserts a profile with invalid payload', () => {
    let invalid = {
      name: 'bill',
      avatar: false
    }
    expect(() => {
        profilesDb.addProfile(invalid)
      })
      .toThrow('avatar must be a string')
  })

  it('deletes a profile', async () => {
    let profiles = await profilesDb.listProfiles()
    let id = profiles[0].id.toString()
    let validInput = await profilesDb.deleteProfile(id)
    let validActual = {
      id,
      status: 'success'
    }
    expect(validInput).toEqual(validActual)

    let newProfiles = await profilesDb.listProfiles()
    let inputLength = newProfiles.length
    let actualLength = 1
    expect(inputLength).toBe(actualLength)

    let invalidInput = await profilesDb.deleteProfile(42)
    let invalidActual = {
      status: 'fail'
    }
    expect(invalidInput).toEqual(invalidActual)
  })

})