import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const menu_toggle = () => {
    const menu_items = document.querySelector(".menu__items");
    menu_items.classList.toggle("show");
    console.log("click");
  };

  return (
    <header>
      <nav className="menu">
        <label className="menu__logo">
          <a href="#home">Mirko <span>Pescio</span></a>
        </label>
        <ul className="menu__items">
          <li>
            <a href="#about">Acerca</a>
          </li>
          <li>
            <a href="/#services">Servicios</a>
          </li>
          <li>
            <a href="/#resume">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
        <span
          className="menu__btn-menu"
          id="menu_button"
          onClick={() => menu_toggle()}
        >
          <i className="bx bx-menu"></i>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
