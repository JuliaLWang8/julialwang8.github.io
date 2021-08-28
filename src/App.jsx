import './App.scss'
import './fonts.scss'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
