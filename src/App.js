import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Start from "./components/Start";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} index />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
