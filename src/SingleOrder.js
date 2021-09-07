import moment from 'moment';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './SingleOrder.css';

function SingleOrder({ order }) {
  return (
    <div className="order">
      <div className="order__date">
        <h3>Date: </h3>{' '}
        <span>{moment.unix(order.data.created).format('MMMM Do YYYY')}</span>
      </div>
      <p className="order__id">
        <strong>ID: </strong>
        <small>{order.id}</small>
      </p>
      <br />

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          price={item.price}
          title={item.title}
          image={item.image}
          hideButton
        />
      ))}

      <div className="order__bottom">
        <div className="order__address">
          <h3>Delivered To: </h3>
          <>
            <h4>
              {order.data.addressDetails.name},{' '}
              {order.data.addressDetails.contact}{' '}
            </h4>
            <div>
              {order.data.addressDetails.address},{' '}
              {order.data.addressDetails.city},{' '}
              {order.data.addressDetails.pincode},{' '}
              {order.data.addressDetails.state}
            </div>{' '}
          </>
        </div>
        <CurrencyFormat
          renderText={(value) => (
            <h3 className="order__total">Total: {value}</h3>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'INR'}
        />
      </div>
    </div>
  );
}

export default SingleOrder;
