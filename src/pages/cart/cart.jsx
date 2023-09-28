import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";

import "./cart.css";

import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <section id="page-header-cart">
        <h1>Shopping Cart</h1>
        <p>Check out here</p>
      </section>
      <div className="title">
        <h1> Your Cart Items</h1>
      </div>
      <div className="ifCartEmpty">
        {totalAmount === 0 ? (
          <h2 className="emptyCart">
            Your cart is empty{" "}
            <div>
              {/* this button takes you back to the shopping page */}
              <button
                className="continueShopping"
                onClick={() => navigate("/store")}
              >
                Continue Shopping
              </button>
            </div>
          </h2>
        ) : (
          <h1></h1>
        )}
      </div>
      <div className="checkoutSection">
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
        <div className="checkout">
          {/* checks if the cart is empty */}
          {totalAmount === 0 ? (
            <></>
          ) : (
            <>
              {/* if not it displays the following */}
              <div className="totalSection">
                <h1 className="subtotal">
                  <b>Subtotal: ${totalAmount}</b>
                </h1>
                <button onClick={() => navigate("/")}>Continue Shopping</button>
                <button>Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
