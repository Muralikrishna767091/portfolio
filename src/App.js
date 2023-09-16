import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import project from "./routes/project"
import contact from "./routes/contact"

import { Route,Routes} from "react-router-dom"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/project" element={<project />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/contact" element={<contact />}/>
    </Routes>
    </>
  );
}

export default App;

