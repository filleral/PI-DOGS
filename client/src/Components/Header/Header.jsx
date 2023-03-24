import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import "./Header.css";
import "./ButtonBack.css";
import dogPaw from "../../images/dog_paw.png";
import dogPawhome from "../../images/35145.png";


function Header() {
  const [menuHo] = useState(false);
  return (
    <div className="header">
      <div className="header_cont">
        <div className="button-container">
          <Link to="/" className="button_back">
            <img src={dogPawhome} alt="dog paw" className="button_back__icon" />
            <span className="button_back__text">Landing</span>
          </Link>
          <Link to="/home" className="button_back">
            <img src={dogPaw} alt="dog paw" className="button_back__icon" />
            <span className="button_back__text">DOGS</span>
          </Link>
        </div>

        <div className={menuHo ? "menu_hiden active" : "menu_hiden"}>
          <a
            href="https://github.com/filleral/PI-DOGS"
            target="_balck"
            className="about_responsive"
          >
            GitHub
          </a>
        </div>

        <div className="nav">
          <a
            href="https://github.com/filleral/PI-DOGS"
            target="_balck"
            className="about"
          >
            GitHub
          </a>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Header;
