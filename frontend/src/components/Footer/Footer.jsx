//import React from 'react'
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <a href="#home">
            <h1 className="company-name">FoodsAdda</h1>
          </a>
          <p>
            A food delivery company is a courier service that delivers food from
            a restaurant, store, or independent food-delivery company to a
            customer. Customers can place orders online or through an app, and
            the courier then picks up the food and delivers it to the customers
            location. Food delivery companies may also deliver groceries.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <a
              href="https://www.linkedin.com/in/mohan-kandukoori/"
              target="_blank"
            >
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#explore-menu">
              <li>About</li>
            </a>
            <li onClick={() => navigate("/myorders")}>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9177901774</li>
            <li>mohankandukoori23@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 FoodsAdda.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
