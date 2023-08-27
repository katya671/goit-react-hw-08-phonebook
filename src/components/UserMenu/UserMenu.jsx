import React from 'react';
import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { logOut } from 'redux/operations';
import { toast } from 'react-toastify';

const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
    toast.success('Logged out successfully');
  };

  return (
    <div className={css.wrapper}>
      <p className={css.email}>{email}</p>
      <button className={css.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
