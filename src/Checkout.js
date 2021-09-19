import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <h1 className="checkout__title">Your Shopping Cart</h1>
      <div className="checkout__row">
        <div className="checkout__left">
          <div>
            {basket.length > 0 ? (
              <>
                {basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    price={item.price}
                    title={item.title}
                    image={item.image}
                    quantity={item.quantity}
                  />
                ))}
              </>
            ) : (
              <h2>Your shopping cart is empty</h2>
            )}
          </div>
        </div>

        {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
