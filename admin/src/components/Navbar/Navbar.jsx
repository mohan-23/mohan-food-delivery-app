//import React from 'react'
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.order_logo} alt="" />
      <img className="profile" src={assets.profile_img} alt="" />
    </div>
  );
};

export default Navbar;
