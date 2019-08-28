let {
  listProfiles,
  findProfile,
  addProfile,
  updateProfile,
  deleteProfile,
  dropAll
}
= require('./memory/index') // switch out db as required


let profilesDb = {
  listProfiles,
  findProfile,
  addProfile,
  updateProfile,
  deleteProfile,
  dropAll
}

module.exports = profilesDb