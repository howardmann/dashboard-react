let buildMakeProfile = function(profileValidator) {
  return ({
    name,
    dob,
    bio,
    theme = '#767676',
    avatar
  } = {}) => {
    let {error} = profileValidator({name,dob,bio,theme,avatar})
    if (error) throw new Error(error)

    return {
      getName: () => name,
      getDOB: () => dob,
      getBio: () => bio,
      getTheme: () => theme,
      getAvatar: () => avatar
    }
  }
}

module.exports = buildMakeProfile