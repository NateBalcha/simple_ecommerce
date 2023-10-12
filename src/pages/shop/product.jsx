import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  // Function to add a product to the cart and update the cart item count
  const handleAddToCart = (productId) => {
    addToCart(productId); // Your logic to add the product to the cart
    updateCartItemCount();
  };

  // Function to calculate the cart item count
  const updateCartItemCount = () => {
    const count = Object.values(cartItems).reduce(
      (total, count) => total + count,
      0
    );
    props.updateCartItemCount(count); // Pass the count to the parent component (Navbar)
  };

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      {/* ... Your product display code ... */}
      <img src={productImage} />
      <div className="description">
        <p>
          <b className="productName">{productName}</b>
        </p>
        <p className="price"> ${price}</p>
      </div>

      <button className="addToCartBttn" onClick={() => handleAddToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};
