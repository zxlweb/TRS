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
var RankChart = (function (_super) {
    __extends(RankChart, _super);
    function RankChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankChart.prototype.render = function () {
        var title = this.props.title;
        var _msg = this.props.msg || {};
        var myrank = function () {
            if (_msg.user_percent) {
                var pct = _msg.user_percent * 1;
                return (pct * 100).toFixed(2) + '%';
            }
        };
        var goodrank = function () {
            if (_msg.high_percent) {
                var pct = 1 - _msg.high_percent * 1;
                return (pct * 100).toFixed(2) + '%';
            }
        };
        var fairrank = function () {
            if (_msg.mean_percent) {
                var pct = _msg.mean_percent * 1;
                return (pct * 100).toFixed(2) + '%';
            }
        };
        return (React.createElement("div", { className: "rank-container" },
            React.createElement("h3", null, this.props.title),
            React.createElement("div", { className: "rankchart" },
                React.createElement("div", { className: "rc fair", style: { width: fairrank() } },
                    React.createElement("div", { className: "subrc" }),
                    React.createElement("span", { className: "av" }, "\u5E73\u5747\u7EBF")),
                React.createElement("div", { className: "rc good", style: { width: goodrank() } },
                    React.createElement("div", { className: "subrc" }),
                    React.createElement("span", { className: "gd" }, "\u4F18\u79C0\u7EBF")),
                React.createElement("div", { className: "rc your", style: { width: myrank() } },
                    React.createElement("span", { className: "yr" }, "\u4F60\u5728\u8FD9"))),
            React.createElement("div", { className: "subranktitle" }, !_msg.teacher_name ?
                ("\u4F60\u6218\u80DC\u4E86" + myrank() + "\u7684\u540C\u5B66!") :
                ("\u4F60\u5728 " + _msg.teacher_name + "\u8001\u5E08\u540D\u4E0B\uFF0C\u6392\u540D\u7B2C\n                              \u6218\u80DC\u4E86" + myrank() + "\u7684\u540C\u5B66\uFF01"))));
    };
    return RankChart;
}(React.Component));
exports["default"] = RankChart;
