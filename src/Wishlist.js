import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import Product from './Product';
import { useStateValue } from './StateProvider';
import './Wishlist.css';

function Wishlist() {
  const [{ user, wishlist }, dispatch] = useStateValue();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const fetchWishlist = () => {
    db.collection('users')
      .doc(user?.uid)
      .collection('wishlist')
      .onSnapshot((snapshot) => {
        dispatch({
          type: 'UPDATE_WISHLIST',
          wishlist: snapshot.docs.map((doc) => doc.data()),
        });
      });
  };

  return (
    <div className="wishlist">
      <h1 className="wishlist__title">Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="wishlist__row">
          {wishlist.map((item) => (
            <Product
              image={item.image}
              title={item.title}
              info={item.infp}
              price={item.price}
              id={item.id}
              handleOpen={handleOpen}
              fetchWishlist={fetchWishlist}
            />
          ))}
        </div>
      ) : (
        <h2>Your wishlist is currently empty</h2>
      )}
    </div>
  );
}

export default Wishlist;
