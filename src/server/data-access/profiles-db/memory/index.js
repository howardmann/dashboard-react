let PROFILES = require('../../../db/memory/profiles') // DB
let makeProfile = require('../../../models/profile/index') // model
let serialize = require('./serializer') // serializer custom to db

let listProfiles = () => {
  return Promise.resolve(serialize(PROFILES))
}

let findProfile = (prop, val) => {
  let profile = PROFILES.find(profile => profile[prop] == val)
  return Promise.resolve(serialize(profile))
}

let addProfile = (profileInfo) => {
  let profile = makeProfile(profileInfo)
  let newProfile = {
    id: PROFILES.length + 1,
    name: profile.getName(),
    dob: profile.getDOB(),
    bio: profile.getBio(),
    theme: profile.getTheme(),
    avatar: profile.getAvatar(),
  }
  PROFILES.push(newProfile)
  return findProfile('id', newProfile.id)
}

let deleteProfile = (id) => {
  return findProfile('id', id)
    .then(profile => {
      if (profile && profile.id == id) {
        PROFILES = PROFILES.filter(profile => profile.id != id)
        return {
          id,
          status: 'success'
        }
      }
      return {
        status: 'fail'
      }
    })
}


let dropAll = () => {
  PROFILES = [];
  return PROFILES;
}

module.exports = {
  listProfiles,
  findProfile,
  addProfile,
  deleteProfile,
  dropAll
}