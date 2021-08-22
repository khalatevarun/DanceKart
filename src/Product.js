import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';

const Product = ({ id, title, info, price, image, handleOpen }) => {
  const [state, dispatch] = useStateValue();
  const [selected, setSelected] = useState(false);

  const addToBasket = () => {
    console.log('aasdas');
    if (selected) {
      handleOpen();
    } else {
      setSelected(true);
      //disptach the item into the data layer
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          info: info,
          price: price,
          image: image,
        },
      });
    }
  };

  return (
    <div className="product">
      <img className="product__image" src={image} alt="" />
      <div className="product__info">
        <div className="product_infoLineOne">{title}</div>
        <div className="product__infoLineTwo">{info}</div>
        <br />
        <div className="product_infoLineThree">
          <div className="product__price">Rs. {price}</div>
          <Button
            variant="outlined"
            className="product__add"
            onClick={addToBasket}
            startIcon={selected ? <CheckIcon /> : <AddIcon />}
          >
            {selected ? 'Added to Cart' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
