import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './AuthNav.module.css';

const StyledLink = styled(NavLink)`
  color: var(--main);

  &.active {
    color: var(--main-hover);
  }
`;

const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <StyledLink className={css.link} to="/register">
        Register
      </StyledLink>
      <StyledLink className={css.link} to="/login">
        Log In
      </StyledLink>
    </div>
  );
};

export default AuthNav;
