import { Link } from "react-router-dom";

import DynamicDescription from "./DynamicDescription";

import "../styles/Start.css"

export default function Start(params) {
  return (
  <div>
    <h1 id="title">Welcome to Kai's Portfolio</h1>
    <Link to="main" className="custom-btn btn-5" id="mainBtn"><div id="buttonText">Main Page</div></Link>
    <DynamicDescription />
  </div>
  );
}
