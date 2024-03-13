import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container well main">
      <div className="navbar"><h1>Result Management System</h1></div>
      <Link to='/TeacherLogin'>
        <button className="btn-info">Login as Teacher</button>
      </Link>
      <br />
      <Link to='/StudentLogin'>
      <button className="btn-info">Login as Student</button>
      </Link>
    </div>
  );
}

export default Home;
