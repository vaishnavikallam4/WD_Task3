import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem("quiznova-theme") ?? "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("quiznova-theme", theme);
  }, [theme]);

  return (
    <button type="button" className="icon-btn" onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}>
      {theme === "dark" ? <FiMoon /> : <FiSun />}
    </button>
  );
}

export default ThemeToggle;
