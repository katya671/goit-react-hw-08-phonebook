import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from '../Container.module.css';

const Register = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Register</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;
