import React from "react";
import { Link } from "react-router-dom";

export default function Main(params) {
  return (
  <div>
    <header>
      <Link className="headers" to={"/"}>StartPage</Link>
      <Link className="headers" to={"resume"}>Resume</Link>
      <Link className="headers" to={"projects"}>Projects</Link>
    </header>
  </div>
  );
};
