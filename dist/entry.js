"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
require("./utils/object-assign-polyfill");
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var routes_1 = require("./routes");
var react_router_1 = require("react-router");
var redux_1 = require("redux");
var app_1 = require("./a-reducer/app");
var Immutable = require("immutable");
var promiseMiddleware = require("redux-promise");
var ValidatorMiddleware = require("redux-validator");
var redux_thunk_1 = require("redux-thunk");
var querystring = require("query-string");
var lib_1 = require("razy/dist/lib");
lib_1.promiseExtend();
lib_1.retinaSetUp();
window.ret = lib_1.ret;
var requestMothods = lib_1.getRequestMethod();
window._http = requestMothods.http;
window._https = requestMothods.https;
window._storage = lib_1.Storage;
var query = querystring.parse(location.search);
var finalCreateStore, devTools;
if (__WEBPACK_DEV__) {
    var createDevTools = require('redux-devtools').createDevTools;
    var LogMonitor = require('redux-devtools-log-monitor')["default"];
    var DockMonitor = require('redux-devtools-dock-monitor')["default"];
    devTools = createDevTools(React.createElement(DockMonitor, { toggleVisibilityKey: 'ctrl-h', changePositionKey: 'ctrl-q', defaultIsVisible: false },
        React.createElement(LogMonitor, { theme: 'tomorrow' })));
    var persistState = require('redux-devtools').persistState;
    var getDebugSessionKey = function () {
        var matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
        return (matches && matches.length > 0) ? matches[1] : null;
    };
    var createLogger = require('redux-logger');
    finalCreateStore = redux_1.compose(redux_1.applyMiddleware(ValidatorMiddleware(), redux_thunk_1["default"], promiseMiddleware), devTools.instrument(), persistState(getDebugSessionKey()))(redux_1.createStore);
}
else {
    finalCreateStore = redux_1.compose(redux_1.applyMiddleware(ValidatorMiddleware(), redux_thunk_1["default"], promiseMiddleware))(redux_1.createStore);
}
var initialState = JSON.parse(decodeURIComponent(__INITIAL_STATE__));
for (var i in initialState) {
    initialState[i] = Immutable.fromJS(initialState[i]);
}
var store = finalCreateStore(app_1["default"], initialState);
var customProps = {
    devTools: devTools
};
var deviceVars = {
    device_mobile: device_mobile,
    device_phone: device_phone,
    device_tablet: device_tablet,
    device_os: device_os
};
Object.assign(customProps, deviceVars);
var createElement = function (Component, props) {
    var newProps = props;
    Object.assign(newProps, customProps);
    return React.createElement(Component, newProps);
};
react_router_1.match({ history: react_router_1.browserHistory, routes: routes_1["default"] }, function (error, redirectLocation, renderProps) {
    ReactDOM.render((React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_1.Router, __assign({ createElement: createElement }, renderProps, { history: react_router_1.browserHistory })))), document.getElementById('root'));
});
