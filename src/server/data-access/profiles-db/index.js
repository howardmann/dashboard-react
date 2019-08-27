let {
  listProfiles,
  findProfile,
  addProfile,
  deleteProfile,
  dropAll
}
= require('./memory/index') // switch out db as required


let profilesDb = {
  listProfiles,
  findProfile,
  addProfile,
  deleteProfile,
  dropAll
}

module.exports = profilesDb