import "./App.scss";
import "./global.scss";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Home />
        {/* <About /> */}
        {/* <Projects />
        <Resume />
        <Contact /> */}
      </div>
    </div>
  );
}

export default App;
