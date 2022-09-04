import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart]= useState([])

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
  };

  return (
    <div className="shop_container">
      <div className="product_container">
        {products.map((product) => (
          <Product
            product={product}
            handleAddToCart={handleAddToCart}
            key={product.id}
          ></Product>
        ))}
      </div>

      <div className="cart_container">
        <div className="item">
          <h2>Order Summary</h2>
          <h4>Selected Items: {cart.length}</h4>
          <h4>Total Price: </h4>
          <h4>lalalalalalala</h4>
        </div>
      </div>
    </div>
  );
};

export default Shop;
