import React from 'react'
import axios from 'axios'

import Form from './Form.js'
import EditForm from './EditForm.js'
import Profile from './Profile.js'

import updateProfile from './util/updateProfile'
import uploadFile from './util/uploadFile'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Name',
      dob: 'DOB',
      bio: 'Bio goes here',
      background: '#F8F89C',
      avatarURL: 'https://www.fillmurray.com/150/150',
      file: null,
      isEditing: true
    }
  }
  componentDidMount = () => {
    axios.get('http://localhost:8080/profiles/1')
      .then(resp => {
        let {name, dob, bio, theme, avatar} = resp.data
        this.setState({
          name,
          dob,
          bio,
          background: theme,
          avatarURL: avatar
        })
      })
  }
  handleColorChange = (hex) => {
    this.setState({background: hex})
  }
  handleMarkEdit = () => {
    this.setState({isEditing: !this.state.isEditing})
  }
  handleInputChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }
  handleSync = () => {
    let {name, dob, bio, background, file} = this.state
    
    if(!file){
      return updateProfile({name, dob, bio, background})
    }
    uploadFile(file)
      .then(avatarURL => {
        return updateProfile({name, dob, bio, background, avatarURL})
      })
  }
  handleImagePreview = (e) => {
    let file = e.target.files[0]
    let avatarURL = URL.createObjectURL(file)
    this.setState({
      file,
      avatarURL
    })
  }
  render(){
    return (
      <div>
        <p>App</p>
        {!this.state.isEditing 
          ? <Form {...this.state} 
              handleMarkEdit={this.handleMarkEdit}
              handleSync={this.handleSync}
            />
          : <EditForm {...this.state} 
              handleColorChange={this.handleColorChange} 
              handleInputChange={this.handleInputChange}
              handleMarkEdit={this.handleMarkEdit}
              handleImagePreview={this.handleImagePreview}
            />
        }                
        <Profile {...this.state}/>
      </div>
    )
  }
}

export default App