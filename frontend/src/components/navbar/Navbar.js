import React, { useRef } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>MARIPOSAWEB</h3>
      <nav ref={navRef}>
        <NavLink to="/" onClick={showNavbar}>
          Home
        </NavLink>
        <NavLink to="createtransaction" onClick={showNavbar}>
          Create transaction
        </NavLink>
        <NavLink to="createcategory" onClick={showNavbar}>
          Create category
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
