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
var anim_1 = require("../../utils/anim");
var request_1 = require("../../const/request");
var wechat_sdk_setup_1 = require("../../utils/wechat-sdk-setup");
var ROLL_ANIM_DURATION = 1000;
var ROLL_STEP = 5;
var PRIZE_R = 100;
var PRIZES = [5, 6, 10, 8, 9, 15, 0, 0].map(function (item, index) {
    var rotate = index * 45;
    return {
        value: item,
        rotate: rotate + "deg",
        left: "0px",
        top: -PRIZE_R + "px"
    };
});
var style = _importLess('./index', __dirname);
var Roll = (function (_super) {
    __extends(Roll, _super);
    function Roll(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            rollDeg: 0,
            codes: [],
            rolling: false
        };
        return _this;
    }
    Roll.prototype.interceptor = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    Roll.prototype.setUpPage = function (manager) { };
    Roll.prototype.getInitDataActionImp = function (props) { };
    Roll.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        _wechatSDKSetup();
        wechat_sdk_setup_1.pageSettings();
        _http.get(request_1["default"].GET_ROLL)
            .then(function (data) {
            _this.setState({
                codes: data.credit_code
            });
        });
    };
    Roll.prototype.startRoll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var resultDeg, result, error_1, codeValue, _i, PRIZES_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.state.rolling)
                            return [2 /*return*/];
                        this.setState({
                            rolling: true
                        });
                        resultDeg = -1;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _http.post(request_1["default"].ROLL, {})];
                    case 2:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        alert('抱歉>_<您已经抽过奖了');
                        return [2 /*return*/];
                    case 4:
                        codeValue = result.credit_code.length * 5;
                        for (_i = 0, PRIZES_1 = PRIZES; _i < PRIZES_1.length; _i++) {
                            i = PRIZES_1[_i];
                            if (i.value === codeValue) {
                                resultDeg = (360 - parseInt(i.rotate, 10)) % 360;
                                break;
                            }
                        }
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var startTimestamp = new Date().valueOf();
                                var draw = function () {
                                    var now = new Date().valueOf();
                                    if (!(now - startTimestamp > ROLL_ANIM_DURATION && resultDeg !== -1 && resultDeg === _this.state.rollDeg)) {
                                        _this.setState({
                                            rollDeg: (_this.state.rollDeg + ROLL_STEP) % 360
                                        });
                                        anim_1.requestAnimationFrame(draw);
                                    }
                                    else {
                                        resolve();
                                    }
                                };
                                anim_1.requestAnimationFrame(draw);
                            })];
                    case 5:
                        _a.sent();
                        if (codeValue === 0) {
                            alert('很遗憾，您没有抽到积分');
                        }
                        else {
                            alert("\u606D\u559C\u60A8\u83B7\u5F97\u4EF7\u503C" + codeValue + "\u7684\u79EF\u5206\u5151\u6362\u7801");
                        }
                        this.setState({
                            codes: result.credit_code,
                            rolling: false
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Roll.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("style", { dangerouslySetInnerHTML: { __html: style } }),
            React.createElement("div", { id: "page-roll", style: { height: this.state.bodyHeight < 649 ? 649 : this.state.bodyHeight, backgroundImage: "url(\"" + ret(__IMAGE_STATIC_PATH__ + '/gamehome_bg.png') + "\")" } },
                React.createElement("img", { src: ret(__IMAGE_STATIC_PATH__ + "/roll_cloud.png"), alt: "", id: "cloud" }),
                React.createElement("img", { src: ret(__IMAGE_STATIC_PATH__ + "/roll_title.png"), alt: "", id: "title" }),
                React.createElement("div", { id: "roll-game-section" },
                    React.createElement("div", { id: "roulette-section", style: { transform: "rotate3d(0, 0, 1, " + (this.state.rollDeg + 2) + "deg)" } },
                        PRIZES.map(function (item, index) { return (React.createElement("div", { key: index, className: "prize", style: { transform: "rotate(" + item.rotate + ") translate(" + item.left + ", " + item.top + ")" } },
                            item.value,
                            "\u79EF\u5206")); }),
                        React.createElement("img", { src: ret(__IMAGE_STATIC_PATH__ + "/roll_roulette.png"), alt: "", id: "roulette" })),
                    React.createElement("img", { onClick: this.startRoll.bind(this), src: ret(__IMAGE_STATIC_PATH__ + "/roll_start_button.png"), alt: "", id: "start-button" })),
                this.state.codes.length !== 0 ?
                    React.createElement("div", { className: "info-section" }, this.state.codes.map(function (item, index) { return (React.createElement("div", { className: "code", key: index }, item)); })) : '',
                React.createElement("div", { className: "info-section" },
                    "\u62BD\u5956\u79EF\u5206\u7801\u8BF4\u660E\uFF1A ",
                    React.createElement("br", null),
                    "\u767B\u5165\u5357\u4EAC\u5B66\u800C\u601D\u5B98\u5FAE\uFF0C\u70B9\u51FB\u83DC\u5355\u680F\u201C\u793C\u7269\u5546\u57CE\u201D\uFF0C\u624B\u673A\u6CE8\u518C\u5B66\u800C\u601D\u4E50\u56ED\u540E\uFF0C\u5145\u503C16\u4F4D\u79EF\u5206\u7801\u5373\u53EF\u5151\u6362\u793C\u7269\uFF0C\u4E0B\u5355\u540E\u5373\u53EF\u5230\u76F8\u5E94\u670D\u52A1\u4E2D\u5FC3\u9886\u53D6\u3002"))));
    };
    return Roll;
}(lib_1.BaseComponent));
var selector = function () { return ({}); };
module.exports = react_redux_1.connect(selector)(Roll);
