"use strict";
exports.__esModule = true;
var lib_1 = require("razy/dist/lib");
var action_type_1 = require("../const/action-type");
var Immutable = require("immutable");
var home = lib_1.createReducer(Immutable.fromJS({
    myCardsIndex: [],
    currentCollectedCount: 0
}), (_a = {},
    _a[action_type_1["default"].CREDIT_GET_MY_CARDS] = function (state, action) {
        return state.set('myCardsIndex', Immutable.fromJS(action.payload.myCards))
            .set('dataInited', true);
    },
    _a[action_type_1["default"].CREDIT_GET_NEW_CARD] = function (state, action) {
        return state.update('myCardsIndex', function (List) { return List.push(action.payload.index); });
    },
    _a[action_type_1["default"].CREDIT_GET_CURRENT_COLLECTED_UP_COUNT] = function (state, action) {
        return state.set('currentCollectedCount', action.payload.collectedUpTotal);
    },
    _a));
exports["default"] = home;
var _a;
