import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Start from "./components/Start";
import Main from "./components/Main";
import ResumePage from "./components/ResumePage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";
import PdfDisplay from "./components/ImgDisplayer";
import SkillsPage from "./components/SkillsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} index />
        <Route path="/main" element={<Main />} />
        <Route path="/main/resume" element={<ResumePage />} />
        <Route path="/main/resume/paper" element={<PdfDisplay />} />
        <Route path="/main/projects" element={<ProjectPage/>} />
        <Route path="/main/contact" element={<ContactPage/>} />
        <Route path="/main/skill" element={<SkillsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
