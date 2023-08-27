import React, { useEffect } from 'react';
import css from '../Container.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectIsLoggedIn,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import Loader from 'components/Loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      {isLoggedIn ? (
        <>
          <ContactForm />
          <h2 className={css.title}>Contacts</h2>
          <Filter />
          <ContactList />
          {isLoading && !error && <Loader />}
        </>
      ) : (
        <p className={css.message}>Register or Log In to view your contacts.</p>
      )}
    </div>
  );
};

export default Contacts;
