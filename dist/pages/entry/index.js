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
var routes_1 = require("../../routes");
var request_1 = require("../../const/request");
var wechat_sdk_setup_1 = require("../../utils/wechat-sdk-setup");
var style = _importLess('./index', __dirname);
var Index = (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            gameProtocolModalShow: false
        };
        return _this;
    }
    Index.prototype.interceptor = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Index.prototype.setUpPage = function (manager) {
    };
    Index.prototype.getInitDataActionImp = function (props) {
    };
    Index.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        _wechatSDKSetup();
        wechat_sdk_setup_1.pageSettings();
    };
    Index.prototype.handleShowGameProtocolModal = function () {
        this.setState({
            gameProtocolModalShow: true
        });
    };
    Index.prototype.handleHideGameProtocolModal = function () {
        this.setState({
            gameProtocolModalShow: false
        });
    };
    Index.prototype.handleStartGame = function () {
        _http.post(request_1["default"].CREATE_USER, { openid: _storage.get('openid') })
            .then(function () {
            location.href = "/" + routes_1.ROUTE_PATH.GAME_PREFIX + "/" + routes_1.ROUTE_PATH.HOME;
        })["catch"](function (err) {
            location.href = "/" + routes_1.ROUTE_PATH.GAME_PREFIX + "/" + routes_1.ROUTE_PATH.HOME;
        });
    };
    Index.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("style", { dangerouslySetInnerHTML: { __html: style } }),
            React.createElement("div", { id: "page-entry", style: { height: this.state.bodyHeight, backgroundImage: "url(\"" + ret(__IMAGE_STATIC_PATH__ + '/entrance_bg.png') + "\")" } },
                React.createElement("img", { id: "title", src: ret(__IMAGE_STATIC_PATH__ + "/entrance_title.png"), alt: "" }),
                React.createElement("div", { id: "bottom-section" },
                    React.createElement("img", { onClick: this.handleStartGame.bind(this), id: "start-button", src: ret(__IMAGE_STATIC_PATH__ + "/entrance_start_button.png"), alt: "" }),
                    React.createElement("p", { id: "notice", onClick: this.handleShowGameProtocolModal.bind(this) },
                        "\u70B9\u51FB\u300E\u5F00\u59CB\u96C6\u5361\u300F\u4EE3\u8868\u60A8\u540C\u610F",
                        React.createElement("span", { className: "highlight" }, "\u6D3B\u52A8\u534F\u8BAE"))),
                React.createElement("div", { id: "game-protocol-modal", "data-show": this.state.gameProtocolModalShow },
                    React.createElement("div", { id: "text" },
                        "\u672C\u6B21\u6D3B\u52A8\u4E3B\u529E\u5355\u4F4D\u4E3A\uFF1A\u5357\u4EAC\u5B66\u800C\u601D\u6559\u80B2\u4E13\u4FEE\u5B66\u6821\u3002 ",
                        React.createElement("br", null),
                        "\u6E38\u620F\u8FC7\u7A0B\u4E2D\u5982\u53D1\u751F\u7A81\u53D1\u4E8B\u4EF6\uFF0C\u5BFC\u81F4\u6E38\u620F\u6682\u505C\u6216\u65E0\u6CD5\u7EE7\u7EED\uFF0C\u4E3B\u529E\u5355\u4F4D\u6709\u6743\u4E2D\u65AD\u6216\u7EC8\u6B62\u6E38\u620F\u3002",
                        React.createElement("br", null),
                        "\u5BF9\u4E8E\u901A\u8FC7\u4E0D\u6B63\u5F53\u884C\u4E3A\u83B7\u53D6\u6E38\u620F\u5956\u54C1\u7684\u60C5\u51B5\uFF0C\u4E3B\u529E\u65B9\u6709\u6743\u5220\u9664\u76F8\u5E94\u6570\u636E\u6216\u7981\u6B62\u76F8\u5173\u884C\u4E3A\u3002",
                        React.createElement("br", null),
                        "\u4E3B\u529E\u5355\u4F4D\u5728\u6CD5\u5F8B\u5141\u8BB8\u7684\u8303\u56F4\u5185\u62E5\u6709\u6D3B\u52A8\u89E3\u91CA\u6743\u3002"),
                    React.createElement("img", { onClick: this.handleHideGameProtocolModal.bind(this), src: ret(__IMAGE_STATIC_PATH__ + "/entrance_close_button.png"), alt: "", id: "close-button" })))));
    };
    return Index;
}(lib_1.BaseComponent));
var selector = function () { return ({}); };
module.exports = react_redux_1.connect(selector)(Index);
