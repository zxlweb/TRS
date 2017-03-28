"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var Summarize = (function (_super) {
    __extends(Summarize, _super);
    function Summarize(props) {
        return _super.call(this, props) || this;
    }
    Summarize.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "summarize" },
            React.createElement("div", { className: "des-title" }, "\u603B\u7ED3\uFF1A"),
            React.createElement("div", { className: "summarize-wrapper" }, (function () {
                var trs = [], _item = _this.props.item;
                if (_item instanceof Array) {
                    for (var i = 0; i < _item.length; i++) {
                        trs.push(React.createElement("div", { className: "sm-item", key: i },
                            React.createElement("span", { className: "sm-title" },
                                _item[i].key,
                                ":"),
                            _item[i].content));
                    }
                    return trs;
                }
                else {
                    return (React.createElement("div", { className: "sm-item" }, _item));
                }
            })())));
    };
    return Summarize;
}(React.Component));
exports["default"] = Summarize;
