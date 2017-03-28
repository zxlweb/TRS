"use strict";
exports.__esModule = true;
var razy_1 = require("razy");
var app_1 = require("./a-reducer/app");
var routes_1 = require("./routes");
var redux_1 = require("redux");
var promiseMiddleware = require("redux-promise");
var ValidatorMiddleware = require("redux-validator");
var redux_thunk_1 = require("redux-thunk");
var finalCreateStore = redux_1.compose(redux_1.applyMiddleware(ValidatorMiddleware(), redux_thunk_1["default"], promiseMiddleware))(redux_1.createStore);
razy_1.start({
    reducerRoot: app_1["default"],
    routes: routes_1["default"],
    createStore: finalCreateStore,
    serverInterceptor: function (app) {
        app.all('/MP_verify_Vbv0JhVzuw3VGLWv.txt', function (req, res, next) {
            res.send('Vbv0JhVzuw3VGLWv');
            res.end();
        });
        app.all('/form/1', function (req, res, next) {
            res.redirect('http://xesnj.flzhan.com/text293.html');
        });
    }
});
