import React from 'react'
import ColorPicker from './ColorPicker.js'

class EditForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name,
      dob: this.props.dob,
      bio: this.props.bio,
      theme: this.props.background
    }
  }
  render(){
    return (
      <div className="col-8 phone-col-12">
        <h2>Edit Profile</h2>
        <img width="250" src={this.state.avatarURL}/>
        <p>
          Name: 
          <input 
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.handleInputChange}
          />
        </p>
        <p>Age:</p>
        <input 
          type="date"
          name="dob"
          value={this.props.dob}
          onChange={this.props.handleInputChange}
        />
        <p>Bio:</p>
        <textarea 
          name="bio"
          cols="30" rows="8"
          value={this.props.bio}
          onChange={this.props.handleInputChange}
        />
        <p>
          Theme:
          <ColorPicker 
            background={this.props.background}
            handleColorChange={this.props.handleColorChange}
          />
        </p>
        <p>
          Profile:
          <input 
            type="file"
            onChange={this.props.handleImagePreview}
          />
        </p>
        <hr/>
        <button onClick={this.props.handleMarkEdit}>Done</button>
      </div>
    )
  }
}

export default EditForm