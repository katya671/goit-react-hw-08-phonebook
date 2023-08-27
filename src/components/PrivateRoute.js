import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken, selectIsRefreshing } from 'redux/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(selectToken);
  console.log(isAuth);
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log(isRefreshing);
  const shouldRedirect = !isRefreshing && !isAuth;
  console.log(shouldRedirect);

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
