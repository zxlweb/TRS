webpackJsonp([7,8],{

/***/ 413:
/*!**********************************!*\
  !*** ./src/pages/cert/index.tsx ***!
  \**********************************/
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
	var const_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../const\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var request_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../const/request\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var wechat_sdk_setup_1 = __webpack_require__(/*! ../../utils/wechat-sdk-setup */ 410);
	var querystring = __webpack_require__(/*! query-string */ 80);
	var style = __webpack_require__(/*! ./index.less */ 414);
	var Certificate = (function (_super) {
	    __extends(Certificate, _super);
	    function Certificate(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            giftType: 0,
	            shareVersion: false,
	            showShareTip: false
	        };
	        return _this;
	    }
	    Certificate.prototype.interceptor = function (req, res, next) {
	        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
	            return [2 /*return*/];
	        }); });
	    };
	    Certificate.prototype.setUpPage = function (manager) { };
	    Certificate.prototype.getInitDataActionImp = function (props) { };
	    Certificate.prototype.componentDidMount = function () {
	        var _this = this;
	        _super.prototype.componentDidMount.call(this);
	        var query = querystring.parse(location.search);
	        if (_storage.get('openid') !== query.openid) {
	            this.setState({
	                shareVersion: true
	            });
	        }
	        _wechatSDKSetup();
	        wx.ready(function () {
	            var title = '我在『学而思西游集卡』活动中集齐了全套卡片！';
	            wx.onMenuShareTimeline({
	                title: title,
	                link: location.href,
	                imgUrl: const_1.WECHAT_SHARE_OPTIONS.imgUrl
	            });
	            wx.onMenuShareAppMessage({
	                title: title,
	                link: location.href,
	                imgUrl: const_1.WECHAT_SHARE_OPTIONS.imgUrl,
	                desc: ''
	            });
	            wx.hideMenuItems({
	                menuList: wechat_sdk_setup_1.HIDE_MENU_LIST
	            });
	        });
	        _http.setParam('token', query.openid);
	        _http.get(request_1["default"].GET_COUPOM)
	            .then(function (data) {
	            var coupon = data.coupon[0];
	            _this.setState({
	                giftType: coupon.type
	            });
	        });
	    };
	    Certificate.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", null,
	            React.createElement("style", { dangerouslySetInnerHTML: { __html: style } }),
	            React.createElement("div", { id: "page-cert", style: { height: this.state.bodyHeight < 649 ? 649 : this.state.bodyHeight, backgroundImage: "url(\"" + ret(__IMAGE_STATIC_PATH__ + '/cert_bg.png') + "\")" } },
	                React.createElement("div", { id: "intro-text" },
	                    "\u6211\u5728\u300E\u5B66\u800C\u601D\u897F\u6E38\u96C6\u5361\u300F\u6D3B\u52A8\u4E2D",
	                    React.createElement("br", null),
	                    "\u6210\u529F\u96C6\u9F50\u6240\u6709\u5361\u7247"),
	                React.createElement("div", { id: "award-text" },
	                    "\u83B7\u5F97\u300E",
	                    const_1.GIFTS[this.state.giftType - 1] ? const_1.GIFTS[this.state.giftType - 1].title : '',
	                    "\u300F\u4E00\u4EFD"),
	                React.createElement("img", { src: const_1.GIFT_PREFIX + "/" + this.state.giftType + ".png", alt: "", id: "award-img" }),
	                this.state.shareVersion ?
	                    React.createElement("img", { onClick: function (e) { return location.href = const_1.WECHAT_SHARE_OPTIONS.link; }, src: ret(__IMAGE_STATIC_PATH__ + "/cert_join_button.png"), alt: "", id: "action-button" }) :
	                    React.createElement("img", { onClick: function (e) { return _this.setState({ showShareTip: true }); }, src: ret(__IMAGE_STATIC_PATH__ + "/cert_share_button.png"), alt: "", id: "action-button" }),
	                this.state.showShareTip ?
	                    React.createElement("div", { id: "share-tip-section", onClick: function (e) { return _this.setState({ showShareTip: false }); } },
	                        React.createElement("img", { id: "instruction", src: ret(__IMAGE_STATIC_PATH__ + "/share_instruction.png"), alt: "" })) : '')));
	    };
	    return Certificate;
	}(lib_1.BaseComponent));
	var selector = function () { return ({}); };
	module.exports = react_redux_1.connect(selector)(Certificate);


/***/ },

/***/ 414:
/*!***********************************!*\
  !*** ./src/pages/cert/index.less ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(/*! !../../../~/css-loader!../../../~/postcss-loader!../../../~/less-loader!../../../~/xnl-less-base-import-loader!./index.less */ 415);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },

/***/ 415:
/*!*********************************************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/less-loader!./~/xnl-less-base-import-loader!./src/pages/cert/index.less ***!
  \*********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 391)();
	// imports
	
	
	// module
	exports.push([module.id, "#page-cert{padding-top:40%;background-size:cover;background-position:50%}#page-cert #intro-text{margin-bottom:30px;color:#ef7d3e;font-size:14rem;text-align:center;line-height:24px}#page-cert #award-text{margin-bottom:18px;color:#d65124;font-size:18rem;text-align:center;font-weight:700}#page-cert #award-img{display:block;width:40%;margin:auto;border:4px solid #f6e652}#page-cert #action-button{display:block;width:80%;margin:42px auto 0}#page-cert #share-tip-section{position:fixed;top:0;right:0;bottom:0;left:0;z-index:3000;background-color:rgba(0,0,0,.9)}#page-cert #share-tip-section #instruction{position:absolute;top:0;right:0;bottom:auto;left:auto;display:block;width:50%}", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=7.js.map