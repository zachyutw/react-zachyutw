import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
const HomePage = React.lazy(() =>
  import('../components/Pages/HomePage/HomePage')
);

export const homeRoute = {
  main: { path: '/:target?', name: 'home', url: '/', to: '/' }
};
export const navMainFields = [homeRoute];
const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route {...homeRoute.main} component={HomePage} />
      </Suspense>
    </Switch>
  );
};
export default Routes;
