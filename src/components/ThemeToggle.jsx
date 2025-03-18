import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        style={{ cursor: "pointer" }}
        onClick={toggleTheme}
        size="lg"
      />
    </div>
  );
}

export default ThemeToggle;
