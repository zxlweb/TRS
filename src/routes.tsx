/**
 * @fileOverview page routes
 * @author Max
 **/

import * as React from 'react';
import { Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';
import Root = require('./pages/root');
const server = (input: any) => {
    return typeof window === 'undefined' ? input : <Route path="somethingelsethatisneverreachable" />;
};

if (typeof require.ensure !== 'function') {
    require.ensure = (dep, callback) => {
        callback(require);
    };
}

export const ROUTE_PATH = {
    LOGIN:'login',
    REPORTLIST:'reportlist'
};

const Routes = (
      <Route path="/" component={Root}>
           <IndexRoute getComponent={(nextState, callback) => {
                require.ensure([], function (require) {
                    callback(null, require('./pages/login'));
                });
            }}>
            </IndexRoute>
            <Route path={`${ROUTE_PATH.REPORTLIST}/:id`} getComponent={(nextState, callback) => {
                require.ensure([], function (require) {
                    callback(null, require('./pages/reportlist'));
                });
            }
            }>
           </Route>
          <Route path={"report/:sid/:eid/overall"} getComponent={(nextState, callback) => {
                require.ensure([], function (require) {
                    callback(null, require('./pages/reportdata'));
                });
            }
            }>
           </Route>
   </Route>
 
);

export default Routes;
