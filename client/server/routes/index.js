let express = require('express')
let router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index', {layout: 'dashboard'})
})

router.get('/todoapp', (req, res, next) => {
  res.render('todo', {layout: 'dashboard'})
})

router.get('/profile', (req, res, next) => {
  res.render('profile', {layout: 'dashboard'})
})

let cloudinary = require('./cloudinary')

router
  .use('/cloudinary', cloudinary.config)
  .get('/cloudinary', cloudinary.show)
  .post('/cloudinary', cloudinary.multerUploads, cloudinary.upload)


module.exports = router
