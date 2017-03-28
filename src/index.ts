/**
 * @fileOverview server entrance
 * @author Max
 */

import { start as startServer } from 'razy';
import APP from './a-reducer/app';
import ROUTES from './routes';
import { compose, createStore, applyMiddleware } from 'redux';
import promiseMiddleware = require('redux-promise');
import ValidatorMiddleware = require('redux-validator');
import ThunkMiddleware from 'redux-thunk';

const finalCreateStore = compose(
    applyMiddleware(ValidatorMiddleware(), ThunkMiddleware, promiseMiddleware)
)(createStore);

startServer({
    reducerRoot: APP,
    routes: ROUTES,
    createStore: finalCreateStore,
    serverInterceptor: app => {
        // for wechat
        app.all('/MP_verify_Vbv0JhVzuw3VGLWv.txt', function(req, res, next) {
            res.send('Vbv0JhVzuw3VGLWv');
            res.end();
        });

        // for form
        app.all('/form/1', function(req, res, next) {
            res.redirect('http://xesnj.flzhan.com/text293.html');
        });
    }
});