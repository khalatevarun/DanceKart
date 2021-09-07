import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import MessageModal from './MessageModal';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {
  const history = useHistory();
  const [{ totalItems, basket, user }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  console.log('total amount', getBasketTotal(basket));

  const handleClick = () => {
    if (user) {
      history.push('/payment');
    } else {
      setOpen(true);
    }
  };

  const handleSignIn = () => {
    history.push('/login');
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({totalItems} items):
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'INR'}
      />
      <button onClick={handleClick}>Proceed to Checkout</button>
      <MessageModal
        open={open}
        setOpen={setOpen}
        title="Sign In"
        description="You need to sign in before proceeding to checkout"
        onClick={handleSignIn}
        buttonText="Sign In"
      />
    </div>
  );
}

export default Subtotal;
