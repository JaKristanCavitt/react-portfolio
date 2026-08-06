import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";         // use to start dark mode 
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import {
  FaHome,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
  FaPlaystation
 

} from "react-icons/fa";
  

function App() {
  const [darkMode, setDarkMode] = useState(false);    // Varible made for dark mode

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>
          {/* This button lets me switch between my regular background and dark mode */}
<button
  className="dark-mode-button"
  onClick={() => setDarkMode(!darkMode)}
>                                                   
  {darkMode ? "PS3 Mode" : "Dark Mode"}                                {  // When I click the button, this switches dark mode
                                                                        /* from off to on or from on to off. */}
</button>                                                         
           <FaPlaystation className="ps-logo" />
           JaKristan Cavitt</h2>

        <ul className="nav-links">
          <li>
  <Link to="/">
    <FaHome />
    <span>Home</span>
  </Link>
</li>

<li>
  <Link to="/skills">
    <FaCode />
    <span>Skills</span>
  </Link>
</li>

<li>
  <Link to="/projects">
    <FaFolderOpen />
    <span>Projects</span>
  </Link>
</li>

<li>
  <Link to="/contact">
    <FaEnvelope />
    <span>Contact</span>
  </Link>
</li>
        </ul>

 


                <div className="availability">
    <span className="status-dot"></span>
    <span>Available for Work</span>
    </div>
        
      </nav>

      {/* Website Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;