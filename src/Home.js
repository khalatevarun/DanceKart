import React from 'react';
import './Home.css';
import banner from '../src/assets/banner.jpg';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={banner} alt="" />
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
