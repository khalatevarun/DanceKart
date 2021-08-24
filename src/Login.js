import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (event) => {
    event.preventDefault();
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKLdz1AOZHAYRbHKquysD8uI_ftqvRwFHtw&usqp=CAU"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="login_singInButton" onClick={signIn} type="submit">
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button className="login_registerButton" onClick={register}>
            Create your account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
