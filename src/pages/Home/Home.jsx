import React from 'react';
import css from '../Container.module.css';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Phonebook</h1>
      {isLoggedIn ? (
        <p className={css.message}>
          You are logged in. View your contacts&nbsp;
          <Link to="/contacts" className={css.link}>
            here
          </Link>
          .
        </p>
      ) : (
        <p className={css.message}>
          <Link to="/register" className={css.link}>
            Register
          </Link>
          &nbsp;or&nbsp;
          <Link to="/login" className={css.link}>
            Log In
          </Link>
          &nbsp;to view your contacts.
        </p>
      )}
    </div>
  );
};

export default Home;
