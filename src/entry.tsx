/**
 * @fileOverview client page entrance
 * @author Max
 */
import * as React from 'react';
import { entrySetUp, render } from 'razy/dist/lib/entry';
import routes from './routes';
import APP from './a-reducer/app';
import { compose, createStore, applyMiddleware, GenericStoreEnhancer } from 'redux';
import promiseMiddleware = require('redux-promise');
import ValidatorMiddleware = require('redux-validator');
import ThunkMiddleware from 'redux-thunk';
import * as querystring from 'query-string';
import * as Immutable from 'immutable';

let finalCreateStore: any, devTools: any;

if (__WEBPACK_DEV__) {
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
        return (matches && matches.length > 0) ? matches[1] : null;
    };
    // const createLogger = require('redux-logger');
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

entrySetUp({
    routes,
    APP,
    createStore: finalCreateStore,
    devTools,
    dataFlagResolver: function (obj: any, resolve: Function, reject: Function) {
        if (obj.code === 0) {

            resolve(obj.data);
        } else {
            reject(obj);
        }
    },
});

render();