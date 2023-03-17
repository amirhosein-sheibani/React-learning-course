import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light ">
      <div className="container-fluid w-75">
        <a className="navbar-brand cursor fs-4 m-2">Vidly</a>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              style={{ cursor: "pointer" }}
              className="nav-link animation m-2"
              to="/Movies"
            >
              Movies
            </NavLink>  
            <NavLink
              style={{ cursor: "pointer" }}
              className="nav-link animation m-2"
              to="/Coustomers"
            >
              Customers
            </NavLink>
            <NavLink
              style={{ cursor: "pointer" }}
              className="nav-link animation m-2"
              to="/Rental"
            >
              Rentals
            </NavLink>
            <NavLink
              style={{ cursor: "pointer" }}
              className="nav-link animation m-2"
              to="/Login"
            >
              Login
            </NavLink>
            <NavLink
              style={{ cursor: "pointer" }}
              className="nav-link animation m-2"
              to="/register"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
