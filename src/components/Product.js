import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, price, image, rating }) => {

  const [,dispatch] = useStateValue();

  const addToBasket = () => {
      dispatch({
        type:"ADD_TO_BASKET",
        item:{
          id,
          title,
          price,
          image,
          rating
        }
      })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>
      <img src={image} alt="product-img" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
};

export default Product;
