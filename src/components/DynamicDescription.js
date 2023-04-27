import "../styles/DynamicDescription.css";

export default function DynamicDescription(params) {
  return (
    // <div>
    //     <div className="description">
    //         <div className="staticText">I code</div>
    //         <div className="dynamicContainer">
    //             <span className="dynamic" id="d1">JavaScript</span>
    //             <span className="dynamic" id="d2">React.js</span>
    //             <span className="dynamic" id="d3">Node.js</span>
    //             <span className="dynamic" id="d4">Express.js</span>
    //             <span className="dynamic" id="d5">HTML</span>
    //             <span className="dynamic" id="d6">CSS</span>
    //             <span className="dynamic" id="d7">Database</span>
    //             <span className="dynamic" id="d8">C++</span>
    //             <span className="dynamic" id="d9">JAVA</span>
    //             <span className="dynamic" id="d10">Python</span>
    //         </div>
    //     </div>
    // </div>
    <div class="container">
      <div class="text-container">
        <p class="static-text">I'm a</p>
        <div class="dynamic-text">
          <li class="item">Web</li>
          <li class="item">Full-Stack</li>
          <li class="item">Mobile</li>
          <li class="item">Front-End</li>
          <li class="item">Back-End</li>
        </div>
        <div class="static-text">Developer</div>
      </div>
    </div>
  );
}
