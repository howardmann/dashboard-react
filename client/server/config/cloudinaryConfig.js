let { config, v2 } = require('cloudinary');
let env = require('../../config')

// Middlewares config
const cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: env.CLOUDINARY_CLOUD_NAME,
    api_key: env.CLOUDINARY_API_KEY,
    api_secret: env.CLOUDINARY_API_SECRET,
  });
  next();
}

module.exports = {
  cloudinaryConfig,
  uploader: v2.uploader
};