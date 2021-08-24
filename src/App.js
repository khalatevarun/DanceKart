import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is >>>>', authUser);
      if (authUser) {
        //user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
