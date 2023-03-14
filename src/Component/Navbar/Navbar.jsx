import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-sec">
        <div>
          <img className="img-fluid" src="\asset\hero\logo.svg" alt="logo" />
        </div>

        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li></li>
            <li>Artist</li>
            <li>Explore</li>
            <li>About</li>
          </ul>
        </div>

        <div className="search-input">
          <input type="text" placeholder="James Hollend" />
        </div>

        <div className="btns d-flex ">
          <button className="login">Login/Signup</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
