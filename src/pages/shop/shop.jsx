// import React, { useEffect } from "react";
// import { PRODUCTS } from "../../products";
// import { Product } from "./product";
// import "./shop.css";

// export const Shop = () => {
//   useEffect(() => {
//     // Scroll to the top of the page when the component mounts
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="shop">
//       <section id="page-header-tech">
//         <h1>Store</h1>
//         <p>Find all of our tech products and clothing here</p>
//       </section>

//       <div className="products">
//         {""}
//         {PRODUCTS.map((product) => (
//           <Product data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  // Define your updateCartItemCount function here
  const updateCartItemCount = (count) => {
    setCartItemCount(count);
    console.log("Cart item count updated:", count);
    return count;
    // Your logic to update the cart item count here
  };

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
        {PRODUCTS.map((product) => (
          <Product
            key={product.id} // Add a unique key prop
            data={product}
            updateCartItemCount={updateCartItemCount} // Pass the updateCartItemCount function
          />
        ))}
      </div>
    </div>
  );
};
