import "./App.scss";
import "./global.scss";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

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
