/**
 * @fileOverview client page entrance
 * @author Max
 */

import './utils/object-assign-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import routes from './routes';
import {match, Router, browserHistory} from 'react-router';
import {compose, createStore, applyMiddleware, GenericStoreEnhancer} from 'redux';
import APP from './a-reducer/app';
import * as Immutable from 'immutable';
import promiseMiddleware = require('redux-promise');
import ValidatorMiddleware = require('redux-validator');
import ThunkMiddleware from 'redux-thunk';
import * as querystring from 'query-string';
import {retinaSetUp, ret, getRequestMethod, Storage, DeviceVars, promiseExtend} from 'razy/dist/lib';
promiseExtend();
retinaSetUp();
window.ret = ret;

const requestMothods = getRequestMethod();
window._http = requestMothods.http;
window._https = requestMothods.https;

window._storage = Storage;
const query = querystring.parse(location.search);
let finalCreateStore: any, devTools: any;

if(__WEBPACK_DEV__) {
    const createDevTools = require('redux-devtools').createDevTools;
    const LogMonitor = require('redux-devtools-log-monitor').default;
    const DockMonitor = require('redux-devtools-dock-monitor').default;
    devTools = createDevTools(
        <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' defaultIsVisible={false}>
            <LogMonitor theme='tomorrow' />
        </DockMonitor>
    );
    const persistState = require('redux-devtools').persistState;
    const getDebugSessionKey = () => {
        const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
        return (matches && matches.length > 0)? matches[1] : null;
    };
    const createLogger = require('redux-logger');
    finalCreateStore = compose(
       applyMiddleware(ValidatorMiddleware(), ThunkMiddleware, promiseMiddleware),
       devTools.instrument() as GenericStoreEnhancer,
       persistState(getDebugSessionKey()) as GenericStoreEnhancer
   )(createStore);
} else {
    finalCreateStore = compose(
       applyMiddleware(ValidatorMiddleware(), ThunkMiddleware, promiseMiddleware)
   )(createStore);
}


let initialState = JSON.parse(decodeURIComponent(__INITIAL_STATE__));
for(let i in initialState) {
    initialState[i] = Immutable.fromJS(initialState[i]);
}

const store = finalCreateStore(APP, initialState);

let customProps: any = {
    devTools
};
let deviceVars: DeviceVars = {
    device_mobile,
    device_phone,
    device_tablet,
    device_os
};
Object.assign(customProps, deviceVars);

const createElement = (Component: any, props: any) => {
    let newProps = props;
    Object.assign(newProps, customProps);
    return React.createElement(Component, newProps);
};

match({history: browserHistory, routes}, (error, redirectLocation, renderProps) => {
    ReactDOM.render((
        <Provider store={store}>
            <Router createElement={createElement} {...renderProps} history={browserHistory} />
        </Provider>
    ), document.getElementById('root'));
});
