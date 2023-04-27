import React from "react";
import { Link } from "react-router-dom";

import "../styles/Main.css"

export default function Main(params) {
  return (
    <div>
      <div className="container">
        <Link className="box" id="box1" to={"resume"}>
          <h2>Resume</h2>
          <p>Check my education and experience</p>
        </Link>

        <Link className="box">
          <h2>Skills</h2>
          <p>List of my technical skills stack</p>
        </Link>

        <Link className="box" to={"projects"}>
          <h2>Projects</h2>
          <p>My off-campus personal projects</p>
        </Link>

        <Link className="box" to={"contact"}>
          <h2>Contact</h2>
          <p>Looking forward to hearing from you.</p>
        </Link>
      </div>
    </div>
  );
}
