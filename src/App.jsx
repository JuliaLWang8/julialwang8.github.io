import "./App.scss";
import "./global.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
