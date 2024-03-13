import React from "react";
import { useLocation } from "react-router-dom";
import './Student.css';

const Student = () => {
  const location = useLocation();
  const val = location.state.temp;

  return (
    <div className="container well student_div">
      <h1 className="student_result">Student Result</h1>
      {val && Object.keys(val).length !== 0 ? (
        <table className="tab">
          <tbody>
            <tr>  
              <th>Name</th>
              <td>{val.name}</td>
            </tr>
            <tr>
              <th>Register No</th>
              <td>{val.reg}</td>
            </tr>
            <tr>
              <th>Mark</th>
              <td>{val.mark}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Student;
