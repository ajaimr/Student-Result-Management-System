import React from 'react'
import './TeacherLogin.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const TeacherLogin = () => {
  const [password,setpassword]=useState('');
   function fun(event){
    setpassword(event.target.value)
   }
   //provide the code i need to only navigate to '/teacher' if the password is equal to vaishu
  function clicked(){
    if(password=='vaishu'){
      window.location.href='/TeacherLogin/Teacher'
    }
    else{
      alert('Incorrect password')
    }
  }
  return (
    <div className='container well bor'>
        <h1>Administrative Login</h1>
      <label className='tea-label'>Enter the Administrative password</label>
      <input type='password' className='pass-input' value={password} onChange={fun}></input>
      {/* <Link to='Teacher'> */}
      <button className='btn-info but' onClick={clicked}>submit</button>
      {/* </Link> */}
        </div>
  )
}

export default TeacherLogin