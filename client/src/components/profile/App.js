import React from 'react'
import getAge from '../../util/getAge'
import ColorPicker from './ColorPicker.js'
import axios from 'axios'

const Form = (props) => (
  <div className="col-8 phone-col-12">
    <h2>Form</h2>
    <img src={props.avatarURL}/>
    <p>Name: {props.name}</p>
    <p>DOB: {props.dob}</p>
    <p>Bio: {props.bio}</p>
    <p>
      Theme: {props.background}
    </p>
    <button onClick={props.handleMarkEdit}>Edit</button>
    <button className="bg-green" onClick={props.handleSync}>Sync</button>
  </div>
)


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
        <img src={this.state.avatarURL}/>
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
        <hr/>
        <button onClick={this.props.handleMarkEdit}>Done</button>
      </div>
    )
  }
}

const Profile = (props) => (
  <div style={{backgroundColor: props.background }} className="col-4 phone-col-12">
    <h2 className={props.isEditing && "bg-blue"}>
      Preview Profile
    </h2>
    <img src={props.avatarURL}/>
    <p>Name: {props.name}</p>
    <p>Age: {getAge(props.dob)}</p>
    <p>Bio: {props.bio}</p>
  </div>
)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Name',
      dob: 'DOB',
      bio: 'Bio goes here',
      background: '#F8F89C',
      avatarURL: 'https://www.fillmurray.com/150/150',
      isEditing: false
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
    let {name, dob, bio, background, avatarURL} = this.state
    axios.put('http://localhost:8080/profiles/1', {
      name, dob, bio,
      theme: background,
      avatar: avatarURL
    })
    .then(resp => {
      let result = resp.data
      console.log(result)
      alert('synced')
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
            />
        }                
        <Profile {...this.state}/>
      </div>
    )
  }
}

export default App