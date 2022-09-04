import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }

  // const tax = total*10/100
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <h2>Order Summary</h2>
      <h4>Selected Items: {cart.length}</h4>
      <h4>Total Price: $ {total} </h4>
      <h4>Total Shipping Charge: $ {shipping} </h4>
      <h4>Tax: $ {tax} </h4>
      <h3>Grand Total: $ {grandTotal} </h3>
    </div>
  );
};

export default Cart;
