import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import './Orders.css';
import SingleOrder from './SingleOrder';
import { useStateValue } from './StateProvider';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      console.log('YES USER IS THERE');
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) => {
          console.log('Snapshot >>>>>', snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })),
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      {orders.length > 0 ? (
        <div className="orders__order">
          {orders.map((order) => (
            <SingleOrder order={order} />
          ))}
        </div>
      ) : (
        <h2>You dont have any order history</h2>
      )}
    </div>
  );
}

export default Orders;
