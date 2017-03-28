webpackJsonp([5,3],{

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

/***/ 396:
/*!****************************************!*\
  !*** ./src/pages/reportlist/index.tsx ***!
  \****************************************/
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
	var request_1 = __webpack_require__(/*! ../../const/request */ 393);
	var style = __webpack_require__(/*! ./index.less */ 397);
	var Reportlist = (function (_super) {
	    __extends(Reportlist, _super);
	    function Reportlist(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            user_name: '',
	            total_score: 0,
	            exam_title: '',
	            exam_date: '',
	            eid: 0
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
	            var dispatch, response, d, day, month, year, fullYear, error_1;
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
	                        console.log(response[0]);
	                        d = new Date(response[0].exam_date);
	                        day = d.getDate();
	                        month = d.getMonth() + 1;
	                        year = d.getFullYear();
	                        fullYear = year + '-' + month + '-' + day;
	                        this.setState({
	                            user_name: response[0].user_name,
	                            total_score: response[0].total_score,
	                            exam_title: response[0].exam_title,
	                            exam_date: fullYear,
	                            eid: response[0].eid
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
	        return (React.createElement("div", null,
	            React.createElement("style", { dangerouslySetInnerHTML: { __html: style } }),
	            React.createElement("div", { className: "s-header" },
	                React.createElement("div", { className: "ex-header-logo" },
	                    React.createElement("span", { className: "ex-header-logo-text" }, "\u5B66\u800C\u601DTRS"))),
	            React.createElement("div", { className: "listContainer" },
	                React.createElement("div", { className: "usrInfo" },
	                    "\u4F60\u597D\uFF0C",
	                    this.state.user_name,
	                    "\uFF01\u6B22\u8FCE\u6765\u5230TRS\uFF01"),
	                React.createElement("div", { id: "reportList" },
	                    React.createElement("h3", { className: "reportTitle" }, "\u62A5\u544A\u5217\u8868"),
	                    React.createElement("a", { href: "/report/" + this.props.params.id + "/" + this.state.eid + "/overall", className: "link active" },
	                        React.createElement("div", { className: "reportSec" },
	                            React.createElement("h3", { className: "rName" }, this.state.exam_title),
	                            React.createElement("div", { className: "rTime" }, this.state.exam_date),
	                            React.createElement("div", { className: "reportBottom" },
	                                React.createElement("div", { className: "rScore" },
	                                    "\u5F97\u5206 ",
	                                    React.createElement("span", null, this.state.total_score)),
	                                React.createElement("div", { className: "rToDetail" }, "\u70B9\u51FB\u67E5\u770B\u8BE6\u7EC6\u62A5\u544A"))))),
	                React.createElement("div", { className: "shareInfo" },
	                    React.createElement("img", { src: ret(__IMAGE_STATIC_PATH__ + "/Wechatshare.png") }))),
	            React.createElement("footer", null, "Copyright \u00A9 2017 \u5357\u4EAC\u5B66\u800C\u601D\u5E02\u573A\u90E8")));
	    };
	    return Reportlist;
	}(lib_1.BaseComponent));
	var selector = function () { return ({}); };
	module.exports = react_redux_1.connect(selector)(Reportlist);


/***/ },

/***/ 397:
/*!*****************************************!*\
  !*** ./src/pages/reportlist/index.less ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(/*! !../../../~/css-loader!../../../~/postcss-loader!../../../~/less-loader!../../../~/xnl-less-base-import-loader!./index.less */ 398);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },

/***/ 398:
/*!***************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/less-loader!./~/xnl-less-base-import-loader!./src/pages/reportlist/index.less ***!
  \***************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 390)();
	// imports
	
	
	// module
	exports.push([module.id, ".listContainer{margin:10px 10px 0;color:#666;border-radius:4px;box-shadow:0 1px 0 #f2f4f5}.usrInfo{padding:10px;text-align:left;border-bottom:1px solid #eee}.link{display:block;text-decoration:none;padding:6px}.link.active .reportSec{background:hsla(0,0%,100%,.6)}.link.active .rName,.link.active .rScore,.link.active .rScore span{color:#999}.reportLink{display:-ms-flexbox;display:-webkit-box;display:flex;height:40px;line-height:40px;border-top:1px solid #fff}.reportSec{background:#fff;border-radius:6px;padding:10px;color:#000;text-align:left;box-shadow:0 2px 5px #999}.reportInfo{-ms-flex:1;-webkit-box-flex:1;flex:1}.rTime{color:#999;padding:5px 0}.rName{margin:0}.reportBottom{display:-ms-flexbox;display:-webkit-box;display:flex;margin-top:15px;font-weight:700}.rScore{width:30%;text-align:left}.rScore span{font-weight:400;color:#ff2741}.rToDetail{width:70%;text-align:right;color:#999}.reportTitle{margin:0;padding-top:6px}.shareInfo{background:#fff;color:#000;font-size:12px;text-align:left;padding:10px;font-weight:900}", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=5.js.map