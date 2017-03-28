"use strict";
exports.__esModule = true;
var lib_1 = require("razy/dist/lib");
var action_type_1 = require("../const/action-type");
var request_1 = require("../const/request");
exports.getMyCards = lib_1.createAction(action_type_1["default"].CREDIT_GET_MY_CARDS, null, null, function () { return _http.get(request_1["default"].CREDIT_GET_MY_CARDS); });
exports.getNewCard = lib_1.createAction(action_type_1["default"].CREDIT_GET_NEW_CARD, function (index) { return ({ index: index }); });
exports.getCurrentCollectedUpCount = lib_1.createAction(action_type_1["default"].CREDIT_GET_CURRENT_COLLECTED_UP_COUNT, null, null, function () { return _http.get(request_1["default"].GET_CURRENT_COLLECTED_UP_COUNT); });
_http.get;
