let buildMakeProfile = function() {
  return ({
    name,
    dob,
    bio,
    theme,
    avatarURL
  } = {}) => {
    let {error} = profileValidator({name,dob,bio,theme,avatarURL})
    if (error) throw new Error(error)

    return {
      getName: () => name,
      getDOB: () => dob,
      getBio: () => bio,
      getTheme: () => theme,
      getAvatar: () => avatarURL
    }
  }
}

module.exports = buildMakeProfile