import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Start from "./components/Start";
import Main from "./components/Main";
import ResumePage from "./components/ResumePage";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} index />
        <Route path="/main" element={<Main />} />
        <Route path="/main/resume" element={<ResumePage />} />
        <Route path="/main/projects" element={<ProjectPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
