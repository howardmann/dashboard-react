import React from 'react'
import getAge from '../../util/getAge'
import ColorPicker from './ColorPicker.js'

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
        <p>Age: {getAge(this.state.dob)}</p>
        <p>Bio: {this.state.bio}</p>
        <p>
          Theme: {this.state.background} 
          <ColorPicker 
            background={this.props.background}
            handleColorChange={this.props.handleColorChange}
          />
        </p>
        <button onClick={this.props.handleMarkEdit}>Back</button>
      </div>
    )
  }
}

const Profile = (props) => (
  <div style={{backgroundColor: props.background }} className="col-4 phone-col-12">
    <h2>Preview Profile</h2>
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
      name: 'Felix Mann',
      dob: '2016-11-05',
      bio: 'My name is Felix and I love to eat bananas',
      background: '#F8F89C',
      avatarURL: 'https://www.fillmurray.com/150/150',
      isEditing: true
    }
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
  render(){
    return (
      <div>
        <p>App</p>
        {!this.state.isEditing 
          ? <Form {...this.state} 
              handleMarkEdit={this.handleMarkEdit}
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