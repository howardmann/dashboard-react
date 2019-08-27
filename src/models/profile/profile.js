let buildMakeProfile = function(profileValidator) {
  return ({
    name,
    dob,
    bio,
    theme,
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