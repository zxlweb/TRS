"use strict";
exports.__esModule = true;
var React = require("react");
var react_router_1 = require("react-router");
var Root = require("./pages/root");
var server = function (input) {
    return typeof window === 'undefined' ? input : React.createElement(react_router_1.Route, { path: "somethingelsethatisneverreachable" });
};
if (typeof require.ensure !== 'function') {
    require.ensure = function (dep, callback) {
        callback(require);
    };
}
exports.ROUTE_PATH = {
    LOGIN: 'login',
    REPORTLIST: 'reportlist'
};
var Routes = (React.createElement(react_router_1.Route, { path: "/", component: Root },
    React.createElement(react_router_1.IndexRoute, { getComponent: function (nextState, callback) {
            require.ensure([], function (require) {
                callback(null, require('./pages/login'));
            });
        } }),
    React.createElement(react_router_1.Route, { path: exports.ROUTE_PATH.REPORTLIST + "/:id", getComponent: function (nextState, callback) {
            require.ensure([], function (require) {
                callback(null, require('./pages/reportlist'));
            });
        } }),
    React.createElement(react_router_1.Route, { path: "report/:sid/:eid/overall", getComponent: function (nextState, callback) {
            require.ensure([], function (require) {
                callback(null, require('./pages/reportdata'));
            });
        } })));
exports["default"] = Routes;
