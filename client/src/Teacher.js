// Teacher.js
import React, { useState } from 'react';
import axios from 'axios';
import './Teacher.css';



const Teacher = () => {
  const [name, setName] = useState('');
  const [reg, setReg] = useState('');
  const [dob, setDob] = useState('');
  const [mark, setMark] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/TeacherLogin/Teacher/hello', { name, reg, dob, mark });
      console.log(response.data);
      alert('Success');
    } catch (error) {
      alert(error);
      console.error('Error:', error.message);
      alert('Fai');
    }
    
  };

  return (
    <div className='container well teacher-div'>
     <div className='dii'>
      <h1 className='teacher-h1'>Students Data</h1>
    
      <input className='teacher-input' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
  
      <input className='teacher-input' placeholder='Enter Register Number' value={reg} onChange={(e) => setReg(e.target.value)} />
    
      <input type='date' placeholder='Enter DOB' className='teacher-input' value={dob} onChange={(e) => setDob(e.target.value)} />
     
      <input className='teacher-input' placeholder='Enter The Mark' value={mark} onChange={(e) => setMark(e.target.value)} />
      <button className='btn btn-info teacher-button' onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
};

export default Teacher;
