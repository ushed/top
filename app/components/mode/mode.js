"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ModeToggle() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const headerElement = document.getElementById("header");

    if (savedTheme === "light-mode") {
      document.body.classList.add("light-mode");
      if (headerElement) {
        headerElement.classList.add("light-mode");
      }
      setIsLightMode(true);
    }
  }, []);

  const toggleMode = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    const headerElement = document.getElementById("header");

    if (newMode) {
      document.body.classList.add("light-mode");
      if (headerElement) {
        headerElement.classList.add("light-mode");
      }
      localStorage.setItem("theme", "light-mode");
    } else {
      document.body.classList.remove("light-mode");
      if (headerElement) {
        headerElement.classList.remove("light-mode");
      }
      localStorage.setItem("theme", "dark-mode");
    }
  };

  return (
    <i id="mode" onClick={toggleMode}>
      {isLightMode ? <FaSun /> : <FaMoon />}
    </i>
  );
}
