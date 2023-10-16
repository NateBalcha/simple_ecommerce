import React, { useEffect } from "react";
import "./home.css";
import heroImage from "../../assets/hero/hero1.jpeg"; // Import the image

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
        <div className="homePage-text">
          <div className="home-text">
            <h4 className="firstTitle">Find the best electronics here</h4>
            <h2 className="large-text">BETTER THAN THE COMPETETOR</h2>
          </div>
          <h1 className="thirdTitle">On all products</h1>
          <div className="home-text">
            <p className="home-text">
              Save more with coupons & up to 50% off!{" "}
            </p>
          </div>
          <a href="/store" className="storeButton">
            Visit Our Store
          </a>
        </div>
      </section>
    </div>
  );
};
