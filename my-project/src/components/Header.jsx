import React, { useContext, useState } from "react";
import { ThemeContex } from "../context/ThemeContext";

const ThemeSlider = () => {
  const { theme, toggleTheme } = useContext(ThemeContex);

  // const [isToggled, setIsToggle] = useState(theme === "dark");

  const handleToggle = () => {
    // setIsToggle(!isToggled);
    toggleTheme();
  };

  return (
    <div onClick={handleToggle} className={`slider-container light ${theme}`}>
      <div className="slider-button"></div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Recipe Platform</div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Add Natural Mask Recipe</a>
          </li>
          <li>
            <a href="#">About Facial Care</a>
          </li>
          <ThemeSlider />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
