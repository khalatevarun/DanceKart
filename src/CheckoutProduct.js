import { NativeSelect } from '@material-ui/core';
import React from 'react';
import './CheckoutProduct.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function CheckoutProduct({ id, image, title, price }) {
  const handleChange = () => {};
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__left">
        <img src={image} alt="" className="checkoutProduct__image" />
      </div>
      <div className="checkoutProduct__right">
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>

          <p className="checkoutProduct__id">ID: #{id}</p>

          <p className="checkoutProduct__price">
            <small>Rs</small>
            <strong>{price}</strong>
          </p>
          <br />
          <NativeSelect value={1} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </NativeSelect>
        </div>
        <DeleteForeverIcon size="large" />
      </div>
    </div>
  );
}

export default CheckoutProduct;
