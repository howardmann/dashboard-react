let express = require('express')
let router = express.Router()

let profiles = require('./profiles')

router.get('/', (req, res, next) => {
  res.render('index', {layout: 'dashboard'})
})

router.get('/todoapp', (req, res, next) => {
  res.render('todo', {layout: 'dashboard'})
})

router.get('/profile', (req, res, next) => {
  res.render('profile', {layout: 'dashboard'})
})

router
  .get('/profiles', profiles.index)
  .get('/profiles/:id', profiles.show)
  .put('/profiles/:id', profiles.update)
  .post('/profiles', profiles.create)

module.exports = router
