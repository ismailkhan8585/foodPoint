import React, { useState } from "react";
import iconLogo from "./../assets/iconlogo.png";
import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Import heart icons
import Modelcard from "../Pages/Modelcard/Modelcard";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [menuItems] = useState([
    { name: "Pizza", link: "/pizza" },
    { name: "Burger", link: "/burger" },
    { name: "Kebab", link: "/kebab" },
  ]);
  const [isLiked, setIsLiked] = useState(false); // State for heart icon toggle

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleHeart = () => {
    setIsLiked(!isLiked);
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
              <a href="#deals">Deals</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="icons">
          <li className="heart-icon-Navbar" onClick={toggleHeart}>
            {isLiked ? (
              <AiFillHeart className="heart-filled" />
            ) : (
              <AiOutlineHeart className="heart-outline" />
            )}
          </li>
          <li className="add-menu-btn" onClick={toggleModal}>
            <IoBagOutline />
          </li>
          {showMenu ? (
            <li className="fas fa-times menu-toggle" onClick={toggleMenu}></li>
          ) : (
            <li className="fas fa-bars menu-toggle" onClick={toggleMenu}></li>
          )}
          {/* Add your beautiful button here */}
          <button className="custom-button">Login</button>
        </div>
      </header>

      {/* Modal Component */}
      <Modelcard isVisible={showModal} onClose={toggleModal} />
    </>
  );
}

export default Navbar;
