import React from 'react'
import './Container.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';

function Container() {
   const functionAlert = () => {
        alert('You have successfully sent the response')
    }
    
    return (
    <div className = "container">
      <div className ="container__header">
      <h1>Get all the study material</h1>
      <p>Don't worry, we have you covered</p>
      </div>
      <div className = "container__input">
        <div className = "container__inputOne">
        <h2><PersonIcon /> Full name</h2>
        <input></input>
        <h2> <EmailIcon /> Email</h2>
        <input></input>
        </div>
        <div className = "container__inputTwo">
        <h2> <PhoneIcon /> Mobile Number</h2>
        <input></input>
        <h2><SchoolIcon /> Course</h2>
        <input></input>
        </div>
      </div>
      <div className = "container__submitButton">
        <button onClick = {() => functionAlert()}>Yes,Send Me the Study Material!</button>
      </div>
      <div className = "container__link">
        <a href = "">  Already Registered? Click here to login</a>
        
      </div>
      </div>  
    )
}

export default Container
