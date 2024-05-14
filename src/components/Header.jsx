import React, { useState } from "react";
import iconLogo from "./../assets/iconlogo.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={iconLogo} alt="Berger Hut Logo" />
        </div>
        <nav>
          <ul className={showMenu ? "show" : ""}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        {showMenu ? (
          <li className="fas fa-times menu-toggle" onClick={toggleMenu}></li>
        ) : (
          <li className="fas fa-bars menu-toggle" onClick={toggleMenu}></li>
        )}
      </header>
    </>
  );
}

export default Header;
