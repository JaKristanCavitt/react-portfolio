import { Routes, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>JaKristan Cavitt</h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
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