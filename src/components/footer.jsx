import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../assets/extra/logo.png";
import applePay from "../assets/footer/app.jpg";
import googlePay from "../assets/footer/play.jpg";
import cards from "../assets/footer/pay.png";
export const Footer = () => {
  return (
    <div className="footer">
      <div class="col">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong> 562 Wellington Road, Street 32, San
          Francisco
        </p>
        <p>
          <strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789
        </p>
        <p>
          <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
        </p>
        <div class="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div class="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>

      <div class="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>

      <div class="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div class="row">
          <img src={applePay} alt="" />
          <img src={googlePay} alt="" />
        </div>
        <p>Secured Payment Gateways </p>
        <img src={cards} alt="" />
      </div>

      <div class="copyright">
        <p>© 2023, www.cara.com</p>
      </div>
    </div>
  );
};
