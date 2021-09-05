import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { db } from './firebase';

const Product = ({
  id,
  title,
  info,
  price,
  image,
  handleOpen,
  fetchWishlist,
}) => {
  const [{ user, wishlist }, dispatch] = useStateValue();
  const [selected, setSelected] = useState(false);

  const addToWishlist = () => {
    db.collection('users').doc(user?.uid).collection('wishlist').add({
      id: id,
      title: title,
      info: info,
      price: price,
      image: image,
    });
    fetchWishlist();
  };

  const removeFromWishList = () => {
    var product_query = db
      .collection('users')
      .doc(user?.uid)
      .collection('wishlist')
      .where('id', '==', id);
    product_query.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
      fetchWishlist();
    });
  };

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
          quantity: 1,
        },
      });
    }
  };

  return (
    <div className="product">
      {wishlist.includes(id) ? ( // check if product is wishlisted
        <FavoriteIcon
          className="product_wishlist"
          color="error"
          onClick={() => removeFromWishList()}
        />
      ) : (
        <FavoriteBorderIcon
          className="product_wishlist"
          onClick={() => addToWishlist()}
        />
      )}
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
