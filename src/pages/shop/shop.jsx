import React, { useEffect } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="shop">
      <section id="page-header-tech">
        <h1>Store</h1>
        <p>Find all of our tech products and clothing here</p>
      </section>

      <div className="products">
        {""}
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
