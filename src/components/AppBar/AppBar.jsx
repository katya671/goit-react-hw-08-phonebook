import React from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';
import AuthNav from 'components/AuthNav/AuthNav';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

const StyledLink = styled(NavLink)`
  color: var(--main);

  &.active {
    color: var(--main-hover);
  }
`;

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.nav}>
          <StyledLink className={css.link} to="/">
            Home
          </StyledLink>
          {isLoggedIn && (
            <StyledLink className={css.link} to="/contacts">
              Contacts
            </StyledLink>
          )}
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
