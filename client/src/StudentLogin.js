import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './StudentLogin.css'
const StudentLogin = () => {
  const [reg, setReg] = useState("");
  const [val, setVal] = useState({});
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/StudentLogin/data/${reg}`
      );

      setVal(response.data.msg);
      // console.log(val.name )
      navigate("/StudentLogin/Student", { state:{temp:response.data.msg} }); // Pass val as state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRegChange = (event) => {
    setReg(event.target.value);
  };

  return (
    <div className="container well studentlogin_div">
      <div className="lab">
      <label >Enter Register Number</label>
      <input onChange={handleRegChange} value={reg} placeholder="Registration Number" className="studentlogin_input"/>
      <label>Enter Date-Of-Birth</label>
      <input type='date' className="studentlogin_input"/>
      <button onClick={fetchData} className="btn btn-info studentlogin_btn">submit</button>
      </div>

    </div>
  );
};

export default StudentLogin;
