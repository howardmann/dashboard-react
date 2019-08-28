let cloudinary = module.exports = {}

let {multerUploads,dataUri} = require('../middlewares/multer.js')
let {uploader, cloudinaryConfig} = require('../config/cloudinaryConfig')

cloudinary.config = cloudinaryConfig
cloudinary.multerUploads = multerUploads

cloudinary.show = (req, res, next) => {
  res.render('cloudinary', {layout: 'dashboard'})
}

cloudinary.upload = (req, res, next) => {
  if (req.file) {
    const file = dataUri(req).content;
    return uploader.upload(file, {
      folder: 'Tutorial'
    }).then(result => {
      const image = result.url
      return res.status(200).json({
        message: 'Your image has been uploaded successfully to cloudinary',
        data: {
          image
        }
      })
    }).catch(next)
  }
  return res.status(200).json({message: 'no file detected'});
}