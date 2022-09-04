import React from 'react';
import'./Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product, handleAddToCart}) => {
    const {name, img, ratings, price, seller}= product

    

    return (
        <div className='product'>
            <div className="details">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h2>Price: $ {price}</h2>
            <p>Manufacturer:  {seller}</p>
            <p>Ratings:  {ratings} Star</p>
            </div>
            <button onClick={()=>handleAddToCart(product)}>
                <p>Add To Cart</p>
                <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
                </button> 
        </div>
    );
};

export default Product;