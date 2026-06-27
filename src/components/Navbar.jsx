import { Link } from "react-router-dom";
import { FiGrid, FiHome, FiTarget } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import SoundToggle from "./SoundToggle";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-mark">Q</span>
        <div>
          <strong>QuizNova Pro</strong>
          <small>Learn Faster. Play Smarter.</small>
        </div>
      </Link>
      <div className="nav-actions">
        <nav className="nav-links">
          <Link to="/"><FiHome /> Home</Link>
          <Link to="/categories"><FiGrid /> Categories</Link>
          <Link to="/dashboard"><FiTarget /> Dashboard</Link>
        </nav>
        <div className="toolbar-controls">
          <ThemeToggle />
          <SoundToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
