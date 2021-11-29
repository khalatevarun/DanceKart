import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { db } from './firebase';
import { Button } from '@material-ui/core';

import Address from './Address';
import MessageModal from './MessageModal';

function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [{ basket, user, totalAmount }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(null);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(true);
  const [addressDetails, setAddressDetails] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer
    if (basket.length > 0) {
      const getClientSecret = async () => {
        const response = await fetch(
          `https://dancekart.herokuapp.com/payments/create?total=${
            totalAmount * 100
          }`,
          {
            method: 'POST',
            //stripe expects the total in currencies subunits
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const data = await response.json();

        setClientSecret(data.clientSecret);
      };
      getClientSecret();
    }
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!addressDetails) {
      setOpen(true);
      return;
    }
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((res) => {
        //paymentIntent = payment confirmation

        const result = res.error;

        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(result.payment_intent.id)
          .set({
            basket: basket,
            amount: result.payment_intent.amount,
            created: result.payment_intent.created,
            addressDetails: addressDetails,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({ type: 'EMPTY_BASKET' });

        history.replace('/orders');
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length}</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Deliver To</h3>
          </div>
          <div className="payment__address">
            <Address
              addressDetails={addressDetails}
              setAddressDetails={setAddressDetails}
            />
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                price={item.price}
                title={item.title}
                image={item.image}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(totalAmount) => (
                    <>
                      <h3> Order Total: {totalAmount}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={totalAmount}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'INR'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
                <br />
                <br />
                <div style={{ color: 'grey' }}>
                  ( Enter '4242424242....' until all entries are filled in the
                  card details ){' '}
                </div>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
      <MessageModal
        open={open}
        setOpen={setOpen}
        title="Address details missing"
        description="Pleas enter address details in order to continues the payment process"
      />
    </div>
  );
}

export default Payment;
