import { Link } from "react-router-dom";
import "../styles/Start.css"

export default function Start(params) {
  return (
  <div>
    <h1 id="title">Welcome To Kai's Protfolio</h1>
    <Link to="main" className="custom-btn btn-5" id="mainBtn"><div id="buttonText">Main Page</div></Link>
  </div>
  );
}
