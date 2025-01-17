import React, { useState } from "react";
import iconLogo from "./../assets/iconlogo.png";
import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuItems] = useState([
    { name: "Pizaa", link: "/pizza" },
    { name: "Burger", link: "/burger" },
    { name: "Kubab", link: "/kebab" },
  ]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header>
      <div className="logo">
          <Link to="/">
            <img src={iconLogo} alt="Burger Hut Logo" />
          </Link>
        </div>
        <nav>
          <ul className={showMenu ? "show" : ""}>
            <li>
              <a href="/">Home</a>
            </li>

            <li className="dropdown">
              <a href="#menu" className="menu-link">
                Menu{" "}
                <span className="icon">
                  <IoMdArrowDropdown />
                </span>
              </a>
              <ul className="dropdown-menu">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
            <li>
              <a href="#contact">Offers</a>
            </li>
          </ul>
        </nav>
        <li className="add-menu-btn">
        <IoBagOutline />
        </li>
        {showMenu ? (
          <li className="fas fa-times menu-toggle" onClick={toggleMenu}></li>
        ) : (
          <li className="fas fa-bars menu-toggle" onClick={toggleMenu}></li>
        )}
      </header>
    </>
  );
}

export default Navbar;
