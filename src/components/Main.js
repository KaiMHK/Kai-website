import React from "react";
import { Link } from "react-router-dom";

import "../styles/Main.css"

export default function Main(params) {
  return (
    <div>
      {/* <header>
        <Link className="headers" to={"/"}>
          StartPage
        </Link>
        <Link className="headers" to={"resume"}>
          Resume
        </Link>
        <Link className="headers" to={"projects"}>
          Projects
        </Link>
      </header> */}
      <div class="container">
        <Link class="box" to={"resume"}>
          <h2>Resume</h2>
          <p>Lorem Ipsum is simply dummy text</p>
        </Link>

        <Link class="box">
          <h2>Skills</h2>
          <p>Lorem Ipsum is simply dummy text</p>
        </Link>

        <Link class="box" to={"projects"}>
          <h2>Projects</h2>
          <p>Lorem Ipsum is simply dummy text</p>
        </Link>

        <Link class="box">
          <h2>Contact</h2>
          <p>Lorem Ipsum is simply dummy text</p>
        </Link>
      </div>
    </div>
  );
}
