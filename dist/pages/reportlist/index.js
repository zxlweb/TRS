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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var React = require("react");
var react_redux_1 = require("react-redux");
var lib_1 = require("razy/dist/lib");
var request_1 = require("../../const/request");
var header_1 = require("../header");
var style = _importLess('./index', __dirname);
var Reportlist = (function (_super) {
    __extends(Reportlist, _super);
    function Reportlist(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            content: []
        };
        return _this;
    }
    Reportlist.prototype.interceptor = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    Reportlist.prototype.setUpPage = function (manager) { };
    Reportlist.prototype.getInitDataActionImp = function (props) { };
    Reportlist.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dispatch, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.componentDidMount.call(this);
                        dispatch = this.props.dispatch;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _http.post(request_1["default"].SUBMIT, { id: this.props.params.id })];
                    case 2:
                        response = _a.sent();
                        this.setState({
                            content: response
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Reportlist.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("style", { dangerouslySetInnerHTML: { __html: style } }),
            React.createElement(header_1["default"], null),
            React.createElement("div", { className: "list-container" },
                React.createElement("div", { className: "usr-info" },
                    "\u4F60\u597D\uFF0C",
                    this.state.content.length == 0 ? '' : this.state.content[0].user_name,
                    "\uFF01\u6B22\u8FCE\u6765\u5230TRS\uFF01"),
                React.createElement("div", { id: "report-list" },
                    React.createElement("h3", { className: "report-title" }, "\u62A5\u544A\u5217\u8868"),
                    (function () {
                        var content = [];
                        for (var i = 0; i < _this.state.content.length; i++) {
                            var d = new Date(_this.state.content[i].exam_date);
                            var day = d.getDate();
                            var month = d.getMonth() + 1;
                            var year = d.getFullYear();
                            var fullYear = year + '-' + month + '-' + day;
                            content.push(React.createElement("a", { href: "/report/" + _this.props.params.id + "/" + _this.state.content[i].eid + "/overall", className: "link active", key: i },
                                React.createElement("div", { className: "report-sec" },
                                    React.createElement("h3", { className: "r-name" }, _this.state.content[i].exam_title),
                                    React.createElement("div", { className: "r-time" }, fullYear),
                                    React.createElement("div", { className: "report-bottom" },
                                        React.createElement("div", { className: "r-score" },
                                            "\u5F97\u5206 ",
                                            React.createElement("span", null, _this.state.content[i].total_score)),
                                        React.createElement("div", { className: "r-todetail" }, "\u70B9\u51FB\u67E5\u770B\u8BE6\u7EC6\u62A5\u544A")))));
                        }
                        return content;
                    })()),
                React.createElement("div", { className: "share-info" },
                    React.createElement("img", { src: ret(__IMAGE_STATIC_PATH__ + "/Wechatshare.png") }))),
            React.createElement("footer", null, "Copyright \u00A9 2017 \u5357\u4EAC\u5B66\u800C\u601D\u5E02\u573A\u90E8")));
    };
    return Reportlist;
}(lib_1.BaseComponent));
var selector = function () { return ({}); };
module.exports = react_redux_1.connect(selector)(Reportlist);
