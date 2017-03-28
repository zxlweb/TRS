webpackJsonp([4,3],{

/***/ 392:
/*!***********************************!*\
  !*** ./src/pages/login/index.tsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

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
	var React = __webpack_require__(/*! react */ 6);
	var react_redux_1 = __webpack_require__(/*! react-redux */ 8);
	var lib_1 = __webpack_require__(/*! razy/dist/lib */ 103);
	var react_router_1 = __webpack_require__(/*! react-router */ 48);
	var request_1 = __webpack_require__(/*! ../../const/request */ 393);
	var style = __webpack_require__(/*! ./index.less */ 394);
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
	    Login.prototype.componentDidMount = function () {
	        _super.prototype.componentDidMount.call(this);
	        var dispatch = this.props.dispatch;
	    };
	    Login.prototype.handelSubmit = function (e) {
	        return __awaiter(this, void 0, void 0, function () {
	            var response, error_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        e.preventDefault();
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, , 4]);
	                        return [4 /*yield*/, _http.post(request_1["default"].SUBMIT, { id: this.state.id })];
	                    case 2:
	                        response = _a.sent();
	                        this.setState({
	                            error: false,
	                            exist: false
	                        });
	                        react_router_1.browserHistory.push(request_1["default"].REPORTLIST + "/this.state.id");
	                        return [3 /*break*/, 4];
	                    case 3:
	                        error_1 = _a.sent();
	                        this.setState({
	                            error: true,
	                            exist: true
	                        });
	                        return [3 /*break*/, 4];
	                    case 4: return [2 /*return*/];
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
	            React.createElement("h3", null, "\u5B66\u800C\u601D Test Report System"),
	            React.createElement("img", { src: ret(__IMAGE_STATIC_PATH__ + "/logo.png"), className: "img" }),
	            React.createElement("div", { className: "loginpage", style: { backgroundImage: "url(\"" + ret(__IMAGE_STATIC_PATH__ + '/bg.png') + "\")" } }),
	            React.createElement("div", { className: 'login' },
	                React.createElement("div", { "data-show": this.state.exist, className: 'errmsg' }, "\u8D26\u6237\u4E0D\u5B58\u5728"),
	                React.createElement("form", null,
	                    React.createElement("input", { type: "text", placeholder: "输入学员编号", className: (this.state.error ? "err" : "") + " loginField", value: this.state.id, onChange: this.handleChange.bind(this) }),
	                    React.createElement("button", { className: "loginBtn", onClick: this.handelSubmit.bind(this) }, "\u67E5\u8BE2"))),
	            React.createElement("footer", null, "Copyright \u00A9 2017 \u5357\u4EAC\u5B66\u800C\u601D\u5E02\u573A\u90E8")));
	    };
	    return Login;
	}(lib_1.BaseComponent));
	var selector = function () { return ({}); };
	module.exports = react_redux_1.connect(selector)(Login);


/***/ },

/***/ 393:
/*!******************************!*\
  !*** ./src/const/request.ts ***!
  \******************************/
/***/ function(module, exports) {

	"use strict";
	exports.__esModule = true;
	var PREFIX = 'front';
	var REQEUST = {
	    SUBMIT: PREFIX + "/user/searchByStudentID",
	    REPORTLIST: PREFIX + "/user/searchByStudentID",
	    REPORTDATA: PREFIX + "/report/data"
	};
	exports["default"] = REQEUST;


/***/ },

/***/ 394:
/*!************************************!*\
  !*** ./src/pages/login/index.less ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(/*! !../../../~/css-loader!../../../~/postcss-loader!../../../~/less-loader!../../../~/xnl-less-base-import-loader!./index.less */ 395);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },

/***/ 395:
/*!**********************************************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/less-loader!./~/xnl-less-base-import-loader!./src/pages/login/index.less ***!
  \**********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 390)();
	// imports
	
	
	// module
	exports.push([module.id, ".loginpage{background:#f7fafc;margin:0;padding:0;background-repeat:no-repeat;background-size:cover;position:fixed;top:0;right:0;bottom:0;left:0;z-index:-1}.reportContainer{margin:10px 10px 0;color:#666;border:1px solid #ddd;border-radius:4px;box-shadow:0 1px 0 #f2f4f5;background:#fff}.err{border:1px solid #ff6384!important}.errmsg{font-size:14px;color:#ff6384}.loginField{line-height:2.5rem;color:#666;background-image:none;border:1px solid #d9d9d9;border-radius:4px;padding:.1rem .5rem;margin:0 auto;box-sizing:border-box}.loginBtn,.loginField{font-size:1rem;background-color:#fff;width:70%;outline:none;height:2.5rem}.loginBtn{display:block;margin:1rem auto;text-align:center;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;border:1px solid transparent;white-space:nowrap;padding:.3rem;line-height:1.5rem;min-width:5rem;border-radius:4px;-webkit-transition:background .2s;transition:background .2s;color:#57c5f7;border-color:#57c5f7}.loginBtn:hover{color:#57c5f7;background-color:#fff;border-color:#57c5f7}div[data-show=false]{display:none}div[data-show=true]{display:block}", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=4.js.map