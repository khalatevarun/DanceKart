import React from 'react';
import './Header.css';
import dk_logo from '../src/assets/dk_logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { Badge } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Header = () => {
  const [{ totalItems, user, wishlist }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    console.log('handle authentiation called');
    if (user) {
      dispatch({
        type: 'LOGOUT',
        user: user,
      });
      auth.signOut();
    }
  };

  return (
    <div className="header">
      {/* <Link to="/">
        <img src={dk_logo} className="header__logo" alt="" />
      </Link> */}
      {/* <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />

       
      </div> */}

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {user ? 'Member' : 'Guest'}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        <Link to="/">
          <img src={dk_logo} className="header__logo" alt="" />
        </Link>

        <Link to="/wishlist">
          <div className="header__option">
            {/* <span className="header__optionLineOne">Your</span> */}
            <Badge color="error" badgeContent={wishlist.length}>
              <FavoriteIcon />
            </Badge>
            <span className="header__optionLineTwo">Wishlist</span>
          </div>
        </Link>

        <Link to="/checkout">
          {/* <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {totalItems}
            </span>
          </div> */}
          <div className="header__option">
            <Badge color="error" badgeContent={totalItems}>
              <ShoppingCartIcon />
            </Badge>
            <span className="header__optionLineTwo">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
