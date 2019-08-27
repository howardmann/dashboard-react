let profilesDb = require('../server/data-access/profiles-db')

let profiles = module.exports = {}

profiles.index = (req, res, next) => {
  profilesDb.listProfiles()
    .then(data => {
      res.send(data)
    })
}

profiles.show = (req, res, next) => {
  profilesDb.findProfile('id', req.params.id)
    .then(data => {
      res.send(data)
    })
}

profiles.create = (req, res, next) => {
  profilesDb.addProfile(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

profiles.update = (req, res, next) => {
  let id = req.params.id
  profilesDb.updateProfile(id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}