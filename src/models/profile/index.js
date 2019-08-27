let buildMakeProfile = require('./profile')
let profileSchema = require('./profile-schema')
let validator = require('../validator/')(profileSchema)

let makeProfile = buildMakeProfile(validator)

module.exports = makeProfile