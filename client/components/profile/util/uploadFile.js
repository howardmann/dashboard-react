let axios = require('axios')

let uploadFile = (file) => {
  let formData = new FormData()
  formData.append('image', file)

  return axios.post('http://localhost:3000/cloudinary', formData, {
    headers: {'Content-Type': 'multipart/form-data'}
  }).then(resp => {
    let data = resp.data
    let avatarURL = data.data.image
    return avatarURL
  })
}

module.exports = uploadFile