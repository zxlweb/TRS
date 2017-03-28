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
var Xtable = (function (_super) {
    __extends(Xtable, _super);
    function Xtable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Xtable.prototype.render = function () {
        var _this = this;
        var temArr = [];
        var title = '';
        if (this.props.p.length) {
            this.props.p.forEach(function (ele, index) {
                var value = _this.props.o[index].total_value;
                var myScore = (ele.score_rate * value).toFixed(0);
                var meanScore = (_this.props.o[index].mean_sr * value).toFixed(2);
                var obj = {
                    score_rate: myScore,
                    mean_sr: meanScore,
                    score_vary: (myScore - meanScore) > 0 ? "高" + (myScore - meanScore).toFixed(2) + "分" : "低" + (meanScore - myScore).toFixed(2) + "分",
                    score_vary_positive: (myScore - meanScore) > 0
                };
                if (!!ele.tyid) {
                    Object.assign(obj, { tyid: ele.tyid });
                    temArr.push(obj);
                    title = '题型';
                }
                else {
                    Object.assign(obj, { tyid: ele.kpid });
                    temArr.push(obj);
                    title = '知识点';
                }
            });
        }
        return (React.createElement("table", { className: "rd-table" },
            React.createElement("thead", { className: "rd-table-thead" },
                React.createElement("tr", { className: "rd-table-th" },
                    React.createElement("td", { className: "rd-table-td" }, title),
                    React.createElement("td", { className: "rd-table-td" }, "\u5F97\u5206"),
                    React.createElement("td", { className: "rd-table-td" }, "\u5E73\u5747\u5F97\u5206"),
                    React.createElement("td", { className: "rd-table-td" }, "\u5206\u5DEE"))),
            React.createElement("tbody", null, (function () {
                var trs = [];
                for (var i = 0; i < temArr.length; i++) {
                    trs.push(React.createElement("tr", { className: "rd-table-tr", key: i },
                        React.createElement("td", { className: "rd-table-td" }, temArr[i].tyid),
                        React.createElement("td", { className: "rd-table-td" }, temArr[i].score_rate),
                        React.createElement("td", { className: "rd-table-td" }, temArr[i].mean_sr),
                        React.createElement("td", { className: ((temArr[i].score_vary.indexOf("高")) != -1 ? "positive" : " ") + "  rd-table-td" }, temArr[i].score_vary)));
                }
                return trs;
            })())));
    };
    return Xtable;
}(React.Component));
exports["default"] = Xtable;
