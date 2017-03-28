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
var react_router_1 = require("react-router");
var request_1 = require("../../const/request");
var style = _importLess('./index', __dirname);
var Login = (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            id: '',
            exist: false,
            error: false
        };
        return _this;
    }
    Login.prototype.interceptor = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    Login.prototype.setUpPage = function (manager) { };
    Login.prototype.getInitDataActionImp = function (props) { };
    Login.prototype.handelSubmit = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, _http.post(request_1["default"].SUBMIT, { id: this.state.id })];
                    case 1:
                        response = _a.sent();
                        this.setState({
                            error: false,
                            exist: false
                        });
                        react_router_1.browserHistory.push('reportlist/' + this.state.id);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.setState({
                            error: true,
                            exist: true
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.handleChange = function (event) {
        this.setState({
            id: event.target.value,
            error: false,
            exist: false
        });
    };
    Login.prototype.render = function () {
        return (React.createElement("div", { id: 'xsrMain' },
            React.createElement("style", { dangerouslySetInnerHTML: { __html: style } }),
            React.createElement("div", { className: 'login-pagewrap' },
                React.createElement("h3", null, "\u5B66\u800C\u601D Test Report System"),
                React.createElement("img", { src: ret(__IMAGE_STATIC_PATH__ + "/logo.png"), className: "img" }),
                React.createElement("div", { className: "login-page", style: { backgroundImage: "url(\"" + ret(__IMAGE_STATIC_PATH__ + '/bg.png') + "\")" } }),
                React.createElement("div", { className: 'login' },
                    React.createElement("div", { "data-show": this.state.exist, className: 'err-msg' }, "\u8D26\u6237\u4E0D\u5B58\u5728"),
                    React.createElement("form", null,
                        React.createElement("input", { type: "text", placeholder: "输入学员编号", className: (this.state.error ? "err" : "") + " login-field", value: this.state.id, onChange: this.handleChange.bind(this) }),
                        React.createElement("button", { className: "login-btn", onClick: this.handelSubmit.bind(this), type: "button" }, "\u67E5\u8BE2")))),
            React.createElement("footer", null, "Copyright \u00A9 2017 \u5357\u4EAC\u5B66\u800C\u601D\u5E02\u573A\u90E8")));
    };
    return Login;
}(lib_1.BaseComponent));
var selector = function () { return ({}); };
module.exports = react_redux_1.connect(selector)(Login);
