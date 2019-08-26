let express = require('express')
let router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index', {layout: 'dashboard'})
})

router.get('/todoapp', (req, res, next) => {
  res.render('todo', {layout: 'dashboard'})
})

module.exports = router
