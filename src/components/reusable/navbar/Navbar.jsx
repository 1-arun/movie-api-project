import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <h2 className="logo-name">Movies4you</h2>
      <div className="img-container">
        <img
          src="https://avatars.githubusercontent.com/u/78010526?v=4"
          alt=""
          className="profile-icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
