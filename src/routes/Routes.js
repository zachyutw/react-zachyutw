import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
const JourneyPage = React.lazy(() => import('../components/Pages/JourneyPage/JourneyPage'));

export const journeyRoute = {
    name: 'journey',
    main: { path: '/:target?', name: 'main', url: '/' },
    create: { path: '/create', name: 'create', url: '/create' }
};
export const navMainFields = [ journeyRoute ];
const Routes = () => {
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <Route {...journeyRoute.main} component={JourneyPage} />
            </Suspense>
        </Switch>
    );
};
export default Routes;
