import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./home";
import "./home.css";
import React from "react";
import TeacherLogin from "./TeacherLogin";
import StudentLogin from "./StudentLogin";
import Teacher from "./Teacher";
import Student from "./Student";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TeacherLogin" element={<TeacherLogin />} />
          <Route path="/StudentLogin" element={<StudentLogin />} />
          <Route path="/StudentLogin/Student" element={<Student />} />
          <Route path="/TeacherLogin/Teacher" element={<Teacher />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
