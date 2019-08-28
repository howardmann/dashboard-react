let express = require('express')
let router = express.Router()

let profiles = require('./profiles')

router
  .get('/profiles', profiles.index)
  .get('/profiles/:id', profiles.show)
  .put('/profiles/:id', profiles.update)
  .post('/profiles', profiles.create)

module.exports = router
