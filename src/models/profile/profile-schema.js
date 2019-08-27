let Joi = require('joi')

module.exports = Joi.object().keys({
  name: Joi.string().required().error(() => 'must have name as string'),
  dob: Joi.string().error(() => 'dob must be a string'),
  bio: Joi.string().error(() => 'bio must be a string'),
  theme: Joi.string().error(() => 'theme must be a string'),
  avatar: Joi.string().error(() => 'avatar must be a string')  
})