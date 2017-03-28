"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var home_1 = require("./home");
var app = redux_1.combineReducers({
    home: home_1["default"]
});
exports["default"] = app;
