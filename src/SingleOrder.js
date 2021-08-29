import moment from 'moment';
import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './SingleOrder.css';

function SingleOrder({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.create).format('MMMM Do YYYY, h:mma')}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          price={item.price}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default SingleOrder;
