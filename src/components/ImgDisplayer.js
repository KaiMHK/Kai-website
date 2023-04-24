// import resumeImage from '../assets/ResumeSDE424.png';
import resumeSDE from "../assets/ResumeSDE424.jpg";

import "../styles/ImgDisplayer.css";

export default function PdfDisplay(params) {
    return (
        <div id="resumePage">
            <img id="resume" src={resumeSDE}/>
        </div>
    );
};
