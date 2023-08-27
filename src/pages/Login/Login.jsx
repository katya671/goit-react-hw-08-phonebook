import React from 'react';
import css from '../Container.module.css';
import LoginForm from 'components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Log In</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
