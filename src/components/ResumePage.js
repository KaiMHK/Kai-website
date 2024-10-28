import LeftDrawer from "./LeftDrawer";

import "../styles/ResumePage.css";
import { Link } from "react-router-dom";

export default function ResumePage(params) {
  return (
    <div>
      <div id="leftContainer">
        <LeftDrawer name="Education" itemId="ed" />
        <LeftDrawer name="Experience" itemId="ex" />
        <LeftDrawer name="Skills" itemId="sk" />
        <LeftDrawer name="Projects" itemId="pr" />
      </div>
      <Link id="resumeLink" to={"./paper"}>
        To see more details, please view my resume.
      </Link>
    </div>
  );
}
