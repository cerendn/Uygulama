import React, { useContext } from "react";
import { ThemeContex } from "../context/ThemeContext";
import { Link } from "react-router-dom";

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
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/new-recipe"}>Add Natural Mask</Link>
          </li>
          <li>
            <Link to={"/recipes"}>Facial Care</Link>
          </li>
          <ThemeSlider />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
