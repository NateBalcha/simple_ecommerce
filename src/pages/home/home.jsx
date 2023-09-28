import React, { useEffect } from "react";
import "./home.css";
import heroImage from "../../assets/hero/hero4.png"; // Import the image

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="shop">
      <section
        className="backgroundImg"
        id="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {" "}
        <div className="home-text">
          <h4>Find your fashion and gadgets here</h4>
          <h2>OUR GO-TO STYLE ARE BACK IN STOCK</h2>
        </div>
        <h1 className="product-text">On all products</h1>
        <div className="home-text">
          <p>Save more with coupons & up to 70% off! </p>
        </div>
      </section>
    </div>
  );
};
