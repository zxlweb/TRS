webpackJsonp([10,8],{

/***/ 393:
/*!*********************************!*\
  !*** ./src/pages/game-page.tsx ***!
  \*********************************/
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
	var React = __webpack_require__(/*! react */ 7);
	var react_redux_1 = __webpack_require__(/*! react-redux */ 9);
	var lib_1 = __webpack_require__(/*! razy/dist/lib */ 104);
	var request_1 = __webpack_require__(/*! ../const/request */ 394);
	var routes_1 = __webpack_require__(/*! ../routes */ 48);
	var GamePage = (function (_super) {
	    __extends(GamePage, _super);
	    function GamePage(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {};
	        return _this;
	    }
	    GamePage.prototype.interceptor = function (req, res, next) {
	        return __awaiter(this, void 0, void 0, function () {
	            var result, error_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        _a.trys.push([0, 2, , 3]);
	                        return [4 /*yield*/, _http.get("" + request_1["default"].WHERE_SHOULD_I_GO)];
	                    case 1:
	                        result = _a.sent();
	                        switch (result.routes) {
	                            case 'login':
	                                res.redirect("/" + routes_1.ROUTE_PATH.GAME_PREFIX + "/" + routes_1.ROUTE_PATH.LOGIN);
	                                break;
	                            default: throw new Error();
	                        }
	                        return [3 /*break*/, 3];
	                    case 2:
	                        error_1 = _a.sent();
	                        return [3 /*break*/, 3];
	                    case 3: throw new Error('redirected');
	                }
	            });
	        });
	    };
	    GamePage.prototype.setUpPage = function (manager) {
	    };
	    GamePage.prototype.getInitDataActionImp = function (props) { };
	    GamePage.prototype.componentDidMount = function () {
	        _super.prototype.componentDidMount.call(this);
	    };
	    GamePage.prototype.render = function () {
	        return (React.createElement("div", null, this.props.children));
	    };
	    return GamePage;
	}(lib_1.BaseComponent));
	var selector = function () { return ({}); };
	module.exports = react_redux_1.connect(selector)(GamePage);


/***/ },

/***/ 394:
/*!******************************!*\
  !*** ./src/const/request.ts ***!
  \******************************/
/***/ function(module, exports) {

	"use strict";
	exports.__esModule = true;
	var PREFIX = '/wt2';
	var REQEUST = {
	    IS_USER: PREFIX + "/user/isUser",
	    CREATE_USER: PREFIX + "/user/create",
	    CREDIT_GET_MY_CARDS: PREFIX + "/credit/myCards",
	    UPLOAD: PREFIX + "/credit/upload",
	    GET_CURRENT_COLLECTED_UP_COUNT: PREFIX + "/credit/getTotalCollectedUp",
	    WHERE_SHOULD_I_GO: PREFIX + "/user/locationCurrentState",
	    CREATE_COUPON: PREFIX + "/coupon/create",
	    GET_COUPOM: PREFIX + "/coupon/get",
	    CONSUME_COUPON: PREFIX + "/coupon/useCoupon",
	    ROLL: PREFIX + "/creditCode/roll",
	    GET_ROLL: PREFIX + "/creditCode/get",
	    SHARE_CARD: PREFIX + "/credit/shareForCreditCard",
	    GET_GIFT_LEFT_COUNTS: PREFIX + "/coupon/getTotalGiftInfo"
	};
	exports["default"] = REQEUST;


/***/ }

});
//# sourceMappingURL=10.js.map