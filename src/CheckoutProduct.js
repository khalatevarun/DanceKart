import { NativeSelect } from '@material-ui/core';
import React from 'react';
import './CheckoutProduct.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, hideButton, quantity }) {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_ALL_FROM_BASKET',
      id: id,
      quantity: quantity,
    });
  };

  const handleChange = (event) => {
    const quantity = event.target.value;
    updateQuantity(quantity);
  };

  const updateQuantity = (quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      id: id,
      quantity: quantity,
    });
  };

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
          {!hideButton && (
            <NativeSelect onChange={handleChange} value={quantity}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </NativeSelect>
          )}
        </div>
        {!hideButton && (
          <DeleteForeverIcon size="large" onClick={removeFromBasket} />
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
