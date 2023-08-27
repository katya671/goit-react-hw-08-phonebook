import React, { useEffect } from 'react';
import css from '../Form.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('Successful registration. Welcome!');
      })
      .catch(() => {
        toast.error('Registration failed. Please try again.');
      });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
