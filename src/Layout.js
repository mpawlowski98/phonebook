import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './App.module.css';
import { Navigation } from 'components/Navigation/Navigation';
export const Layout = () => {
  return (
    <div className={css.containerLayout}>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
