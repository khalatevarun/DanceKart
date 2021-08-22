import { Button } from '@material-ui/core';
import React from 'react';
import './Product.css';

const Product = ({ title, info, price, image }) => {
  return (
    <div className="product">
      <img className="product__image" src={image} alt="" />
      <div className="product__info">
        <div className="product_infoLineOne">{title}</div>
        <div className="product__infoLineTwo">{info}</div>
        <br />
        <div className="product_infoLineThree">
          <div className="product__price">Rs. {price}</div>

          <Button variant="outlined" className="product__add">
            + Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
