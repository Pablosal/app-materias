import React from "react";
import { Link } from "react-router-dom";
import logo from "./imagenes/matemeister.svg";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-ligh"
      style={{ backgroundColor: "#233AB0" }}
    >
      <img src={logo} width="50px" alt="" />
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link" style={{ color: "white" }}>
            Inicio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
