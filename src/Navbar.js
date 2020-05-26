import React from "react";
import { Link } from "react-router-dom";
import logo from "./imagenes/matemeister.svg";
const Navbar = () => {
  return (
    <nav
      className=" container navbar navbar-expand-lg navbar-light bg-ligh "
      style={{
        backgroundColor: "#233AB0",
      }}
    >
      <ul
        className="navbar-nav "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "80px",
        }}
      >
        <li className="nav-brand">
          <Link to="/" className="nav-link" style={{ color: "white" }}>
            <img src={logo} width="80px" alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
