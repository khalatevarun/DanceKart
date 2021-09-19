import React, { useEffect, useState } from 'react';
import './Home.css';
import banner2 from '../src/assets/banner2.jpg';
import Product from './Product';
import MessageModal from './MessageModal';
import { useStateValue } from './StateProvider';
import { db } from './firebase';
import { useHistory } from 'react-router';
import { items } from './constants/products/products';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Button } from '@material-ui/core';

function Home() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const [filters, setFilters] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [itemList, setItemList] = useState(items);
  // const [wishlist, setWishList] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (user) {
      fetchWishlist();
    }
  }, [user]);

  useEffect(() => {
    setFilters(['All', ...new Set(items.map((item) => item.category))]);
  }, []);

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

  const handleSignIn = () => {
    history.push('/login');
  };

  const handleFilter = (filter) => {
    setSelectedFilter(filter);

    if (filter === 'All') {
      setItemList(items);
    } else {
      setItemList(items.filter((item) => item.category === filter));
    }
  };

  const handleShopNow = () => {
    window.scroll({
      top: 1000,
      behavior: 'smooth',
    });
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__hero">
          <img className="home__image" src={banner2} alt="" />
          <div className="hero__content">
            <div className="home__heroTitle">
              Welcome to <span className="home_heroTitleRed">DanceKart</span>
            </div>
            <div className="hero__subTitle">
              We bring you clothes and accessories with utmost comfort while you
              push yourself out of your comfort zone.
            </div>
            <Button
              onClick={handleShopNow}
              variant="outlined"
              className="hero__shopnow"
            >
              Shop Now
            </Button>
          </div>
        </div>

        <div className="home__filters" id="filters">
          <Tabs
            value={selectedFilter}
            onChange={handleFilter}
            centered
            indicatorColor="primary"
            textColor="primary"
          >
            {filters.map((filter) => (
              <Tab
                className={`home__singleFilter ${
                  filter === selectedFilter ? 'home_singleFilterActive' : ''
                }`}
                onClick={() => handleFilter(filter)}
                textColor="primary"
                label={filter}
                selected={filter === selectedFilter}
              />
            ))}
          </Tabs>
        </div>
        <div className="home__row">
          {itemList.map((item) => {
            return (
              <Product
                image={item.image}
                title={item.title}
                info={item.info}
                price={item.price}
                id={item.id}
                handleOpen={handleOpen}
                fetchWishlist={fetchWishlist}
                setOpenSignIn={setOpenSignIn}
              />
            );
          })}
        </div>
        <MessageModal
          open={open}
          setOpen={setOpen}
          title="Product already added to your cart!"
          description="You can add multiple items of the same at the checkout page."
        />
        <MessageModal
          open={openSignIn}
          setOpen={setOpenSignIn}
          title="Sign In"
          description="You need to sign in before saving products to wishlist"
          onClick={handleSignIn}
          buttonText="Sign In"
        />
      </div>
    </div>
  );
}

export default Home;
