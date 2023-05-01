import React from "react";

import "../styles/InfoBlock.css";

let infos = {
  ed: {
    name: "Education",
    content:
      "I'm currently a student at the UC San Diego,\n major in Math and Computer Science. \n I will graduate in June 2023"
  },
  ex: {
    name: "Experience",
    content:
      "I have two internship expereinces, one is at ArcLight Software LLC as a Software Engineer Intern, and the other is at Beijing Bingosoft Technology Co. as a web developer intern.",
  },
  sk: {
    name: "Skills",
    content:
      "Here are my skills, including \n \n Language: Javascript, HTML, CSS, C++/C, Java, AJAX, Python, R, Matlab \n \n Library: React/ReactNative, Node, Express, CSSBootstrap, Numpy, Pandas, Sklearn, OpenGL \n \n Database/Tools/Platform: MongoDB, Git, Docker, Netlify, UE5, Unity, VSCode, Visual Studio, Linux.",
  },
  pr: {
    name: "Projects",
    content:
      "I have some personal projects, including web app, mobile app, and local compress tool. To see more details, please visit the project page.",
  },
};

export default function InfoBlock(params) {
  let info = infos[params.clickedItemId];
  const stringWithBreaks = info.content.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
    ));

  return (
    <div className="infoBlock">
      <h1 id="infoNameText">{info.name}</h1>
      <p id="descriptionText">{stringWithBreaks}</p>
    </div>
  );
}
