import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";
import logo from "../assets/extra/logo.png";

export const Navbar = () => {
  const location = useLocation(); // Get the current location
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // return (
  //   <div className="navbar">
  //     <div className="logo">
  //       <img src={logo} alt="" />
  //     </div>

  //     <div className="pageLinks">
  //       <div className="shop"></div>
  //       <Link to="/" className={location.pathname === "/" ? "activeLink" : ""}>
  //         Home
  //       </Link>
  //       <Link
  //         to="/store"
  //         className={location.pathname === "/store" ? "activeLink" : ""}
  //       >
  //         Store
  //       </Link>
  //       <Link
  //         to="/cart"
  //         className={location.pathname === "/cart" ? "activeLink" : ""}
  //       >
  //         Cart
  //       </Link>
  //     </div>
  //     <div className="links">
  //       <Link to="/cart">
  //         <ShoppingCart size={32} />
  //       </Link>
  //     </div>
  //   </div>
  // );
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      {/* Hamburger icon for small screens */}
      <GiHamburgerMenu className="hamburger-icon" onClick={toggleMenu} />

      {/* Navigation links */}
      <div
        className={`pageLinks ${isMenuOpen ? "show-menu" : ""}`}
        onClick={closeMenu}
      >
        <Link to="/" className={location.pathname === "/" ? "activeLink" : ""}>
          Home
        </Link>
        <Link
          to="/store"
          className={location.pathname === "/store" ? "activeLink" : ""}
        >
          Store
        </Link>
        <Link
          to="/cart"
          className={location.pathname === "/cart" ? "activeLink" : ""}
        >
          Cart
        </Link>
      </div>

      {/* Shopping cart icon */}
      <div className="links">
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
