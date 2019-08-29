import React from 'react'
import getAge from './util/getAge'

const Profile = (props) => (
  <div style={{backgroundColor: props.background }} className="col-4 phone-col-12">
    <h2 className={props.isEditing && "bg-blue"}>
      Preview Profile
    </h2>
    <img width="250" src={props.avatarURL}/>
    <p>Name: {props.name}</p>
    <p>Age: {getAge(props.dob)}</p>
    <p>Bio: {props.bio}</p>
  </div>
)


export default Profile