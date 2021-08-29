import moment from 'moment';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './SingleOrder.css';

function SingleOrder({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          price={item.price}
          title={item.title}
          image={item.image}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'INR'}
      />
    </div>
  );
}

export default SingleOrder;
