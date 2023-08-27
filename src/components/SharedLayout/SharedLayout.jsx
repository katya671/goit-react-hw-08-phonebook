import React, { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';

import Loader from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <div className={css.container}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default SharedLayout;
