let axios = require('axios')

let updateProfile = ({
  name,
  dob,
  bio,
  background,
  avatarURL
}) => {
  return axios.put('http://localhost:8080/profiles/1', {
    name, dob, bio,
    theme: background,
    avatar: avatarURL
  }).then(resp => {
    let result = resp.data
    console.log(result);
    alert('synced')
  })
}

module.exports = updateProfile