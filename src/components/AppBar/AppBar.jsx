import React from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';
import AuthNav from 'components/AuthNav/AuthNav';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.nav}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink className={css.link} to="/contacts">
              Contacts
            </NavLink>
          )}
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
