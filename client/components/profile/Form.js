import React from 'react'

const Form = (props) => (
  <div className="col-8 phone-col-12">
    <h2>Form</h2>
    <img width="250" src={props.avatarURL}/>
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

export default Form