webpackJsonp([3,4],{

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

/***/ 397:
/*!************************************!*\
  !*** ./src/pages/header/index.tsx ***!
  \************************************/
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
	exports.__esModule = true;
	var React = __webpack_require__(/*! react */ 6);
	var style = __webpack_require__(/*! ./index.less */ 398);
	var Header = (function (_super) {
	    __extends(Header, _super);
	    function Header() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Header.prototype.render = function () {
	        return (React.createElement("div", null,
	            React.createElement("style", { dangerouslySetInnerHTML: { __html: style } }),
	            React.createElement("div", { className: "s-header" },
	                React.createElement("div", { className: "ex-header-logo" },
	                    React.createElement("span", { className: "ex-header-logo-text" }, "\u5B66\u800C\u601DTRS")))));
	    };
	    return Header;
	}(React.Component));
	exports["default"] = Header;


/***/ },

/***/ 398:
/*!*************************************!*\
  !*** ./src/pages/header/index.less ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(/*! !../../../~/css-loader!../../../~/postcss-loader!../../../~/less-loader!../../../~/xnl-less-base-import-loader!./index.less */ 399);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },

/***/ 399:
/*!***********************************************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/less-loader!./~/xnl-less-base-import-loader!./src/pages/header/index.less ***!
  \***********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 390)();
	// imports
	
	
	// module
	exports.push([module.id, ".s-header{display:-ms-flexbox;display:-webkit-box;display:flex;height:3rem;z-index:999;background:#2db7f5;box-sizing:border-box}.ex-header-logo,.s-header{width:100%}.ex-header-logo-text{color:#fff;font-size:1.2rem;font-weight:300;line-height:3rem}", ""]);
	
	// exports


/***/ },

/***/ 402:
/*!****************************************!*\
  !*** ./src/pages/reportdata/index.tsx ***!
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
	var Xtable_1 = __webpack_require__(/*! ./Xtable */ 403);
	var Summarize_1 = __webpack_require__(/*! ./Summarize */ 404);
	var RankChart_1 = __webpack_require__(/*! ./RankChart */ 405);
	var header_1 = __webpack_require__(/*! ../header */ 397);
	var style = __webpack_require__(/*! ./index.less */ 406);
	var Reportdata = (function (_super) {
	    __extends(Reportdata, _super);
	    function Reportdata(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            dataAll: {
	                ad: {
	                    img: "",
	                    redirect_url: ""
	                },
	                basic_info: {
	                    user_total_score: 0,
	                    exam_date: "",
	                    exam_title: "",
	                    exam_total_people: 0,
	                    exam_total_score: 0,
	                    user_name: "",
	                    user_prize: "",
	                    user_rank: 0
	                },
	                knowledge_point_info: {
	                    conclusion: [],
	                    overall: [],
	                    personal: []
	                },
	                overall_info: {
	                    conclusion: "",
	                    high_percent: 0,
	                    highest_score: 0,
	                    mean_percent: 0,
	                    mean_score: 0,
	                    score_segments: [],
	                    statement: "",
	                    user_percent: 0
	                },
	                question_detail_info: [],
	                question_type_info: {
	                    conclusion: [],
	                    overall: [],
	                    personal: []
	                },
	                teacher_review: {
	                    review_knowledge: "", review_overall: "", review_question_type: "", teacher_head_icon: "", teacher_name: ""
	                },
	                teacher_oriented_info: {
	                    flag: false,
	                    high_percent: 0,
	                    mean_percent: 0,
	                    total_people: 0,
	                    user_percent: 0,
	                    user_rank: 0,
	                    teacher_name: ""
	                }
	            }
	        };
	        return _this;
	    }
	    Reportdata.prototype.interceptor = function (req, res, next) {
	        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
	            return [2 /*return*/];
	        }); });
	    };
	    Reportdata.prototype.setUpPage = function (manager) {
	        manager.setTag('title', "" + (this.state.dataAll.basic_info.user_name + "在" + this.state.dataAll.basic_info.exam_title + "中战胜了" + (this.state.dataAll.teacher_oriented_info.user_percent * 100) + "%的同学"));
	    };
	    Reportdata.prototype.getInitDataActionImp = function (props) { };
	    Reportdata.prototype.componentDidMount = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var dispatch, response, ad, basic_info, knowledge_point_info, overall_info, question_detail_info, question_type_info, teacher_review, teacher_oriented_info, error_1, Highcharts, Chart;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        _super.prototype.componentDidMount.call(this);
	                        dispatch = this.props.dispatch;
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, , 4]);
	                        return [4 /*yield*/, _http.post(request_1["default"].REPORTDATA, { sid: this.props.params.sid, eid: this.props.params.eid })];
	                    case 2:
	                        response = _a.sent();
	                        console.log(response);
	                        ad = response.ad, basic_info = response.basic_info, knowledge_point_info = response.knowledge_point_info, overall_info = response.overall_info, question_detail_info = response.question_detail_info, question_type_info = response.question_type_info, teacher_review = response.teacher_review, teacher_oriented_info = response.teacher_oriented_info;
	                        this.setState({
	                            dataAll: {
	                                ad: ad,
	                                basic_info: basic_info,
	                                knowledge_point_info: knowledge_point_info,
	                                overall_info: overall_info,
	                                question_detail_info: question_detail_info,
	                                question_type_info: question_type_info,
	                                teacher_review: teacher_review,
	                                teacher_oriented_info: teacher_oriented_info
	                            }
	                        });
	                        return [3 /*break*/, 4];
	                    case 3:
	                        error_1 = _a.sent();
	                        return [3 /*break*/, 4];
	                    case 4:
	                        Highcharts = __webpack_require__(/*! highcharts */ 408);
	                        this.PaintContainer(Highcharts);
	                        Chart = __webpack_require__(/*! chart.js */ 409);
	                        this.Paintkpcontainer(Highcharts, Chart);
	                        this.Paintspcontainer(Highcharts, Chart);
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    Reportdata.prototype.PaintContainer = function (Highcharts) {
	        var xData = this.state.dataAll.overall_info;
	        var xArr = [], yArr = [], zArr = [], myscore = this.state.dataAll.basic_info.user_total_score;
	        xData.score_segments.forEach(function (score) {
	            xArr.push(score.start_point + '-' + score.end_point);
	            if ((myscore * 1 <= score.end_point * 1) && (myscore * 1 > score.start_point * 1)) {
	                yArr.push({ y: score.count, color: '#FF6384' });
	                zArr.push({ y: score.count + 20 });
	            }
	            else {
	                yArr.push(score.count);
	                zArr.push(score.count + 20);
	            }
	        });
	        Highcharts.chart('container', {
	            title: {
	                text: ''
	            },
	            credits: {
	                enabled: false
	            },
	            xAxis: {
	                categories: xArr,
	                title: {
	                    text: '分数段'
	                }
	            },
	            yAxis: [{
	                    labels: {
	                        format: '{value}人',
	                        style: {
	                            color: Highcharts.getOptions().colors[0]
	                        }
	                    },
	                    title: {
	                        text: '人数',
	                        style: {
	                            color: Highcharts.getOptions().colors[1]
	                        }
	                    }
	                }, {
	                    labels: {
	                        format: '{value}人',
	                        style: {
	                            color: Highcharts.getOptions().colors[0]
	                        }
	                    },
	                    title: {
	                        text: '',
	                        style: {
	                            color: Highcharts.getOptions().colors[1]
	                        }
	                    }
	                }],
	            labels: {
	                items: [{
	                        html: '',
	                        style: {
	                            left: '100px',
	                            top: '18px',
	                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
	                        }
	                    }]
	            },
	            series: [{
	                    type: 'column',
	                    name: '各分数段人数',
	                    data: yArr
	                }, {
	                    type: 'spline',
	                    name: '分数段人数',
	                    data: zArr,
	                    marker: {
	                        lineWidth: 2,
	                        lineColor: Highcharts.getOptions().colors[3],
	                        fillColor: 'white'
	                    }
	                }],
	            tooltip: {
	                valueSuffix: '人',
	                formatter: function () {
	                    var x = '<b>' + this.x + '</b><br/>';
	                    if (this.series.name === "分数段人数") {
	                        return x + this.series.name + ":" + (this.y - 20);
	                    }
	                }
	            }
	        });
	    };
	    Reportdata.prototype.Paintkpcontainer = function (Highcharts, Chart) {
	        var _this = this;
	        var kpData = [];
	        var temArr = [];
	        var radarLable = [];
	        var radarValuemy = [];
	        var radarValueall = [];
	        var ctx = this.refs.kRadarChart;
	        this.state.dataAll.knowledge_point_info.overall.forEach(function (ele, index) {
	            temArr = [];
	            temArr.push(ele.kpid);
	            temArr.push(ele.total_value);
	            kpData.push(temArr);
	            radarLable.push(ele.kpid);
	            radarValueall.push(ele.mean_sr);
	            radarValuemy.push(_this.state.dataAll.knowledge_point_info.personal[index].score_rate);
	        });
	        Highcharts.chart('kpcontainer', {
	            chart: {
	                plotBackgroundColor: null,
	                plotBorderWidth: null,
	                plotShadow: false
	            },
	            credits: {
	                enabled: false
	            },
	            title: {
	                text: '知识点分数比重分布'
	            },
	            tooltip: {
	                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	            },
	            series: [{
	                    type: 'pie',
	                    name: '知识点分数比重分布',
	                    data: kpData
	                }]
	        });
	        var myRadarChart = new Chart(ctx, {
	            type: 'radar',
	            data: {
	                labels: radarLable,
	                datasets: [
	                    {
	                        label: "平均正确率",
	                        backgroundColor: "rgba(179,181,198,0.2)",
	                        borderColor: "rgba(179,181,198,1)",
	                        pointBackgroundColor: "rgba(179,181,198,1)",
	                        pointBorderColor: "#fff",
	                        pointHoverBackgroundColor: "#fff",
	                        pointHoverBorderColor: "rgba(179,181,198,1)",
	                        data: radarValueall
	                    },
	                    {
	                        label: "个人正确率",
	                        backgroundColor: "rgba(255,99,132,0.2)",
	                        borderColor: "rgba(255,99,132,1)",
	                        pointBackgroundColor: "rgba(255,99,132,1)",
	                        pointBorderColor: "#fff",
	                        pointHoverBackgroundColor: "#fff",
	                        pointHoverBorderColor: "rgba(255,99,132,1)",
	                        data: radarValuemy
	                    }
	                ]
	            }
	        });
	    };
	    Reportdata.prototype.Paintspcontainer = function (Highcharts, Chart) {
	        var _this = this;
	        var kpData = [];
	        var temArr = [];
	        var radarLable = [];
	        var radarValuemy = [];
	        var radarValueall = [];
	        var ctx = this.refs.SocreRadarChart;
	        this.state.dataAll.question_type_info.overall.forEach(function (ele, index) {
	            temArr = [];
	            temArr.push(ele.tyid);
	            temArr.push(ele.total_value);
	            kpData.push(temArr);
	            radarLable.push(ele.tyid);
	            radarValueall.push(ele.mean_sr);
	            radarValuemy.push(_this.state.dataAll.question_type_info.personal[index].score_rate);
	        });
	        Highcharts.chart('spcontainer', {
	            chart: {
	                plotBackgroundColor: null,
	                plotBorderWidth: null,
	                plotShadow: false
	            },
	            credits: {
	                enabled: false
	            },
	            title: {
	                text: '题型分数比重分布'
	            },
	            tooltip: {
	                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	            },
	            series: [{
	                    type: 'pie',
	                    name: '题型分数比重分布',
	                    data: kpData
	                }]
	        });
	        var myRadarChart = new Chart(ctx, {
	            type: 'radar',
	            data: {
	                labels: radarLable,
	                options: {
	                    scaleOverride: true,
	                    scaleStartValue: 0,
	                    scale: {
	                        reverse: true,
	                        ticks: {
	                            beginAtZero: true
	                        }
	                    }
	                },
	                datasets: [
	                    {
	                        label: "平均正确率",
	                        backgroundColor: "rgba(179,181,198,0.2)",
	                        borderColor: "rgba(179,181,198,1)",
	                        pointBackgroundColor: "rgba(179,181,198,1)",
	                        pointBorderColor: "#fff",
	                        pointHoverBackgroundColor: "#fff",
	                        pointHoverBorderColor: "rgba(179,181,198,1)",
	                        data: radarValueall
	                    },
	                    {
	                        label: "个人正确率",
	                        backgroundColor: "rgba(255,99,132,0.2)",
	                        borderColor: "rgba(255,99,132,1)",
	                        pointBackgroundColor: "rgba(255,99,132,1)",
	                        pointBorderColor: "#fff",
	                        pointHoverBackgroundColor: "#fff",
	                        pointHoverBorderColor: "rgba(255,99,132,1)",
	                        data: radarValuemy
	                    }
	                ]
	            }
	        });
	    };
	    Reportdata.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", { id: "app-report" },
	            React.createElement("style", { dangerouslySetInnerHTML: { __html: style } }),
	            React.createElement(header_1["default"], null),
	            React.createElement("div", { className: "report-container" },
	                React.createElement("div", { className: "basic-info-sec" },
	                    React.createElement("div", { className: "usr-info" },
	                        "\u4F60\u597D\uFF0C",
	                        this.state.dataAll.basic_info.user_name,
	                        "\u6B22\u8FCE\u6765\u5230TRS"),
	                    React.createElement("div", { className: "info-sec" },
	                        React.createElement("div", { className: "title" }, "\u8003\u8BD5\u540D\u79F0\uFF1A"),
	                        React.createElement("div", { className: "detail" }, this.state.dataAll.basic_info.exam_title)),
	                    React.createElement("div", { className: "info-sec" },
	                        React.createElement("div", { className: "title" }, "\u8003\u8BD5\u65F6\u95F4\uFF1A"),
	                        React.createElement("div", { className: "detail" }, this.state.dataAll.basic_info.exam_date)),
	                    React.createElement("div", { className: "info-sec" },
	                        React.createElement("div", { className: "title" }, "\u4E2A\u4EBA\u5206\u6570\uFF1A"),
	                        React.createElement("div", { className: "detail" }, this.state.dataAll.basic_info.user_total_score)),
	                    React.createElement("div", { className: "info-sec" },
	                        React.createElement("div", { className: "title" }, "\u4E2A\u4EBA\u6392\u540D\uFF1A"),
	                        React.createElement("div", { className: "detail" }, this.state.dataAll.basic_info.user_rank)),
	                    React.createElement("div", { className: "info-sec" },
	                        React.createElement("div", { className: "title" }, "\u4E2A\u4EBA\u5956\u9879\uFF1A"),
	                        React.createElement("div", { className: "detail" }, this.state.dataAll.basic_info.user_prize))),
	                React.createElement("div", { className: "overall-report report-sec" },
	                    React.createElement("div", { className: "r-title" }, "\u8BD5\u5377\u8BF4\u660E"),
	                    React.createElement("div", { className: "description" },
	                        React.createElement("div", { className: "des-detail" }, this.state.dataAll.overall_info.statement)),
	                    React.createElement("div", { className: "r-title" }, "\u5E74\u7EA7\u603B\u4F53\u60C5\u51B5"),
	                    React.createElement("div", { className: "xcontainer" },
	                        React.createElement("div", null,
	                            React.createElement("i", { className: "demo" }),
	                            "\u4F60\u6240\u5728\u7684\u5206\u6570\u6BB5"),
	                        React.createElement("div", { id: "container" })),
	                    React.createElement("div", { className: "rcontainer" },
	                        React.createElement("div", { className: "score-des" },
	                            React.createElement("div", { className: "average-score score-des-detail" },
	                                React.createElement("div", { className: "scroe-title" }, "\u672C\u6B21\u8003\u8BD5\u5E73\u5747\u5206"),
	                                React.createElement("div", { className: "score-sub" }, this.state.dataAll.overall_info.mean_score)),
	                            React.createElement("div", { className: "highest-score score-des-detail" },
	                                React.createElement("div", { className: "scroe-title" }, "\u672C\u6B21\u8003\u8BD5\u6700\u9AD8\u5206"),
	                                React.createElement("div", { className: "score-sub" }, this.state.dataAll.overall_info.highest_score)),
	                            React.createElement(RankChart_1["default"], { title: "总体排名分布", msg: this.state.dataAll.overall_info }),
	                            React.createElement(RankChart_1["default"], { title: "同门排名分布", msg: this.state.dataAll.teacher_oriented_info }))),
	                    React.createElement(Summarize_1["default"], { item: this.state.dataAll.overall_info.conclusion })),
	                React.createElement("div", { className: "knowledge-report report-sec" },
	                    React.createElement("div", { className: "rtitle" }, "\u4E2A\u4EBA\u77E5\u8BC6\u70B9\u638C\u63E1\u60C5\u51B5"),
	                    React.createElement("div", { className: "xcontainer" },
	                        React.createElement("div", { id: "kpcontainer" })),
	                    React.createElement("div", { className: "xcontainer" },
	                        "\u4E2A\u4EBA\u80FD\u529B\u5206\u5E03",
	                        React.createElement("canvas", { id: "kRadarChart", width: "300", ref: "kRadarChart", height: "300" })),
	                    React.createElement("div", { className: "xcontainer" },
	                        React.createElement("div", { className: "table-title" }, "\u77E5\u8BC6\u70B9\u8BE6\u60C5:"),
	                        React.createElement(Xtable_1["default"], { p: this.state.dataAll.knowledge_point_info.personal, o: this.state.dataAll.knowledge_point_info.overall })),
	                    React.createElement(Summarize_1["default"], { item: this.state.dataAll.knowledge_point_info.conclusion })),
	                React.createElement("div", { className: "score-report report-sec" },
	                    React.createElement("div", { className: "r-title" }, "\u9898\u578B\u5206\u6570\u6BD4\u91CD\u5206\u5E03"),
	                    React.createElement("div", { className: "xcontainer" },
	                        React.createElement("div", { id: "spcontainer" })),
	                    React.createElement("div", { className: "xcontainer" },
	                        "\u9898\u578B\u5F97\u5206\u5206\u5E03",
	                        React.createElement("canvas", { id: "SocreRadarChart", width: "706", height: "706", ref: "SocreRadarChart" })),
	                    React.createElement("div", { className: "xcontainer" },
	                        React.createElement("div", { className: "table-title" }, "\u9898\u578B\u8BE6\u60C5:"),
	                        React.createElement(Xtable_1["default"], { p: this.state.dataAll.question_type_info.personal, o: this.state.dataAll.question_type_info.overall })),
	                    React.createElement(Summarize_1["default"], { item: this.state.dataAll.question_type_info.conclusion })),
	                React.createElement("div", null,
	                    React.createElement("div", { className: "rtitle" }, "\u4E2A\u4EBA\u5C0F\u5206\u5206\u6790"),
	                    React.createElement("table", { className: "rd-table" },
	                        React.createElement("thead", { className: "rd-table-thead" },
	                            React.createElement("tr", { className: "rd-table-th" },
	                                React.createElement("td", { className: "rd-table-td" }, "\u9898\u53F7"),
	                                React.createElement("td", { className: "rd-table-td" }, "\u5206\u503C"),
	                                React.createElement("td", { className: "rd-table-td" }, "\u4F60\u7684\u5F97\u5206"),
	                                React.createElement("td", { className: "rd-table-td" }, "\u5E73\u5747\u5F97\u5206"))),
	                        React.createElement("tbody", null, (function () {
	                            var trs = [];
	                            var question = _this.state.dataAll.question_detail_info;
	                            for (var i = 0; i < question.length; i++) {
	                                trs.push(React.createElement("tr", { className: "rd-table-tr", key: i },
	                                    React.createElement("td", { className: "rd-table-td" }, question[i].index),
	                                    React.createElement("td", { className: "rd-table-td" }, question[i].value),
	                                    React.createElement("td", { className: "rd-table-td positive" }, question[i].user_score),
	                                    React.createElement("td", { className: "rd-table-td" }, question[i].mean_score.toFixed(2))));
	                            }
	                            return trs;
	                        })()))),
	                React.createElement("div", { className: "t-comment" },
	                    React.createElement("div", { className: "t-title" }, "\u6559\u5E08\u70B9\u8BC4"),
	                    React.createElement("div", { className: "comment-wrapper" },
	                        React.createElement("div", { className: "teacher" },
	                            React.createElement("div", { className: "teacher-avatar" },
	                                React.createElement("img", { src: this.state.dataAll.teacher_review.teacher_head_icon, alt: "" }),
	                                " "),
	                            React.createElement("div", { className: "teacher-name" }, this.state.dataAll.teacher_oriented_info.teacher_name)),
	                        React.createElement("div", { className: "comment" },
	                            React.createElement("i", { className: "quot" },
	                                React.createElement("img", { src: ret(__IMAGE_STATIC_PATH__ + "/quot.png") })),
	                            React.createElement("i", { className: "quot2" },
	                                React.createElement("img", { src: ret(__IMAGE_STATIC_PATH__ + "/quot2.png") })),
	                            React.createElement("div", null,
	                                React.createElement("div", null, this.state.dataAll.teacher_review.review_overall),
	                                React.createElement("div", null, this.state.dataAll.teacher_review.review_knowledge),
	                                React.createElement("div", null, this.state.dataAll.teacher_review.review_question_type))))),
	                React.createElement("div", { className: "ad" },
	                    React.createElement("a", { href: this.state.dataAll.ad.redirect_url },
	                        React.createElement("img", { src: this.state.dataAll.ad.img, alt: "" })))),
	            React.createElement("footer", null, "Copyright \u00A9 2017 \u5357\u4EAC\u5B66\u800C\u601D\u5E02\u573A\u90E8")));
	    };
	    return Reportdata;
	}(lib_1.BaseComponent));
	var selector = function () { return ({}); };
	module.exports = react_redux_1.connect(selector)(Reportdata);


/***/ },

/***/ 403:
/*!*****************************************!*\
  !*** ./src/pages/reportdata/Xtable.tsx ***!
  \*****************************************/
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
	exports.__esModule = true;
	var React = __webpack_require__(/*! react */ 6);
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


/***/ },

/***/ 404:
/*!********************************************!*\
  !*** ./src/pages/reportdata/Summarize.tsx ***!
  \********************************************/
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
	exports.__esModule = true;
	var React = __webpack_require__(/*! react */ 6);
	var Summarize = (function (_super) {
	    __extends(Summarize, _super);
	    function Summarize(props) {
	        return _super.call(this, props) || this;
	    }
	    Summarize.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", { className: "summarize" },
	            React.createElement("div", { className: "des-title" }, "\u603B\u7ED3\uFF1A"),
	            React.createElement("div", { className: "summarize-wrapper" }, (function () {
	                var trs = [], _item = _this.props.item;
	                if (_item instanceof Array) {
	                    for (var i = 0; i < _item.length; i++) {
	                        trs.push(React.createElement("div", { className: "sm-item", key: i },
	                            React.createElement("span", { className: "sm-title" },
	                                _item[i].key,
	                                ":"),
	                            _item[i].content));
	                    }
	                    return trs;
	                }
	                else {
	                    return (React.createElement("div", { className: "sm-item" }, _item));
	                }
	            })())));
	    };
	    return Summarize;
	}(React.Component));
	exports["default"] = Summarize;


/***/ },

/***/ 405:
/*!********************************************!*\
  !*** ./src/pages/reportdata/RankChart.tsx ***!
  \********************************************/
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
	exports.__esModule = true;
	var React = __webpack_require__(/*! react */ 6);
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


/***/ },

/***/ 406:
/*!*****************************************!*\
  !*** ./src/pages/reportdata/index.less ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(/*! !../../../~/css-loader!../../../~/postcss-loader!../../../~/less-loader!../../../~/xnl-less-base-import-loader!./index.less */ 407);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },

/***/ 407:
/*!***************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/less-loader!./~/xnl-less-base-import-loader!./src/pages/reportdata/index.less ***!
  \***************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 390)();
	// imports
	
	
	// module
	exports.push([module.id, ".report-container{margin:10px 10px 0;color:#666;border:1px solid #ddd;border-radius:4px;box-shadow:0 1px 0 #f2f4f5;background:#fff}.basic-info-sec{background:#fff}.info-sec{display:-ms-flexbox;display:-webkit-box;display:flex;height:35px;line-height:35px;font-size:14px;box-sizing:border-box;background:#f7fafc;border-bottom:2px solid #fff}.info-sec:last-child{border-bottom:none}.title{width:25%;text-align:right}.detail{width:74%;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.demo{display:inline-block;height:15px;width:30px;background:#ff6384}.score-des{background:#f7fafc}.score-des-detail{display:-webkit-box;display:-ms-flexbox;display:flex;height:40px;line-height:30px;box-sizing:border-box}.description,.score-des-detail{padding:3px 20px;border-bottom:2px solid #fff}.description{background:#fff}.scroe-title{border-right:2px solid #fff}.score-sub,.scroe-title{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:left}.score-sub{box-sizing:border-box;padding:0 5px}.des-title{border-bottom:2px solid #fff;height:30px}.des-detail,.des-title{text-align:left;line-height:30px}.des-detail{background:#f7fafc;padding:5px}.des-title,.r-title,.scroe-title{color:#000;font-weight:700}.r-title{background:#c9e5f5;height:35px;line-height:35px}.r-title,.xcontainer{margin:10px 0}h3{margin:0;margin-bottom:40px;color:#000;font-size:17px}.rankchart{height:40px;background:#eee;margin:0 auto;position:relative;width:80%;margin-bottom:18px}.rc{height:58px;position:absolute;bottom:-9px}.good-more{width:30%}.fair{border-right:2px solid #333}.good{right:0;border-left:2px solid #333}.your{border-right:2px solid #2db7f5}.subrc{height:40px;margin:9px 0}.fair .subrc{background:#ff6384}.good .subrc{background:#90ed7d}.av{right:-4px}.av,.gd{position:absolute;bottom:-20px;color:#000;font-size:13px}.gd{left:-4px}.yr{position:absolute;top:-20px;right:-24px;color:#2db7f5;font-weight:700}.rank-container{padding:20px 0}.subranktitle{color:#000;width:80%;text-align:center;margin:0 auto;position:relative;top:18px}.summarize{background:#fff;padding:3px 20px;text-align:left}.summarize-wrapper{padding:5px;background:#f7fafc;text-align:left}.comment-wrapper{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;-ms-flex-align:center;-webkit-box-align:center;align-items:center;padding-bottom:20px}.teacher{-ms-flex:1;-webkit-box-flex:1;flex:1;padding-left:15px;border-right:2px solid #fff;background:#fff}.comment,.teacher{box-sizing:border-box}.comment{-webkit-box-flex:3;-ms-flex:3;flex:3;min-height:100px;text-align:left;margin:6px 20px 3px;padding:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f7fafc;position:relative}.sm-title{font-weight:700;color:#2db7f5}.sm-item{padding:3px 0}.t-comment{background:#fff}.t-title{background:#c9e5f5;color:#000;height:35px;line-height:35px;margin:10px 0;font-weight:700;text-align:center}.teacher-avatar{height:100px;width:100px}img{max-width:100%}.quot{top:-5px;left:-15px}.quot,.quot2{position:absolute;display:inline-block;width:15px;height:15px}.quot2{right:-2px;bottom:-2px}.table-title{text-align:left;padding:0 20px;color:#000;font-weight:700}.rd-table-thead{background:#eff2f7}.rtitle{background:#c9e5f5;color:#000;font-weight:700;height:35px;line-height:35px;margin:10px 0}.rd-table{width:100%;max-width:100%;text-align:left;border-radius:6px;border-collapse:separate;border-spacing:0}.rd-table-th,.rd-table-tr{color:rgba(0,0,0,.870588);height:1.5rem;border-bottom:1px solid #e9e9e9}.rd-table-td{position:relative;text-align:left;text-align:center;padding:0 .5rem;font-size:.8rem}tbody .rd-table-td{background:#f7fafc}.positive{font-weight:700;color:#228b22}", ""]);
	
	// exports


/***/ },

/***/ 408:
/*!************************************!*\
  !*** ./~/highcharts/highcharts.js ***!
  \************************************/
/***/ function(module, exports) {

	/*
	 Highcharts JS v5.0.9 (2017-03-08)
	
	 (c) 2009-2016 Torstein Honsi
	
	 License: www.highcharts.com/license
	*/
	(function(I,a){"object"===typeof module&&module.exports?module.exports=I.document?a(I):a:I.Highcharts=a(I)})("undefined"!==typeof window?window:this,function(I){I=function(){var a=window,B=a.document,z=a.navigator&&a.navigator.userAgent||"",C=B&&B.createElementNS&&!!B.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,E=/(edge|msie|trident)/i.test(z)&&!window.opera,u=!C,h=/Firefox/.test(z),n=h&&4>parseInt(z.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",
	version:"5.0.9",deg2rad:2*Math.PI/360,doc:B,hasBidiBug:n,hasTouch:B&&void 0!==B.documentElement.ontouchstart,isMS:E,isWebKit:/AppleWebKit/.test(z),isFirefox:h,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(z),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:C,vml:u,win:a,charts:[],marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){}}}();(function(a){var B=[],z=a.charts,C=a.doc,E=a.win;a.error=function(u,h){u=a.isNumber(u)?"Highcharts error #"+
	u+": www.highcharts.com/errors/"+u:u;if(h)throw Error(u);E.console&&console.log(u)};a.Fx=function(a,h,n){this.options=h;this.elem=a;this.prop=n};a.Fx.prototype={dSetter:function(){var a=this.paths[0],h=this.paths[1],n=[],t=this.now,l=a.length,k;if(1===t)n=this.toD;else if(l===h.length&&1>t)for(;l--;)k=parseFloat(a[l]),n[l]=isNaN(k)?a[l]:t*parseFloat(h[l]-k)+k;else n=h;this.elem.attr("d",n,null,!0)},update:function(){var a=this.elem,h=this.prop,n=this.now,t=this.options.step;if(this[h+"Setter"])this[h+
	"Setter"]();else a.attr?a.element&&a.attr(h,n,null,!0):a.style[h]=n+this.unit;t&&t.call(a,n,this)},run:function(a,h,n){var u=this,l=function(a){return l.stopped?!1:u.step(a)},k;this.startTime=+new Date;this.start=a;this.end=h;this.unit=n;this.now=this.start;this.pos=0;l.elem=this.elem;l.prop=this.prop;l()&&1===B.push(l)&&(l.timerId=setInterval(function(){for(k=0;k<B.length;k++)B[k]()||B.splice(k--,1);B.length||clearInterval(l.timerId)},13))},step:function(a){var h=+new Date,u,t=this.options;u=this.elem;
	var l=t.complete,k=t.duration,e=t.curAnim,c;if(u.attr&&!u.element)u=!1;else if(a||h>=k+this.startTime){this.now=this.end;this.pos=1;this.update();a=e[this.prop]=!0;for(c in e)!0!==e[c]&&(a=!1);a&&l&&l.call(u);u=!1}else this.pos=t.easing((h-this.startTime)/k),this.now=this.start+(this.end-this.start)*this.pos,this.update(),u=!0;return u},initPath:function(u,h,n){function t(a){var b,f;for(r=a.length;r--;)b="M"===a[r]||"L"===a[r],f=/[a-zA-Z]/.test(a[r+3]),b&&f&&a.splice(r+1,0,a[r+1],a[r+2],a[r+1],a[r+
	2])}function l(a,f){for(;a.length<m;){a[0]=f[m-a.length];var d=a.slice(0,b);[].splice.apply(a,[0,0].concat(d));A&&(d=a.slice(a.length-b),[].splice.apply(a,[a.length,0].concat(d)),r--)}a[0]="M"}function k(a,f){for(var c=(m-a.length)/b;0<c&&c--;)d=a.slice().splice(a.length/v-b,b*v),d[0]=f[m-b-c*b],H&&(d[b-6]=d[b-2],d[b-5]=d[b-1]),[].splice.apply(a,[a.length/v,0].concat(d)),A&&c--}h=h||"";var e,c=u.startX,p=u.endX,H=-1<h.indexOf("C"),b=H?7:3,m,d,r;h=h.split(" ");n=n.slice();var A=u.isArea,v=A?2:1,f;
	H&&(t(h),t(n));if(c&&p){for(r=0;r<c.length;r++)if(c[r]===p[0]){e=r;break}else if(c[0]===p[p.length-c.length+r]){e=r;f=!0;break}void 0===e&&(h=[])}h.length&&a.isNumber(e)&&(m=n.length+e*v*b,f?(l(h,n),k(n,h)):(l(n,h),k(h,n)));return[h,n]}};a.extend=function(a,h){var u;a||(a={});for(u in h)a[u]=h[u];return a};a.merge=function(){var u,h=arguments,n,t={},l=function(k,e){var c,p;"object"!==typeof k&&(k={});for(p in e)e.hasOwnProperty(p)&&(c=e[p],a.isObject(c,!0)&&"renderTo"!==p&&"number"!==typeof c.nodeType?
	k[p]=l(k[p]||{},c):k[p]=e[p]);return k};!0===h[0]&&(t=h[1],h=Array.prototype.slice.call(h,2));n=h.length;for(u=0;u<n;u++)t=l(t,h[u]);return t};a.pInt=function(a,h){return parseInt(a,h||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(u,h){return u&&"object"===typeof u&&(!h||!a.isArray(u))};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=
	function(a,h){for(var u=a.length;u--;)if(a[u]===h){a.splice(u,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(u,h,n){var t,l;if(a.isString(h))a.defined(n)?u.setAttribute(h,n):u&&u.getAttribute&&(l=u.getAttribute(h));else if(a.defined(h)&&a.isObject(h))for(t in h)u.setAttribute(t,h[t]);return l};a.splat=function(u){return a.isArray(u)?u:[u]};a.syncTimeout=function(a,h,n){if(h)return setTimeout(a,h,n);a.call(0,n)};a.pick=function(){var a=arguments,h,n,t=a.length;for(h=
	0;h<t;h++)if(n=a[h],void 0!==n&&null!==n)return n};a.css=function(u,h){a.isMS&&!a.svg&&h&&void 0!==h.opacity&&(h.filter="alpha(opacity\x3d"+100*h.opacity+")");a.extend(u.style,h)};a.createElement=function(u,h,n,t,l){u=C.createElement(u);var k=a.css;h&&a.extend(u,h);l&&k(u,{padding:0,border:"none",margin:0});n&&k(u,n);t&&t.appendChild(u);return u};a.extendClass=function(u,h){var n=function(){};n.prototype=new u;a.extend(n.prototype,h);return n};a.pad=function(a,h,n){return Array((h||2)+1-String(a).length).join(n||
	0)+a};a.relativeLength=function(a,h){return/%$/.test(a)?h*parseFloat(a)/100:parseFloat(a)};a.wrap=function(a,h,n){var t=a[h];a[h]=function(){var a=Array.prototype.slice.call(arguments),k=arguments,e=this;e.proceed=function(){t.apply(e,arguments.length?arguments:k)};a.unshift(t);a=n.apply(this,a);e.proceed=null;return a}};a.getTZOffset=function(u){var h=a.Date;return 6E4*(h.hcGetTimezoneOffset&&h.hcGetTimezoneOffset(u)||h.hcTimezoneOffset||0)};a.dateFormat=function(u,h,n){if(!a.defined(h)||isNaN(h))return a.defaultOptions.lang.invalidDate||
	"";u=a.pick(u,"%Y-%m-%d %H:%M:%S");var t=a.Date,l=new t(h-a.getTZOffset(h)),k,e=l[t.hcGetHours](),c=l[t.hcGetDay](),p=l[t.hcGetDate](),H=l[t.hcGetMonth](),b=l[t.hcGetFullYear](),m=a.defaultOptions.lang,d=m.weekdays,r=m.shortWeekdays,A=a.pad,t=a.extend({a:r?r[c]:d[c].substr(0,3),A:d[c],d:A(p),e:A(p,2," "),w:c,b:m.shortMonths[H],B:m.months[H],m:A(H+1),y:b.toString().substr(2,2),Y:b,H:A(e),k:e,I:A(e%12||12),l:e%12||12,M:A(l[t.hcGetMinutes]()),p:12>e?"AM":"PM",P:12>e?"am":"pm",S:A(l.getSeconds()),L:A(Math.round(h%
	1E3),3)},a.dateFormats);for(k in t)for(;-1!==u.indexOf("%"+k);)u=u.replace("%"+k,"function"===typeof t[k]?t[k](h):t[k]);return n?u.substr(0,1).toUpperCase()+u.substr(1):u};a.formatSingle=function(u,h){var n=/\.([0-9])/,t=a.defaultOptions.lang;/f$/.test(u)?(n=(n=u.match(n))?n[1]:-1,null!==h&&(h=a.numberFormat(h,n,t.decimalPoint,-1<u.indexOf(",")?t.thousandsSep:""))):h=a.dateFormat(u,h);return h};a.format=function(u,h){for(var n="{",t=!1,l,k,e,c,p=[],H;u;){n=u.indexOf(n);if(-1===n)break;l=u.slice(0,
	n);if(t){l=l.split(":");k=l.shift().split(".");c=k.length;H=h;for(e=0;e<c;e++)H=H[k[e]];l.length&&(H=a.formatSingle(l.join(":"),H));p.push(H)}else p.push(l);u=u.slice(n+1);n=(t=!t)?"}":"{"}p.push(u);return p.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(u,h,n,t,l){var k,e=u;n=a.pick(n,1);k=u/n;h||(h=l?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===n?h=a.grep(h,function(a){return 0===a%1}):.1>=n&&(h=[1/n])));
	for(t=0;t<h.length&&!(e=h[t],l&&e*n>=u||!l&&k<=(h[t]+(h[t+1]||h[t]))/2);t++);return e=a.correctFloat(e*n,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,h){var n=a.length,t,l;for(l=0;l<n;l++)a[l].safeI=l;a.sort(function(a,e){t=h(a,e);return 0===t?a.safeI-e.safeI:t});for(l=0;l<n;l++)delete a[l].safeI};a.arrayMin=function(a){for(var h=a.length,n=a[0];h--;)a[h]<n&&(n=a[h]);return n};a.arrayMax=function(a){for(var h=a.length,n=a[0];h--;)a[h]>n&&(n=a[h]);return n};a.destroyObjectProperties=
	function(a,h){for(var n in a)a[n]&&a[n]!==h&&a[n].destroy&&a[n].destroy(),delete a[n]};a.discardElement=function(u){var h=a.garbageBin;h||(h=a.createElement("div"));u&&h.appendChild(u);h.innerHTML=""};a.correctFloat=function(a,h){return parseFloat(a.toPrecision(h||14))};a.setAnimation=function(u,h){h.renderer.globalAnimation=a.pick(u,h.options.chart.animation,!0)};a.animObject=function(u){return a.isObject(u)?a.merge(u):{duration:u?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,
	day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(u,h,n,t){u=+u||0;h=+h;var l=a.defaultOptions.lang,k=(u.toString().split(".")[1]||"").length,e,c;-1===h?h=Math.min(k,20):a.isNumber(h)||(h=2);c=(Math.abs(u)+Math.pow(10,-Math.max(h,k)-1)).toFixed(h);k=String(a.pInt(c));e=3<k.length?k.length%3:0;n=a.pick(n,l.decimalPoint);t=a.pick(t,l.thousandsSep);u=(0>u?"-":"")+(e?k.substr(0,e)+t:"");u+=k.substr(e).replace(/(\d{3})(?=\d)/g,"$1"+t);h&&(u+=n+c.slice(-h));return u};Math.easeInOutSine=
	function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(u,h){return"width"===h?Math.min(u.offsetWidth,u.scrollWidth)-a.getStyle(u,"padding-left")-a.getStyle(u,"padding-right"):"height"===h?Math.min(u.offsetHeight,u.scrollHeight)-a.getStyle(u,"padding-top")-a.getStyle(u,"padding-bottom"):(u=E.getComputedStyle(u,void 0))&&a.pInt(u.getPropertyValue(h))};a.inArray=function(a,h){return h.indexOf?h.indexOf(a):[].indexOf.call(h,a)};a.grep=function(a,h){return[].filter.call(a,h)};a.find=function(a,
	h){return[].find.call(a,h)};a.map=function(a,h){for(var n=[],t=0,l=a.length;t<l;t++)n[t]=h.call(a[t],a[t],t,a);return n};a.offset=function(a){var h=C.documentElement;a=a.getBoundingClientRect();return{top:a.top+(E.pageYOffset||h.scrollTop)-(h.clientTop||0),left:a.left+(E.pageXOffset||h.scrollLeft)-(h.clientLeft||0)}};a.stop=function(a,h){for(var n=B.length;n--;)B[n].elem!==a||h&&h!==B[n].prop||(B[n].stopped=!0)};a.each=function(a,h,n){return Array.prototype.forEach.call(a,h,n)};a.addEvent=function(u,
	h,n){function t(a){a.target=a.srcElement||E;n.call(u,a)}var l=u.hcEvents=u.hcEvents||{};u.addEventListener?u.addEventListener(h,n,!1):u.attachEvent&&(u.hcEventsIE||(u.hcEventsIE={}),u.hcEventsIE[n.toString()]=t,u.attachEvent("on"+h,t));l[h]||(l[h]=[]);l[h].push(n);return function(){a.removeEvent(u,h,n)}};a.removeEvent=function(u,h,n){function t(a,c){u.removeEventListener?u.removeEventListener(a,c,!1):u.attachEvent&&(c=u.hcEventsIE[c.toString()],u.detachEvent("on"+a,c))}function l(){var a,c;if(u.nodeName)for(c in h?
	(a={},a[h]=!0):a=e,a)if(e[c])for(a=e[c].length;a--;)t(c,e[c][a])}var k,e=u.hcEvents,c;e&&(h?(k=e[h]||[],n?(c=a.inArray(n,k),-1<c&&(k.splice(c,1),e[h]=k),t(h,n)):(l(),e[h]=[])):(l(),u.hcEvents={}))};a.fireEvent=function(u,h,n,t){var l;l=u.hcEvents;var k,e;n=n||{};if(C.createEvent&&(u.dispatchEvent||u.fireEvent))l=C.createEvent("Events"),l.initEvent(h,!0,!0),a.extend(l,n),u.dispatchEvent?u.dispatchEvent(l):u.fireEvent(h,l);else if(l)for(l=l[h]||[],k=l.length,n.target||a.extend(n,{preventDefault:function(){n.defaultPrevented=
	!0},target:u,type:h}),h=0;h<k;h++)(e=l[h])&&!1===e.call(u,n)&&n.preventDefault();t&&!n.defaultPrevented&&t(n)};a.animate=function(u,h,n){var t,l="",k,e,c;a.isObject(n)||(t=arguments,n={duration:t[2],easing:t[3],complete:t[4]});a.isNumber(n.duration)||(n.duration=400);n.easing="function"===typeof n.easing?n.easing:Math[n.easing]||Math.easeInOutSine;n.curAnim=a.merge(h);for(c in h)a.stop(u,c),e=new a.Fx(u,n,c),k=null,"d"===c?(e.paths=e.initPath(u,u.d,h.d),e.toD=h.d,t=0,k=1):u.attr?t=u.attr(c):(t=parseFloat(a.getStyle(u,
	c))||0,"opacity"!==c&&(l="px")),k||(k=h[c]),k&&k.match&&k.match("px")&&(k=k.replace(/px/g,"")),e.run(t,k,l)};a.seriesType=function(u,h,n,t,l){var k=a.getOptions(),e=a.seriesTypes;k.plotOptions[u]=a.merge(k.plotOptions[h],n);e[u]=a.extendClass(e[h]||function(){},t);e[u].prototype.type=u;l&&(e[u].prototype.pointClass=a.extendClass(a.Point,l));return e[u]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),h=0;return function(){return"highcharts-"+a+"-"+h++}}();E.jQuery&&(E.jQuery.fn.highcharts=
	function(){var u=[].slice.call(arguments);if(this[0])return u[0]?(new (a[a.isString(u[0])?u.shift():"Chart"])(this[0],u[0],u[1]),this):z[a.attr(this[0],"data-highcharts-chart")]});C&&!C.defaultView&&(a.getStyle=function(u,h){var n={width:"clientWidth",height:"clientHeight"}[h];if(u.style[h])return a.pInt(u.style[h]);"opacity"===h&&(h="filter");if(n)return u.style.zoom=1,Math.max(u[n]-2*a.getStyle(u,"padding"),0);u=u.currentStyle[h.replace(/\-(\w)/g,function(a,l){return l.toUpperCase()})];"filter"===
	h&&(u=u.replace(/alpha\(opacity=([0-9]+)\)/,function(a,l){return l/100}));return""===u?1:a.pInt(u)});Array.prototype.forEach||(a.each=function(a,h,n){for(var t=0,l=a.length;t<l;t++)if(!1===h.call(n,a[t],t,a))return t});Array.prototype.indexOf||(a.inArray=function(a,h){var n,t=0;if(h)for(n=h.length;t<n;t++)if(h[t]===a)return t;return-1});Array.prototype.filter||(a.grep=function(a,h){for(var n=[],t=0,l=a.length;t<l;t++)h(a[t],t)&&n.push(a[t]);return n});Array.prototype.find||(a.find=function(a,h){var n,
	t=a.length;for(n=0;n<t;n++)if(h(a[n],n))return a[n]})})(I);(function(a){var B=a.each,z=a.isNumber,C=a.map,E=a.merge,u=a.pInt;a.Color=function(h){if(!(this instanceof a.Color))return new a.Color(h);this.init(h)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[u(a[1]),u(a[2]),u(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[u(a[1]),
	u(a[2]),u(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(h){var n,t,l,k;if((this.input=h=this.names[h]||h)&&h.stops)this.stops=C(h.stops,function(e){return new a.Color(e[1])});else if(h&&"#"===h[0]&&(n=h.length,h=parseInt(h.substr(1),16),7===n?t=[(h&16711680)>>16,(h&65280)>>8,h&255,1]:4===n&&(t=[(h&3840)>>4|(h&3840)>>8,(h&240)>>4|h&240,(h&15)<<4|h&15,1])),!t)for(l=this.parsers.length;l--&&!t;)k=this.parsers[l],(n=k.regex.exec(h))&&(t=k.parse(n));this.rgba=t||[]},get:function(a){var h=
	this.input,t=this.rgba,l;this.stops?(l=E(h),l.stops=[].concat(l.stops),B(this.stops,function(k,e){l.stops[e]=[l.stops[e][0],k.get(a)]})):l=t&&z(t[0])?"rgb"===a||!a&&1===t[3]?"rgb("+t[0]+","+t[1]+","+t[2]+")":"a"===a?t[3]:"rgba("+t.join(",")+")":h;return l},brighten:function(a){var h,t=this.rgba;if(this.stops)B(this.stops,function(l){l.brighten(a)});else if(z(a)&&0!==a)for(h=0;3>h;h++)t[h]+=u(255*a),0>t[h]&&(t[h]=0),255<t[h]&&(t[h]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this}};
	a.color=function(h){return new a.Color(h)}})(I);(function(a){var B,z,C=a.addEvent,E=a.animate,u=a.attr,h=a.charts,n=a.color,t=a.css,l=a.createElement,k=a.defined,e=a.deg2rad,c=a.destroyObjectProperties,p=a.doc,H=a.each,b=a.extend,m=a.erase,d=a.grep,r=a.hasTouch,A=a.inArray,v=a.isArray,f=a.isFirefox,y=a.isMS,G=a.isObject,F=a.isString,q=a.isWebKit,x=a.merge,J=a.noop,K=a.pick,L=a.pInt,g=a.removeEvent,D=a.stop,S=a.svg,M=a.SVG_NS,R=a.symbolSizes,N=a.win;B=a.SVGElement=function(){return this};B.prototype=
	{opacity:1,SVG_NS:M,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),init:function(a,g){this.element="span"===g?l(g):p.createElementNS(this.SVG_NS,g);this.renderer=a},animate:function(w,g,b){g=a.animObject(K(g,this.renderer.globalAnimation,!0));0!==g.duration?(b&&(g.complete=b),E(this,w,g)):(this.attr(w,null,b),g.step&&g.step.call(this));return this},colorGradient:function(w,g,b){var f=this.renderer,
	d,c,q,D,O,y,r,G,e,m,p,l=[],Q;w.linearGradient?c="linearGradient":w.radialGradient&&(c="radialGradient");if(c){q=w[c];O=f.gradients;r=w.stops;m=b.radialReference;v(q)&&(w[c]=q={x1:q[0],y1:q[1],x2:q[2],y2:q[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===c&&m&&!k(q.gradientUnits)&&(D=q,q=x(q,f.getRadialAttr(m,D),{gradientUnits:"userSpaceOnUse"}));for(p in q)"id"!==p&&l.push(p,q[p]);for(p in r)l.push(r[p]);l=l.join(",");O[l]?m=O[l].attr("id"):(q.id=m=a.uniqueKey(),O[l]=y=f.createElement(c).attr(q).add(f.defs),
	y.radAttr=D,y.stops=[],H(r,function(w){0===w[1].indexOf("rgba")?(d=a.color(w[1]),G=d.get("rgb"),e=d.get("a")):(G=w[1],e=1);w=f.createElement("stop").attr({offset:w[0],"stop-color":G,"stop-opacity":e}).add(y);y.stops.push(w)}));Q="url("+f.url+"#"+m+")";b.setAttribute(g,Q);b.gradient=l;w.toString=function(){return Q}}},applyTextOutline:function(a){var w=this.element,g,b,f,d;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(w.style.fill)));this.fakeTS=!0;this.ySetter=this.xSetter;
	g=[].slice.call(w.getElementsByTagName("tspan"));a=a.split(" ");b=a[a.length-1];(f=a[0])&&"none"!==f&&(f=f.replace(/(^[\d\.]+)(.*?)$/g,function(a,w,g){return 2*w+g}),H(g,function(a){"highcharts-text-outline"===a.getAttribute("class")&&m(g,w.removeChild(a))}),d=w.firstChild,H(g,function(a,g){0===g&&(a.setAttribute("x",w.getAttribute("x")),g=w.getAttribute("y"),a.setAttribute("y",g||0),null===g&&w.setAttribute("y",0));a=a.cloneNode(1);u(a,{"class":"highcharts-text-outline",fill:b,stroke:b,"stroke-width":f,
	"stroke-linejoin":"round"});w.insertBefore(a,d)}))},attr:function(a,g,b,f){var w,d=this.element,q,c=this,y;"string"===typeof a&&void 0!==g&&(w=a,a={},a[w]=g);if("string"===typeof a)c=(this[a+"Getter"]||this._defaultGetter).call(this,a,d);else{for(w in a)g=a[w],y=!1,f||D(this,w),this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(w)&&(q||(this.symbolAttr(a),q=!0),y=!0),!this.rotation||"x"!==w&&"y"!==w||(this.doTransform=!0),y||(y=this[w+"Setter"]||this._defaultSetter,y.call(this,
	g,w,d),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(w)&&this.updateShadows(w,g,y));this.doTransform&&(this.updateTransform(),this.doTransform=!1)}b&&b();return c},updateShadows:function(a,g,b){for(var w=this.shadows,f=w.length;f--;)b.call(w[f],"height"===a?Math.max(g-(w[f].cutHeight||0),0):"d"===a?this.d:g,a,w[f])},addClass:function(a,g){var w=this.attr("class")||"";-1===w.indexOf(a)&&(g||(a=(w+(w?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==
	u(this.element,"class").indexOf(a)},removeClass:function(a){u(this.element,"class",(u(this.element,"class")||"").replace(a,""));return this},symbolAttr:function(a){var w=this;H("x y r start end width height innerR anchorX anchorY".split(" "),function(g){w[g]=K(a[g],w[g])});w.attr({d:w.renderer.symbols[w.symbolName](w.x,w.y,w.width,w.height,w)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,g){var w,f={},b;g=g||a.strokeWidth||0;b=Math.round(g)%
	2/2;a.x=Math.floor(a.x||this.x||0)+b;a.y=Math.floor(a.y||this.y||0)+b;a.width=Math.floor((a.width||this.width||0)-2*b);a.height=Math.floor((a.height||this.height||0)-2*b);k(a.strokeWidth)&&(a.strokeWidth=g);for(w in a)this[w]!==a[w]&&(this[w]=f[w]=a[w]);return f},css:function(a){var w=this.styles,g={},f=this.element,d,q="",c=!w,D=["textOverflow","width"];a&&a.color&&(a.fill=a.color);if(w)for(d in a)a[d]!==w[d]&&(g[d]=a[d],c=!0);if(c){w&&(a=b(w,g));w=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===
	f.nodeName.toLowerCase()&&L(a.width);this.styles=a;w&&!S&&this.renderer.forExport&&delete a.width;if(y&&!S)t(this.element,a);else{w=function(a,w){return"-"+w.toLowerCase()};for(d in a)-1===A(d,D)&&(q+=d.replace(/([A-Z])/g,w)+":"+a[d]+";");q&&u(f,"style",q)}this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,g){var w=this,f=w.element;r&&"click"===
	a?(f.ontouchstart=function(a){w.touchEventFired=Date.now();a.preventDefault();g.call(f,a)},f.onclick=function(a){(-1===N.navigator.userAgent.indexOf("Android")||1100<Date.now()-(w.touchEventFired||0))&&g.call(f,a)}):f["on"+a]=g;return this},setRadialReference:function(a){var w=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;w&&w.radAttr&&w.animate(this.renderer.getRadialAttr(a,w.radAttr));return this},translate:function(a,g){return this.attr({translateX:a,translateY:g})},
	invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,g=this.translateY||0,f=this.scaleX,b=this.scaleY,d=this.inverted,q=this.rotation,c=this.element;d&&(a+=this.width,g+=this.height);a=["translate("+a+","+g+")"];d?a.push("rotate(90) scale(-1,1)"):q&&a.push("rotate("+q+" "+(c.getAttribute("x")||0)+" "+(c.getAttribute("y")||0)+")");(k(f)||k(b))&&a.push("scale("+K(f,1)+" "+K(b,1)+")");a.length&&c.setAttribute("transform",a.join(" "))},
	toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,g,f){var w,b,d,q,c={};b=this.renderer;d=b.alignedObjects;var D,y;if(a){if(this.alignOptions=a,this.alignByTranslate=g,!f||F(f))this.alignTo=w=f||"renderer",m(d,this),d.push(this),f=null}else a=this.alignOptions,g=this.alignByTranslate,w=this.alignTo;f=K(f,b[w],b);w=a.align;b=a.verticalAlign;d=(f.x||0)+(a.x||0);q=(f.y||0)+(a.y||0);"right"===w?D=1:"center"===w&&(D=2);D&&(d+=(f.width-(a.width||0))/D);c[g?
	"translateX":"x"]=Math.round(d);"bottom"===b?y=1:"middle"===b&&(y=2);y&&(q+=(f.height-(a.height||0))/y);c[g?"translateY":"y"]=Math.round(q);this[this.placed?"animate":"attr"](c);this.placed=!0;this.alignAttr=c;return this},getBBox:function(a,g){var w,f=this.renderer,d,q=this.element,c=this.styles,D,y=this.textStr,x,r=f.cache,G=f.cacheKeys,m;g=K(g,this.rotation);d=g*e;D=c&&c.fontSize;void 0!==y&&(m=y.toString(),-1===m.indexOf("\x3c")&&(m=m.replace(/[0-9]/g,"0")),m+=["",g||0,D,c&&c.width,c&&c.textOverflow].join());
	m&&!a&&(w=r[m]);if(!w){if(q.namespaceURI===this.SVG_NS||f.forExport){try{(x=this.fakeTS&&function(a){H(q.querySelectorAll(".highcharts-text-outline"),function(w){w.style.display=a})})&&x("none"),w=q.getBBox?b({},q.getBBox()):{width:q.offsetWidth,height:q.offsetHeight},x&&x("")}catch(X){}if(!w||0>w.width)w={width:0,height:0}}else w=this.htmlGetBBox();f.isSVG&&(a=w.width,f=w.height,c&&"11px"===c.fontSize&&17===Math.round(f)&&(w.height=f=14),g&&(w.width=Math.abs(f*Math.sin(d))+Math.abs(a*Math.cos(d)),
	w.height=Math.abs(f*Math.cos(d))+Math.abs(a*Math.sin(d))));if(m&&0<w.height){for(;250<G.length;)delete r[G.shift()];r[m]||G.push(m);r[m]=w}}return w},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var w=this;w.animate({opacity:0},{duration:a||150,complete:function(){w.attr({y:-9999})}})},add:function(a){var w=this.renderer,g=this.element,f;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;
	void 0!==this.textStr&&w.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)f=this.zIndexSetter();f||(a?a.element:w.box).appendChild(g);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var w=a.parentNode;w&&w.removeChild(a)},destroy:function(){var a=this.element||{},g=this.renderer.isSVG&&"SPAN"===a.nodeName&&this.parentGroup,f,b;a.onclick=a.onmouseout=a.onmouseover=a.onmousemove=a.point=null;D(this);this.clipPath&&(this.clipPath=this.clipPath.destroy());if(this.stops){for(b=
	0;b<this.stops.length;b++)this.stops[b]=this.stops[b].destroy();this.stops=null}this.safeRemoveChild(a);for(this.destroyShadows();g&&g.div&&0===g.div.childNodes.length;)a=g.parentGroup,this.safeRemoveChild(g.div),delete g.div,g=a;this.alignTo&&m(this.renderer.alignedObjects,this);for(f in this)delete this[f];return null},shadow:function(a,g,f){var w=[],b,d,c=this.element,q,D,y,x;if(!a)this.destroyShadows();else if(!this.shadows){D=K(a.width,3);y=(a.opacity||.15)/D;x=this.parentInverted?"(-1,-1)":
	"("+K(a.offsetX,1)+", "+K(a.offsetY,1)+")";for(b=1;b<=D;b++)d=c.cloneNode(0),q=2*D+1-2*b,u(d,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":y*b,"stroke-width":q,transform:"translate"+x,fill:"none"}),f&&(u(d,"height",Math.max(u(d,"height")-q,0)),d.cutHeight=q),g?g.element.appendChild(d):c.parentNode.insertBefore(d,c),w.push(d);this.shadows=w}return this},destroyShadows:function(){H(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===
	this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=K(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,g,f){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");f.setAttribute(g,a);this[g]=a},dashstyleSetter:function(a){var w,g=this["stroke-width"];"inherit"===g&&(g=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot",
	"3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(w=a.length;w--;)a[w]=L(a[w])*g;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,g,f){this[g]=a;f.setAttribute(g,a)},titleSetter:function(a){var w=this.element.getElementsByTagName("title")[0];
	w||(w=p.createElementNS(this.SVG_NS,"title"),this.element.appendChild(w));w.firstChild&&w.removeChild(w.firstChild);w.appendChild(p.createTextNode(String(K(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,g,f){"string"===typeof a?f.setAttribute(g,a):a&&this.colorGradient(a,g,f)},visibilitySetter:function(a,g,f){"inherit"===a?f.removeAttribute(g):f.setAttribute(g,a)},zIndexSetter:function(a,
	g){var w=this.renderer,f=this.parentGroup,b=(f||w).element||w.box,d,c=this.element,q;d=this.added;var D;k(a)&&(c.zIndex=a,a=+a,this[g]===a&&(d=!1),this[g]=a);if(d){(a=this.zIndex)&&f&&(f.handleZ=!0);g=b.childNodes;for(D=0;D<g.length&&!q;D++)f=g[D],d=f.zIndex,f!==c&&(L(d)>a||!k(a)&&k(d)||0>a&&!k(d)&&b!==w.box)&&(b.insertBefore(c,f),q=!0);q||b.appendChild(c)}return q},_defaultSetter:function(a,g,f){f.setAttribute(g,a)}};B.prototype.yGetter=B.prototype.xGetter;B.prototype.translateXSetter=B.prototype.translateYSetter=
	B.prototype.rotationSetter=B.prototype.verticalAlignSetter=B.prototype.scaleXSetter=B.prototype.scaleYSetter=function(a,g){this[g]=a;this.doTransform=!0};B.prototype["stroke-widthSetter"]=B.prototype.strokeSetter=function(a,g,f){this[g]=a;this.stroke&&this["stroke-width"]?(B.prototype.fillSetter.call(this,this.stroke,"stroke",f),f.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===g&&0===a&&this.hasStroke&&(f.removeAttribute("stroke"),this.hasStroke=!1)};z=a.SVGRenderer=
	function(){this.init.apply(this,arguments)};z.prototype={Element:B,SVG_NS:M,init:function(a,g,b,d,c,D){var w;d=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(d));w=d.element;a.appendChild(w);-1===a.innerHTML.indexOf("xmlns")&&u(w,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=w;this.boxWrapper=d;this.alignedObjects=[];this.url=(f||q)&&p.getElementsByTagName("base").length?N.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,
	"%20"):"";this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highcharts 5.0.9"));this.defs=this.createElement("defs").add();this.allowHTML=D;this.forExport=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(g,b,!1);var y;f&&a.getBoundingClientRect&&(g=function(){t(a,{left:0,top:0});y=a.getBoundingClientRect();t(a,{left:Math.ceil(y.left)-y.left+"px",top:Math.ceil(y.top)-y.top+"px"})},g(),this.unSubPixelFix=C(N,"resize",g))},getStyle:function(a){return this.style=
	b({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();c(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var g=new this.Element;
	g.init(this,a);return g},draw:J,getRadialAttr:function(a,g){return{cx:a[0]-a[2]/2+g.cx*a[2],cy:a[1]-a[2]/2+g.cy*a[2],r:g.r*a[2]}},buildText:function(a){var g=a.element,f=this,w=f.forExport,b=K(a.textStr,"").toString(),c=-1!==b.indexOf("\x3c"),q=g.childNodes,D,y,x,r,G=u(g,"x"),m=a.styles,e=a.textWidth,l=m&&m.lineHeight,v=m&&m.textOutline,k=m&&"ellipsis"===m.textOverflow,h=m&&"nowrap"===m.whiteSpace,F=m&&m.fontSize,A,J=q.length,m=e&&!a.added&&this.box,n=function(a){var w;w=/(px|em)$/.test(a&&a.style.fontSize)?
	a.style.fontSize:F||f.style.fontSize||12;return l?L(l):f.fontMetrics(w,a.getAttribute("style")?a:g).h};A=[b,k,h,l,v,F,e].join();if(A!==a.textCache){for(a.textCache=A;J--;)g.removeChild(q[J]);c||v||k||e||-1!==b.indexOf(" ")?(D=/<.*class="([^"]+)".*>/,y=/<.*style="([^"]+)".*>/,x=/<.*href="(http[^"]+)".*>/,m&&m.appendChild(g),b=c?b.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,
	"\x3c/span\x3e").split(/<br.*?>/g):[b],b=d(b,function(a){return""!==a}),H(b,function(b,d){var c,q=0;b=b.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");c=b.split("|||");H(c,function(b){if(""!==b||1===c.length){var m={},v=p.createElementNS(f.SVG_NS,"tspan"),l,F;D.test(b)&&(l=b.match(D)[1],u(v,"class",l));y.test(b)&&(F=b.match(y)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),u(v,"style",F));x.test(b)&&!w&&(u(v,"onclick",'location.href\x3d"'+b.match(x)[1]+
	'"'),t(v,{cursor:"pointer"}));b=(b.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==b){v.appendChild(p.createTextNode(b));q?m.dx=0:d&&null!==G&&(m.x=G);u(v,m);g.appendChild(v);!q&&d&&(!S&&w&&t(v,{display:"block"}),u(v,"dy",n(v)));if(e){m=b.replace(/([^\^])-/g,"$1- ").split(" ");l=1<c.length||d||1<m.length&&!h;for(var A,H,O=[],J=n(v),K=a.rotation,L=b,P=L.length;(l||k)&&(m.length||O.length);)a.rotation=0,A=a.getBBox(!0),H=A.width,!S&&f.forExport&&(H=f.measureSpanWidth(v.firstChild.data,
	a.styles)),A=H>e,void 0===r&&(r=A),k&&r?(P/=2,""===L||!A&&.5>P?m=[]:(L=b.substring(0,L.length+(A?-1:1)*Math.ceil(P)),m=[L+(3<e?"\u2026":"")],v.removeChild(v.firstChild))):A&&1!==m.length?(v.removeChild(v.firstChild),O.unshift(m.pop())):(m=O,O=[],m.length&&!h&&(v=p.createElementNS(M,"tspan"),u(v,{dy:J,x:G}),F&&u(v,"style",F),g.appendChild(v)),H>e&&(e=H)),m.length&&v.appendChild(p.createTextNode(m.join(" ").replace(/- /g,"-")));a.rotation=K}q++}}})}),r&&a.attr("title",a.textStr),m&&m.removeChild(g),
	v&&a.applyTextOutline&&a.applyTextOutline(v)):g.appendChild(p.createTextNode(b.replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))}},getContrast:function(a){a=n(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,g,f,d,c,q,D,m,r){var w=this.label(a,g,f,r,null,null,null,null,"button"),G=0;w.attr(x({padding:8,r:2},c));var e,v,p,l;c=x({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},c);e=c.style;delete c.style;q=x(c,{fill:"#e6e6e6"},
	q);v=q.style;delete q.style;D=x(c,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},D);p=D.style;delete D.style;m=x(c,{style:{color:"#cccccc"}},m);l=m.style;delete m.style;C(w.element,y?"mouseover":"mouseenter",function(){3!==G&&w.setState(1)});C(w.element,y?"mouseout":"mouseleave",function(){3!==G&&w.setState(G)});w.setState=function(a){1!==a&&(w.state=G=a);w.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||
	0]);w.attr([c,q,D,m][a||0]).css([e,v,p,l][a||0])};w.attr(c).css(b({cursor:"default"},e));return w.on("click",function(a){3!==G&&d.call(w,a)})},crispLine:function(a,g){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-g%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+g%2/2);return a},path:function(a){var g={fill:"none"};v(a)?g.d=a:G(a)&&b(g,a);return this.createElement("path").attr(g)},circle:function(a,g,f){a=G(a)?a:{x:a,y:g,r:f};g=this.createElement("circle");g.xSetter=g.ySetter=function(a,g,f){f.setAttribute("c"+
	g,a)};return g.attr(a)},arc:function(a,g,f,b,d,c){G(a)?(b=a,g=b.y,f=b.r,a=b.x):b={innerR:b,start:d,end:c};a=this.symbol("arc",a,g,f,f,b);a.r=f;return a},rect:function(a,g,f,b,d,c){d=G(a)?a.r:d;var w=this.createElement("rect");a=G(a)?a:void 0===a?{}:{x:a,y:g,width:Math.max(f,0),height:Math.max(b,0)};void 0!==c&&(a.strokeWidth=c,a=w.crisp(a));a.fill="none";d&&(a.r=d);w.rSetter=function(a,g,f){u(f,{rx:a,ry:a})};return w.attr(a)},setSize:function(a,g,f){var b=this.alignedObjects,d=b.length;this.width=
	a;this.height=g;for(this.boxWrapper.animate({width:a,height:g},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:K(f,!0)?void 0:0});d--;)b[d].align()},g:function(a){var g=this.createElement("g");return a?g.attr({"class":"highcharts-"+a}):g},image:function(a,g,f,d,c){var w={preserveAspectRatio:"none"};1<arguments.length&&b(w,{x:g,y:f,width:d,height:c});w=this.createElement("image").attr(w);w.element.setAttributeNS?w.element.setAttributeNS("http://www.w3.org/1999/xlink",
	"href",a):w.element.setAttribute("hc-svg-href",a);return w},symbol:function(a,g,f,d,c,q){var w=this,D,y=this.symbols[a],m=k(g)&&y&&this.symbols[a](Math.round(g),Math.round(f),d,c,q),x=/^url\((.*?)\)$/,G,r;y?(D=this.path(m),D.attr("fill","none"),b(D,{symbolName:a,x:g,y:f,width:d,height:c}),q&&b(D,q)):x.test(a)&&(G=a.match(x)[1],D=this.image(G),D.imgwidth=K(R[G]&&R[G].width,q&&q.width),D.imgheight=K(R[G]&&R[G].height,q&&q.height),r=function(){D.attr({width:D.width,height:D.height})},H(["width","height"],
	function(a){D[a+"Setter"]=function(a,g){var f={},b=this["img"+g],d="width"===g?"translateX":"translateY";this[g]=a;k(b)&&(this.element&&this.element.setAttribute(g,b),this.alignByTranslate||(f[d]=((this[g]||0)-b)/2,this.attr(f)))}}),k(g)&&D.attr({x:g,y:f}),D.isImg=!0,k(D.imgwidth)&&k(D.imgheight)?r():(D.attr({width:0,height:0}),l("img",{onload:function(){var a=h[w.chartIndex];0===this.width&&(t(this,{position:"absolute",top:"-999em"}),p.body.appendChild(this));R[G]={width:this.width,height:this.height};
	D.imgwidth=this.width;D.imgheight=this.height;D.element&&r();this.parentNode&&this.parentNode.removeChild(this);w.imgCount--;if(!w.imgCount&&a&&a.onload)a.onload()},src:G}),this.imgCount++));return D},symbols:{circle:function(a,g,f,b){return this.arc(a+f/2,g+b/2,f/2,b/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,g,f,b){return["M",a,g,"L",a+f,g,a+f,g+b,a,g+b,"Z"]},triangle:function(a,g,f,b){return["M",a+f/2,g,"L",a+f,g+b,a,g+b,"Z"]},"triangle-down":function(a,g,f,b){return["M",a,g,"L",a+f,
	g,a+f/2,g+b,"Z"]},diamond:function(a,g,f,b){return["M",a+f/2,g,"L",a+f,g+b/2,a+f/2,g+b,a,g+b/2,"Z"]},arc:function(a,g,f,b,d){var c=d.start,w=d.r||f,q=d.r||b||f,D=d.end-.001;f=d.innerR;b=d.open;var y=Math.cos(c),m=Math.sin(c),x=Math.cos(D),D=Math.sin(D);d=d.end-c<Math.PI?0:1;w=["M",a+w*y,g+q*m,"A",w,q,0,d,1,a+w*x,g+q*D];k(f)&&w.push(b?"M":"L",a+f*x,g+f*D,"A",f,f,0,d,0,a+f*y,g+f*m);w.push(b?"":"Z");return w},callout:function(a,g,f,b,d){var c=Math.min(d&&d.r||0,f,b),q=c+6,D=d&&d.anchorX;d=d&&d.anchorY;
	var w;w=["M",a+c,g,"L",a+f-c,g,"C",a+f,g,a+f,g,a+f,g+c,"L",a+f,g+b-c,"C",a+f,g+b,a+f,g+b,a+f-c,g+b,"L",a+c,g+b,"C",a,g+b,a,g+b,a,g+b-c,"L",a,g+c,"C",a,g,a,g,a+c,g];D&&D>f?d>g+q&&d<g+b-q?w.splice(13,3,"L",a+f,d-6,a+f+6,d,a+f,d+6,a+f,g+b-c):w.splice(13,3,"L",a+f,b/2,D,d,a+f,b/2,a+f,g+b-c):D&&0>D?d>g+q&&d<g+b-q?w.splice(33,3,"L",a,d+6,a-6,d,a,d-6,a,g+c):w.splice(33,3,"L",a,b/2,D,d,a,b/2,a,g+c):d&&d>b&&D>a+q&&D<a+f-q?w.splice(23,3,"L",D+6,g+b,D,g+b+6,D-6,g+b,a+c,g+b):d&&0>d&&D>a+q&&D<a+f-q&&w.splice(3,
	3,"L",D-6,g,D,g-6,D+6,g,f-c,g);return w}},clipRect:function(g,f,b,d){var c=a.uniqueKey(),q=this.createElement("clipPath").attr({id:c}).add(this.defs);g=this.rect(g,f,b,d,0).add(q);g.id=c;g.clipPath=q;g.count=0;return g},text:function(a,g,f,b){var d=!S&&this.forExport,c={};if(b&&(this.allowHTML||!this.forExport))return this.html(a,g,f);c.x=Math.round(g||0);f&&(c.y=Math.round(f));if(a||0===a)c.text=a;a=this.createElement("text").attr(c);d&&a.css({position:"absolute"});b||(a.xSetter=function(a,g,f){var b=
	f.getElementsByTagName("tspan"),d,c=f.getAttribute(g),q;for(q=0;q<b.length;q++)d=b[q],d.getAttribute(g)===c&&d.setAttribute(g,a);f.setAttribute(g,a)});return a},fontMetrics:function(a,g){a=a||g&&g.style&&g.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?L(a):/em/.test(a)?parseFloat(a)*(g?this.fontMetrics(null,g.parentNode).f:16):12;g=24>a?a+3:Math.round(1.2*a);return{h:g,b:Math.round(.8*g),f:a}},rotCorr:function(a,g,f){var b=a;g&&f&&(b=Math.max(b*Math.cos(g*e),4));return{x:-a/3*Math.sin(g*
	e),y:b}},label:function(f,d,c,q,D,y,m,G,r){var w=this,e=w.g("button"!==r&&"label"),v=e.text=w.text("",0,0,m).attr({zIndex:1}),p,l,F=0,A=3,h=0,J,t,S,n,M,K={},L,u,O=/^url\((.*?)\)$/.test(q),R=O,P,Q,N,U;r&&e.addClass("highcharts-"+r);R=O;P=function(){return(L||0)%2/2};Q=function(){var a=v.element.style,g={};l=(void 0===J||void 0===t||M)&&k(v.textStr)&&v.getBBox();e.width=(J||l.width||0)+2*A+h;e.height=(t||l.height||0)+2*A;u=A+w.fontMetrics(a&&a.fontSize,v).b;R&&(p||(e.box=p=w.symbols[q]||O?w.symbol(q):
	w.rect(),p.addClass(("button"===r?"":"highcharts-label-box")+(r?" highcharts-"+r+"-box":"")),p.add(e),a=P(),g.x=a,g.y=(G?-u:0)+a),g.width=Math.round(e.width),g.height=Math.round(e.height),p.attr(b(g,K)),K={})};N=function(){var a=h+A,g;g=G?0:u;k(J)&&l&&("center"===M||"right"===M)&&(a+={center:.5,right:1}[M]*(J-l.width));if(a!==v.x||g!==v.y)v.attr("x",a),void 0!==g&&v.attr("y",g);v.x=a;v.y=g};U=function(a,g){p?p.attr(a,g):K[a]=g};e.onAdd=function(){v.add(e);e.attr({text:f||0===f?f:"",x:d,y:c});p&&k(D)&&
	e.attr({anchorX:D,anchorY:y})};e.widthSetter=function(g){J=a.isNumber(g)?g:null};e.heightSetter=function(a){t=a};e["text-alignSetter"]=function(a){M=a};e.paddingSetter=function(a){k(a)&&a!==A&&(A=e.padding=a,N())};e.paddingLeftSetter=function(a){k(a)&&a!==h&&(h=a,N())};e.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==F&&(F=a,l&&e.attr({x:S}))};e.textSetter=function(a){void 0!==a&&v.textSetter(a);Q();N()};e["stroke-widthSetter"]=function(a,g){a&&(R=!0);L=this["stroke-width"]=a;U(g,a)};
	e.strokeSetter=e.fillSetter=e.rSetter=function(a,g){"fill"===g&&a&&(R=!0);U(g,a)};e.anchorXSetter=function(a,g){D=a;U(g,Math.round(a)-P()-S)};e.anchorYSetter=function(a,g){y=a;U(g,a-n)};e.xSetter=function(a){e.x=a;F&&(a-=F*((J||l.width)+2*A));S=Math.round(a);e.attr("translateX",S)};e.ySetter=function(a){n=e.y=Math.round(a);e.attr("translateY",n)};var W=e.css;return b(e,{css:function(a){if(a){var g={};a=x(a);H(e.textProps,function(f){void 0!==a[f]&&(g[f]=a[f],delete a[f])});v.css(g)}return W.call(e,
	a)},getBBox:function(){return{width:l.width+2*A,height:l.height+2*A,x:l.x-A,y:l.y-A}},shadow:function(a){a&&(Q(),p&&p.shadow(a));return e},destroy:function(){g(e.element,"mouseenter");g(e.element,"mouseleave");v&&(v=v.destroy());p&&(p=p.destroy());B.prototype.destroy.call(e);e=w=Q=N=U=null}})}};a.Renderer=z})(I);(function(a){var B=a.attr,z=a.createElement,C=a.css,E=a.defined,u=a.each,h=a.extend,n=a.isFirefox,t=a.isMS,l=a.isWebKit,k=a.pInt,e=a.SVGRenderer,c=a.win,p=a.wrap;h(a.SVGElement.prototype,
	{htmlCss:function(a){var b=this.element;if(b=a&&"SPAN"===b.tagName&&a.width)delete a.width,this.textWidth=b,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=h(this.styles,a);C(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position="absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,
	b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,p=this.y||0,v=this.textAlign||"left",f={left:0,center:.5,right:1}[v],y=this.styles;C(b,{marginLeft:c,marginTop:d});this.shadows&&u(this.shadows,function(a){C(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&u(b.childNodes,function(f){a.invertChild(f,b)});if("SPAN"===b.tagName){var G=this.rotation,F=k(this.textWidth),q=y&&y.whiteSpace,x=[G,v,b.innerHTML,this.textWidth,this.textAlign].join();x!==this.cTT&&(y=a.fontMetrics(b.style.fontSize).b,
	E(G)&&this.setSpanRotation(G,f,y),C(b,{width:"",whiteSpace:q||"nowrap"}),b.offsetWidth>F&&/[ \-]/.test(b.textContent||b.innerText)&&C(b,{width:F+"px",display:"block",whiteSpace:q||"normal"}),this.getSpanCorrection(b.offsetWidth,y,f,G,v));C(b,{left:e+(this.xCorr||0)+"px",top:p+(this.yCorr||0)+"px"});l&&(y=b.offsetHeight);this.cTT=x}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,e){var d={},m=t?"-ms-transform":l?"-webkit-transform":n?"MozTransform":c.opera?"-o-transform":"";d[m]=d.transform=
	"rotate("+a+"deg)";d[m+(n?"Origin":"-origin")]=d.transformOrigin=100*b+"% "+e+"px";C(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});h(e.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,m=d.renderer,v=m.isSVG,f=function(a,f){u(["opacity","visibility"],function(b){p(a,b+"Setter",function(a,b,d,c){a.call(this,b,d,c);f[d]=b})})};d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a;d.htmlUpdateTransform()};
	v&&f(d,d.element.style);d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(a,f){"align"===f&&(f="textAlign");d[f]=a;d.htmlUpdateTransform()};d.attr({text:a,x:Math.round(b),y:Math.round(c)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});e.style.whiteSpace="nowrap";d.css=d.htmlCss;v&&(d.add=function(a){var b,c=m.box.parentNode,q=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)q.push(a),a=a.parentGroup;u(q.reverse(),function(a){var y,e=B(a.element,
	"class");e&&(e={className:e});b=a.div=a.div||z("div",e,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},b||c);y=b.style;h(a,{on:function(){d.on.apply({element:q[0].div},arguments);return a},translateXSetter:function(f,g){y.left=f+"px";a[g]=f;a.doTransform=!0},translateYSetter:function(f,g){y.top=f+"px";a[g]=f;a.doTransform=!0}});f(a,y)})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&
	d.htmlUpdateTransform();return d});return d}})})(I);(function(a){var B,z,C=a.createElement,E=a.css,u=a.defined,h=a.deg2rad,n=a.discardElement,t=a.doc,l=a.each,k=a.erase,e=a.extend;B=a.extendClass;var c=a.isArray,p=a.isNumber,H=a.isObject,b=a.merge;z=a.noop;var m=a.pick,d=a.pInt,r=a.SVGElement,A=a.SVGRenderer,v=a.win;a.svg||(z={docMode8:t&&8===t.documentMode,init:function(a,b){var f=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],d=["position: ","absolute",";"],c="div"===b;("shape"===b||c)&&d.push("left:0;top:0;width:1px;height:1px;");
	d.push("visibility: ",c?"hidden":"visible");f.push(' style\x3d"',d.join(""),'"/\x3e');b&&(f=c||"span"===b||"img"===b?f.join(""):a.prepVML(f),this.element=C(f));this.renderer=a},add:function(a){var f=this.renderer,b=this.element,d=f.box,c=a&&a.inverted,d=a?a.element||a:d;a&&(this.parentGroup=a);c&&f.invertChild(b,d);d.appendChild(b);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},
	updateTransform:r.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*h),d=Math.sin(a*h);E(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",b,", M12\x3d",-d,", M21\x3d",d,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,d,c,q){var f=c?Math.cos(c*h):1,e=c?Math.sin(c*h):0,y=m(this.elemHeight,this.element.offsetHeight),r;this.xCorr=0>f&&-a;this.yCorr=0>e&&-y;r=0>f*e;this.xCorr+=e*b*(r?1-
	d:d);this.yCorr-=f*b*(c?r?d:1-d:1);q&&"left"!==q&&(this.xCorr-=a*d*(0>f?-1:1),c&&(this.yCorr-=y*d*(0>e?-1:1)),E(this.element,{textAlign:q}))},pathToVML:function(a){for(var f=a.length,b=[];f--;)p(a[f])?b[f]=Math.round(10*a[f])-5:"Z"===a[f]?b[f]="x":(b[f]=a[f],!a.isArc||"wa"!==a[f]&&"at"!==a[f]||(b[f+5]===b[f+7]&&(b[f+7]+=a[f+7]>a[f+5]?1:-1),b[f+6]===b[f+8]&&(b[f+8]+=a[f+8]>a[f+6]?1:-1)));return b.join(" ")||"x"},clip:function(a){var f=this,b;a?(b=a.members,k(b,f),b.push(f),f.destroyClip=function(){k(b,
	f)},a=a.getCSS(f)):(f.destroyClip&&f.destroyClip(),a={clip:f.docMode8?"inherit":"rect(auto)"});return f.css(a)},css:r.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&n(a)},destroy:function(){this.destroyClip&&this.destroyClip();return r.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=v.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var f;a=a.split(/[ ,]/);f=a.length;if(9===f||11===f)a[f-4]=a[f-2]=d(a[f-2])-10*b;return a.join(" ")},
	shadow:function(a,b,c){var f=[],q,e=this.element,y=this.renderer,r,v=e.style,g,D=e.path,p,l,G,k;D&&"string"!==typeof D.value&&(D="x");l=D;if(a){G=m(a.width,3);k=(a.opacity||.15)/G;for(q=1;3>=q;q++)p=2*G+1-2*q,c&&(l=this.cutOffPath(D.value,p+.5)),g=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',p,'" filled\x3d"false" path\x3d"',l,'" coordsize\x3d"10 10" style\x3d"',e.style.cssText,'" /\x3e'],r=C(y.prepVML(g),null,{left:d(v.left)+m(a.offsetX,1),top:d(v.top)+m(a.offsetY,1)}),c&&(r.cutOff=p+1),g=['\x3cstroke color\x3d"',
	a.color||"#000000",'" opacity\x3d"',k*q,'"/\x3e'],C(y.prepVML(g),null,null,r),b?b.element.appendChild(r):e.parentNode.insertBefore(r,e),f.push(r);this.shadows=f}return this},updateShadows:z,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,d){(d.getElementsByTagName("stroke")[0]||C(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,d))[b]=a||"solid";this[b]=a},dSetter:function(a,
	b,d){var f=this.shadows;a=a||[];this.d=a.join&&a.join(" ");d.path=a=this.pathToVML(a);if(f)for(d=f.length;d--;)f[d].path=f[d].cutOff?this.cutOffPath(a,f[d].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,d){var f=d.nodeName;"SPAN"===f?d.style.color=a:"IMG"!==f&&(d.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,d,b,this)))},"fill-opacitySetter":function(a,b,d){C(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,d)},opacitySetter:z,rotationSetter:function(a,
	b,d){d=d.style;this[b]=d[b]=a;d.left=-Math.round(Math.sin(a*h)+1)+"px";d.top=Math.round(Math.cos(a*h))+"px"},strokeSetter:function(a,b,d){this.setAttr("strokecolor",this.renderer.color(a,d,b,this))},"stroke-widthSetter":function(a,b,d){d.stroked=!!a;this[b]=a;p(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,d){"inherit"===a&&(a="visible");this.shadows&&l(this.shadows,function(f){f.style[b]=a});"DIV"===d.nodeName&&(a="hidden"===
	a?"-999em":0,this.docMode8||(d.style[b]=a?"visible":"hidden"),b="top");d.style[b]=a},xSetter:function(a,b,d){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):d.style[b]=a},zIndexSetter:function(a,b,d){d.style[b]=a}},z["stroke-opacitySetter"]=z["fill-opacitySetter"],a.VMLElement=z=B(r,z),z.prototype.ySetter=z.prototype.widthSetter=z.prototype.heightSetter=z.prototype.xSetter,z={Element:z,isIE8:-1<v.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,
	b,d){var f,c;this.alignedObjects=[];f=this.createElement("div").css({position:"relative"});c=f.element;a.appendChild(f.element);this.isVML=!0;this.box=c;this.boxWrapper=f;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,d,!1);if(!t.namespaces.hcv){t.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{t.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(x){t.styleSheets[0].cssText+=
	"hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,d,c){var f=this.createElement(),m=H(a);return e(f,{members:[],count:0,left:(m?a.x:a)+1,top:(m?a.y:b)+1,width:(m?a.width:d)-1,height:(m?a.height:c)-1,getCSS:function(a){var b=a.element,d=b.nodeName,g=a.inverted,f=this.top-("shape"===d?b.offsetTop:0),c=this.left,b=c+this.width,q=f+this.height,f={clip:"rect("+Math.round(g?
	c:f)+"px,"+Math.round(g?q:b)+"px,"+Math.round(g?b:q)+"px,"+Math.round(g?f:c)+"px)"};!g&&a.docMode8&&"DIV"===d&&e(f,{width:b+"px",height:q+"px"});return f},updateClipping:function(){l(f.members,function(a){a.element&&a.css(f.getCSS(a))})}})},color:function(b,d,c,e){var f=this,m,r=/^rgba/,v,p,g="none";b&&b.linearGradient?p="gradient":b&&b.radialGradient&&(p="pattern");if(p){var D,y,k=b.linearGradient||b.radialGradient,A,h,w,G,t,F="";b=b.stops;var n,H=[],u=function(){v=['\x3cfill colors\x3d"'+H.join(",")+
	'" opacity\x3d"',w,'" o:opacity2\x3d"',h,'" type\x3d"',p,'" ',F,'focus\x3d"100%" method\x3d"any" /\x3e'];C(f.prepVML(v),null,null,d)};A=b[0];n=b[b.length-1];0<A[0]&&b.unshift([0,A[1]]);1>n[0]&&b.push([1,n[1]]);l(b,function(g,b){r.test(g[1])?(m=a.color(g[1]),D=m.get("rgb"),y=m.get("a")):(D=g[1],y=1);H.push(100*g[0]+"% "+D);b?(w=y,G=D):(h=y,t=D)});if("fill"===c)if("gradient"===p)c=k.x1||k[0]||0,b=k.y1||k[1]||0,A=k.x2||k[2]||0,k=k.y2||k[3]||0,F='angle\x3d"'+(90-180*Math.atan((k-b)/(A-c))/Math.PI)+'"',
	u();else{var g=k.r,z=2*g,B=2*g,E=k.cx,V=k.cy,I=d.radialReference,T,g=function(){I&&(T=e.getBBox(),E+=(I[0]-T.x)/T.width-.5,V+=(I[1]-T.y)/T.height-.5,z*=I[2]/T.width,B*=I[2]/T.height);F='src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+z+","+B+'" origin\x3d"0.5,0.5" position\x3d"'+E+","+V+'" color2\x3d"'+t+'" ';u()};e.added?g():e.onAdd=g;g=G}else g=D}else r.test(b)&&"IMG"!==d.tagName?(m=a.color(b),e[c+"-opacitySetter"](m.get("a"),c,d),g=m.get("rgb")):(g=d.getElementsByTagName(c),
	g.length&&(g[0].opacity=1,g[0].type="solid"),g=b);return g},prepVML:function(a){var b=this.isIE8;a=a.join("");b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:A.prototype.html,path:function(a){var b={coordsize:"10 10"};c(a)?b.d=
	a:H(a)&&e(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,d){var f=this.symbol("circle");H(a)&&(d=a.r,b=a.y,a=a.x);f.isCircle=!0;f.r=d;return f.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,d,c,q){var f=this.createElement("img").attr({src:a});1<arguments.length&&f.attr({x:b,y:d,width:c,height:q});return f},createElement:function(a){return"rect"===a?this.symbol(a):A.prototype.createElement.call(this,
	a)},invertChild:function(a,b){var f=this;b=b.style;var c="IMG"===a.tagName&&a.style;E(a,{flip:"x",left:d(b.width)-(c?d(c.top):1),top:d(b.height)-(c?d(c.left):1),rotation:-90});l(a.childNodes,function(b){f.invertChild(b,a)})},symbols:{arc:function(a,b,d,c,q){var f=q.start,e=q.end,m=q.r||d||c;d=q.innerR;c=Math.cos(f);var r=Math.sin(f),g=Math.cos(e),D=Math.sin(e);if(0===e-f)return["x"];f=["wa",a-m,b-m,a+m,b+m,a+m*c,b+m*r,a+m*g,b+m*D];q.open&&!d&&f.push("e","M",a,b);f.push("at",a-d,b-d,a+d,b+d,a+d*g,
	b+d*D,a+d*c,b+d*r,"x","e");f.isArc=!0;return f},circle:function(a,b,d,c,q){q&&u(q.r)&&(d=c=2*q.r);q&&q.isCircle&&(a-=d/2,b-=c/2);return["wa",a,b,a+d,b+c,a+d,b+c/2,a+d,b+c/2,"e"]},rect:function(a,b,d,c,q){return A.prototype.symbols[u(q)&&q.r?"callout":"square"].call(0,a,b,d,c,q)}}},a.VMLRenderer=B=function(){this.init.apply(this,arguments)},B.prototype=b(A.prototype,z),a.Renderer=B);A.prototype.measureSpanWidth=function(a,b){var d=t.createElement("span");a=t.createTextNode(a);d.appendChild(a);E(d,
	b);this.box.appendChild(d);b=d.offsetWidth;n(d);return b}})(I);(function(a){function B(){var l=a.defaultOptions.global,k=t.moment;if(l.timezone){if(k)return function(a){return-k.tz(a,l.timezone).utcOffset()};a.error(25)}return l.useUTC&&l.getTimezoneOffset}function z(){var l=a.defaultOptions.global,k,e=l.useUTC,c=e?"getUTC":"get",p=e?"setUTC":"set";a.Date=k=l.Date||t.Date;k.hcTimezoneOffset=e&&l.timezoneOffset;k.hcGetTimezoneOffset=B();k.hcMakeTime=function(a,b,c,d,r,p){var m;e?(m=k.UTC.apply(0,arguments),
	m+=u(m)):m=(new k(a,b,n(c,1),n(d,0),n(r,0),n(p,0))).getTime();return m};E("Minutes Hours Day Date Month FullYear".split(" "),function(a){k["hcGet"+a]=c+a});E("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),function(a){k["hcSet"+a]=p+a})}var C=a.color,E=a.each,u=a.getTZOffset,h=a.merge,n=a.pick,t=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],
	lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.9/gfx/vml-radial-gradient.png"},
	chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",
	labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",
	top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:C("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
	pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(l){a.defaultOptions=h(!0,a.defaultOptions,l);z();
	return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;z()})(I);(function(a){var B=a.arrayMax,z=a.arrayMin,C=a.defined,E=a.destroyObjectProperties,u=a.each,h=a.erase,n=a.merge,t=a.pick;a.PlotLineOrBand=function(a,k){this.axis=a;k&&(this.options=k,this.id=k.id)};a.PlotLineOrBand.prototype={render:function(){var a=this,k=a.axis,e=k.horiz,c=a.options,p=c.label,h=a.label,b=c.to,m=c.from,d=c.value,r=C(m)&&C(b),A=C(d),v=a.svgElem,f=!v,
	y=[],G,F=c.color,q=t(c.zIndex,0),x=c.events,y={"class":"highcharts-plot-"+(r?"band ":"line ")+(c.className||"")},J={},u=k.chart.renderer,L=r?"bands":"lines",g=k.log2lin;k.isLog&&(m=g(m),b=g(b),d=g(d));A?(y={stroke:F,"stroke-width":c.width},c.dashStyle&&(y.dashstyle=c.dashStyle)):r&&(F&&(y.fill=F),c.borderWidth&&(y.stroke=c.borderColor,y["stroke-width"]=c.borderWidth));J.zIndex=q;L+="-"+q;(F=k[L])||(k[L]=F=u.g("plot-"+L).attr(J).add());f&&(a.svgElem=v=u.path().attr(y).add(F));if(A)y=k.getPlotLinePath(d,
	v.strokeWidth());else if(r)y=k.getPlotBandPath(m,b,c);else return;if(f&&y&&y.length){if(v.attr({d:y}),x)for(G in c=function(b){v.on(b,function(g){x[b].apply(a,[g])})},x)c(G)}else v&&(y?(v.show(),v.animate({d:y})):(v.hide(),h&&(a.label=h=h.destroy())));p&&C(p.text)&&y&&y.length&&0<k.width&&0<k.height&&!y.flat?(p=n({align:e&&r&&"center",x:e?!r&&4:10,verticalAlign:!e&&r&&"middle",y:e?r?16:10:r?6:-4,rotation:e&&!r&&90},p),this.renderLabel(p,y,r,q)):h&&h.hide();return a},renderLabel:function(a,k,e,c){var p=
	this.label,l=this.axis.chart.renderer;p||(p={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(e?"band":"line")+"-label "+(a.className||"")},p.zIndex=c,this.label=p=l.text(a.text,0,0,a.useHTML).attr(p).add(),p.css(a.style));c=[k[1],k[4],e?k[6]:k[1]];k=[k[2],k[5],e?k[7]:k[2]];e=z(c);l=z(k);p.align(a,!1,{x:e,y:l,width:B(c)-e,height:B(k)-l});p.show()},destroy:function(){h(this.axis.plotLinesAndBands,this);delete this.axis;E(this)}};a.AxisPlotLineOrBandExtension={getPlotBandPath:function(a,
	k){k=this.getPlotLinePath(k,null,null,!0);(a=this.getPlotLinePath(a,null,null,!0))&&k?(a.flat=a.toString()===k.toString(),a.push(k[4],k[5],k[1],k[2],"z")):a=null;return a},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(l,k){var e=(new a.PlotLineOrBand(this,l)).render(),c=this.userOptions;e&&(k&&(c[k]=c[k]||[],c[k].push(l)),this.plotLinesAndBands.push(e));return e},removePlotBandOrLine:function(a){for(var k=
	this.plotLinesAndBands,e=this.options,c=this.userOptions,p=k.length;p--;)k[p].id===a&&k[p].destroy();u([e.plotLines||[],c.plotLines||[],e.plotBands||[],c.plotBands||[]],function(c){for(p=c.length;p--;)c[p].id===a&&h(c,c[p])})}}})(I);(function(a){var B=a.correctFloat,z=a.defined,C=a.destroyObjectProperties,E=a.isNumber,u=a.merge,h=a.pick,n=a.deg2rad;a.Tick=function(a,l,k,e){this.axis=a;this.pos=l;this.type=k||"";this.isNew=!0;k||e||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,
	l=a.options,k=a.chart,e=a.categories,c=a.names,p=this.pos,n=l.labels,b=a.tickPositions,m=p===b[0],d=p===b[b.length-1],c=e?h(e[p],c[p],p):p,e=this.label,b=b.info,r;a.isDatetimeAxis&&b&&(r=l.dateTimeLabelFormats[b.higherRanks[p]||b.unitName]);this.isFirst=m;this.isLast=d;l=a.labelFormatter.call({axis:a,chart:k,isFirst:m,isLast:d,dateTimeLabelFormat:r,value:a.isLog?B(a.lin2log(c)):c});z(e)?e&&e.attr({text:l}):(this.labelLength=(this.label=e=z(l)&&n.enabled?k.renderer.text(l,0,0,n.useHTML).css(u(n.style)).add(a.labelGroup):
	null)&&e.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var l=this.axis,k=a.x,e=l.chart.chartWidth,c=l.chart.spacing,p=h(l.labelLeft,Math.min(l.pos,c[3])),c=h(l.labelRight,Math.max(l.pos+l.len,e-c[1])),t=this.label,b=this.rotation,m={left:0,center:.5,right:1}[l.labelAlign],d=t.getBBox().width,r=l.getSlotWidth(),A=r,v=1,f,y={};if(b)0>b&&k-m*d<p?f=Math.round(k/Math.cos(b*n)-p):0<b&&k+m*
	d>c&&(f=Math.round((e-k)/Math.cos(b*n)));else if(e=k+(1-m)*d,k-m*d<p?A=a.x+A*(1-m)-p:e>c&&(A=c-a.x+A*m,v=-1),A=Math.min(r,A),A<r&&"center"===l.labelAlign&&(a.x+=v*(r-A-m*(r-Math.min(d,A)))),d>A||l.autoRotation&&(t.styles||{}).width)f=A;f&&(y.width=f,(l.options.labels.style||{}).textOverflow||(y.textOverflow="ellipsis"),t.css(y))},getPosition:function(a,l,k,e){var c=this.axis,p=c.chart,h=e&&p.oldChartHeight||p.chartHeight;return{x:a?c.translate(l+k,null,null,e)+c.transB:c.left+c.offset+(c.opposite?
	(e&&p.oldChartWidth||p.chartWidth)-c.right-c.left:0),y:a?h-c.bottom+c.offset-(c.opposite?c.height:0):h-c.translate(l+k,null,null,e)-c.transB}},getLabelPosition:function(a,h,k,e,c,p,H,b){var m=this.axis,d=m.transA,r=m.reversed,l=m.staggerLines,v=m.tickRotCorr||{x:0,y:0},f=c.y;z(f)||(f=0===m.side?k.rotation?-8:-k.getBBox().height:2===m.side?v.y+8:Math.cos(k.rotation*n)*(v.y-k.getBBox(!1,0).height/2));a=a+c.x+v.x-(p&&e?p*d*(r?-1:1):0);h=h+f-(p&&!e?p*d*(r?1:-1):0);l&&(k=H/(b||1)%l,m.opposite&&(k=l-k-
	1),h+=m.labelOffset/l*k);return{x:a,y:Math.round(h)}},getMarkPath:function(a,h,k,e,c,p){return p.crispLine(["M",a,h,"L",a+(c?0:-k),h+(c?k:0)],e)},renderGridLine:function(a,h,k){var e=this.axis,c=e.options,p=this.gridLine,l={},b=this.pos,m=this.type,d=e.tickmarkOffset,r=e.chart.renderer,A=m?m+"Grid":"grid",v=c[A+"LineWidth"],f=c[A+"LineColor"],c=c[A+"LineDashStyle"];p||(l.stroke=f,l["stroke-width"]=v,c&&(l.dashstyle=c),m||(l.zIndex=1),a&&(l.opacity=0),this.gridLine=p=r.path().attr(l).addClass("highcharts-"+
	(m?m+"-":"")+"grid-line").add(e.gridGroup));if(!a&&p&&(a=e.getPlotLinePath(b+d,p.strokeWidth()*k,a,!0)))p[this.isNew?"attr":"animate"]({d:a,opacity:h})},renderMark:function(a,l,k){var e=this.axis,c=e.options,p=e.chart.renderer,n=this.type,b=n?n+"Tick":"tick",m=e.tickSize(b),d=this.mark,r=!d,A=a.x;a=a.y;var v=h(c[b+"Width"],!n&&e.isXAxis?1:0),c=c[b+"Color"];m&&(e.opposite&&(m[0]=-m[0]),r&&(this.mark=d=p.path().addClass("highcharts-"+(n?n+"-":"")+"tick").add(e.axisGroup),d.attr({stroke:c,"stroke-width":v})),
	d[r?"attr":"animate"]({d:this.getMarkPath(A,a,m[0],d.strokeWidth()*k,e.horiz,p),opacity:l}))},renderLabel:function(a,l,k,e){var c=this.axis,p=c.horiz,n=c.options,b=this.label,m=n.labels,d=m.step,r=c.tickmarkOffset,A=!0,v=a.x;a=a.y;b&&E(v)&&(b.xy=a=this.getLabelPosition(v,a,b,p,m,r,e,d),this.isFirst&&!this.isLast&&!h(n.showFirstLabel,1)||this.isLast&&!this.isFirst&&!h(n.showLastLabel,1)?A=!1:!p||c.isRadial||m.step||m.rotation||l||0===k||this.handleOverflow(a),d&&e%d&&(A=!1),A&&E(a.y)?(a.opacity=k,
	b[this.isNew?"attr":"animate"](a)):b.attr("y",-9999),this.isNew=!1)},render:function(a,l,k){var e=this.axis,c=e.horiz,p=this.getPosition(c,this.pos,e.tickmarkOffset,l),n=p.x,b=p.y,e=c&&n===e.pos+e.len||!c&&b===e.pos?-1:1;k=h(k,1);this.isActive=!0;this.renderGridLine(l,k,e);this.renderMark(p,k,e);this.renderLabel(p,l,k,a)},destroy:function(){C(this,this.axis)}}})(I);(function(a){var B=a.addEvent,z=a.animObject,C=a.arrayMax,E=a.arrayMin,u=a.AxisPlotLineOrBandExtension,h=a.color,n=a.correctFloat,t=a.defaultOptions,
	l=a.defined,k=a.deg2rad,e=a.destroyObjectProperties,c=a.each,p=a.extend,H=a.fireEvent,b=a.format,m=a.getMagnitude,d=a.grep,r=a.inArray,A=a.isArray,v=a.isNumber,f=a.isString,y=a.merge,G=a.normalizeTickInterval,F=a.pick,q=a.PlotLineOrBand,x=a.removeEvent,J=a.splat,K=a.syncTimeout,L=a.Tick;a.Axis=function(){this.init.apply(this,arguments)};a.Axis.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",
	year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},
	defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],
	x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var g=b.isX;this.chart=a;this.horiz=a.inverted?!g:g;this.isXAxis=g;this.coll=this.coll||(g?"xAxis":"yAxis");this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,c=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.reversed=d.reversed;this.visible=
	!1!==d.visible;this.zoomEnabled=!1!==d.zoomEnabled;this.hasNames="category"===c||!0===d.categories;this.categories=d.categories||this.hasNames;this.names=this.names||[];this.isLog="logarithmic"===c;this.isDatetimeAxis="datetime"===c;this.positiveValuesOnly=this.isLog&&!this.allowNegativeLog;this.isLinked=l(d.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;
	this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.stacksTouched=0;this.min=this.max=null;this.crosshair=F(d.crosshair,J(a.options.tooltip.crosshairs)[g?0:1],!1);var f;b=this.options.events;-1===r(this,a.axes)&&(g?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];a.inverted&&g&&void 0===this.reversed&&(this.reversed=!0);this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in b)B(this,f,b[f]);this.lin2log=d.linearToLogConverter||
	this.lin2log;this.isLog&&(this.val2lin=this.log2lin,this.lin2val=this.lin2log)},setOptions:function(a){this.options=y(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],y(t[this.coll],a))},defaultLabelFormatter:function(){var g=this.axis,d=this.value,c=g.categories,f=this.dateTimeLabelFormat,q=t.lang,e=q.numericSymbols,q=q.numericSymbolMagnitude||1E3,w=e&&e.length,
	m,r=g.options.labels.format,g=g.isLog?Math.abs(d):g.tickInterval;if(r)m=b(r,this);else if(c)m=d;else if(f)m=a.dateFormat(f,d);else if(w&&1E3<=g)for(;w--&&void 0===m;)c=Math.pow(q,w+1),g>=c&&0===10*d%c&&null!==e[w]&&0!==d&&(m=a.numberFormat(d/c,-1)+e[w]);void 0===m&&(m=1E4<=Math.abs(d)?a.numberFormat(d,-1):a.numberFormat(d,-1,void 0,""));return m},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();
	c(a.series,function(g){if(g.visible||!b.options.chart.ignoreHiddenSeries){var c=g.options,f=c.threshold,q;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=f&&(f=null);if(a.isXAxis)c=g.xData,c.length&&(g=E(c),v(g)||g instanceof Date||(c=d(c,function(a){return v(a)}),g=E(c)),a.dataMin=Math.min(F(a.dataMin,c[0]),g),a.dataMax=Math.max(F(a.dataMax,c[0]),C(c)));else if(g.getExtremes(),q=g.dataMax,g=g.dataMin,l(g)&&l(q)&&(a.dataMin=Math.min(F(a.dataMin,g),g),a.dataMax=Math.max(F(a.dataMax,q),q)),l(f)&&(a.threshold=
	f),!c.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,b,d,c,f,q){var g=this.linkedParent||this,D=1,e=0,m=c?g.oldTransA:g.transA;c=c?g.oldMin:g.min;var r=g.minPixelPadding;f=(g.isOrdinal||g.isBroken||g.isLog&&f)&&g.lin2val;m||(m=g.transA);d&&(D*=-1,e=g.len);g.reversed&&(D*=-1,e-=D*(g.sector||g.len));b?(a=(a*D+e-r)/m+c,f&&(a=g.lin2val(a))):(f&&(a=g.val2lin(a)),a=D*(a-c)*m+e+D*r+(v(q)?m*q:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,
	!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,d,c,f){var g=this.chart,q=this.left,D=this.top,e,m,r=d&&g.oldChartHeight||g.chartHeight,p=d&&g.oldChartWidth||g.chartWidth,x;e=this.transB;var k=function(a,b,g){if(a<b||a>g)c?a=Math.min(Math.max(b,a),g):x=!0;return a};f=F(f,this.translate(a,null,null,d));a=d=Math.round(f+e);e=m=Math.round(r-f-e);v(f)?this.horiz?(e=D,m=r-this.bottom,a=d=k(a,q,q+this.width)):(a=q,d=
	p-this.right,e=m=k(e,D,D+this.height)):x=!0;return x&&!c?null:g.renderer.crispLine(["M",a,e,"L",d,m],b||1)},getLinearTickPositions:function(a,b,d){var g,c=n(Math.floor(b/a)*a);d=n(Math.ceil(d/a)*a);var f=[];if(this.single)return[b];for(b=c;b<=d;){f.push(b);b=n(b+a);if(b===g)break;g=b}return f},getMinorTickPositions:function(){var a=this,b=a.options,d=a.tickPositions,f=a.minorTickInterval,q=[],e=a.pointRangePadding||0,m=a.min-e,e=a.max+e,r=e-m;if(r&&r/f<a.len/3)if(a.isLog)c(this.paddedTicks,function(b,
	g,d){g&&q.push.apply(q,a.getLogTickPositions(f,d[g-1],d[g],!0))});else if(a.isDatetimeAxis&&"auto"===b.minorTickInterval)q=q.concat(a.getTimeTicks(a.normalizeTimeTickInterval(f),m,e,b.startOfWeek));else for(b=m+(d[0]-m)%f;b<=e&&b!==q[0];b+=f)q.push(b);0!==q.length&&a.trimTicks(q);return q},adjustForMinRange:function(){var a=this.options,b=this.min,d=this.max,f,q=this.dataMax-this.dataMin>=this.minRange,e,m,r,p,v,x;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(l(a.min)||l(a.max)?this.minRange=
	null:(c(this.series,function(a){p=a.xData;for(m=v=a.xIncrement?1:p.length-1;0<m;m--)if(r=p[m]-p[m-1],void 0===e||r<e)e=r}),this.minRange=Math.min(5*e,this.dataMax-this.dataMin)));d-b<this.minRange&&(x=this.minRange,f=(x-d+b)/2,f=[b-f,F(a.min,b-f)],q&&(f[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=C(f),d=[b+x,F(a.max,b+x)],q&&(d[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),d=E(d),d-b<x&&(f[0]=d-x,f[1]=F(a.min,d-x),b=C(f)));this.min=b;this.max=d},getClosest:function(){var a;this.categories?
	a=1:c(this.series,function(b){var g=b.closestPointRange,d=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&l(g)&&d&&(a=l(a)?Math.min(a,g):g)});return a},nameToX:function(a){var b=A(this.categories),g=b?this.categories:this.names,d=a.options.x,c;a.series.requireSorting=!1;l(d)||(d=!1===this.options.uniqueNames?a.series.autoIncrement():r(a.name,g));-1===d?b||(c=g.length):c=d;this.names[c]=a.name;return c},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=
	0,this.minRange=void 0,c(this.series||[],function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)b.processData(),b.generatePoints();c(b.points,function(g,d){var c;g.options&&(c=a.nameToX(g),c!==g.x&&(g.x=c,b.xData[d]=c))})}))},setAxisTranslation:function(a){var b=this,g=b.max-b.min,d=b.axisPointRange||0,q,e=0,m=0,r=b.linkedParent,p=!!b.categories,v=b.transA,x=b.isXAxis;if(x||p||d)q=b.getClosest(),r?(e=r.minPointOffset,m=r.pointRangePadding):c(b.series,function(a){var g=p?1:x?F(a.options.pointRange,
	q,0):b.axisPointRange||0;a=a.options.pointPlacement;d=Math.max(d,g);b.single||(e=Math.max(e,f(a)?0:g/2),m=Math.max(m,"on"===a?0:g))}),r=b.ordinalSlope&&q?b.ordinalSlope/q:1,b.minPointOffset=e*=r,b.pointRangePadding=m*=r,b.pointRange=Math.min(d,g),x&&(b.closestPointRange=q);a&&(b.oldTransA=v);b.translationSlope=b.transA=v=b.options.staticScale||b.len/(g+m||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=v*e},minFromRange:function(){return this.max-this.range},setTickInterval:function(b){var g=
	this,d=g.chart,f=g.options,q=g.isLog,e=g.log2lin,r=g.isDatetimeAxis,p=g.isXAxis,x=g.isLinked,k=f.maxPadding,h=f.minPadding,y=f.tickInterval,A=f.tickPixelInterval,J=g.categories,t=g.threshold,u=g.softThreshold,L,K,z,B;r||J||x||this.getTickAmount();z=F(g.userMin,f.min);B=F(g.userMax,f.max);x?(g.linkedParent=d[g.coll][f.linkedTo],d=g.linkedParent.getExtremes(),g.min=F(d.min,d.dataMin),g.max=F(d.max,d.dataMax),f.type!==g.linkedParent.options.type&&a.error(11,1)):(!u&&l(t)&&(g.dataMin>=t?(L=t,h=0):g.dataMax<=
	t&&(K=t,k=0)),g.min=F(z,L,g.dataMin),g.max=F(B,K,g.dataMax));q&&(g.positiveValuesOnly&&!b&&0>=Math.min(g.min,F(g.dataMin,g.min))&&a.error(10,1),g.min=n(e(g.min),15),g.max=n(e(g.max),15));g.range&&l(g.max)&&(g.userMin=g.min=z=Math.max(g.min,g.minFromRange()),g.userMax=B=g.max,g.range=null);H(g,"foundExtremes");g.beforePadding&&g.beforePadding();g.adjustForMinRange();!(J||g.axisPointRange||g.usePercentage||x)&&l(g.min)&&l(g.max)&&(e=g.max-g.min)&&(!l(z)&&h&&(g.min-=e*h),!l(B)&&k&&(g.max+=e*k));v(f.floor)?
	g.min=Math.max(g.min,f.floor):v(f.softMin)&&(g.min=Math.min(g.min,f.softMin));v(f.ceiling)?g.max=Math.min(g.max,f.ceiling):v(f.softMax)&&(g.max=Math.max(g.max,f.softMax));u&&l(g.dataMin)&&(t=t||0,!l(z)&&g.min<t&&g.dataMin>=t?g.min=t:!l(B)&&g.max>t&&g.dataMax<=t&&(g.max=t));g.tickInterval=g.min===g.max||void 0===g.min||void 0===g.max?1:x&&!y&&A===g.linkedParent.options.tickPixelInterval?y=g.linkedParent.tickInterval:F(y,this.tickAmount?(g.max-g.min)/Math.max(this.tickAmount-1,1):void 0,J?1:(g.max-
	g.min)*A/Math.max(g.len,A));p&&!b&&c(g.series,function(a){a.processData(g.min!==g.oldMin||g.max!==g.oldMax)});g.setAxisTranslation(!0);g.beforeSetTickPositions&&g.beforeSetTickPositions();g.postProcessTickInterval&&(g.tickInterval=g.postProcessTickInterval(g.tickInterval));g.pointRange&&!y&&(g.tickInterval=Math.max(g.pointRange,g.tickInterval));b=F(f.minTickInterval,g.isDatetimeAxis&&g.closestPointRange);!y&&g.tickInterval<b&&(g.tickInterval=b);r||q||y||(g.tickInterval=G(g.tickInterval,null,m(g.tickInterval),
	F(f.allowDecimals,!(.5<g.tickInterval&&5>g.tickInterval&&1E3<g.max&&9999>g.max)),!!this.tickAmount));this.tickAmount||(g.tickInterval=g.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,d=a.tickPositions,c=a.tickPositioner,f=a.startOnTick,q=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.single=
	this.min===this.max&&l(this.min)&&!this.tickAmount&&!1!==a.allowDecimals;this.tickPositions=b=d&&d.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,c&&(c=c.apply(this,
	[this.min,this.max])))&&(this.tickPositions=b=c);this.paddedTicks=b.slice(0);this.trimTicks(b,f,q);this.isLinked||(this.single&&(this.min-=.5,this.max+=.5),d||c||this.adjustTickAmount())},trimTicks:function(a,b,d){var g=a[0],c=a[a.length-1],f=this.minPointOffset||0;if(!this.isLinked){if(b)this.min=g;else for(;this.min-f>a[0];)a.shift();if(d)this.max=c;else for(;this.max+f<a[a.length-1];)a.pop();0===a.length&&l(g)&&a.push((c+g)/2)}},alignToOthers:function(){var a={},b,d=this.options;!1===this.chart.options.chart.alignTicks||
	!1===d.alignTicks||this.isLog||c(this.chart[this.coll],function(g){var d=g.options,d=[g.horiz?d.left:d.top,d.width,d.height,d.pane].join();g.series.length&&(a[d]?b=!0:a[d]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,d=a.tickPixelInterval;!l(a.tickInterval)&&this.len<d&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/d)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=
	this.tickInterval,b=this.tickPositions,d=this.tickAmount,c=this.finalTickAmt,f=b&&b.length;if(f<d){for(;b.length<d;)b.push(n(b[b.length-1]+a));this.transA*=(f-1)/(d-1);this.max=b[b.length-1]}else f>d&&(this.tickInterval*=2,this.setTickPositions());if(l(c)){for(a=d=b.length;a--;)(3===c&&1===a%2||2>=c&&0<a&&a<d-1)&&b.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;
	c(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,
	b,d,f,q){var g=this,e=g.chart;d=F(d,!0);c(g.series,function(a){delete a.kdTree});q=p(q,{min:a,max:b});H(g,"setExtremes",q,function(){g.userMin=a;g.userMax=b;g.eventArgs=q;d&&e.redraw(f)})},zoom:function(a,b){var g=this.dataMin,d=this.dataMax,c=this.options,f=Math.min(g,F(c.min,g)),c=Math.max(d,F(c.max,d));if(a!==this.min||b!==this.max)this.allowZoomOutside||(l(g)&&(a<f&&(a=f),a>c&&(a=c)),l(d)&&(b<f&&(b=f),b>c&&(b=c))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});
	return!0},setAxisSize:function(){var a=this.chart,b=this.options,d=b.offsets||[0,0,0,0],c=this.horiz,f=F(b.width,a.plotWidth-d[3]+d[1]),q=F(b.height,a.plotHeight-d[0]+d[2]),e=F(b.top,a.plotTop+d[0]),b=F(b.left,a.plotLeft+d[3]),d=/%$/;d.test(q)&&(q=Math.round(parseFloat(q)/100*a.plotHeight));d.test(e)&&(e=Math.round(parseFloat(e)/100*a.plotHeight+a.plotTop));this.left=b;this.top=e;this.width=f;this.height=q;this.bottom=a.chartHeight-q-e;this.right=a.chartWidth-f-b;this.len=Math.max(c?f:q,0);this.pos=
	c?b:e},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?n(b(this.min)):this.min,max:a?n(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,g=this.lin2log,d=b?g(this.min):this.min,b=b?g(this.max):this.max;null===a?a=d:d>a?a=d:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(F(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},
	tickSize:function(a){var b=this.options,g=b[a+"Length"],d=F(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(d&&g)return"inside"===b[a+"Position"]&&(g=-g),[g,d]},labelMetrics:function(){return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[0]&&this.ticks[0].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,d=this.tickInterval,f=d,q=this.len/(((this.categories?1:0)+this.max-this.min)/d),e,m=a.rotation,r=this.labelMetrics(),p,x=
	Number.MAX_VALUE,v,h=function(a){a/=q||1;a=1<a?Math.ceil(a):1;return a*d};b?(v=!a.staggerLines&&!a.step&&(l(m)?[m]:q<F(a.autoRotationLimit,80)&&a.autoRotation))&&c(v,function(a){var b;if(a===m||a&&-90<=a&&90>=a)p=h(Math.abs(r.h/Math.sin(k*a))),b=p+Math.abs(a/360),b<x&&(x=b,e=a,f=p)}):a.step||(f=h(r.h));this.autoRotation=v;this.labelRotation=F(e,m);return f},getSlotWidth:function(){var a=this.chart,b=this.horiz,d=this.options.labels,c=Math.max(this.tickPositions.length-(this.categories?0:1),1),f=a.margin[3];
	return b&&2>(d.step||0)&&!d.rotation&&(this.staggerLines||1)*this.len/c||!b&&(f&&f-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,d=this.tickPositions,q=this.ticks,e=this.options.labels,m=this.horiz,r=this.getSlotWidth(),p=Math.max(1,Math.round(r-2*(e.padding||5))),x={},v=this.labelMetrics(),k=e.style&&e.style.textOverflow,h,l=0,A,n;f(e.rotation)||(x.rotation=e.rotation||0);c(d,function(a){(a=q[a])&&a.labelLength>l&&(l=a.labelLength)});this.maxLabelLength=
	l;if(this.autoRotation)l>p&&l>v.h?x.rotation=this.labelRotation:this.labelRotation=0;else if(r&&(h={width:p+"px"},!k))for(h.textOverflow="clip",A=d.length;!m&&A--;)if(n=d[A],p=q[n].label)p.styles&&"ellipsis"===p.styles.textOverflow?p.css({textOverflow:"clip"}):q[n].labelLength>r&&p.css({width:r+"px"}),p.getBBox().height>this.len/d.length-(v.h-v.f)&&(p.specCss={textOverflow:"ellipsis"});x.rotation&&(h={width:(l>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},k||(h.textOverflow="ellipsis"));
	if(this.labelAlign=e.align||this.autoLabelAlign(this.labelRotation))x.align=this.labelAlign;c(d,function(a){var b=(a=q[a])&&a.label;b&&(b.attr(x),h&&b.css(y(h,b.specCss)),delete b.specCss,a.rotation=x.rotation)});this.tickRotCorr=b.rotCorr(v.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||l(this.min)&&l(this.max)&&!!this.tickPositions},addTitle:function(a){var b=this.chart.renderer,d=this.horiz,g=this.opposite,c=this.options.title,f;this.axisTitle||((f=c.textAlign)||
	(f=(d?{low:"left",middle:"center",high:"right"}:{low:g?"right":"left",middle:"center",high:g?"left":"right"})[c.align]),this.axisTitle=b.text(c.text,0,0,c.useHTML).attr({zIndex:7,rotation:c.rotation||0,align:f}).addClass("highcharts-axis-title").css(c.style).add(this.axisGroup),this.axisTitle.isNew=!0);this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new L(this,a)},getOffset:function(){var a=this,b=a.chart,d=b.renderer,f=a.options,q=a.tickPositions,
	e=a.ticks,m=a.horiz,r=a.side,p=b.inverted?[1,0,3,2][r]:r,x,v,h=0,k,y=0,A=f.title,n=f.labels,G=0,J=b.axisOffset,b=b.clipOffset,t=[-1,1,1,-1][r],u,H=f.className,L=a.axisParent,K=this.tickSize("tick");x=a.hasData();a.showAxis=v=x||F(f.showEmpty,!0);a.staggerLines=a.horiz&&n.staggerLines;a.axisGroup||(a.gridGroup=d.g("grid").attr({zIndex:f.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(H||"")).add(L),a.axisGroup=d.g("axis").attr({zIndex:f.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+
	" "+(H||"")).add(L),a.labelGroup=d.g("axis-labels").attr({zIndex:n.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(H||"")).add(L));if(x||a.isLinked)c(q,function(b,d){a.generateTick(b,d)}),a.renderUnsquish(),!1===n.reserveSpace||0!==r&&2!==r&&{1:"left",3:"right"}[r]!==a.labelAlign&&"center"!==a.labelAlign||c(q,function(a){G=Math.max(e[a].getLabelSize(),G)}),a.staggerLines&&(G*=a.staggerLines,a.labelOffset=G*(a.opposite?-1:1));else for(u in e)e[u].destroy(),delete e[u];A&&A.text&&
	!1!==A.enabled&&(a.addTitle(v),v&&(h=a.axisTitle.getBBox()[m?"height":"width"],k=A.offset,y=l(k)?0:F(A.margin,m?5:10)));a.renderLine();a.offset=t*F(f.offset,J[r]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};d=0===r?-a.labelMetrics().h:2===r?a.tickRotCorr.y:0;y=Math.abs(G)+y;G&&(y=y-d+t*(m?F(n.y,a.tickRotCorr.y+8*t):n.x));a.axisTitleMargin=F(k,y);J[r]=Math.max(J[r],a.axisTitleMargin+h+t*a.offset,y,x&&q.length&&K?K[0]+t*a.offset:0);f=f.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[p]=Math.max(b[p],
	f)},getLinePath:function(a){var b=this.chart,d=this.opposite,g=this.offset,f=this.horiz,c=this.left+(d?this.width:0)+g,g=b.chartHeight-this.bottom-(d?this.height:0)+g;d&&(a*=-1);return b.renderer.crispLine(["M",f?this.left:c,f?g:this.top,"L",f?b.chartWidth-this.right:c,f?g:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,
	zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,d=this.top,f=this.len,c=this.options.title,q=a?b:d,e=this.opposite,m=this.offset,r=c.x||0,p=c.y||0,x=this.chart.renderer.fontMetrics(c.style&&c.style.fontSize,this.axisTitle).f,f={low:q+(a?0:f),middle:q+f/2,high:q+(a?f:0)}[c.align],b=(a?d+this.height:b)+(a?1:-1)*(e?-1:1)*this.axisTitleMargin+(2===this.side?x:0);return{x:a?f+r:b+(e?this.width:0)+m+r,y:a?b+p-(e?this.height:0)+m:f+p}},renderMinorTick:function(a){var b=this.chart.hasRendered&&
	v(this.oldMin),d=this.minorTicks;d[a]||(d[a]=new L(this,a,"minor"));b&&d[a].isNew&&d[a].render(null,!0);d[a].render(null,!1,1)},renderTick:function(a,b){var d=this.isLinked,g=this.ticks,f=this.chart.hasRendered&&v(this.oldMin);if(!d||a>=this.min&&a<=this.max)g[a]||(g[a]=new L(this,a)),f&&g[a].isNew&&g[a].render(b,!0,.1),g[a].render(b)},render:function(){var a=this,b=a.chart,d=a.options,f=a.isLog,e=a.lin2log,m=a.isLinked,r=a.tickPositions,p=a.axisTitle,x=a.ticks,v=a.minorTicks,h=a.alternateBands,k=
	d.stackLabels,y=d.alternateGridColor,l=a.tickmarkOffset,A=a.axisLine,n=a.showAxis,G=z(b.renderer.globalAnimation),J,t;a.labelEdge.length=0;a.overlap=!1;c([x,v,h],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||m)a.minorTickInterval&&!a.categories&&c(a.getMinorTickPositions(),function(b){a.renderMinorTick(b)}),r.length&&(c(r,function(b,d){a.renderTick(b,d)}),l&&(0===a.min||a.single)&&(x[-1]||(x[-1]=new L(a,-1,null,!0)),x[-1].render(-1))),y&&c(r,function(d,g){t=void 0!==r[g+1]?r[g+1]+
	l:a.max-l;0===g%2&&d<a.max&&t<=a.max+(b.polar?-l:l)&&(h[d]||(h[d]=new q(a)),J=d+l,h[d].options={from:f?e(J):J,to:f?e(t):t,color:y},h[d].render(),h[d].isActive=!0)}),a._addedPlotLB||(c((d.plotLines||[]).concat(d.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0);c([x,v,h],function(a){var d,g,f=[],c=G.duration;for(d in a)a[d].isActive||(a[d].render(d,!1,0),a[d].isActive=!1,f.push(d));K(function(){for(g=f.length;g--;)a[f[g]]&&!a[f[g]].isActive&&(a[f[g]].destroy(),delete a[f[g]])},
	a!==h&&b.hasRendered&&c?c:0)});A&&(A[A.isPlaced?"animate":"attr"]({d:this.getLinePath(A.strokeWidth())}),A.isPlaced=!0,A[n?"show":"hide"](!0));p&&n&&(p[p.isNew?"attr":"animate"](a.getTitlePosition()),p.isNew=!1);k&&k.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&(this.render(),c(this.plotLinesAndBands,function(a){a.render()}));c(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,
	d=b.stacks,g,f=b.plotLinesAndBands,q;a||x(b);for(g in d)e(d[g]),d[g]=null;c([b.ticks,b.minorTicks,b.alternateBands],function(a){e(a)});if(f)for(a=f.length;a--;)f[a].destroy();c("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){b[a]&&(b[a]=b[a].destroy())});for(q in b)b.hasOwnProperty(q)&&-1===r(q,b.keepProps)&&delete b[q]},drawCrosshair:function(a,b){var d,f=this.crosshair,g=F(f.snap,!0),c,q=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&
	!1!==(l(b)||!g)?(g?l(b)&&(c=this.isXAxis?b.plotX:this.len-b.plotY):c=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),l(c)&&(d=this.getPlotLinePath(b&&(this.isXAxis?b.x:F(b.stackY,b.y)),null,null,null,c)||null),l(d)?(b=this.categories&&!this.isRadial,q||(this.cross=q=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+f.className).attr({zIndex:F(f.zIndex,2)}).add(),q.attr({stroke:f.color||(b?h("#ccd6eb").setOpacity(.25).get():"#cccccc"),
	"stroke-width":F(f.width,1)}),f.dashStyle&&q.attr({dashstyle:f.dashStyle})),q.show().attr({d:d}),b&&!f.width&&q.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}};p(a.Axis.prototype,u)})(I);(function(a){var B=a.Axis,z=a.Date,C=a.dateFormat,E=a.defaultOptions,u=a.defined,h=a.each,n=a.extend,t=a.getMagnitude,l=a.getTZOffset,k=a.normalizeTickInterval,e=a.pick,c=a.timeUnits;B.prototype.getTimeTicks=function(a,
	k,b,m){var d=[],r={},p=E.global.useUTC,v,f=new z(k-Math.abs(l(k))),y=z.hcMakeTime,G=a.unitRange,t=a.count,q;if(u(k)){f[z.hcSetMilliseconds](G>=c.second?0:t*Math.floor(f.getMilliseconds()/t));if(G>=c.second)f[z.hcSetSeconds](G>=c.minute?0:t*Math.floor(f.getSeconds()/t));if(G>=c.minute)f[z.hcSetMinutes](G>=c.hour?0:t*Math.floor(f[z.hcGetMinutes]()/t));if(G>=c.hour)f[z.hcSetHours](G>=c.day?0:t*Math.floor(f[z.hcGetHours]()/t));if(G>=c.day)f[z.hcSetDate](G>=c.month?1:t*Math.floor(f[z.hcGetDate]()/t));
	G>=c.month&&(f[z.hcSetMonth](G>=c.year?0:t*Math.floor(f[z.hcGetMonth]()/t)),v=f[z.hcGetFullYear]());if(G>=c.year)f[z.hcSetFullYear](v-v%t);if(G===c.week)f[z.hcSetDate](f[z.hcGetDate]()-f[z.hcGetDay]()+e(m,1));v=f[z.hcGetFullYear]();m=f[z.hcGetMonth]();var x=f[z.hcGetDate](),J=f[z.hcGetHours]();if(z.hcTimezoneOffset||z.hcGetTimezoneOffset)q=(!p||!!z.hcGetTimezoneOffset)&&(b-k>4*c.month||l(k)!==l(b)),f=f.getTime(),f=new z(f+l(f));p=f.getTime();for(k=1;p<b;)d.push(p),p=G===c.year?y(v+k*t,0):G===c.month?
	y(v,m+k*t):!q||G!==c.day&&G!==c.week?q&&G===c.hour?y(v,m,x,J+k*t):p+G*t:y(v,m,x+k*t*(G===c.day?1:7)),k++;d.push(p);G<=c.hour&&1E4>d.length&&h(d,function(a){0===a%18E5&&"000000000"===C("%H%M%S%L",a)&&(r[a]="day")})}d.info=n(a,{higherRanks:r,totalRange:G*t});return d};B.prototype.normalizeTimeTickInterval=function(a,e){var b=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,
	3,4,6]],["year",null]];e=b[b.length-1];var m=c[e[0]],d=e[1],r;for(r=0;r<b.length&&!(e=b[r],m=c[e[0]],d=e[1],b[r+1]&&a<=(m*d[d.length-1]+c[b[r+1][0]])/2);r++);m===c.year&&a<5*m&&(d=[1,2,5]);a=k(a/m,d,"year"===e[0]?Math.max(t(a/m),1):1);return{unitRange:m,count:a,unitName:e[0]}}})(I);(function(a){var B=a.Axis,z=a.getMagnitude,C=a.map,E=a.normalizeTickInterval,u=a.pick;B.prototype.getLogTickPositions=function(a,n,t,l){var k=this.options,e=this.len,c=this.lin2log,p=this.log2lin,h=[];l||(this._minorAutoInterval=
	null);if(.5<=a)a=Math.round(a),h=this.getLinearTickPositions(a,n,t);else if(.08<=a)for(var e=Math.floor(n),b,m,d,r,A,k=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];e<t+1&&!A;e++)for(m=k.length,b=0;b<m&&!A;b++)d=p(c(e)*k[b]),d>n&&(!l||r<=t)&&void 0!==r&&h.push(r),r>t&&(A=!0),r=d;else n=c(n),t=c(t),a=k[l?"minorTickInterval":"tickInterval"],a=u("auto"===a?null:a,this._minorAutoInterval,k.tickPixelInterval/(l?5:1)*(t-n)/((l?e/this.tickPositions.length:e)||1)),a=E(a,null,z(a)),h=C(this.getLinearTickPositions(a,
	n,t),p),l||(this._minorAutoInterval=a/5);l||(this.tickInterval=a);return h};B.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};B.prototype.lin2log=function(a){return Math.pow(10,a)}})(I);(function(a){var B=a.dateFormat,z=a.each,C=a.extend,E=a.format,u=a.isNumber,h=a.map,n=a.merge,t=a.pick,l=a.splat,k=a.syncTimeout,e=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,e){this.chart=a;this.options=e;this.crosshairs=[];this.now={x:0,y:0};
	this.isHidden=!0;this.split=e.split&&!a.inverted;this.shared=e.shared||this.split},cleanSplit:function(a){z(this.chart.series,function(c){var e=c&&c.tt;e&&(!e.isActive||a?c.tt=e.destroy():e.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,e=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,e.shape||"callout",null,null,e.useHTML,null,"tooltip").attr({padding:e.padding,r:e.borderRadius}),this.label.attr({fill:e.backgroundColor,"stroke-width":e.borderWidth}).css(e.style).shadow(e.shadow)),
	this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();this.init(this.chart,n(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,e,k,b){var c=this,d=c.now,r=!1!==c.options.animation&&!c.isHidden&&(1<Math.abs(a-d.x)||1<Math.abs(e-d.y)),p=c.followPointer||1<c.len;C(d,{x:r?(2*
	d.x+a)/3:a,y:r?(d.y+e)/2:e,anchorX:p?void 0:r?(2*d.anchorX+k)/3:k,anchorY:p?void 0:r?(d.anchorY+b)/2:b});c.getLabel().attr(d);r&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){c&&c.move(a,e,k,b)},32))},hide:function(a){var c=this;clearTimeout(this.hideTimer);a=t(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=k(function(){c.getLabel()[a?"fadeOut":"hide"]();c.isHidden=!0},a))},getAnchor:function(a,e){var c,b=this.chart,m=b.inverted,d=b.plotTop,r=b.plotLeft,
	p=0,v=0,f,k;a=l(a);c=a[0].tooltipPos;this.followPointer&&e&&(void 0===e.chartX&&(e=b.pointer.normalize(e)),c=[e.chartX-b.plotLeft,e.chartY-d]);c||(z(a,function(a){f=a.series.yAxis;k=a.series.xAxis;p+=a.plotX+(!m&&k?k.left-r:0);v+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!m&&f?f.top-d:0)}),p/=a.length,v/=a.length,c=[m?b.plotWidth-v:p,this.shared&&!m&&1<a.length&&e?e.chartY-d:m?b.plotHeight-p:v]);return h(c,Math.round)},getPosition:function(a,e,k){var b=this.chart,c=this.distance,d={},r=k.h||0,
	p,v=["y",b.chartHeight,e,k.plotY+b.plotTop,b.plotTop,b.plotTop+b.plotHeight],f=["x",b.chartWidth,a,k.plotX+b.plotLeft,b.plotLeft,b.plotLeft+b.plotWidth],h=!this.followPointer&&t(k.ttBelow,!b.inverted===!!k.negative),l=function(a,b,f,g,q,e){var m=f<g-c,x=g+c+f<b,v=g-c-f;g+=c;if(h&&x)d[a]=g;else if(!h&&m)d[a]=v;else if(m)d[a]=Math.min(e-f,0>v-r?v:v-r);else if(x)d[a]=Math.max(q,g+r+f>b?g:g+r);else return!1},n=function(a,b,f,g){var q;g<c||g>b-c?q=!1:d[a]=g<f/2?1:g>b-f/2?b-f-2:g-f/2;return q},q=function(a){var b=
	v;v=f;f=b;p=a},x=function(){!1!==l.apply(0,v)?!1!==n.apply(0,f)||p||(q(!0),x()):p?d.x=d.y=0:(q(!0),x())};(b.inverted||1<this.len)&&q();x();return d},defaultFormatter:function(a){var c=this.points||l(this),e;e=[a.tooltipFooterHeaderFormatter(c[0])];e=e.concat(a.bodyFormatter(c));e.push(a.tooltipFooterHeaderFormatter(c[0],!0));return e},refresh:function(a,e){var c,b=this.options,m,d=a,r,p={},v=[];c=b.formatter||this.defaultFormatter;var p=this.shared,f;clearTimeout(this.hideTimer);this.followPointer=
	l(d)[0].series.tooltipOptions.followPointer;r=this.getAnchor(d,e);e=r[0];m=r[1];!p||d.series&&d.series.noSharedTooltip?p=d.getLabelConfig():(z(d,function(a){a.setState("hover");v.push(a.getLabelConfig())}),p={x:d[0].category,y:d[0].y},p.points=v,d=d[0]);this.len=v.length;p=c.call(p,this);f=d.series;this.distance=t(f.tooltipOptions.distance,16);!1===p?this.hide():(c=this.getLabel(),this.isHidden&&c.attr({opacity:1}).show(),this.split?this.renderSplit(p,a):(c.attr({text:p&&p.join?p.join(""):p}),c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+
	t(d.colorIndex,f.colorIndex)),c.attr({stroke:b.borderColor||d.color||f.color||"#666666"}),this.updatePosition({plotX:e,plotY:m,negative:d.negative,ttBelow:d.ttBelow,h:r[2]||0})),this.isHidden=!1)},renderSplit:function(c,e){var p=this,b=[],m=this.chart,d=m.renderer,r=!0,k=this.options,v,f=this.getLabel();z(c.slice(0,e.length+1),function(a,c){c=e[c-1]||{isHeader:!0,plotX:e[0].plotX};var h=c.series||p,q=h.tt,x=c.series||{},l="highcharts-color-"+t(c.colorIndex,x.colorIndex,"none");q||(h.tt=q=d.label(null,
	null,null,"callout").addClass("highcharts-tooltip-box "+l).attr({padding:k.padding,r:k.borderRadius,fill:k.backgroundColor,stroke:c.color||x.color||"#333333","stroke-width":k.borderWidth}).add(f));q.isActive=!0;q.attr({text:a});q.css(k.style);a=q.getBBox();x=a.width+q.strokeWidth();c.isHeader?(v=a.height,x=Math.max(0,Math.min(c.plotX+m.plotLeft-x/2,m.chartWidth-x))):x=c.plotX+m.plotLeft-t(k.distance,16)-x;0>x&&(r=!1);a=(c.series&&c.series.yAxis&&c.series.yAxis.pos)+(c.plotY||0);a-=m.plotTop;b.push({target:c.isHeader?
	m.plotHeight+v:a,rank:c.isHeader?1:0,size:h.tt.getBBox().height+1,point:c,x:x,tt:q})});this.cleanSplit();a.distribute(b,m.plotHeight+v);z(b,function(a){var b=a.point,d=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:r||b.isHeader?a.x:b.plotX+m.plotLeft+t(k.distance,16),y:a.pos+m.plotTop,anchorX:b.isHeader?b.plotX+m.plotLeft:b.plotX+d.xAxis.pos,anchorY:b.isHeader?a.pos+m.plotTop-15:b.plotY+d.yAxis.pos})})},updatePosition:function(a){var c=this.chart,e=this.getLabel(),e=(this.options.positioner||
	this.getPosition).call(this,e.width,e.height,a);this.move(Math.round(e.x),Math.round(e.y||0),a.plotX+c.plotLeft,a.plotY+c.plotTop)},getDateFormat:function(a,p,k,b){var c=B("%m-%d %H:%M:%S.%L",p),d,r,h={millisecond:15,second:12,minute:9,hour:6,day:3},v="millisecond";for(r in e){if(a===e.week&&+B("%w",p)===k&&"00:00:00.000"===c.substr(6)){r="week";break}if(e[r]>a){r=v;break}if(h[r]&&c.substr(h[r])!=="01-01 00:00:00.000".substr(h[r]))break;"week"!==r&&(v=r)}r&&(d=b[r]);return d},getXDateFormat:function(a,
	e,k){e=e.dateTimeLabelFormats;var b=k&&k.closestPointRange;return(b?this.getDateFormat(b,a.x,k.options.startOfWeek,e):e.day)||e.year},tooltipFooterHeaderFormatter:function(a,e){var c=e?"footer":"header";e=a.series;var b=e.tooltipOptions,m=b.xDateFormat,d=e.xAxis,r=d&&"datetime"===d.options.type&&u(a.key),c=b[c+"Format"];r&&!m&&(m=this.getXDateFormat(a,b,d));r&&m&&(c=c.replace("{point.key}","{point.key:"+m+"}"));return E(c,{point:a,series:e})},bodyFormatter:function(a){return h(a,function(a){var c=
	a.series.tooltipOptions;return(c.pointFormatter||a.point.tooltipFormatter).call(a.point,c.pointFormat)})}}})(I);(function(a){var B=a.addEvent,z=a.attr,C=a.charts,E=a.color,u=a.css,h=a.defined,n=a.doc,t=a.each,l=a.extend,k=a.fireEvent,e=a.offset,c=a.pick,p=a.removeEvent,H=a.splat,b=a.Tooltip,m=a.win;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,e){this.options=e;this.chart=a;this.runChartClick=e.chart.events&&!!e.chart.events.click;this.pinchDown=[];this.lastValidTouch=
	{};b&&e.tooltip.enabled&&(a.tooltip=new b(a,e.tooltip),this.followTouchMove=c(e.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,d=b.options.chart,e=d.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(e=c(d.pinchType,e));this.zoomX=a=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=a&&!b||e&&b;this.zoomVert=e&&!b||a&&b;this.hasZoom=a||e},normalize:function(a,b){var d,c;a=a||m.event;a.target||(a.target=a.srcElement);c=a.touches?a.touches.length?a.touches.item(0):
	a.changedTouches[0]:a;b||(this.chartPosition=b=e(this.chart.container));void 0===c.pageX?(d=Math.max(a.x,a.clientX-b.left),b=a.y):(d=c.pageX-b.left,b=c.pageY-b.top);return l(a,{chartX:Math.round(d),chartY:Math.round(b)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};t(this.chart.axes,function(d){b[d.isXAxis?"xAxis":"yAxis"].push({axis:d,value:d.toValue(a[d.horiz?"chartX":"chartY"])})});return b},getKDPoints:function(a,b,e){var d=[],f,m,r;t(a,function(a){f=a.noSharedTooltip&&b;m=!b&&a.directTouch;
	a.visible&&!f&&!m&&c(a.options.enableMouseTracking,!0)&&(r=a.searchPoint(e,!f&&1===a.kdDimensions))&&r.series&&d.push(r)});d.sort(function(a,d){var f=a.distX-d.distX,c=a.dist-d.dist,e=(d.series.group&&d.series.group.zIndex)-(a.series.group&&a.series.group.zIndex);return 0!==f&&b?f:0!==c?c:0!==e?e:a.series.index>d.series.index?-1:1});if(b)for(a=d.length;a--;)(d[a].x!==d[0].x||d[a].series.noSharedTooltip)&&d.splice(a,1);return d},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=
	a.parentNode;return b},getHoverData:function(a,b,e,m,f,k){var d=a;a=b;var r;if(m)f?(r=[],t(e,function(a){var b=a.noSharedTooltip&&f,e=!f&&a.directTouch;a.visible&&!b&&!e&&c(a.options.enableMouseTracking,!0)&&(a=a.searchKDTree({clientX:d.clientX,plotY:d.plotY},!b&&1===a.kdDimensions))&&a.series&&r.push(a)}),0===r.length&&(r=[d])):r=[d];else{if(a&&!a.options.stickyTracking)r=this.getKDPoints([a],f,k);else{if(!f)if(a)a.options.stickyTracking||(e=[a]);else for(m=0;m<e.length;m++)if(e[m].directTouch||
	!e[m].options.stickyTracking)e=[];r=this.getKDPoints(e,f,k)}a=(d=r[0])&&d.series}r.sort(function(a,b){return a.series.index-b.series.index});return{hoverPoint:d,hoverSeries:a,hoverPoints:r}},runPointActions:function(b,c){var d=this.chart,e=d.tooltip,f=e?e.shared:!1,m=c||d.hoverPoint,r=m&&m.series||d.hoverSeries;c=this.getHoverData(m,r,d.series,!!c||r&&r.directTouch,f,b);var k,q,m=c.hoverPoint;k=(r=c.hoverSeries)&&r.tooltipOptions.followPointer;q=(f=f&&m&&!m.series.noSharedTooltip)?c.hoverPoints:[m];
	if(m&&(m!==d.hoverPoint||e&&e.isHidden)){t(d.hoverPoints||[],function(b){-1===a.inArray(b,q)&&b.setState()});t(q||[],function(a){a.setState("hover")});if(d.hoverSeries!==r)r.onMouseOver();r&&!r.directTouch&&(d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut"),m.firePointEvent("mouseOver"));d.hoverPoints=q;d.hoverPoint=m;e&&e.refresh(f?q:m,b)}else k&&e&&!e.isHidden&&(m=e.getAnchor([{}],b),e.updatePosition({plotX:m[0],plotY:m[1]}));this.unDocMouseMove||(this.unDocMouseMove=B(n,"mousemove",function(b){var d=
	C[a.hoverChartIndex];if(d)d.pointer.onDocumentMouseMove(b)}));t(q,function(a){t(d.axes,function(d){(!a||a.series&&a.series[d.coll]===d)&&d.drawCrosshair(b,a)})})},reset:function(a,b){var d=this.chart,c=d.hoverSeries,f=d.hoverPoint,e=d.hoverPoints,m=d.tooltip,r=m&&m.shared?e:f;a&&r&&t(H(r),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)m&&r&&(m.refresh(r),f&&(f.setState(f.state,!0),t(d.axes,function(a){a.crosshair&&a.drawCrosshair(null,f)})));else{if(f)f.onMouseOut();e&&t(e,function(a){a.setState()});
	if(c)c.onMouseOut();m&&m.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());t(d.axes,function(a){a.hideCrosshair()});this.hoverX=d.hoverPoints=d.hoverPoint=null}},scaleGroups:function(a,b){var d=this.chart,c;t(d.series,function(f){c=a||f.getPlotBox();f.xAxis&&f.xAxis.zoomEnabled&&f.group&&(f.group.attr(c),f.markerGroup&&(f.markerGroup.attr(c),f.markerGroup.clip(b?d.clipRect:null)),f.dataLabelsGroup&&f.dataLabelsGroup.attr(c))});d.clipRect.attr(b||d.clipBox)},dragStart:function(a){var b=
	this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,d=b.options.chart,c=a.chartX,f=a.chartY,e=this.zoomHor,m=this.zoomVert,k=b.plotLeft,q=b.plotTop,x=b.plotWidth,p=b.plotHeight,h,l=this.selectionMarker,g=this.mouseDownX,n=this.mouseDownY,t=d.panKey&&a[d.panKey+"Key"];l&&l.touch||(c<k?c=k:c>k+x&&(c=k+x),f<q?f=q:f>q+p&&(f=q+p),this.hasDragged=Math.sqrt(Math.pow(g-c,2)+Math.pow(n-f,2)),10<this.hasDragged&&
	(h=b.isInsidePlot(g-k,n-q),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&h&&!t&&!l&&(this.selectionMarker=l=b.renderer.rect(k,q,e?1:x,m?1:p,0).attr({fill:d.selectionMarkerFill||E("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),l&&e&&(c-=g,l.attr({width:Math.abs(c),x:(0<c?0:c)+g})),l&&m&&(c=f-n,l.attr({height:Math.abs(c),y:(0<c?0:c)+n})),h&&!l&&d.panning&&b.pan(a,d.panning)))},drop:function(a){var b=this,d=this.chart,c=this.hasPinched;if(this.selectionMarker){var f=
	{originalEvent:a,xAxis:[],yAxis:[]},e=this.selectionMarker,m=e.attr?e.attr("x"):e.x,p=e.attr?e.attr("y"):e.y,q=e.attr?e.attr("width"):e.width,x=e.attr?e.attr("height"):e.height,n;if(this.hasDragged||c)t(d.axes,function(d){if(d.zoomEnabled&&h(d.min)&&(c||b[{xAxis:"zoomX",yAxis:"zoomY"}[d.coll]])){var e=d.horiz,g="touchend"===a.type?d.minPixelPadding:0,r=d.toValue((e?m:p)+g),e=d.toValue((e?m+q:p+x)-g);f[d.coll].push({axis:d,min:Math.min(r,e),max:Math.max(r,e)});n=!0}}),n&&k(d,"selection",f,function(a){d.zoom(l(a,
	c?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();c&&this.scaleGroups()}d&&(u(d.container,{cursor:d._cursor}),d.cancelClick=10<this.hasDragged,d.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){C[a.hoverChartIndex]&&C[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,
	d=this.chartPosition;a=this.normalize(a,d);!d||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var d=C[a.hoverChartIndex];d&&(b.relatedTarget||b.toElement)&&(d.pointer.reset(),d.pointer.chartPosition=null)},onContainerMouseMove:function(b){var d=this.chart;h(a.hoverChartIndex)&&C[a.hoverChartIndex]&&C[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=d.index);b=this.normalize(b);b.returnValue=!1;
	"mousedown"===d.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!d.isInsidePlot(b.chartX-d.plotLeft,b.chartY-d.plotTop)||d.openMenu||this.runPointActions(b)},inClass:function(a,b){for(var d;a;){if(d=z(a,"class")){if(-1!==d.indexOf(b))return!0;if(-1!==d.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;if(!(!b||!a||b.options.stickyTracking||this.inClass(a,"highcharts-tooltip")||
	this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,d=b.hoverPoint,c=b.plotLeft,f=b.plotTop;a=this.normalize(a);b.cancelClick||(d&&this.inClass(a.target,"highcharts-tracker")?(k(d.series,"click",l(a,{point:d})),b.hoverPoint&&d.firePointEvent("click",a)):(l(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-c,a.chartY-f)&&k(b,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container;c.onmousedown=
	function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};c.onclick=function(a){b.onContainerClick(a)};B(c,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&B(n,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&B(n,"touchend",b.onDocumentTouchEnd))},destroy:function(){var b;p(this.chart.container,"mouseleave",this.onContainerMouseLeave);a.chartCount||
	(p(n,"mouseup",this.onDocumentMouseUp),p(n,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(b in this)this[b]=null}}})(I);(function(a){var B=a.charts,z=a.each,C=a.extend,E=a.map,u=a.noop,h=a.pick;C(a.Pointer.prototype,{pinchTranslate:function(a,h,l,k,e,c){this.zoomHor&&this.pinchTranslateDirection(!0,a,h,l,k,e,c);this.zoomVert&&this.pinchTranslateDirection(!1,a,h,l,k,e,c)},pinchTranslateDirection:function(a,h,l,k,e,c,p,u){var b=this.chart,m=a?"x":"y",d=a?"X":"Y",r="chart"+
	d,n=a?"width":"height",v=b["plot"+(a?"Left":"Top")],f,y,t=u||1,F=b.inverted,q=b.bounds[a?"h":"v"],x=1===h.length,J=h[0][r],K=l[0][r],L=!x&&h[1][r],g=!x&&l[1][r],D;l=function(){!x&&20<Math.abs(J-L)&&(t=u||Math.abs(K-g)/Math.abs(J-L));y=(v-K)/t+J;f=b["plot"+(a?"Width":"Height")]/t};l();h=y;h<q.min?(h=q.min,D=!0):h+f>q.max&&(h=q.max-f,D=!0);D?(K-=.8*(K-p[m][0]),x||(g-=.8*(g-p[m][1])),l()):p[m]=[K,g];F||(c[m]=y-v,c[n]=f);c=F?1/t:t;e[n]=f;e[m]=h;k[F?a?"scaleY":"scaleX":"scale"+d]=t;k["translate"+d]=c*
	v+(K-c*J)},pinch:function(a){var n=this,l=n.chart,k=n.pinchDown,e=a.touches,c=e.length,p=n.lastValidTouch,H=n.hasZoom,b=n.selectionMarker,m={},d=1===c&&(n.inClass(a.target,"highcharts-tracker")&&l.runTrackerClick||n.runChartClick),r={};1<c&&(n.initiated=!0);H&&n.initiated&&!d&&a.preventDefault();E(e,function(a){return n.normalize(a)});"touchstart"===a.type?(z(e,function(a,b){k[b]={chartX:a.chartX,chartY:a.chartY}}),p.x=[k[0].chartX,k[1]&&k[1].chartX],p.y=[k[0].chartY,k[1]&&k[1].chartY],z(l.axes,function(a){if(a.zoomEnabled){var b=
	l.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,c=a.toPixels(h(a.options.min,a.dataMin)),e=a.toPixels(h(a.options.max,a.dataMax)),m=Math.max(c,e);b.min=Math.min(a.pos,Math.min(c,e)-d);b.max=Math.max(a.pos+a.len,m+d)}}),n.res=!0):n.followTouchMove&&1===c?this.runPointActions(n.normalize(a)):k.length&&(b||(n.selectionMarker=b=C({destroy:u,touch:!0},l.plotBox)),n.pinchTranslate(k,e,m,b,r,p),n.hasPinched=H,n.scaleGroups(m,r),n.res&&(n.res=!1,this.reset(!1,0)))},touch:function(n,t){var l=this.chart,k,e;
	if(l.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=l.index;1===n.touches.length?(n=this.normalize(n),(e=l.isInsidePlot(n.chartX-l.plotLeft,n.chartY-l.plotTop))&&!l.openMenu?(t&&this.runPointActions(n),"touchmove"===n.type&&(t=this.pinchDown,k=t[0]?4<=Math.sqrt(Math.pow(t[0].chartX-n.chartX,2)+Math.pow(t[0].chartY-n.chartY,2)):!1),h(k,!0)&&this.pinch(n)):t&&this.reset()):2===n.touches.length&&this.pinch(n)},onContainerTouchStart:function(a){this.zoomOption(a);
	this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(h){B[a.hoverChartIndex]&&B[a.hoverChartIndex].pointer.drop(h)}})})(I);(function(a){var B=a.addEvent,z=a.charts,C=a.css,E=a.doc,u=a.extend,h=a.noop,n=a.Pointer,t=a.removeEvent,l=a.win,k=a.wrap;if(l.PointerEvent||l.MSPointerEvent){var e={},c=!!l.PointerEvent,p=function(){var a,c=[];c.item=function(a){return this[a]};for(a in e)e.hasOwnProperty(a)&&c.push({pageX:e[a].pageX,pageY:e[a].pageY,target:e[a].target});
	return c},H=function(b,c,d,e){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!z[a.hoverChartIndex]||(e(b),e=z[a.hoverChartIndex].pointer,e[c]({type:d,target:b.currentTarget,preventDefault:h,touches:p()}))};u(n.prototype,{onContainerPointerDown:function(a){H(a,"onContainerTouchStart","touchstart",function(a){e[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){H(a,"onContainerTouchMove","touchmove",function(a){e[a.pointerId]={pageX:a.pageX,
	pageY:a.pageY};e[a.pointerId].target||(e[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){H(a,"onDocumentTouchEnd","touchend",function(a){delete e[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,c?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,c?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(E,c?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});k(n.prototype,"init",function(a,c,d){a.call(this,c,d);this.hasZoom&&
	C(c.container,{"-ms-touch-action":"none","touch-action":"none"})});k(n.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(B)});k(n.prototype,"destroy",function(a){this.batchMSEvents(t);a.call(this)})}})(I);(function(a){var B,z=a.addEvent,C=a.css,E=a.discardElement,u=a.defined,h=a.each,n=a.isFirefox,t=a.marginNames,l=a.merge,k=a.pick,e=a.setAnimation,c=a.stableSort,p=a.win,H=a.wrap;B=a.Legend=function(a,c){this.init(a,c)};B.prototype={init:function(a,
	c){this.chart=a;this.setOptions(c);c.enabled&&(this.render(),z(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var b=k(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=l(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.initialItemX=this.padding=b;this.initialItemY=b-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=k(a.symbolWidth,16);this.pages=[]},update:function(a,c){var b=this.chart;this.setOptions(l(!0,
	this.options,a));this.destroy();b.isDirtyLegend=b.isDirtyBox=!0;k(c,!0)&&b.redraw()},colorizeItem:function(a,c){a.legendGroup[c?"removeClass":"addClass"]("highcharts-legend-item-hidden");var b=this.options,e=a.legendItem,m=a.legendLine,k=a.legendSymbol,f=this.itemHiddenStyle.color,b=c?b.itemStyle.color:f,p=c?a.color||f:f,h=a.options&&a.options.marker,l={fill:p},q;e&&e.css({fill:b,color:b});m&&m.attr({stroke:p});if(k){if(h&&k.isMarker&&(l=a.pointAttribs(),!c))for(q in l)l[q]=f;k.attr(l)}},positionItem:function(a){var b=
	this.options,d=b.symbolPadding,b=!b.rtl,c=a._legendItemPos,e=c[0],c=c[1],k=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?e:this.legendWidth-e-2*d-4,c);k&&(k.x=e,k.y=c)},destroyItem:function(a){var b=a.checkbox;h(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&E(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}h(this.getAllItems(),function(b){h(["legendItem","legendGroup"],a,b)});h("clipRect up down pager nav box title group".split(" "),
	a,this);this.display=null},positionCheckboxes:function(a){var b=this.group&&this.group.alignAttr,d,c=this.clipHeight||this.legendHeight,e=this.titleHeight;b&&(d=b.translateY,h(this.allItems,function(m){var f=m.checkbox,k;f&&(k=d+e+f.y+(a||0)+3,C(f,{left:b.translateX+m.checkboxOffset+f.x-20+"px",top:k+"px",display:k>d-6&&k<d+c-6?"":"none"}))}))},renderTitle:function(){var a=this.padding,c=this.options.title,d=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,a-3,a-4,null,null,null,
	null,null,"legend-title").attr({zIndex:1}).css(c.style).add(this.group)),a=this.title.getBBox(),d=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:d}));this.titleHeight=d},setText:function(b){var c=this.options;b.legendItem.attr({text:c.labelFormat?a.format(c.labelFormat,b):c.labelFormatter.call(b)})},renderItem:function(a){var b=this.chart,d=b.renderer,c=this.options,e="horizontal"===c.layout,p=this.symbolWidth,f=c.symbolPadding,h=this.itemStyle,n=this.itemHiddenStyle,t=this.padding,
	q=e?k(c.itemDistance,20):0,x=!c.rtl,J=c.width,u=c.itemMarginBottom||0,L=this.itemMarginTop,g=this.initialItemX,D=a.legendItem,H=!a.series,z=!H&&a.series.drawLegendSymbol?a.series:a,B=z.options,B=this.createCheckboxForItem&&B&&B.showCheckbox,C=c.useHTML;D||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+z.type+"-series highcharts-color-"+a.colorIndex+(a.options.className?" "+a.options.className:"")+(H?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=D=
	d.text("",x?p+f:-f,this.baseline||0,C).css(l(a.visible?h:n)).attr({align:x?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(h=h.fontSize,this.fontMetrics=d.fontMetrics(h,D),this.baseline=this.fontMetrics.f+3+L,D.attr("y",this.baseline)),this.symbolHeight=c.symbolHeight||this.fontMetrics.f,z.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,D,C),B&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);this.setText(a);d=D.getBBox();p=a.checkboxOffset=c.itemWidth||
	a.legendItemWidth||p+f+d.width+q+(B?20:0);this.itemHeight=f=Math.round(a.legendItemHeight||d.height);e&&this.itemX-g+p>(J||b.chartWidth-2*t-g-c.x)&&(this.itemX=g,this.itemY+=L+this.lastLineHeight+u,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,p);this.lastItemY=L+this.itemY+u;this.lastLineHeight=Math.max(f,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=p:(this.itemY+=L+f+u,this.lastLineHeight=f);this.offsetWidth=J||Math.max((e?this.itemX-g-q:p)+t,
	this.offsetWidth)},getAllItems:function(){var a=[];h(this.chart.series,function(b){var d=b&&b.options;b&&k(d.showInLegend,u(d.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===d.legendType?b.data:b)))});return a},adjustMargins:function(a,c){var b=this.chart,e=this.options,m=e.align.charAt(0)+e.verticalAlign.charAt(0)+e.layout.charAt(0);e.floating||h([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(d,f){d.test(m)&&!u(a[f])&&(b[t[f]]=Math.max(b[t[f]],b.legend[(f+1)%
	2?"legendHeight":"legendWidth"]+[1,-1,-1,1][f]*e[f%2?"x":"y"]+k(e.margin,12)+c[f]))})},render:function(){var a=this,e=a.chart,d=e.renderer,k=a.group,p,n,f,y,t=a.box,u=a.options,q=a.padding;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;k||(a.group=k=d.g("legend").attr({zIndex:7}).add(),a.contentGroup=d.g().attr({zIndex:1}).add(k),a.scrollGroup=d.g().add(a.contentGroup));a.renderTitle();p=a.getAllItems();c(p,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&
	b.options.legendIndex||0)});u.reversed&&p.reverse();a.allItems=p;a.display=n=!!p.length;a.lastLineHeight=0;h(p,function(b){a.renderItem(b)});f=(u.width||a.offsetWidth)+q;y=a.lastItemY+a.lastLineHeight+a.titleHeight;y=a.handleOverflow(y);y+=q;t||(a.box=t=d.rect().addClass("highcharts-legend-box").attr({r:u.borderRadius}).add(k),t.isNew=!0);t.attr({stroke:u.borderColor,"stroke-width":u.borderWidth||0,fill:u.backgroundColor||"none"}).shadow(u.shadow);0<f&&0<y&&(t[t.isNew?"attr":"animate"](t.crisp({x:0,
	y:0,width:f,height:y},t.strokeWidth())),t.isNew=!1);t[n?"show":"hide"]();a.legendWidth=f;a.legendHeight=y;h(p,function(b){a.positionItem(b)});n&&k.align(l(u,{width:f,height:y}),!0,"spacingBox");e.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,d=this.chart,c=d.renderer,e=this.options,p=e.y,d=d.spacingBox.height+("top"===e.verticalAlign?-p:p)-this.padding,p=e.maxHeight,f,l=this.clipRect,n=e.navigation,t=k(n.animation,!0),q=n.arrowSize||12,x=this.nav,u=this.pages,K=this.padding,
	L,g=this.allItems,D=function(a){a?l.attr({height:a}):l&&(b.clipRect=l.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+K+"px,9999px,"+(K+a)+"px,0)":"auto")};"horizontal"!==e.layout||"middle"===e.verticalAlign||e.floating||(d/=2);p&&(d=Math.min(d,p));u.length=0;a>d&&!1!==n.enabled?(this.clipHeight=f=Math.max(d-20-this.titleHeight-K,0),this.currentPage=k(this.currentPage,1),this.fullHeight=a,h(g,function(a,b){var d=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);
	var c=u.length;if(!c||d-u[c-1]>f&&(L||d)!==u[c-1])u.push(L||d),c++;b===g.length-1&&d+a-u[c-1]>f&&u.push(d);d!==L&&(L=d)}),l||(l=b.clipRect=c.clipRect(0,K,9999,0),b.contentGroup.clip(l)),D(f),x||(this.nav=x=c.g().attr({zIndex:1}).add(this.group),this.up=c.symbol("triangle",0,0,q,q).on("click",function(){b.scroll(-1,t)}).add(x),this.pager=c.text("",15,10).addClass("highcharts-legend-navigation").css(n.style).add(x),this.down=c.symbol("triangle-down",0,0,q,q).on("click",function(){b.scroll(1,t)}).add(x)),
	b.scroll(0),a=d):x&&(D(),this.nav=x.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,c){var b=this.pages,m=b.length;a=this.currentPage+a;var k=this.clipHeight,p=this.options.navigation,f=this.pager,h=this.padding;a>m&&(a=m);0<a&&(void 0!==c&&e(c,this.chart),this.nav.attr({translateX:h,translateY:k+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),f.attr({text:a+
	"/"+m}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===m?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?p.inactiveColor:p.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===m?p.inactiveColor:p.activeColor}).css({cursor:a===m?"default":"pointer"}),c=-b[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=a,this.positionCheckboxes(c))}};a.LegendSymbolMixin={drawRectangle:function(a,c){var b=
	a.symbolHeight,e=a.options.squareSymbol;c.legendSymbol=this.chart.renderer.rect(e?(a.symbolWidth-b)/2:0,a.baseline-b+1,e?b:a.symbolWidth,b,k(a.options.symbolRadius,b/2)).addClass("highcharts-point").attr({zIndex:3}).add(c.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,e=a.symbolWidth,p=a.symbolHeight,h=p/2,f=this.chart.renderer,n=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var t;t={"stroke-width":b.lineWidth||0};b.dashStyle&&(t.dashstyle=b.dashStyle);this.legendLine=
	f.path(["M",0,a,"L",e,a]).addClass("highcharts-graph").attr(t).add(n);c&&!1!==c.enabled&&(b=Math.min(k(c.radius,h),h),0===this.symbol.indexOf("url")&&(c=l(c,{width:p,height:p}),b=0),this.legendSymbol=c=f.symbol(this.symbol,e/2-b,a-b,2*b,2*b,c).addClass("highcharts-point").add(n),c.isMarker=!0)}};(/Trident\/7\.0/.test(p.navigator.userAgent)||n)&&H(B.prototype,"positionItem",function(a,c){var b=this,e=function(){c._legendItemPos&&a.call(b,c)};e();setTimeout(e)})})(I);(function(a){var B=a.addEvent,z=
	a.animate,C=a.animObject,E=a.attr,u=a.doc,h=a.Axis,n=a.createElement,t=a.defaultOptions,l=a.discardElement,k=a.charts,e=a.css,c=a.defined,p=a.each,H=a.extend,b=a.find,m=a.fireEvent,d=a.getStyle,r=a.grep,A=a.isNumber,v=a.isObject,f=a.isString,y=a.Legend,G=a.marginNames,F=a.merge,q=a.Pointer,x=a.pick,J=a.pInt,K=a.removeEvent,L=a.seriesTypes,g=a.splat,D=a.svg,S=a.syncTimeout,M=a.win,R=a.Renderer,N=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new N(a,b,c)};N.prototype=
	{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(f(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var d,f=b.series;b.series=null;d=F(t,b);d.series=b.series=f;this.userOptions=b;b=d.chart;f=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.callback=c;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var g;this.index=k.length;k.push(this);a.chartCount++;if(f)for(g in f)B(this,g,
	f[g]);this.xAxis=[];this.yAxis=[];this.pointCount=this.colorCounter=this.symbolCounter=0;this.firstRender()},initSeries:function(b){var c=this.options.chart;(c=L[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].name||"Series "+(b[a].index+1))},isInsidePlot:function(a,b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var c=
	this.axes,d=this.series,f=this.pointer,g=this.legend,e=this.isDirtyLegend,q,k,h=this.hasCartesianSeries,x=this.isDirtyBox,l,w=this.renderer,r=w.isHidden(),n=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);r&&this.cloneRenderTo();this.layOutTitles();for(b=d.length;b--;)if(l=d[b],l.options.stacking&&(q=!0,l.isDirty)){k=!0;break}if(k)for(b=d.length;b--;)l=d[b],l.options.stacking&&(l.isDirty=!0);p(d,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),
	e=!0);a.isDirtyData&&m(a,"updatedData")});e&&g.options.enabled&&(g.render(),this.isDirtyLegend=!1);q&&this.getStacks();h&&p(c,function(a){a.updateNames();a.setScale()});this.getMargins();h&&(p(c,function(a){a.isDirty&&(x=!0)}),p(c,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,n.push(function(){m(a,"afterSetExtremes",H(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(x||q)&&a.redraw()}));x&&this.drawChartBox();m(this,"predraw");p(d,function(a){(x||a.isDirty)&&a.visible&&a.redraw();
	a.isDirtyData=!1});f&&f.reset(!0);w.draw();m(this,"redraw");m(this,"render");r&&this.cloneRenderTo(!0);p(n,function(a){a.call()})},get:function(a){function c(b){return b.id===a||b.options&&b.options.id===a}var d,f=this.series,g;d=b(this.axes,c)||b(this.series,c);for(g=0;!d&&g<f.length;g++)d=b(f[g].points||[],c);return d},getAxes:function(){var a=this,b=this.options,c=b.xAxis=g(b.xAxis||{}),b=b.yAxis=g(b.yAxis||{});p(c,function(a,b){a.index=b;a.isX=!0});p(b,function(a,b){a.index=b});c=c.concat(b);
	p(c,function(b){new h(a,b)})},getSelectedPoints:function(){var a=[];p(this.series,function(b){a=a.concat(r(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return r(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var d=this,f=d.options,g;g=f.title=F({style:{color:"#333333",fontSize:f.isStock?"16px":"18px"}},f.title,a);f=f.subtitle=F({style:{color:"#666666"}},f.subtitle,b);p([["title",a,g],["subtitle",b,f]],function(a,b){var c=a[0],f=d[c],
	g=a[1];a=a[2];f&&g&&(d[c]=f=f.destroy());a&&a.text&&!f&&(d[c]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),d[c].update=function(a){d.setTitle(!b&&a,b&&a)},d[c].css(a.style))});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c,d=this.renderer,f=this.spacingBox;p(["title","subtitle"],function(a){var c=this[a],g=this.options[a],e;c&&(e=g.style.fontSize,e=d.fontMetrics(e,c).b,c.css({width:(g.width||f.width+g.widthAdjust)+"px"}).align(H({y:b+
	e+("title"===a?-3:2)},g),!1,"spacingBox"),g.floating||g.verticalAlign||(b=Math.ceil(b+c.getBBox().height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=c,this.hasRendered&&x(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,f=b.width,b=b.height,g=this.renderToClone||this.renderTo;c(f)||(this.containerWidth=d(g,"width"));c(b)||(this.containerHeight=d(g,"height"));this.chartWidth=Math.max(0,f||this.containerWidth||600);
	this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||this.containerHeight||400)},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;if(a){if(b){for(;b.childNodes.length;)this.renderTo.appendChild(b.firstChild);l(b);delete this.renderToClone}}else c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),e(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block",
	"important"),u.body.appendChild(b),c&&b.appendChild(c)},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,d=c.chart,g,e;b=this.renderTo;var q=a.uniqueKey(),m;b||(this.renderTo=b=d.renderTo);f(b)&&(this.renderTo=b=u.getElementById(b));b||a.error(13,!0);g=J(E(b,"data-highcharts-chart"));A(g)&&k[g]&&k[g].hasRendered&&k[g].destroy();E(b,"data-highcharts-chart",this.index);b.innerHTML="";d.skipClone||b.offsetWidth||this.cloneRenderTo();
	this.getChartSize();g=this.chartWidth;e=this.chartHeight;m=H({position:"relative",overflow:"hidden",width:g+"px",height:e+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style);this.container=b=n("div",{id:q},m,this.renderToClone||b);this._cursor=b.style.cursor;this.renderer=new (a[d.renderer]||R)(b,g,e,null,d.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index},
	getMargins:function(a){var b=this.spacing,d=this.margin,f=this.titleOffset;this.resetMargins();f&&!c(d[0])&&(this.plotTop=Math.max(this.plotTop,f+this.options.title.margin+b[0]));this.legend.display&&this.legend.adjustMargins(d,b);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],d=a.margin;a.hasCartesianSeries&&
	p(a.axes,function(a){a.visible&&a.getOffset()});p(G,function(f,g){c(d[g])||(a[f]+=b[g])});a.setChartSize()},reflow:function(a){var b=this,f=b.options.chart,g=b.renderTo,e=c(f.width),q=f.width||d(g,"width"),f=f.height||d(g,"height"),g=a?a.target:M;if(!e&&!b.isPrinting&&q&&f&&(g===M||g===u)){if(q!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),b.reflowTimeout=S(function(){b.container&&b.setSize(void 0,void 0,!1)},a?100:0);b.containerWidth=q;b.containerHeight=f}},initReflow:function(){var a=
	this,b;b=B(M,"resize",function(b){a.reflow(b)});B(a,"destroy",b)},setSize:function(b,c,d){var f=this,g=f.renderer;f.isResizing+=1;a.setAnimation(d,f);f.oldChartHeight=f.chartHeight;f.oldChartWidth=f.chartWidth;void 0!==b&&(f.options.chart.width=b);void 0!==c&&(f.options.chart.height=c);f.getChartSize();b=g.globalAnimation;(b?z:e)(f.container,{width:f.chartWidth+"px",height:f.chartHeight+"px"},b);f.setChartSize(!0);g.setSize(f.chartWidth,f.chartHeight,d);p(f.axes,function(a){a.isDirty=!0;a.setScale()});
	f.isDirtyLegend=!0;f.isDirtyBox=!0;f.layOutTitles();f.getMargins();f.redraw(d);f.oldChartHeight=null;m(f,"resize");S(function(){f&&m(f,"endResize",null,function(){--f.isResizing})},C(b).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,f=this.chartHeight,g=this.options.chart,e=this.spacing,q=this.clipOffset,k,m,h,x;this.plotLeft=k=Math.round(this.plotLeft);this.plotTop=m=Math.round(this.plotTop);this.plotWidth=h=Math.max(0,Math.round(d-k-this.marginRight));
	this.plotHeight=x=Math.max(0,Math.round(f-m-this.marginBottom));this.plotSizeX=b?x:h;this.plotSizeY=b?h:x;this.plotBorderWidth=g.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:e[3],y:e[0],width:d-e[3]-e[1],height:f-e[0]-e[2]};this.plotBox=c.plotBox={x:k,y:m,width:h,height:x};d=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(d,q[3])/2);c=Math.ceil(Math.max(d,q[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(d,q[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-
	Math.max(d,q[2])/2-c))};a||p(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;p(["margin","spacing"],function(c){var d=b[c],f=v(d)?d:[d,d,d,d];p(["Top","Right","Bottom","Left"],function(d,g){a[c][g]=x(b[c+d],f[g])})});p(G,function(b,c){a[b]=x(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,f=this.chartBackground,
	g=this.plotBackground,e=this.plotBorder,q,k=this.plotBGImage,m=a.backgroundColor,p=a.plotBackgroundColor,h=a.plotBackgroundImage,x,l=this.plotLeft,r=this.plotTop,n=this.plotWidth,v=this.plotHeight,t=this.plotBox,y=this.clipRect,u=this.clipBox,J="animate";f||(this.chartBackground=f=b.rect().addClass("highcharts-background").add(),J="attr");q=a.borderWidth||0;x=q+(a.shadow?8:0);m={fill:m||"none"};if(q||f["stroke-width"])m.stroke=a.borderColor,m["stroke-width"]=q;f.attr(m).shadow(a.shadow);f[J]({x:x/
	2,y:x/2,width:c-x-q%2,height:d-x-q%2,r:a.borderRadius});J="animate";g||(J="attr",this.plotBackground=g=b.rect().addClass("highcharts-plot-background").add());g[J](t);g.attr({fill:p||"none"}).shadow(a.plotShadow);h&&(k?k.animate(t):this.plotBGImage=b.image(h,l,r,n,v).add());y?y.animate({width:u.width,height:u.height}):this.clipRect=b.clipRect(u);J="animate";e||(J="attr",this.plotBorder=e=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());e.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||
	0,fill:"none"});e[J](e.crisp({x:l,y:r,width:n,height:v},-e.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,f,g;p(["inverted","angular","polar"],function(e){c=L[b.type||b.defaultSeriesType];g=b[e]||c&&c.prototype[e];for(f=d&&d.length;!g&&f--;)(c=L[d[f].type])&&c.prototype[e]&&(g=!0);a[e]=g})},linkSeries:function(){var a=this,b=a.series;p(b,function(a){a.linkedSeries.length=0});p(b,function(b){var c=b.options.linkedTo;f(c)&&(c=":previous"===
	c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=x(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){p(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&p(b.items,function(c){var d=H(b.style,c.style),f=J(d.left)+a.plotLeft,g=J(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,f,g).attr({zIndex:2}).css(d).add()})},render:function(){var a=
	this.axes,b=this.renderer,c=this.options,d,f,g;this.setTitle();this.legend=new y(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;d=this.plotHeight-=21;p(a,function(a){a.setScale()});this.getAxisMargins();f=1.1<c/this.plotWidth;g=1.05<d/this.plotHeight;if(f||g)p(a,function(a){(a.horiz&&f||!a.horiz&&g)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&p(a,function(a){a.visible&&a.render()});this.seriesGroup||
	(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=F(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(M.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),
	this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,d=b.series,f=b.container,g,e=f&&f.parentNode;m(b,"destroy");k[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");K(b);for(g=c.length;g--;)c[g]=c[g].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(g=d.length;g--;)d[g]=d[g].destroy();p("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),
	function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});f&&(f.innerHTML="",K(f),e&&l(f));for(g in b)delete b[g]},isReadyToRender:function(){var a=this;return D||M!=M.top||"complete"===u.readyState?!0:(u.attachEvent("onreadystatechange",function(){u.detachEvent("onreadystatechange",a.firstRender);"complete"===u.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();m(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();
	a.getAxes();p(b.series||[],function(b){a.initSeries(b)});a.linkSeries();m(a,"beforeRender");q&&(a.pointer=new q(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.cloneRenderTo(!0)}},onload:function(){p([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);m(this,"load");m(this,"render");c(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}}})(I);(function(a){var B,z=a.each,C=a.extend,E=a.erase,u=a.fireEvent,
	h=a.format,n=a.isArray,t=a.isNumber,l=a.pick,k=a.removeEvent;B=a.Point=function(){};B.prototype={init:function(a,c,k){this.series=a;this.color=a.color;this.applyOptions(c,k);a.options.colorByPoint?(c=a.options.colors||a.chart.options.colors,this.color=this.color||c[a.colorCounter],c=c.length,k=a.colorCounter,a.colorCounter++,a.colorCounter===c&&(a.colorCounter=0)):k=a.colorIndex;this.colorIndex=l(this.colorIndex,k);a.chart.pointCount++;return this},applyOptions:function(a,c){var e=this.series,k=e.options.pointValKey||
	e.pointValKey;a=B.prototype.optionsToObject.call(this,a);C(this,a);this.options=this.options?C(this.options,a):a;a.group&&delete this.group;k&&(this.y=this[k]);this.isNull=l(this.isValid&&!this.isValid(),null===this.x||!t(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===c&&e.xAxis&&e.xAxis.hasNames&&(this.x=e.xAxis.nameToX(this));void 0===this.x&&e&&(this.x=void 0===c?e.autoIncrement(this):c);return this},optionsToObject:function(a){var c={},e=this.series,k=e.options.keys,
	b=k||e.pointArrayMap||["y"],m=b.length,d=0,h=0;if(t(a)||null===a)c[b[0]]=a;else if(n(a))for(!k&&a.length>m&&(e=typeof a[0],"string"===e?c.name=a[0]:"number"===e&&(c.x=a[0]),d++);h<m;)k&&void 0===a[d]||(c[b[h]]=a[d]),d++,h++;else"object"===typeof a&&(c=a,a.dataLabels&&(e._hasPointLabels=!0),a.marker&&(e._hasPointMarkers=!0));return c},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":
	"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,c=a.zones,a=a.zoneAxis||"y",k=0,h;for(h=c[k];this[a]>=h.value;)h=c[++k];h&&h.color&&!this.options.color&&(this.color=h.color);return h},destroy:function(){var a=this.series.chart,c=a.hoverPoints,h;a.pointCount--;c&&(this.setState(),E(c,this),c.length||
	(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)k(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(h in this)this[h]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],c,k=6;k--;)c=a[k],this[c]&&(this[c]=this[c].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,
	point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var c=this.series,e=c.tooltipOptions,k=l(e.valueDecimals,""),b=e.valuePrefix||"",m=e.valueSuffix||"";z(c.pointArrayMap||["y"],function(c){c="{point."+c;if(b||m)a=a.replace(c+"}",b+c+"}"+m);a=a.replace(c+"}",c+":,."+k+"f}")});return h(a,{point:this,series:this.series})},firePointEvent:function(a,c,k){var e=this,b=this.series.options;(b.point.events[a]||e.options&&e.options.events&&e.options.events[a])&&
	this.importEvents();"click"===a&&b.allowPointSelect&&(k=function(a){e.select&&e.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});u(this,a,c,k)},visible:!0}})(I);(function(a){var B=a.addEvent,z=a.animObject,C=a.arrayMax,E=a.arrayMin,u=a.correctFloat,h=a.Date,n=a.defaultOptions,t=a.defaultPlotOptions,l=a.defined,k=a.each,e=a.erase,c=a.extend,p=a.fireEvent,H=a.grep,b=a.isArray,m=a.isNumber,d=a.isString,r=a.merge,A=a.pick,v=a.removeEvent,f=a.splat,y=a.SVGElement,G=a.syncTimeout,F=a.win;a.Series=a.seriesType("line",
	null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",
	x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var d=this,f,e,g=a.series,q;d.chart=a;d.options=b=d.setOptions(b);d.linkedSeries=[];d.bindAxes();c(d,{name:b.name,
	state:"",visible:!1!==b.visible,selected:!0===b.selected});e=b.events;for(f in e)B(d,f,e[f]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;d.getColor();d.getSymbol();k(d.parallelArrays,function(a){d[a+"Data"]=[]});d.setData(b.data,!1);d.isCartesian&&(a.hasCartesianSeries=!0);g.length&&(q=g[g.length-1]);d._i=A(q&&q._i,-1)+1;a.orderSeries(this.insert(g))},insert:function(a){var b=this.options.index,c;if(m(b)){for(c=a.length;c--;)if(b>=A(a[c].options.index,
	a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return A(c,a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,f;k(b.axisTypes||[],function(e){k(d[e],function(a){f=a.options;if(c[e]===f.index||void 0!==c[e]&&c[e]===f.id||void 0===c[e]&&0===f.index)b.insert(a.series),b[e]=a,a.isDirty=!0});b[e]||b.optionalAxis===e||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,f=m(b)?function(d){var f="y"===d&&c.toYData?c.toYData(a):
	a[d];c[d+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};k(c.parallelArrays,f)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=A(b,a.pointStart,0);this.pointInterval=c=A(this.pointInterval,a.pointInterval,1);d&&(a=new h(b),"day"===d?a=+a[h.hcSetDate](a[h.hcGetDate]()+c):"month"===d?a=+a[h.hcSetMonth](a[h.hcGetMonth]()+c):"year"===d&&(a=+a[h.hcSetFullYear](a[h.hcGetFullYear]()+c)),c=a-b);this.xIncrement=b+c;return b},
	setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},f=c[this.type];this.userOptions=a;c=r(f,c.series,a);this.tooltipOptions=r(n.tooltip,n.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);null===f.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||
	0,className:"highcharts-negative",color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&l(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var d,f=this.chart,g=this.userOptions,e=a+"Index",q=a+"Counter",k=c?c.length:A(f.options.chart[a+"Count"],f[a+"Count"]);b||(d=A(g[e],g["_"+e]),l(d)||(f.series.length||(f[q]=0),g["_"+e]=d=f[q]%k,f[q]+=1),c&&(b=c[d]));void 0!==d&&(this[e]=d);this[a]=b},getColor:function(){this.options.colorByPoint?
	this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(c,f,e,h){var q=this,g=q.points,p=g&&g.length||0,l,x=q.options,r=q.chart,n=null,v=q.xAxis,t=x.turboThreshold,y=this.xData,u=this.yData,G=(l=q.pointArrayMap)&&l.length;c=c||[];l=c.length;f=A(f,!0);if(!1!==h&&l&&p===l&&!q.cropped&&
	!q.hasGroupedData&&q.visible)k(c,function(a,b){g[b].update&&a!==x.data[b]&&g[b].update(a,!1,null,!1)});else{q.xIncrement=null;q.colorCounter=0;k(this.parallelArrays,function(a){q[a+"Data"].length=0});if(t&&l>t){for(e=0;null===n&&e<l;)n=c[e],e++;if(m(n))for(e=0;e<l;e++)y[e]=this.autoIncrement(),u[e]=c[e];else if(b(n))if(G)for(e=0;e<l;e++)n=c[e],y[e]=n[0],u[e]=n.slice(1,G+1);else for(e=0;e<l;e++)n=c[e],y[e]=n[0],u[e]=n[1];else a.error(12)}else for(e=0;e<l;e++)void 0!==c[e]&&(n={series:q},q.pointClass.prototype.applyOptions.apply(n,
	[c[e]]),q.updateParallelArrays(n,e));d(u[0])&&a.error(14,!0);q.data=[];q.options.data=q.userOptions.data=c;for(e=p;e--;)g[e]&&g[e].destroy&&g[e].destroy();v&&(v.minRange=v.userMinRange);q.isDirty=r.isDirtyBox=!0;q.isDirtyData=!!g;e=!1}"point"===x.legendType&&(this.processData(),this.generatePoints());f&&r.redraw(e)},processData:function(b){var c=this.xData,d=this.yData,f=c.length,e;e=0;var g,q,k=this.xAxis,m,h=this.options;m=h.cropThreshold;var l=this.getExtremesFromAll||h.getExtremesFromAll,p=this.isCartesian,
	h=k&&k.val2lin,n=k&&k.isLog,r,v;if(p&&!this.isDirty&&!k.isDirty&&!this.yAxis.isDirty&&!b)return!1;k&&(b=k.getExtremes(),r=b.min,v=b.max);if(p&&this.sorted&&!l&&(!m||f>m||this.forceCrop))if(c[f-1]<r||c[0]>v)c=[],d=[];else if(c[0]<r||c[f-1]>v)e=this.cropData(this.xData,this.yData,r,v),c=e.xData,d=e.yData,e=e.start,g=!0;for(m=c.length||1;--m;)f=n?h(c[m])-h(c[m-1]):c[m]-c[m-1],0<f&&(void 0===q||f<q)?q=f:0>f&&this.requireSorting&&a.error(15);this.cropped=g;this.cropStart=e;this.processedXData=c;this.processedYData=
	d;this.closestPointRange=q},cropData:function(a,b,c,d){var f=a.length,g=0,e=f,q=A(this.cropShoulder,1),k;for(k=0;k<f;k++)if(a[k]>=c){g=Math.max(0,k-q);break}for(c=k;c<f;c++)if(a[c]>d){e=c+q;break}return{xData:a.slice(g,e),yData:b.slice(g,e),start:g,end:e}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,g=this.pointClass,k=d.length,m=this.cropStart||0,h,l=this.hasGroupedData,p,n=[],r;b||l||(b=[],b.length=a.length,b=this.data=b);for(r=0;r<
	k;r++)h=m+r,l?(p=(new g).init(this,[d[r]].concat(f(e[r]))),p.dataGroup=this.groupMap[r]):(p=b[h])||void 0===a[h]||(b[h]=p=(new g).init(this,a[h],d[r])),p.index=h,n[r]=p;if(b&&(k!==(c=b.length)||l))for(r=0;r<c;r++)r!==m||l||(r+=k),b[r]&&(b[r].destroyElements(),b[r].plotX=void 0);this.data=b;this.points=n},getExtremes:function(a){var c=this.yAxis,d=this.processedXData,f,e=[],g=0;f=this.xAxis.getExtremes();var q=f.min,k=f.max,h,l,p,r;a=a||this.stackedYData||this.processedYData||[];f=a.length;for(r=0;r<
	f;r++)if(l=d[r],p=a[r],h=(m(p,!0)||b(p))&&(!c.positiveValuesOnly||p.length||0<p),l=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(d[r+1]||l)>=q&&(d[r-1]||l)<=k,h&&l)if(h=p.length)for(;h--;)null!==p[h]&&(e[g++]=p[h]);else e[g++]=p;this.dataMin=E(e);this.dataMax=C(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,f=this.yAxis,e=this.points,k=e.length,h=!!this.modifyValue,p=a.pointPlacement,
	r="between"===p||m(p),n=a.threshold,v=a.startFromThreshold?n:0,t,y,G,F,H=Number.MAX_VALUE;"between"===p&&(p=.5);m(p)&&(p*=A(a.pointRange||c.pointRange));for(a=0;a<k;a++){var z=e[a],B=z.x,C=z.y;y=z.low;var E=b&&f.stacks[(this.negStacks&&C<(v?0:n)?"-":"")+this.stackKey],I;f.positiveValuesOnly&&null!==C&&0>=C&&(z.isNull=!0);z.plotX=t=u(Math.min(Math.max(-1E5,c.translate(B,0,0,0,1,p,"flags"===this.type)),1E5));b&&this.visible&&!z.isNull&&E&&E[B]&&(F=this.getStackIndicator(F,B,this.index),I=E[B],C=I.points[F.key],
	y=C[0],C=C[1],y===v&&F.key===E[B].base&&(y=A(n,f.min)),f.positiveValuesOnly&&0>=y&&(y=null),z.total=z.stackTotal=I.total,z.percentage=I.total&&z.y/I.total*100,z.stackY=C,I.setOffset(this.pointXOffset||0,this.barW||0));z.yBottom=l(y)?f.translate(y,0,1,0,1):null;h&&(C=this.modifyValue(C,z));z.plotY=y="number"===typeof C&&Infinity!==C?Math.min(Math.max(-1E5,f.translate(C,0,1,0,1)),1E5):void 0;z.isInside=void 0!==y&&0<=y&&y<=f.len&&0<=t&&t<=c.len;z.clientX=r?u(c.translate(B,0,0,0,1,p)):t;z.negative=z.y<
	(n||0);z.category=d&&void 0!==d[z.x]?d[z.x]:z.x;z.isNull||(void 0!==G&&(H=Math.min(H,Math.abs(t-G))),G=t);z.zone=this.zones.length&&z.getZone()}this.closestPointRangePx=H},getValidPoints:function(a,b){var c=this.chart;return H(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,f=b.inverted,e=this.clipBox,q=e||b.clipBox,k=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,q.height,
	c.xAxis,c.yAxis].join(),m=b[k],h=b[k+"m"];m||(a&&(q.width=0,b[k+"m"]=h=d.clipRect(-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[k]=m=d.clipRect(q),m.count={length:0});a&&!m.count[this.index]&&(m.count[this.index]=!0,m.count.length+=1);!1!==c.clip&&(this.group.clip(a||e?m:b.clipRect),this.markerGroup.clip(h),this.sharedClipKey=k);a||(m.count[this.index]&&(delete m.count[this.index],--m.count.length),0===m.count.length&&k&&b[k]&&(e||(b[k]=b[k].destroy()),b[k+"m"]&&(this.markerGroup.clip(),
	b[k+"m"]=b[k+"m"].destroy())))},animate:function(a){var b=this.chart,c=z(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();p(this,"afterAnimate")},drawPoints:function(){var a=this.points,b=this.chart,c,d,f,e,k=this.options.marker,h,p,l,r,n=this.markerGroup,v=A(k.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*k.radius);
	if(!1!==k.enabled||this._hasPointMarkers)for(d=0;d<a.length;d++)f=a[d],c=f.plotY,e=f.graphic,h=f.marker||{},p=!!f.marker,l=v&&void 0===h.enabled||h.enabled,r=f.isInside,l&&m(c)&&null!==f.y?(c=A(h.symbol,this.symbol),f.hasImage=0===c.indexOf("url"),l=this.markerAttribs(f,f.selected&&"select"),e?e[r?"show":"hide"](!0).animate(l):r&&(0<l.width||f.hasImage)&&(f.graphic=e=b.renderer.symbol(c,l.x,l.y,l.width,l.height,p?h:k).add(n)),e&&e.attr(this.pointAttribs(f,f.selected&&"select")),e&&e.addClass(f.getClassName(),
	!0)):e&&(f.graphic=e.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},f=A(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],f=A(b&&b.radius,c&&c.radius,f+(c&&c.radiusPlus||0)));a.hasImage&&(f=0);a={x:Math.floor(a.plotX)-f,y:a.plotY-f};f&&(a.width=a.height=2*f);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,f=d&&d.marker||{},e=this.color,q=d&&d.color,k=a&&a.color,d=A(f.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;e=q||a||
	k||e;a=f.fillColor||c.fillColor||e;e=f.lineColor||c.lineColor||e;b&&(c=c.states[b],b=f.states&&f.states[b]||{},d=A(b.lineWidth,c.lineWidth,d+A(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,e=b.lineColor||c.lineColor||e);return{stroke:e,"stroke-width":d,fill:a}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(F.navigator.userAgent),d,f=a.data||[],g,m,h;p(a,"destroy");v(a);k(a.axisTypes||[],function(b){(h=a[b])&&h.series&&(e(h.series,a),h.isDirty=h.forceRedraw=
	!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(d=f.length;d--;)(g=f[d])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);for(m in a)a[m]instanceof y&&!a[m].survive&&(d=c&&"group"===m?"hide":"destroy",a[m][d]());b.hoverSeries===a&&(b.hoverSeries=null);e(b.series,a);b.orderSeries();for(m in a)delete a[m]},getGraphPath:function(a,b,c){var d=this,f=d.options,e=f.step,q,m=[],h=[],p;a=a||d.points;(q=a.reversed)&&a.reverse();(e={right:1,center:2}[e]||e&&3)&&q&&(e=4-e);!f.connectNulls||
	b||c||(a=this.getValidPoints(a));k(a,function(g,k){var q=g.plotX,r=g.plotY,n=a[k-1];(g.leftCliff||n&&n.rightCliff)&&!c&&(p=!0);g.isNull&&!l(b)&&0<k?p=!f.connectNulls:g.isNull&&!b?p=!0:(0===k||p?k=["M",g.plotX,g.plotY]:d.getPointSpline?k=d.getPointSpline(a,g,k):e?(k=1===e?["L",n.plotX,r]:2===e?["L",(n.plotX+q)/2,n.plotY,"L",(n.plotX+q)/2,r]:["L",q,n.plotY],k.push("L",q,r)):k=["L",q,r],h.push(g.x),e&&h.push(g.x),m.push.apply(m,k),p=!1)});m.xMap=h;return d.graphPath=m},drawGraph:function(){var a=this,
	b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];k(this.zones,function(c,f){d.push(["zone-graph-"+f,"highcharts-graph highcharts-zone-graph-"+f+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});k(d,function(d,f){var e=d[0],g=a[e];g?(g.endX=c.xMap,g.animate({d:c})):c.length&&(a[e]=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),g={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&
	a.color||"none"},d[3]?g.dashstyle=d[3]:"square"!==b.linecap&&(g["stroke-linecap"]=g["stroke-linejoin"]="round"),g=a[e].attr(g).shadow(2>f&&b.shadow));g&&(g.startX=c.xMap,g.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,f,e,m=this.clips||[],h,p=this.graph,l=this.area,r=Math.max(b.chartWidth,b.chartHeight),n=this[(this.zoneAxis||"y")+"Axis"],v,t,y=b.inverted,u,G,F,H,z=!1;d.length&&(p||l)&&n&&void 0!==n.min&&(t=n.reversed,u=n.horiz,p&&p.hide(),l&&l.hide(),
	v=n.getExtremes(),k(d,function(d,g){f=t?u?b.plotWidth:0:u?0:n.toPixels(v.min);f=Math.min(Math.max(A(e,f),0),r);e=Math.min(Math.max(Math.round(n.toPixels(A(d.value,v.max),!0)),0),r);z&&(f=e=n.toPixels(v.max));G=Math.abs(f-e);F=Math.min(f,e);H=Math.max(f,e);n.isXAxis?(h={x:y?H:F,y:0,width:G,height:r},u||(h.x=b.plotHeight-h.x)):(h={x:0,y:y?H:F,width:r,height:G},u&&(h.y=b.plotWidth-h.y));y&&c.isVML&&(h=n.isXAxis?{x:0,y:t?F:H,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,
	height:b.chartHeight});m[g]?m[g].animate(h):(m[g]=c.clipRect(h),p&&a["zone-graph-"+g].clip(m[g]),l&&a["zone-area-"+g].clip(m[g]));z=d.value>v.max}),this.clips=m)},invertGroups:function(a){function b(){k(["group","markerGroup"],function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,f;c.xAxis&&(f=B(d,"resize",b),B(c,"destroy",f),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,f){var e=
	this[a],k=!e;k&&(this[a]=e=this.chart.renderer.g(b).attr({zIndex:d||.1}).add(f),e.addClass("highcharts-series-"+this.index+" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+" "+(this.options.className||"")));e.attr({visibility:c})[k?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=
	this,b=a.chart,c,d=a.options,f=!!a.animate&&b.renderer.isSVG&&z(d.animation).duration,e=a.visible?"inherit":"hidden",k=d.zIndex,m=a.hasRendered,h=b.seriesGroup,p=b.inverted;c=a.plotGroup("group","series",e,k,h);a.markerGroup=a.plotGroup("markerGroup","markers",e,k,h);f&&a.animate(!0);c.inverted=a.isCartesian?p:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(p);
	!1===d.clip||a.sharedClipKey||m||c.clip(b.clipRect);f&&a.animate();m||(a.animationTimeout=G(function(){a.afterAnimate()},f));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,f=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:A(d&&d.left,a.plotLeft),translateY:A(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX",
	"plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:f?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,d,f){var e,g;if(g=c&&c.length)return e=b.kdAxisArray[d%f],c.sort(function(a,b){return a[e]-b[e]}),g=Math.floor(g/2),{point:c[g],left:a(c.slice(0,g),d+1,f),right:a(c.slice(g+1),d+1,f)}}this.buildingKdTree=!0;var b=this,c=b.kdDimensions;delete b.kdTree;G(function(){b.kdTree=
	a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,g,m){var h=b.point,p=d.kdAxisArray[g%m],q,r,n=h;r=l(a[f])&&l(h[f])?Math.pow(a[f]-h[f],2):null;q=l(a[e])&&l(h[e])?Math.pow(a[e]-h[e],2):null;q=(r||0)+(q||0);h.dist=l(q)?Math.sqrt(q):Number.MAX_VALUE;h.distX=l(r)?Math.sqrt(r):Number.MAX_VALUE;p=a[p]-h[p];q=0>p?"left":"right";r=0>p?"right":"left";b[q]&&(q=c(a,b[q],g+1,m),n=q[k]<n[k]?q:h);b[r]&&Math.sqrt(p*p)<n[k]&&(a=c(a,
	b[r],g+1,m),n=a[k]<n[k]?a:n);return n}var d=this,f=this.kdAxisArray[0],e=this.kdAxisArray[1],k=b?"distX":"dist";this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,this.kdDimensions,this.kdDimensions)}})})(I);(function(a){function B(a,e,c,h,n){var b=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=e;this.x=h;this.total=null;this.points={};this.stack=n;this.rightCliff=this.leftCliff=0;this.alignOptions={align:e.align||(b?c?"left":"right":"center"),
	verticalAlign:e.verticalAlign||(b?"middle":c?"bottom":"top"),y:l(e.y,b?4:c?14:-6),x:l(e.x,b?c?-6:6:0)};this.textAlign=e.textAlign||(b?c?"right":"left":"center")}var z=a.Axis,C=a.Chart,E=a.correctFloat,u=a.defined,h=a.destroyObjectProperties,n=a.each,t=a.format,l=a.pick;a=a.Series;B.prototype={destroy:function(){h(this,this.axis)},render:function(a){var e=this.options,c=e.format,c=c?t(c,this):e.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,
	null,null,e.useHTML).css(e.style).attr({align:this.textAlign,rotation:e.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,e){var c=this.axis,k=c.chart,h=k.inverted,b=c.reversed,b=this.isNegative&&!b||!this.isNegative&&b,m=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=Math.abs(m-c);a=k.xAxis[0].translate(this.x)+a;var d=k.plotHeight,h={x:h?b?m:m-c:a,y:h?d-a-e:b?d-m-c:d-m,width:h?c:e,height:h?e:c};if(e=this.label)e.align(this.alignOptions,null,h),h=e.alignAttr,e[!1===
	this.options.crop||k.isInsidePlot(h.x,h.y)?"show":"hide"](!0)}};C.prototype.getStacks=function(){var a=this;n(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});n(a.series,function(e){!e.options.stacking||!0!==e.visible&&!1!==a.options.chart.ignoreHiddenSeries||(e.stackKey=e.type+l(e.options.stack,""))})};z.prototype.buildStacks=function(){var a=this.series,e,c=l(this.options.reversedStacks,!0),h=a.length,n;if(!this.isXAxis){this.usePercentage=!1;for(n=h;n--;)a[c?n:h-n-1].setStackedPoints();
	for(n=h;n--;)e=a[c?n:h-n-1],e.setStackCliffs&&e.setStackCliffs();if(this.usePercentage)for(n=0;n<h;n++)a[n].setPercentStacks()}};z.prototype.renderStackTotals=function(){var a=this.chart,e=a.renderer,c=this.stacks,h,l,b=this.stackTotalGroup;b||(this.stackTotalGroup=b=e.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());b.translate(a.plotLeft,a.plotTop);for(h in c)for(l in a=c[h],a)a[l].render(b)};z.prototype.resetStacks=function(){var a=this.stacks,e,c;if(!this.isXAxis)for(e in a)for(c in a[e])a[e][c].touched<
	this.stacksTouched?(a[e][c].destroy(),delete a[e][c]):(a[e][c].total=null,a[e][c].cum=null)};z.prototype.cleanStacks=function(){var a,e,c;if(!this.isXAxis)for(e in this.oldStacks&&(a=this.stacks=this.oldStacks),a)for(c in a[e])a[e][c].cum=a[e][c].total};a.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var a=this.processedXData,e=this.processedYData,c=[],h=e.length,n=this.options,b=n.threshold,m=n.startFromThreshold?
	b:0,d=n.stack,n=n.stacking,r=this.stackKey,t="-"+r,v=this.negStacks,f=this.yAxis,y=f.stacks,G=f.oldStacks,F,q,x,z,K,C,g;f.stacksTouched+=1;for(K=0;K<h;K++)C=a[K],g=e[K],F=this.getStackIndicator(F,C,this.index),z=F.key,x=(q=v&&g<(m?0:b))?t:r,y[x]||(y[x]={}),y[x][C]||(G[x]&&G[x][C]?(y[x][C]=G[x][C],y[x][C].total=null):y[x][C]=new B(f,f.options.stackLabels,q,C,d)),x=y[x][C],null!==g&&(x.points[z]=x.points[this.index]=[l(x.cum,m)],u(x.cum)||(x.base=z),x.touched=f.stacksTouched,0<F.index&&!1===this.singleStacks&&
	(x.points[z][0]=x.points[this.index+","+C+",0"][0])),"percent"===n?(q=q?r:t,v&&y[q]&&y[q][C]?(q=y[q][C],x.total=q.total=Math.max(q.total,x.total)+Math.abs(g)||0):x.total=E(x.total+(Math.abs(g)||0))):x.total=E(x.total+(g||0)),x.cum=l(x.cum,m)+(g||0),null!==g&&(x.points[z].push(x.cum),c[K]=x.cum);"percent"===n&&(f.usePercentage=!0);this.stackedYData=c;f.oldStacks={}}};a.prototype.setPercentStacks=function(){var a=this,e=a.stackKey,c=a.yAxis.stacks,h=a.processedXData,l;n([e,"-"+e],function(b){for(var e=
	h.length,d,k;e--;)if(d=h[e],l=a.getStackIndicator(l,d,a.index,b),d=(k=c[b]&&c[b][d])&&k.points[l.key])k=k.total?100/k.total:0,d[0]=E(d[0]*k),d[1]=E(d[1]*k),a.stackedYData[e]=d[1]})};a.prototype.getStackIndicator=function(a,e,c,h){!u(a)||a.x!==e||h&&a.key!==h?a={x:e,index:0,key:h}:a.index++;a.key=[c,e,a.index].join();return a}})(I);(function(a){var B=a.addEvent,z=a.animate,C=a.Axis,E=a.createElement,u=a.css,h=a.defined,n=a.each,t=a.erase,l=a.extend,k=a.fireEvent,e=a.inArray,c=a.isNumber,p=a.isObject,
	H=a.merge,b=a.pick,m=a.Point,d=a.Series,r=a.seriesTypes,A=a.setAnimation,v=a.splat;l(a.Chart.prototype,{addSeries:function(a,c,d){var f,e=this;a&&(c=b(c,!0),k(e,"addSeries",{options:a},function(){f=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();c&&e.redraw(d)}));return f},addAxis:function(a,c,d,e){var f=c?"xAxis":"yAxis",h=this.options;a=H(a,{index:this[f].length,isX:c});new C(this,a);h[f]=v(h[f]||{});h[f].push(a);b(d,!0)&&this.redraw(e)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,
	f=c.loading,e=function(){d&&u(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=E("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=E("span",{className:"highcharts-loading-inner"},null,d),B(b,"redraw",e));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;u(d,l(f.style,{zIndex:10}));u(b.loadingSpan,f.labelStyle);b.loadingShown||(u(d,{opacity:0,display:""}),z(d,{opacity:f.style.opacity||
	.5},{duration:f.showDuration||0}));b.loadingShown=!0;e()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",z(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){u(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
	propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions".split(" "),update:function(a,d){var f,k={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},m=a.chart,l,p;if(m){H(!0,this.options.chart,m);"className"in m&&this.setClassName(m.className);if("inverted"in m||"polar"in m)this.propFromSeries(),l=!0;for(f in m)m.hasOwnProperty(f)&&(-1!==e("chart."+f,this.propsRequireUpdateSeries)&&(p=!0),-1!==e(f,this.propsRequireDirtyBox)&&(this.isDirtyBox=
	!0));"style"in m&&this.renderer.setStyle(m.style)}for(f in a){if(this[f]&&"function"===typeof this[f].update)this[f].update(a[f],!1);else if("function"===typeof this[k[f]])this[k[f]](a[f]);"chart"!==f&&-1!==e(f,this.propsRequireUpdateSeries)&&(p=!0)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&H(!0,this.options.plotOptions,a.plotOptions);n(["xAxis","yAxis","series"],function(b){a[b]&&n(v(a[b]),function(a,c){(c=h(a.id)&&this.get(a.id)||this[b][c])&&c.coll===b&&c.update(a,!1)},this)},this);
	l&&n(this.axes,function(a){a.update({},!1)});p&&n(this.series,function(a){a.update({},!1)});a.loading&&H(!0,this.options.loading,a.loading);f=m&&m.width;m=m&&m.height;c(f)&&f!==this.chartWidth||c(m)&&m!==this.chartHeight?this.setSize(f,m):b(d,!0)&&this.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});l(m.prototype,{update:function(a,c,d,e){function f(){h.applyOptions(a);null===h.y&&k&&(h.graphic=k.destroy());p(a,!0)&&(k&&k.element&&a&&a.marker&&a.marker.symbol&&(h.graphic=k.destroy()),
	a&&a.dataLabels&&h.dataLabel&&(h.dataLabel=h.dataLabel.destroy()));l=h.index;m.updateParallelArrays(h,l);n.data[l]=p(n.data[l],!0)||p(a,!0)?h.options:a;m.isDirty=m.isDirtyData=!0;!m.fixedBox&&m.hasCartesianSeries&&(g.isDirtyBox=!0);"point"===n.legendType&&(g.isDirtyLegend=!0);c&&g.redraw(d)}var h=this,m=h.series,k=h.graphic,l,g=m.chart,n=m.options;c=b(c,!0);!1===e?f():h.firePointEvent("update",{options:a},f)},remove:function(a,b){this.series.removePoint(e(this,this.series.data),a,b)}});l(d.prototype,
	{addPoint:function(a,c,d,e){var f=this.options,h=this.data,m=this.chart,k=this.xAxis,k=k&&k.hasNames&&k.names,l=f.data,g,p,n=this.xData,r,v;c=b(c,!0);g={series:this};this.pointClass.prototype.applyOptions.apply(g,[a]);v=g.x;r=n.length;if(this.requireSorting&&v<n[r-1])for(p=!0;r&&n[r-1]>v;)r--;this.updateParallelArrays(g,"splice",r,0,0);this.updateParallelArrays(g,r);k&&g.name&&(k[v]=g.name);l.splice(r,0,a);p&&(this.data.splice(r,0,null),this.processData());"point"===f.legendType&&this.generatePoints();
	d&&(h[0]&&h[0].remove?h[0].remove(!1):(h.shift(),this.updateParallelArrays(g,"shift"),l.shift()));this.isDirtyData=this.isDirty=!0;c&&m.redraw(e)},removePoint:function(a,c,d){var f=this,e=f.data,h=e[a],m=f.points,k=f.chart,l=function(){m&&m.length===e.length&&m.splice(a,1);e.splice(a,1);f.options.data.splice(a,1);f.updateParallelArrays(h||{series:f},"splice",a,1);h&&h.destroy();f.isDirty=!0;f.isDirtyData=!0;c&&k.redraw()};A(d,k);c=b(c,!0);h?h.firePointEvent("remove",null,l):l()},remove:function(a,
	c,d){function f(){e.destroy();h.isDirtyLegend=h.isDirtyBox=!0;h.linkSeries();b(a,!0)&&h.redraw(c)}var e=this,h=e.chart;!1!==d?k(e,"remove",null,f):f()},update:function(a,c){var d=this,f=this.chart,e=this.userOptions,h=this.oldType||this.type,m=a.type||e.type||f.options.chart.type,k=r[h].prototype,p=["group","markerGroup","dataLabelsGroup"],g;if(m&&m!==h||void 0!==a.zIndex)p.length=0;n(p,function(a){p[a]=d[a];delete d[a]});a=H(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},
	a);this.remove(!1,null,!1);for(g in k)this[g]=void 0;l(this,r[m||h].prototype);n(p,function(a){d[a]=p[a]});this.init(f,a);this.oldType=h;f.linkSeries();b(c,!0)&&f.redraw(!1)}});l(C.prototype,{update:function(a,c){var d=this.chart;a=d.options[this.coll][this.options.index]=H(this.userOptions,a);this.destroy(!0);this.init(d,l(a,{events:void 0}));d.isDirtyBox=!0;b(c,!0)&&d.redraw()},remove:function(a){for(var c=this.chart,d=this.coll,f=this.series,e=f.length;e--;)f[e]&&f[e].remove(!1);t(c.axes,this);
	t(c[d],this);c.options[d].splice(this.options.index,1);n(c[d],function(a,b){a.options.index=b});this.destroy();c.isDirtyBox=!0;b(a,!0)&&c.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(I);(function(a){var B=a.color,z=a.each,C=a.map,E=a.pick,u=a.Series,h=a.seriesType;h("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(){var a=[],h=[],l=this.xAxis,k=this.yAxis,e=k.stacks[this.stackKey],c={},
	p=this.points,u=this.index,b=k.series,m=b.length,d,r=E(k.options.reversedStacks,!0)?1:-1,A,v;if(this.options.stacking){for(A=0;A<p.length;A++)c[p[A].x]=p[A];for(v in e)null!==e[v].total&&h.push(v);h.sort(function(a,b){return a-b});d=C(b,function(){return this.visible});z(h,function(b,p){var f=0,n,q;if(c[b]&&!c[b].isNull)a.push(c[b]),z([-1,1],function(a){var f=1===a?"rightNull":"leftNull",k=0,l=e[h[p+a]];if(l)for(A=u;0<=A&&A<m;)n=l.points[A],n||(A===u?c[b][f]=!0:d[A]&&(q=e[b].points[A])&&(k-=q[1]-
	q[0])),A+=r;c[b][1===a?"rightCliff":"leftCliff"]=k});else{for(A=u;0<=A&&A<m;){if(n=e[b].points[A]){f=n[1];break}A+=r}f=k.translate(f,0,1,0,1);a.push({isNull:!0,plotX:l.translate(b,0,0,0,1),x:b,plotY:f,yBottom:f})}})}return a},getGraphPath:function(a){var h=u.prototype.getGraphPath,l=this.options,k=l.stacking,e=this.yAxis,c,p,n=[],b=[],m=this.index,d,r=e.stacks[this.stackKey],A=l.threshold,v=e.getThreshold(l.threshold),f,l=l.connectNulls||"percent"===k,y=function(c,f,h){var l=a[c];c=k&&r[l.x].points[m];
	var p=l[h+"Null"]||0;h=l[h+"Cliff"]||0;var q,t,l=!0;h||p?(q=(p?c[0]:c[1])+h,t=c[0]+h,l=!!p):!k&&a[f]&&a[f].isNull&&(q=t=A);void 0!==q&&(b.push({plotX:d,plotY:null===q?v:e.getThreshold(q),isNull:l,isCliff:!0}),n.push({plotX:d,plotY:null===t?v:e.getThreshold(t),doCurve:!1}))};a=a||this.points;k&&(a=this.getStackPoints());for(c=0;c<a.length;c++)if(p=a[c].isNull,d=E(a[c].rectPlotX,a[c].plotX),f=E(a[c].yBottom,v),!p||l)l||y(c,c-1,"left"),p&&!k&&l||(b.push(a[c]),n.push({x:c,plotX:d,plotY:f})),l||y(c,c+
	1,"right");c=h.call(this,b,!0,!0);n.reversed=!0;p=h.call(this,n,!0,!0);p.length&&(p[0]="L");p=c.concat(p);h=h.call(this,b,!1,l);p.xMap=c.xMap;this.areaPath=p;return h},drawGraph:function(){this.areaPath=[];u.prototype.drawGraph.apply(this);var a=this,h=this.areaPath,l=this.options,k=[["area","highcharts-area",this.color,l.fillColor]];z(this.zones,function(e,c){k.push(["zone-area-"+c,"highcharts-area highcharts-zone-area-"+c+" "+e.className,e.color||a.color,e.fillColor||l.fillColor])});z(k,function(e){var c=
	e[0],k=a[c];k?(k.endX=h.xMap,k.animate({d:h})):(k=a[c]=a.chart.renderer.path(h).addClass(e[1]).attr({fill:E(e[3],B(e[2]).setOpacity(E(l.fillOpacity,.75)).get()),zIndex:0}).add(a.group),k.isArea=!0);k.startX=h.xMap;k.shiftUnit=l.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(I);(function(a){var B=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,C,E){var u=C.plotX,h=C.plotY,n=a[E-1];E=a[E+1];var t,l,k,e;if(n&&!n.isNull&&!1!==n.doCurve&&!C.isCliff&&E&&!E.isNull&&
	!1!==E.doCurve&&!C.isCliff){a=n.plotY;k=E.plotX;E=E.plotY;var c=0;t=(1.5*u+n.plotX)/2.5;l=(1.5*h+a)/2.5;k=(1.5*u+k)/2.5;e=(1.5*h+E)/2.5;k!==t&&(c=(e-l)*(k-u)/(k-t)+h-e);l+=c;e+=c;l>a&&l>h?(l=Math.max(a,h),e=2*h-l):l<a&&l<h&&(l=Math.min(a,h),e=2*h-l);e>E&&e>h?(e=Math.max(E,h),l=2*h-e):e<E&&e<h&&(e=Math.min(E,h),l=2*h-e);C.rightContX=k;C.rightContY=e}C=["C",B(n.rightContX,n.plotX),B(n.rightContY,n.plotY),B(t,u),B(l,h),u,h];n.rightContX=n.rightContY=null;return C}})})(I);(function(a){var B=a.seriesTypes.area.prototype,
	z=a.seriesType;z("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:B.getStackPoints,getGraphPath:B.getGraphPath,setStackCliffs:B.setStackCliffs,drawGraph:B.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(I);(function(a){var B=a.animObject,z=a.color,C=a.each,E=a.extend,u=a.isNumber,h=a.merge,n=a.pick,t=a.Series,l=a.seriesType,k=a.svg;l("column","line",{borderRadius:0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,
	brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){t.prototype.init.apply(this,arguments);var a=this,c=a.chart;c.hasRendered&&C(c.series,function(c){c.type===a.type&&(c.isDirty=!0)})},getColumnMetrics:function(){var a=
	this,c=a.options,h=a.xAxis,k=a.yAxis,b=h.reversed,m,d={},l=0;!1===c.grouping?l=1:C(a.chart.series,function(b){var c=b.options,f=b.yAxis,e;b.type===a.type&&b.visible&&k.len===f.len&&k.pos===f.pos&&(c.stacking?(m=b.stackKey,void 0===d[m]&&(d[m]=l++),e=d[m]):!1!==c.grouping&&(e=l++),b.columnIndex=e)});var t=Math.min(Math.abs(h.transA)*(h.ordinalSlope||c.pointRange||h.closestPointRange||h.tickInterval||1),h.len),v=t*c.groupPadding,f=(t-2*v)/(l||1),c=Math.min(c.maxPointWidth||h.len,n(c.pointWidth,f*(1-
	2*c.pointPadding)));a.columnMetrics={width:c,offset:(f-c)/2+(v+((a.columnIndex||0)+(b?1:0))*f-t/2)*(b?-1:1)};return a.columnMetrics},crispCol:function(a,c,h,k){var b=this.chart,e=this.borderWidth,d=-(e%2?.5:0),e=e%2?.5:1;b.inverted&&b.renderer.isVML&&(e+=1);h=Math.round(a+h)+d;a=Math.round(a)+d;k=Math.round(c+k)+e;d=.5>=Math.abs(c)&&.5<k;c=Math.round(c)+e;k-=c;d&&k&&(--c,k+=1);return{x:a,y:c,width:h-a,height:k}},translate:function(){var a=this,c=a.chart,h=a.options,k=a.dense=2>a.closestPointRange*
	a.xAxis.transA,k=a.borderWidth=n(h.borderWidth,k?0:1),b=a.yAxis,m=a.translatedThreshold=b.getThreshold(h.threshold),d=n(h.minPointLength,5),l=a.getColumnMetrics(),u=l.width,v=a.barW=Math.max(u,1+2*k),f=a.pointXOffset=l.offset;c.inverted&&(m-=.5);h.pointPadding&&(v=Math.ceil(v));t.prototype.translate.apply(a);C(a.points,function(e){var h=n(e.yBottom,m),k=999+Math.abs(h),k=Math.min(Math.max(-k,e.plotY),b.len+k),l=e.plotX+f,p=v,r=Math.min(k,h),t,y=Math.max(k,h)-r;Math.abs(y)<d&&d&&(y=d,t=!b.reversed&&
	!e.negative||b.reversed&&e.negative,r=Math.abs(r-m)>d?h-d:m-(t?d:0));e.barX=l;e.pointWidth=u;e.tooltipPos=c.inverted?[b.len+b.pos-c.plotLeft-k,a.xAxis.len-l-p/2,y]:[l+p/2,k+b.pos-c.plotTop,y];e.shapeType="rect";e.shapeArgs=a.crispCol.apply(a,e.isNull?[e.plotX,b.len/2,0,0]:[l,r,p,y])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,c){var e=this.options,k,b=this.pointAttrToOptions||
	{};k=b.stroke||"borderColor";var m=b["stroke-width"]||"borderWidth",d=a&&a.color||this.color,l=a[k]||e[k]||this.color||d,n=a[m]||e[m]||this[m]||0,b=e.dashStyle;a&&this.zones.length&&(d=(d=a.getZone())&&d.color||a.options.color||this.color);c&&(a=h(e.states[c],a.options.states&&a.options.states[c]||{}),c=a.brightness,d=a.color||void 0!==c&&z(d).brighten(a.brightness).get()||d,l=a[k]||l,n=a[m]||n,b=a.dashStyle||b);k={fill:d,stroke:l,"stroke-width":n};e.borderRadius&&(k.r=e.borderRadius);b&&(k.dashstyle=
	b);return k},drawPoints:function(){var a=this,c=this.chart,k=a.options,l=c.renderer,b=k.animationLimit||250,m;C(a.points,function(d){var e=d.graphic;if(u(d.plotY)&&null!==d.y){m=d.shapeArgs;if(e)e[c.pointCount<b?"animate":"attr"](h(m));else d.graphic=e=l[d.shapeType](m).add(d.group||a.group);e.attr(a.pointAttribs(d,d.selected&&"select")).shadow(k.shadow,null,k.stacking&&!k.borderRadius);e.addClass(d.getClassName(),!0)}else e&&(d.graphic=e.destroy())})},animate:function(a){var c=this,e=this.yAxis,
	h=c.options,b=this.chart.inverted,m={};k&&(a?(m.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,e.toPixels(h.threshold))),b?m.translateX=a-e.len:m.translateY=a,c.group.attr(m)):(m[b?"translateX":"translateY"]=e.pos,c.group.animate(m,E(B(c.options.animation),{step:function(a,b){c.group.attr({scaleY:Math.max(.001,b.pos)})}})),c.animate=null))},remove:function(){var a=this,c=a.chart;c.hasRendered&&C(c.series,function(c){c.type===a.type&&(c.isDirty=!0)});t.prototype.remove.apply(a,arguments)}})})(I);
	(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(I);(function(a){var B=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group",
	"markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&B.prototype.drawGraph.call(this)}})})(I);(function(a){var B=a.pick,z=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,E=this.chart,u=2*(a.slicedOffset||0),h=E.plotWidth-2*u,E=E.plotHeight-2*u,n=a.center,n=[B(n[0],"50%"),B(n[1],"50%"),a.size||"100%",a.innerSize||0],t=Math.min(h,E),l,k;for(l=0;4>l;++l)k=n[l],a=2>l||2===l&&/%$/.test(k),n[l]=z(k,[h,E,t,n[2]][l])+
	(a?u:0);n[3]>n[2]&&(n[3]=n[2]);return n}}})(I);(function(a){var B=a.addEvent,z=a.defined,C=a.each,E=a.extend,u=a.inArray,h=a.noop,n=a.pick,t=a.Point,l=a.Series,k=a.seriesType,e=a.setAnimation;k("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return null===this.y?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",
	borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var c=this,e=c.points,b=c.startAngleRad;a||(C(e,function(a){var d=a.graphic,e=a.shapeArgs;d&&(d.attr({r:a.startR||c.center[3]/2,start:b,end:b}),d.animate({r:e.r,start:e.start,end:e.end},c.options.animation))}),c.animate=null)},updateTotals:function(){var a,
	e=0,h=this.points,b=h.length,k,d=this.options.ignoreHiddenPoint;for(a=0;a<b;a++)k=h[a],0>k.y&&(k.y=null),e+=d&&!k.visible?0:k.y;this.total=e;for(a=0;a<b;a++)k=h[a],k.percentage=0<e&&(k.visible||!d)?k.y/e*100:0,k.total=e},generatePoints:function(){l.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var c=0,e=this.options,b=e.slicedOffset,h=b+(e.borderWidth||0),d,k,l,v=e.startAngle||0,f=this.startAngleRad=Math.PI/180*(v-90),v=(this.endAngleRad=Math.PI/
	180*(n(e.endAngle,v+360)-90))-f,t=this.points,u=e.dataLabels.distance,e=e.ignoreHiddenPoint,F,q=t.length,x;a||(this.center=a=this.getCenter());this.getX=function(b,c){l=Math.asin(Math.min((b-a[1])/(a[2]/2+u),1));return a[0]+(c?-1:1)*Math.cos(l)*(a[2]/2+u)};for(F=0;F<q;F++){x=t[F];d=f+c*v;if(!e||x.visible)c+=x.percentage/100;k=f+c*v;x.shapeType="arc";x.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*d)/1E3,end:Math.round(1E3*k)/1E3};l=(k+d)/2;l>1.5*Math.PI?l-=2*Math.PI:l<-Math.PI/
	2&&(l+=2*Math.PI);x.slicedTranslation={translateX:Math.round(Math.cos(l)*b),translateY:Math.round(Math.sin(l)*b)};d=Math.cos(l)*a[2]/2;k=Math.sin(l)*a[2]/2;x.tooltipPos=[a[0]+.7*d,a[1]+.7*k];x.half=l<-Math.PI/2||l>Math.PI/2?1:0;x.angle=l;h=Math.min(h,u/5);x.labelPos=[a[0]+d+Math.cos(l)*u,a[1]+k+Math.sin(l)*u,a[0]+d+Math.cos(l)*h,a[1]+k+Math.sin(l)*h,a[0]+d,a[1]+k,0>u?"center":x.half?"right":"left",l]}},drawGraph:null,drawPoints:function(){var a=this,e=a.chart.renderer,h,b,k,d,l=a.options.shadow;l&&
	!a.shadowGroup&&(a.shadowGroup=e.g("shadow").add(a.group));C(a.points,function(c){if(null!==c.y){b=c.graphic;d=c.shapeArgs;h=c.getTranslate();var m=c.shadowGroup;l&&!m&&(m=c.shadowGroup=e.g("shadow").add(a.shadowGroup));m&&m.attr(h);k=a.pointAttribs(c,c.selected&&"select");b?b.setRadialReference(a.center).attr(k).animate(E(d,h)):(c.graphic=b=e[c.shapeType](d).setRadialReference(a.center).attr(h).add(a.group),c.visible||b.attr({visibility:"hidden"}),b.attr(k).attr({"stroke-linejoin":"round"}).shadow(l,
	m));b.addClass(c.getClassName())}})},searchPoint:h,sortByAngle:function(a,e){a.sort(function(a,b){return void 0!==a.angle&&(b.angle-a.angle)*e})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:a.CenteredSeriesMixin.getCenter,getSymbol:h},{init:function(){t.prototype.init.apply(this,arguments);var a=this,e;a.name=n(a.name,"Slice");e=function(c){a.slice("select"===c.type)};B(a,"select",e);B(a,"unselect",e);return a},setVisible:function(a,e){var c=this,b=c.series,h=b.chart,d=b.options.ignoreHiddenPoint;
	e=n(e,d);a!==c.visible&&(c.visible=c.options.visible=a=void 0===a?!c.visible:a,b.options.data[u(c,b.data)]=c.options,C(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)}),c.legendItem&&h.legend.colorizeItem(c,a),a||"hover"!==c.state||c.setState(""),d&&(b.isDirty=!0),e&&h.redraw())},slice:function(a,h,k){var b=this.series;e(k,b.chart);n(h,!0);this.sliced=this.options.sliced=z(a)?a:!this.sliced;b.options.data[u(this,b.data)]=this.options;this.graphic.animate(this.getTranslate());
	this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,c.y,c.r+a,c.r+a,{innerR:this.shapeArgs.r,start:c.start,end:c.end})}})})(I);(function(a){var B=a.addEvent,z=a.arrayMax,C=a.defined,E=a.each,u=a.extend,h=a.format,n=a.map,t=a.merge,l=a.noop,k=a.pick,e=a.relativeLength,c=a.Series,
	p=a.seriesTypes,H=a.stableSort;a.distribute=function(a,c){function b(a,b){return a.target-b.target}var e,h=!0,k=a,f=[],l;l=0;for(e=a.length;e--;)l+=a[e].size;if(l>c){H(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(l=e=0;l<=c;)l+=a[e].size,e++;f=a.splice(e-1,a.length)}H(a,b);for(a=n(a,function(a){return{size:a.size,targets:[a.target]}});h;){for(e=a.length;e--;)h=a[e],l=(Math.min.apply(0,h.targets)+Math.max.apply(0,h.targets))/2,h.pos=Math.min(Math.max(0,l-h.size/2),c-h.size);e=a.length;for(h=
	!1;e--;)0<e&&a[e-1].pos+a[e-1].size>a[e].pos&&(a[e-1].size+=a[e].size,a[e-1].targets=a[e-1].targets.concat(a[e].targets),a[e-1].pos+a[e-1].size>c&&(a[e-1].pos=c-a[e-1].size),a.splice(e,1),h=!0)}e=0;E(a,function(a){var b=0;E(a.targets,function(){k[e].pos=a.pos+b;b+=k[e].size;e++})});k.push.apply(k,f);H(k,b)};c.prototype.drawDataLabels=function(){var a=this,c=a.options,d=c.dataLabels,e=a.points,l,n,f=a.hasRendered||0,p,u,F=k(d.defer,!0),q=a.chart.renderer;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&
	a.dlProcessOptions(d),u=a.plotGroup("dataLabelsGroup","data-labels",F&&!f?"hidden":"visible",d.zIndex||6),F&&(u.attr({opacity:+f}),f||B(a,"afterAnimate",function(){a.visible&&u.show(!0);u[c.animation?"animate":"attr"]({opacity:1},{duration:200})})),n=d,E(e,function(b){var f,e=b.dataLabel,m,g,r,v=b.connector,y=!e,x;l=b.dlOptions||b.options&&b.options.dataLabels;if(f=k(l&&l.enabled,n.enabled)&&null!==b.y)for(g in d=t(n,l),m=b.getLabelConfig(),p=d.format?h(d.format,m):d.formatter.call(m,d),x=d.style,
	r=d.rotation,x.color=k(d.color,x.color,a.color,"#000000"),"contrast"===x.color&&(x.color=d.inside||0>d.distance||c.stacking?q.getContrast(b.color||a.color):"#000000"),c.cursor&&(x.cursor=c.cursor),m={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:r,padding:d.padding,zIndex:1},m)void 0===m[g]&&delete m[g];!e||f&&C(p)?f&&C(p)&&(e?m.text=p:(e=b.dataLabel=q[r?"text":"label"](p,0,-9999,d.shape,null,null,d.useHTML,null,"data-label"),e.addClass("highcharts-data-label-color-"+
	b.colorIndex+" "+(d.className||"")+(d.useHTML?"highcharts-tracker":""))),e.attr(m),e.css(x).shadow(d.shadow),e.added||e.add(u),a.alignDataLabel(b,e,d,null,y)):(b.dataLabel=e.destroy(),v&&(b.connector=v.destroy()))})};c.prototype.alignDataLabel=function(a,c,d,e,h){var b=this.chart,f=b.inverted,l=k(a.plotX,-9999),m=k(a.plotY,-9999),n=c.getBBox(),q,p=d.rotation,r=d.align,t=this.visible&&(a.series.forceDL||b.isInsidePlot(l,Math.round(m),f)||e&&b.isInsidePlot(l,f?e.x+1:e.y+e.height-1,f)),A="justify"===
	k(d.overflow,"justify");t&&(q=d.style.fontSize,q=b.renderer.fontMetrics(q,c).b,e=u({x:f?b.plotWidth-m:l,y:Math.round(f?b.plotHeight-l:m),width:0,height:0},e),u(d,{width:n.width,height:n.height}),p?(A=!1,f=b.renderer.rotCorr(q,p),f={x:e.x+d.x+e.width/2+f.x,y:e.y+d.y+{top:0,middle:.5,bottom:1}[d.verticalAlign]*e.height},c[h?"attr":"animate"](f).attr({align:r}),l=(p+720)%360,l=180<l&&360>l,"left"===r?f.y-=l?n.height:0:"center"===r?(f.x-=n.width/2,f.y-=n.height/2):"right"===r&&(f.x-=n.width,f.y-=l?0:
	n.height)):(c.align(d,null,e),f=c.alignAttr),A?this.justifyDataLabel(c,d,f,n,e,h):k(d.crop,!0)&&(t=b.isInsidePlot(f.x,f.y)&&b.isInsidePlot(f.x+n.width,f.y+n.height)),d.shape&&!p&&c.attr({anchorX:a.plotX,anchorY:a.plotY}));t||(c.attr({y:-9999}),c.placed=!1)};c.prototype.justifyDataLabel=function(a,c,d,e,h,k){var b=this.chart,l=c.align,m=c.verticalAlign,n,q,p=a.box?0:a.padding||0;n=d.x+p;0>n&&("right"===l?c.align="left":c.x=-n,q=!0);n=d.x+e.width-p;n>b.plotWidth&&("left"===l?c.align="right":c.x=b.plotWidth-
	n,q=!0);n=d.y+p;0>n&&("bottom"===m?c.verticalAlign="top":c.y=-n,q=!0);n=d.y+e.height-p;n>b.plotHeight&&("top"===m?c.verticalAlign="bottom":c.y=b.plotHeight-n,q=!0);q&&(a.placed=!k,a.align(c,null,h))};p.pie&&(p.pie.prototype.drawDataLabels=function(){var b=this,e=b.data,d,h=b.chart,l=b.options.dataLabels,p=k(l.connectorPadding,10),f=k(l.connectorWidth,1),t=h.plotWidth,u=h.plotHeight,F,q=l.distance,x=b.center,B=x[2]/2,C=x[1],H=0<q,g,D,I,M,R=[[],[]],N,w,O,Q,P=[0,0,0,0];b.visible&&(l.enabled||b._hasPointLabels)&&
	(E(e,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),c.prototype.drawDataLabels.apply(b),E(e,function(a){a.dataLabel&&a.visible&&(R[a.half].push(a),a.dataLabel._pos=null)}),E(R,function(c,f){var e,k,m=c.length,r,v,y;if(m)for(b.sortByAngle(c,f-.5),0<q&&(e=Math.max(0,C-B-q),k=Math.min(C+B+q,h.plotHeight),r=n(c,function(a){if(a.dataLabel)return y=a.dataLabel.getBBox().height||21,{target:a.labelPos[1]-
	e+y/2,size:y,rank:a.y}}),a.distribute(r,k+y-e)),Q=0;Q<m;Q++)d=c[Q],I=d.labelPos,g=d.dataLabel,O=!1===d.visible?"hidden":"inherit",v=I[1],r?void 0===r[Q].pos?O="hidden":(M=r[Q].size,w=e+r[Q].pos):w=v,N=l.justify?x[0]+(f?-1:1)*(B+q):b.getX(w<e+2||w>k-2?v:w,f),g._attr={visibility:O,align:I[6]},g._pos={x:N+l.x+({left:p,right:-p}[I[6]]||0),y:w+l.y-10},I.x=N,I.y=w,null===b.options.size&&(D=g.getBBox().width,v=null,N-D<p?(v=Math.round(D-N+p),P[3]=Math.max(v,P[3])):N+D>t-p&&(v=Math.round(N+D-t+p),P[1]=Math.max(v,
	P[1])),0>w-M/2?P[0]=Math.max(Math.round(-w+M/2),P[0]):w+M/2>u&&(P[2]=Math.max(Math.round(w+M/2-u),P[2])),g.sideOverflow=v)}),0===z(P)||this.verifyDataLabelOverflow(P))&&(this.placeDataLabels(),H&&f&&E(this.points,function(a){var c;F=a.connector;if((g=a.dataLabel)&&g._pos&&a.visible){O=g._attr.visibility;if(c=!F)a.connector=F=h.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+a.colorIndex).add(b.dataLabelsGroup),F.attr({"stroke-width":f,stroke:l.connectorColor||a.color||
	"#666666"});F[c?"attr":"animate"]({d:b.connectorPath(a.labelPos)});F.attr("visibility",O)}else F&&(a.connector=F.destroy())}))},p.pie.prototype.connectorPath=function(a){var b=a.x,c=a.y;return k(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},p.pie.prototype.placeDataLabels=function(){E(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&
	(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999}))},this)},p.pie.prototype.alignDataLabel=l,p.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,h=c.center,k=c.minSize||80,l,f;null!==h[0]?l=Math.max(b[2]-Math.max(a[1],a[3]),k):(l=Math.max(b[2]-a[1]-a[3],k),b[0]+=(a[3]-a[1])/2);null!==h[1]?l=Math.max(Math.min(l,b[2]-
	Math.max(a[0],a[2])),k):(l=Math.max(Math.min(l,b[2]-a[0]-a[2]),k),b[1]+=(a[0]-a[2])/2);l<b[2]?(b[2]=l,b[3]=Math.min(e(c.innerSize||0,l),l),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):f=!0;return f});p.column&&(p.column.prototype.alignDataLabel=function(a,e,d,h,l){var b=this.chart.inverted,f=a.series,m=a.dlBox||a.shapeArgs,n=k(a.below,a.plotY>k(this.translatedThreshold,f.yAxis.len)),p=k(d.inside,!!this.options.stacking);m&&(h=t(m),0>h.y&&(h.height+=h.y,h.y=0),m=h.y+h.height-f.yAxis.len,
	0<m&&(h.height-=m),b&&(h={x:f.yAxis.len-h.y-h.height,y:f.xAxis.len-h.x-h.width,width:h.height,height:h.width}),p||(b?(h.x+=n?0:h.width,h.width=0):(h.y+=n?h.height:0,h.height=0)));d.align=k(d.align,!b||p?"center":n?"right":"left");d.verticalAlign=k(d.verticalAlign,b||p?"middle":n?"top":"bottom");c.prototype.alignDataLabel.call(this,a,e,d,h,l)})})(I);(function(a){var B=a.Chart,z=a.each,C=a.pick,E=a.addEvent;B.prototype.callbacks.push(function(a){function h(){var h=[];z(a.series||[],function(a){var l=
	a.options.dataLabels,k=a.dataLabelCollections||["dataLabel"];(l.enabled||a._hasPointLabels)&&!l.allowOverlap&&a.visible&&z(k,function(e){z(a.points,function(a){a[e]&&(a[e].labelrank=C(a.labelrank,a.shapeArgs&&a.shapeArgs.height),h.push(a[e]))})})});a.hideOverlappingLabels(h)}h();E(a,"redraw",h)});B.prototype.hideOverlappingLabels=function(a){var h=a.length,n,t,l,k,e,c,p,u,b,m=function(a,b,c,e,f,h,k,l){return!(f>a+c||f+k<a||h>b+e||h+l<b)};for(t=0;t<h;t++)if(n=a[t])n.oldOpacity=n.opacity,n.newOpacity=
	1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(t=0;t<h;t++)for(l=a[t],n=t+1;n<h;++n)if(k=a[n],l&&k&&l.placed&&k.placed&&0!==l.newOpacity&&0!==k.newOpacity&&(e=l.alignAttr,c=k.alignAttr,p=l.parentGroup,u=k.parentGroup,b=2*(l.box?0:l.padding),e=m(e.x+p.translateX,e.y+p.translateY,l.width-b,l.height-b,c.x+u.translateX,c.y+u.translateY,k.width-b,k.height-b)))(l.labelrank<k.labelrank?l:k).newOpacity=0;z(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):
	b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(I);(function(a){var B=a.addEvent,z=a.Chart,C=a.createElement,E=a.css,u=a.defaultOptions,h=a.defaultPlotOptions,n=a.each,t=a.extend,l=a.fireEvent,k=a.hasTouch,e=a.inArray,c=a.isObject,p=a.Legend,H=a.merge,b=a.pick,m=a.Point,d=a.Series,r=a.seriesTypes,A=a.svg;a=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);if(void 0!==c)c.onMouseOver(a)};
	n(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(n(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(k)a[d].on("touchstart",c);a.options.cursor&&a[d].css(E).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?
	a.areaPath:a.graphPath),e=d.length,h=a.chart,l=h.pointer,m=h.renderer,p=h.options.tooltip.snap,t=a.tracker,g,r=function(){if(h.hoverSeries!==a)a.onMouseOver()},u="rgba(192,192,192,"+(A?.0001:.002)+")";if(e&&!c)for(g=e+1;g--;)"M"===d[g]&&d.splice(g+1,0,d[g+1]-p,d[g+2],"L"),(g&&"M"===d[g]||g===e)&&d.splice(g,0,"L",d[g-2]+p,d[g-1]);t?t.attr({d:d}):a.graph&&(a.tracker=m.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:u,fill:c?u:"none","stroke-width":a.graph.strokeWidth()+
	(c?0:2*p),zIndex:2}).add(a.group),n([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",r).on("mouseout",function(a){l.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(k)a.on("touchstart",r)}))}};r.column&&(r.column.prototype.drawTracker=a.drawTrackerPoint);r.pie&&(r.pie.prototype.drawTracker=a.drawTrackerPoint);r.scatter&&(r.scatter.prototype.drawTracker=a.drawTrackerPoint);t(p.prototype,{setItemEvents:function(a,b,c){var d=this,e=d.chart.renderer.boxWrapper,
	f="highcharts-legend-"+(a.series?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");e.addClass(f);b.css(d.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d.itemStyle:d.itemHiddenStyle);e.removeClass(f);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):l(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=C("input",
	{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);B(a.checkbox,"click",function(b){l(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});u.legend.itemStyle.cursor="pointer";t(z.prototype,{showResetZoom:function(){var a=this,b=u.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,h="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},
	d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,h)},zoomOut:function(){var a=this;l(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var d,e=this.pointer,h=!1,k;!a||a.resetSelection?n(this.axes,function(a){d=a.zoom()}):n(a.xAxis.concat(a.yAxis),function(a){var b=a.axis;e[b.isXAxis?"zoomX":"zoomY"]&&(d=b.zoom(a.min,a.max),b.displayBtn&&(h=!0))});k=this.resetZoomButton;h&&!k?this.showResetZoom():
	!h&&c(k)&&(this.resetZoomButton=k.destroy());d&&this.redraw(b(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&n(d,function(a){a.setState()});n("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",h=c[d],k=(b.pointRange||0)/2,g=b.getExtremes(),l=b.toValue(h-f,!0)+k,k=b.toValue(h+b.len-f,!0)-k,m=k<l,h=m?k:l,l=m?l:k,m=b.toValue(b.toPixels(g.min)-b.minPixelPadding),
	k=b.toValue(b.toPixels(g.max)+b.minPixelPadding),m=Math.min(g.dataMin,m)-h,g=l-Math.max(g.dataMax,k);b.series.length&&0>m&&0>g&&(b.setExtremes(h,l,!1,!1,{trigger:"pan"}),e=!0);c[d]=f});e&&c.redraw(!1);E(c.container,{cursor:"move"})}});t(m.prototype,{select:function(a,c){var d=this,f=d.series,h=f.chart;a=b(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:c},function(){d.selected=d.options.selected=a;f.options.data[e(d,f.data)]=d.options;d.setState(a&&"select");c||n(h.getSelectedPoints(),
	function(a){a.selected&&a!==d&&(a.selected=a.options.selected=!1,f.options.data[e(a,f.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart.pointer;this.firePointEvent("mouseOver");b.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");n(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=H(this.series.options.point,
	this.options).events,b;this.events=a;for(b in a)B(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,c){var d=Math.floor(this.plotX),e=this.plotY,f=this.series,k=f.options.states[a]||{},l=h[f.type].marker&&f.options.marker,m=l&&!1===l.enabled,n=l&&l.states&&l.states[a]||{},p=!1===n.enabled,g=f.stateMarkerGraphic,r=this.marker||{},u=f.chart,v=f.halo,z,A=l&&f.markerAttribs;a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===k.enabled||a&&(p||m&&!1===n.enabled)||a&&r.states&&
	r.states[a]&&!1===r.states[a].enabled)){A&&(z=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.attr(f.pointAttribs(this,a)),z&&this.graphic.animate(z,b(u.options.chart.animation,n.animation,l.animation)),g&&g.hide();else{if(a&&n){l=r.symbol||f.symbol;g&&g.currentSymbol!==l&&(g=g.destroy());if(g)g[c?"animate":"attr"]({x:z.x,y:z.y});else l&&(f.stateMarkerGraphic=g=u.renderer.symbol(l,
	z.x,z.y,z.width,z.height).add(f.markerGroup),g.currentSymbol=l);g&&g.attr(f.pointAttribs(this,a))}g&&(g[a&&u.isInsidePlot(d,e,u.inverted)?"show":"hide"](),g.element.point=this)}(d=k.halo)&&d.size?(v||(f.halo=v=u.renderer.path().add(A?f.markerGroup:f.group)),v[c?"animate":"attr"]({d:this.haloPath(d.size)}),v.attr({"class":"highcharts-halo highcharts-color-"+b(this.colorIndex,f.colorIndex)}),v.point=this,v.attr(t({fill:this.color||f.color,"fill-opacity":d.opacity,zIndex:-1},d.attributes))):v&&v.point&&
	v.point.haloPath&&v.animate({d:v.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});t(d.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&l(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();
	this&&a.events.mouseOut&&l(this,"mouseOut");!c||a.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var c=this,d=c.options,e=c.graph,h=d.states,k=d.lineWidth,d=0;a=a||"";if(c.state!==a&&(n([c.group,c.markerGroup,c.dataLabelsGroup],function(b){b&&(c.state&&b.removeClass("highcharts-series-"+c.state),a&&b.addClass("highcharts-series-"+a))}),c.state=a,!h[a]||!1!==h[a].enabled)&&(a&&(k=h[a].lineWidth||k+(h[a].lineWidthPlus||0)),e&&!e.dashstyle))for(k={"stroke-width":k},
	e.animate(k,b(c.chart.options.chart.animation,h[a]&&h[a].animation));c["zone-graph-"+d];)c["zone-graph-"+d].attr(k),d+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,h=d.options.chart.ignoreHiddenSeries,k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";n(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,
	a);c.isDirty=!0;c.options.stacking&&n(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});n(c.linkedSeries,function(b){b.setVisible(a,!1)});h&&(d.isDirtyBox=!0);!1!==b&&d.redraw();l(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);l(this,a?"select":"unselect")},drawTracker:a.drawTrackerGraph})})(I);(function(a){var B=a.Chart,z=a.each,C=a.inArray,E=
	a.isArray,u=a.isObject,h=a.pick,n=a.splat;B.prototype.setResponsive=function(h){var l=this.options.responsive,k=[],e=this.currentResponsive;l&&l.rules&&z(l.rules,function(c){void 0===c._id&&(c._id=a.uniqueKey());this.matchResponsiveRule(c,k,h)},this);var c=a.merge.apply(0,a.map(k,function(c){return a.find(l.rules,function(a){return a._id===c}).chartOptions})),k=k.toString()||void 0;k!==(e&&e.ruleIds)&&(e&&this.update(e.undoOptions,h),k?(this.currentResponsive={ruleIds:k,mergedOptions:c,undoOptions:this.currentOptions(c)},
	this.update(c,h)):this.currentResponsive=void 0)};B.prototype.matchResponsiveRule=function(a,l){var k=a.condition;(k.callback||function(){return this.chartWidth<=h(k.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=h(k.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=h(k.minWidth,0)&&this.chartHeight>=h(k.minHeight,0)}).call(this)&&l.push(a._id)};B.prototype.currentOptions=function(a){function h(a,c,k,l){var b,e;for(b in a)if(!l&&-1<C(b,["series","xAxis","yAxis"]))for(a[b]=n(a[b]),k[b]=[],e=0;e<a[b].length;e++)c[b][e]&&
	(k[b][e]={},h(a[b][e],c[b][e],k[b][e],l+1));else u(a[b])?(k[b]=E(a[b])?[]:{},h(a[b],c[b]||{},k[b],l+1)):k[b]=c[b]||null}var k={};h(a,this.options,k,0);return k}})(I);return I});


/***/ },

/***/ 409:
/*!*********************************!*\
  !*** ./~/chart.js/src/chart.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @namespace Chart
	 */
	var Chart = __webpack_require__(/*! ./core/core.js */ 410)();
	
	__webpack_require__(/*! ./core/core.helpers */ 411)(Chart);
	__webpack_require__(/*! ./platforms/platform.js */ 417)(Chart);
	__webpack_require__(/*! ./core/core.canvasHelpers */ 419)(Chart);
	__webpack_require__(/*! ./core/core.plugin.js */ 420)(Chart);
	__webpack_require__(/*! ./core/core.element */ 421)(Chart);
	__webpack_require__(/*! ./core/core.animation */ 422)(Chart);
	__webpack_require__(/*! ./core/core.controller */ 423)(Chart);
	__webpack_require__(/*! ./core/core.datasetController */ 424)(Chart);
	__webpack_require__(/*! ./core/core.layoutService */ 425)(Chart);
	__webpack_require__(/*! ./core/core.scaleService */ 426)(Chart);
	__webpack_require__(/*! ./core/core.ticks.js */ 427)(Chart);
	__webpack_require__(/*! ./core/core.scale */ 428)(Chart);
	__webpack_require__(/*! ./core/core.title */ 429)(Chart);
	__webpack_require__(/*! ./core/core.legend */ 430)(Chart);
	__webpack_require__(/*! ./core/core.interaction */ 431)(Chart);
	__webpack_require__(/*! ./core/core.tooltip */ 432)(Chart);
	
	__webpack_require__(/*! ./elements/element.arc */ 433)(Chart);
	__webpack_require__(/*! ./elements/element.line */ 434)(Chart);
	__webpack_require__(/*! ./elements/element.point */ 435)(Chart);
	__webpack_require__(/*! ./elements/element.rectangle */ 436)(Chart);
	
	__webpack_require__(/*! ./scales/scale.linearbase.js */ 437)(Chart);
	__webpack_require__(/*! ./scales/scale.category */ 438)(Chart);
	__webpack_require__(/*! ./scales/scale.linear */ 439)(Chart);
	__webpack_require__(/*! ./scales/scale.logarithmic */ 440)(Chart);
	__webpack_require__(/*! ./scales/scale.radialLinear */ 441)(Chart);
	__webpack_require__(/*! ./scales/scale.time */ 442)(Chart);
	
	// Controllers must be loaded after elements
	// See Chart.core.datasetController.dataElementType
	__webpack_require__(/*! ./controllers/controller.bar */ 443)(Chart);
	__webpack_require__(/*! ./controllers/controller.bubble */ 444)(Chart);
	__webpack_require__(/*! ./controllers/controller.doughnut */ 445)(Chart);
	__webpack_require__(/*! ./controllers/controller.line */ 446)(Chart);
	__webpack_require__(/*! ./controllers/controller.polarArea */ 447)(Chart);
	__webpack_require__(/*! ./controllers/controller.radar */ 448)(Chart);
	
	__webpack_require__(/*! ./charts/Chart.Bar */ 449)(Chart);
	__webpack_require__(/*! ./charts/Chart.Bubble */ 450)(Chart);
	__webpack_require__(/*! ./charts/Chart.Doughnut */ 451)(Chart);
	__webpack_require__(/*! ./charts/Chart.Line */ 452)(Chart);
	__webpack_require__(/*! ./charts/Chart.PolarArea */ 453)(Chart);
	__webpack_require__(/*! ./charts/Chart.Radar */ 454)(Chart);
	__webpack_require__(/*! ./charts/Chart.Scatter */ 455)(Chart);
	
	window.Chart = module.exports = Chart;


/***/ },

/***/ 410:
/*!*************************************!*\
  !*** ./~/chart.js/src/core/core.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function() {
	
		// Occupy the global variable of Chart, and create a simple base class
		var Chart = function(item, config) {
			this.controller = new Chart.Controller(item, config, this);
			return this.controller;
		};
	
		// Globally expose the defaults to allow for user updating/changing
		Chart.defaults = {
			global: {
				responsive: true,
				responsiveAnimationDuration: 0,
				maintainAspectRatio: true,
				events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
				hover: {
					onHover: null,
					mode: 'nearest',
					intersect: true,
					animationDuration: 400
				},
				onClick: null,
				defaultColor: 'rgba(0,0,0,0.1)',
				defaultFontColor: '#666',
				defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
				defaultFontSize: 12,
				defaultFontStyle: 'normal',
				showLines: true,
	
				// Element defaults defined in element extensions
				elements: {},
	
				// Legend callback string
				legendCallback: function(chart) {
					var text = [];
					text.push('<ul class="' + chart.id + '-legend">');
					for (var i = 0; i < chart.data.datasets.length; i++) {
						text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
						if (chart.data.datasets[i].label) {
							text.push(chart.data.datasets[i].label);
						}
						text.push('</li>');
					}
					text.push('</ul>');
	
					return text.join('');
				}
			}
		};
	
		Chart.Chart = Chart;
	
		return Chart;
	};


/***/ },

/***/ 411:
/*!*********************************************!*\
  !*** ./~/chart.js/src/core/core.helpers.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* global window: false */
	/* global document: false */
	'use strict';
	
	var color = __webpack_require__(/*! chartjs-color */ 412);
	
	module.exports = function(Chart) {
		// Global Chart helpers object for utility methods and classes
		var helpers = Chart.helpers = {};
	
		// -- Basic js utility methods
		helpers.each = function(loopable, callback, self, reverse) {
			// Check to see if null or undefined firstly.
			var i, len;
			if (helpers.isArray(loopable)) {
				len = loopable.length;
				if (reverse) {
					for (i = len - 1; i >= 0; i--) {
						callback.call(self, loopable[i], i);
					}
				} else {
					for (i = 0; i < len; i++) {
						callback.call(self, loopable[i], i);
					}
				}
			} else if (typeof loopable === 'object') {
				var keys = Object.keys(loopable);
				len = keys.length;
				for (i = 0; i < len; i++) {
					callback.call(self, loopable[keys[i]], keys[i]);
				}
			}
		};
		helpers.clone = function(obj) {
			var objClone = {};
			helpers.each(obj, function(value, key) {
				if (helpers.isArray(value)) {
					objClone[key] = value.slice(0);
				} else if (typeof value === 'object' && value !== null) {
					objClone[key] = helpers.clone(value);
				} else {
					objClone[key] = value;
				}
			});
			return objClone;
		};
		helpers.extend = function(base) {
			var setFn = function(value, key) {
				base[key] = value;
			};
			for (var i = 1, ilen = arguments.length; i < ilen; i++) {
				helpers.each(arguments[i], setFn);
			}
			return base;
		};
		// Need a special merge function to chart configs since they are now grouped
		helpers.configMerge = function(_base) {
			var base = helpers.clone(_base);
			helpers.each(Array.prototype.slice.call(arguments, 1), function(extension) {
				helpers.each(extension, function(value, key) {
					var baseHasProperty = base.hasOwnProperty(key);
					var baseVal = baseHasProperty ? base[key] : {};
	
					if (key === 'scales') {
						// Scale config merging is complex. Add our own function here for that
						base[key] = helpers.scaleMerge(baseVal, value);
					} else if (key === 'scale') {
						// Used in polar area & radar charts since there is only one scale
						base[key] = helpers.configMerge(baseVal, Chart.scaleService.getScaleDefaults(value.type), value);
					} else if (baseHasProperty
							&& typeof baseVal === 'object'
							&& !helpers.isArray(baseVal)
							&& baseVal !== null
							&& typeof value === 'object'
							&& !helpers.isArray(value)) {
						// If we are overwriting an object with an object, do a merge of the properties.
						base[key] = helpers.configMerge(baseVal, value);
					} else {
						// can just overwrite the value in this case
						base[key] = value;
					}
				});
			});
	
			return base;
		};
		helpers.scaleMerge = function(_base, extension) {
			var base = helpers.clone(_base);
	
			helpers.each(extension, function(value, key) {
				if (key === 'xAxes' || key === 'yAxes') {
					// These properties are arrays of items
					if (base.hasOwnProperty(key)) {
						helpers.each(value, function(valueObj, index) {
							var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
							var axisDefaults = Chart.scaleService.getScaleDefaults(axisType);
							if (index >= base[key].length || !base[key][index].type) {
								base[key].push(helpers.configMerge(axisDefaults, valueObj));
							} else if (valueObj.type && valueObj.type !== base[key][index].type) {
								// Type changed. Bring in the new defaults before we bring in valueObj so that valueObj can override the correct scale defaults
								base[key][index] = helpers.configMerge(base[key][index], axisDefaults, valueObj);
							} else {
								// Type is the same
								base[key][index] = helpers.configMerge(base[key][index], valueObj);
							}
						});
					} else {
						base[key] = [];
						helpers.each(value, function(valueObj) {
							var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
							base[key].push(helpers.configMerge(Chart.scaleService.getScaleDefaults(axisType), valueObj));
						});
					}
				} else if (base.hasOwnProperty(key) && typeof base[key] === 'object' && base[key] !== null && typeof value === 'object') {
					// If we are overwriting an object with an object, do a merge of the properties.
					base[key] = helpers.configMerge(base[key], value);
	
				} else {
					// can just overwrite the value in this case
					base[key] = value;
				}
			});
	
			return base;
		};
		helpers.getValueAtIndexOrDefault = function(value, index, defaultValue) {
			if (value === undefined || value === null) {
				return defaultValue;
			}
	
			if (helpers.isArray(value)) {
				return index < value.length ? value[index] : defaultValue;
			}
	
			return value;
		};
		helpers.getValueOrDefault = function(value, defaultValue) {
			return value === undefined ? defaultValue : value;
		};
		helpers.indexOf = Array.prototype.indexOf?
			function(array, item) {
				return array.indexOf(item);
			}:
			function(array, item) {
				for (var i = 0, ilen = array.length; i < ilen; ++i) {
					if (array[i] === item) {
						return i;
					}
				}
				return -1;
			};
		helpers.where = function(collection, filterCallback) {
			if (helpers.isArray(collection) && Array.prototype.filter) {
				return collection.filter(filterCallback);
			}
			var filtered = [];
	
			helpers.each(collection, function(item) {
				if (filterCallback(item)) {
					filtered.push(item);
				}
			});
	
			return filtered;
		};
		helpers.findIndex = Array.prototype.findIndex?
			function(array, callback, scope) {
				return array.findIndex(callback, scope);
			} :
			function(array, callback, scope) {
				scope = scope === undefined? array : scope;
				for (var i = 0, ilen = array.length; i < ilen; ++i) {
					if (callback.call(scope, array[i], i, array)) {
						return i;
					}
				}
				return -1;
			};
		helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
			// Default to start of the array
			if (startIndex === undefined || startIndex === null) {
				startIndex = -1;
			}
			for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)) {
					return currentItem;
				}
			}
		};
		helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
			// Default to end of the array
			if (startIndex === undefined || startIndex === null) {
				startIndex = arrayToSearch.length;
			}
			for (var i = startIndex - 1; i >= 0; i--) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)) {
					return currentItem;
				}
			}
		};
		helpers.inherits = function(extensions) {
			// Basic javascript inheritance based on the model created in Backbone.js
			var me = this;
			var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
				return me.apply(this, arguments);
			};
	
			var Surrogate = function() {
				this.constructor = ChartElement;
			};
			Surrogate.prototype = me.prototype;
			ChartElement.prototype = new Surrogate();
	
			ChartElement.extend = helpers.inherits;
	
			if (extensions) {
				helpers.extend(ChartElement.prototype, extensions);
			}
	
			ChartElement.__super__ = me.prototype;
	
			return ChartElement;
		};
		helpers.noop = function() {};
		helpers.uid = (function() {
			var id = 0;
			return function() {
				return id++;
			};
		}());
		// -- Math methods
		helpers.isNumber = function(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		};
		helpers.almostEquals = function(x, y, epsilon) {
			return Math.abs(x - y) < epsilon;
		};
		helpers.almostWhole = function(x, epsilon) {
			var rounded = Math.round(x);
			return (((rounded - epsilon) < x) && ((rounded + epsilon) > x));
		};
		helpers.max = function(array) {
			return array.reduce(function(max, value) {
				if (!isNaN(value)) {
					return Math.max(max, value);
				}
				return max;
			}, Number.NEGATIVE_INFINITY);
		};
		helpers.min = function(array) {
			return array.reduce(function(min, value) {
				if (!isNaN(value)) {
					return Math.min(min, value);
				}
				return min;
			}, Number.POSITIVE_INFINITY);
		};
		helpers.sign = Math.sign?
			function(x) {
				return Math.sign(x);
			} :
			function(x) {
				x = +x; // convert to a number
				if (x === 0 || isNaN(x)) {
					return x;
				}
				return x > 0 ? 1 : -1;
			};
		helpers.log10 = Math.log10?
			function(x) {
				return Math.log10(x);
			} :
			function(x) {
				return Math.log(x) / Math.LN10;
			};
		helpers.toRadians = function(degrees) {
			return degrees * (Math.PI / 180);
		};
		helpers.toDegrees = function(radians) {
			return radians * (180 / Math.PI);
		};
		// Gets the angle from vertical upright to the point about a centre.
		helpers.getAngleFromPoint = function(centrePoint, anglePoint) {
			var distanceFromXCenter = anglePoint.x - centrePoint.x,
				distanceFromYCenter = anglePoint.y - centrePoint.y,
				radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
	
			var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
	
			if (angle < (-0.5 * Math.PI)) {
				angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
			}
	
			return {
				angle: angle,
				distance: radialDistanceFromCenter
			};
		};
		helpers.distanceBetweenPoints = function(pt1, pt2) {
			return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
		};
		helpers.aliasPixel = function(pixelWidth) {
			return (pixelWidth % 2 === 0) ? 0 : 0.5;
		};
		helpers.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
			// Props to Rob Spencer at scaled innovation for his post on splining between points
			// http://scaledinnovation.com/analytics/splines/aboutSplines.html
	
			// This function must also respect "skipped" points
	
			var previous = firstPoint.skip ? middlePoint : firstPoint,
				current = middlePoint,
				next = afterPoint.skip ? middlePoint : afterPoint;
	
			var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
			var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));
	
			var s01 = d01 / (d01 + d12);
			var s12 = d12 / (d01 + d12);
	
			// If all points are the same, s01 & s02 will be inf
			s01 = isNaN(s01) ? 0 : s01;
			s12 = isNaN(s12) ? 0 : s12;
	
			var fa = t * s01; // scaling factor for triangle Ta
			var fb = t * s12;
	
			return {
				previous: {
					x: current.x - fa * (next.x - previous.x),
					y: current.y - fa * (next.y - previous.y)
				},
				next: {
					x: current.x + fb * (next.x - previous.x),
					y: current.y + fb * (next.y - previous.y)
				}
			};
		};
		helpers.EPSILON = Number.EPSILON || 1e-14;
		helpers.splineCurveMonotone = function(points) {
			// This function calculates Bézier control points in a similar way than |splineCurve|,
			// but preserves monotonicity of the provided data and ensures no local extremums are added
			// between the dataset discrete points due to the interpolation.
			// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
	
			var pointsWithTangents = (points || []).map(function(point) {
				return {
					model: point._model,
					deltaK: 0,
					mK: 0
				};
			});
	
			// Calculate slopes (deltaK) and initialize tangents (mK)
			var pointsLen = pointsWithTangents.length;
			var i, pointBefore, pointCurrent, pointAfter;
			for (i = 0; i < pointsLen; ++i) {
				pointCurrent = pointsWithTangents[i];
				if (pointCurrent.model.skip) {
					continue;
				}
	
				pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
				pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
				if (pointAfter && !pointAfter.model.skip) {
					var slopeDeltaX = (pointAfter.model.x - pointCurrent.model.x);
	
					// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
					pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
				}
	
				if (!pointBefore || pointBefore.model.skip) {
					pointCurrent.mK = pointCurrent.deltaK;
				} else if (!pointAfter || pointAfter.model.skip) {
					pointCurrent.mK = pointBefore.deltaK;
				} else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
					pointCurrent.mK = 0;
				} else {
					pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
				}
			}
	
			// Adjust tangents to ensure monotonic properties
			var alphaK, betaK, tauK, squaredMagnitude;
			for (i = 0; i < pointsLen - 1; ++i) {
				pointCurrent = pointsWithTangents[i];
				pointAfter = pointsWithTangents[i + 1];
				if (pointCurrent.model.skip || pointAfter.model.skip) {
					continue;
				}
	
				if (helpers.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
					pointCurrent.mK = pointAfter.mK = 0;
					continue;
				}
	
				alphaK = pointCurrent.mK / pointCurrent.deltaK;
				betaK = pointAfter.mK / pointCurrent.deltaK;
				squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
				if (squaredMagnitude <= 9) {
					continue;
				}
	
				tauK = 3 / Math.sqrt(squaredMagnitude);
				pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
				pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
			}
	
			// Compute control points
			var deltaX;
			for (i = 0; i < pointsLen; ++i) {
				pointCurrent = pointsWithTangents[i];
				if (pointCurrent.model.skip) {
					continue;
				}
	
				pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
				pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
				if (pointBefore && !pointBefore.model.skip) {
					deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
					pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
					pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
				}
				if (pointAfter && !pointAfter.model.skip) {
					deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
					pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
					pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
				}
			}
		};
		helpers.nextItem = function(collection, index, loop) {
			if (loop) {
				return index >= collection.length - 1 ? collection[0] : collection[index + 1];
			}
			return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
		};
		helpers.previousItem = function(collection, index, loop) {
			if (loop) {
				return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
			}
			return index <= 0 ? collection[0] : collection[index - 1];
		};
		// Implementation of the nice number algorithm used in determining where axis labels will go
		helpers.niceNum = function(range, round) {
			var exponent = Math.floor(helpers.log10(range));
			var fraction = range / Math.pow(10, exponent);
			var niceFraction;
	
			if (round) {
				if (fraction < 1.5) {
					niceFraction = 1;
				} else if (fraction < 3) {
					niceFraction = 2;
				} else if (fraction < 7) {
					niceFraction = 5;
				} else {
					niceFraction = 10;
				}
			} else if (fraction <= 1.0) {
				niceFraction = 1;
			} else if (fraction <= 2) {
				niceFraction = 2;
			} else if (fraction <= 5) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
	
			return niceFraction * Math.pow(10, exponent);
		};
		// Easing functions adapted from Robert Penner's easing equations
		// http://www.robertpenner.com/easing/
		var easingEffects = helpers.easingEffects = {
			linear: function(t) {
				return t;
			},
			easeInQuad: function(t) {
				return t * t;
			},
			easeOutQuad: function(t) {
				return -1 * t * (t - 2);
			},
			easeInOutQuad: function(t) {
				if ((t /= 1 / 2) < 1) {
					return 1 / 2 * t * t;
				}
				return -1 / 2 * ((--t) * (t - 2) - 1);
			},
			easeInCubic: function(t) {
				return t * t * t;
			},
			easeOutCubic: function(t) {
				return 1 * ((t = t / 1 - 1) * t * t + 1);
			},
			easeInOutCubic: function(t) {
				if ((t /= 1 / 2) < 1) {
					return 1 / 2 * t * t * t;
				}
				return 1 / 2 * ((t -= 2) * t * t + 2);
			},
			easeInQuart: function(t) {
				return t * t * t * t;
			},
			easeOutQuart: function(t) {
				return -1 * ((t = t / 1 - 1) * t * t * t - 1);
			},
			easeInOutQuart: function(t) {
				if ((t /= 1 / 2) < 1) {
					return 1 / 2 * t * t * t * t;
				}
				return -1 / 2 * ((t -= 2) * t * t * t - 2);
			},
			easeInQuint: function(t) {
				return 1 * (t /= 1) * t * t * t * t;
			},
			easeOutQuint: function(t) {
				return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
			},
			easeInOutQuint: function(t) {
				if ((t /= 1 / 2) < 1) {
					return 1 / 2 * t * t * t * t * t;
				}
				return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
			},
			easeInSine: function(t) {
				return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
			},
			easeOutSine: function(t) {
				return 1 * Math.sin(t / 1 * (Math.PI / 2));
			},
			easeInOutSine: function(t) {
				return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
			},
			easeInExpo: function(t) {
				return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
			},
			easeOutExpo: function(t) {
				return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
			},
			easeInOutExpo: function(t) {
				if (t === 0) {
					return 0;
				}
				if (t === 1) {
					return 1;
				}
				if ((t /= 1 / 2) < 1) {
					return 1 / 2 * Math.pow(2, 10 * (t - 1));
				}
				return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
			},
			easeInCirc: function(t) {
				if (t >= 1) {
					return t;
				}
				return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
			},
			easeOutCirc: function(t) {
				return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
			},
			easeInOutCirc: function(t) {
				if ((t /= 1 / 2) < 1) {
					return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
				}
				return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
			},
			easeInElastic: function(t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) {
					return 0;
				}
				if ((t /= 1) === 1) {
					return 1;
				}
				if (!p) {
					p = 1 * 0.3;
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else {
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
			},
			easeOutElastic: function(t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) {
					return 0;
				}
				if ((t /= 1) === 1) {
					return 1;
				}
				if (!p) {
					p = 1 * 0.3;
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else {
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
			},
			easeInOutElastic: function(t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) {
					return 0;
				}
				if ((t /= 1 / 2) === 2) {
					return 1;
				}
				if (!p) {
					p = 1 * (0.3 * 1.5);
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else {
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				if (t < 1) {
					return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
				}
				return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
			},
			easeInBack: function(t) {
				var s = 1.70158;
				return 1 * (t /= 1) * t * ((s + 1) * t - s);
			},
			easeOutBack: function(t) {
				var s = 1.70158;
				return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
			},
			easeInOutBack: function(t) {
				var s = 1.70158;
				if ((t /= 1 / 2) < 1) {
					return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
				}
				return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
			},
			easeInBounce: function(t) {
				return 1 - easingEffects.easeOutBounce(1 - t);
			},
			easeOutBounce: function(t) {
				if ((t /= 1) < (1 / 2.75)) {
					return 1 * (7.5625 * t * t);
				} else if (t < (2 / 2.75)) {
					return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
				} else if (t < (2.5 / 2.75)) {
					return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
				}
				return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
			},
			easeInOutBounce: function(t) {
				if (t < 1 / 2) {
					return easingEffects.easeInBounce(t * 2) * 0.5;
				}
				return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
			}
		};
		// Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		helpers.requestAnimFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) {
					return window.setTimeout(callback, 1000 / 60);
				};
		}());
		// -- DOM methods
		helpers.getRelativePosition = function(evt, chart) {
			var mouseX, mouseY;
			var e = evt.originalEvent || evt,
				canvas = evt.currentTarget || evt.srcElement,
				boundingRect = canvas.getBoundingClientRect();
	
			var touches = e.touches;
			if (touches && touches.length > 0) {
				mouseX = touches[0].clientX;
				mouseY = touches[0].clientY;
	
			} else {
				mouseX = e.clientX;
				mouseY = e.clientY;
			}
	
			// Scale mouse coordinates into canvas coordinates
			// by following the pattern laid out by 'jerryj' in the comments of
			// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
			var paddingLeft = parseFloat(helpers.getStyle(canvas, 'padding-left'));
			var paddingTop = parseFloat(helpers.getStyle(canvas, 'padding-top'));
			var paddingRight = parseFloat(helpers.getStyle(canvas, 'padding-right'));
			var paddingBottom = parseFloat(helpers.getStyle(canvas, 'padding-bottom'));
			var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
			var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;
	
			// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
			// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
			mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
			mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);
	
			return {
				x: mouseX,
				y: mouseY
			};
	
		};
		helpers.addEvent = function(node, eventType, method) {
			if (node.addEventListener) {
				node.addEventListener(eventType, method);
			} else if (node.attachEvent) {
				node.attachEvent('on' + eventType, method);
			} else {
				node['on' + eventType] = method;
			}
		};
		helpers.removeEvent = function(node, eventType, handler) {
			if (node.removeEventListener) {
				node.removeEventListener(eventType, handler, false);
			} else if (node.detachEvent) {
				node.detachEvent('on' + eventType, handler);
			} else {
				node['on' + eventType] = helpers.noop;
			}
		};
	
		// Private helper function to convert max-width/max-height values that may be percentages into a number
		function parseMaxStyle(styleValue, node, parentProperty) {
			var valueInPixels;
			if (typeof(styleValue) === 'string') {
				valueInPixels = parseInt(styleValue, 10);
	
				if (styleValue.indexOf('%') !== -1) {
					// percentage * size in dimension
					valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
				}
			} else {
				valueInPixels = styleValue;
			}
	
			return valueInPixels;
		}
	
		/**
		 * Returns if the given value contains an effective constraint.
		 * @private
		 */
		function isConstrainedValue(value) {
			return value !== undefined && value !== null && value !== 'none';
		}
	
		// Private helper to get a constraint dimension
		// @param domNode : the node to check the constraint on
		// @param maxStyle : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
		// @param percentageProperty : property of parent to use when calculating width as a percentage
		// @see http://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
		function getConstraintDimension(domNode, maxStyle, percentageProperty) {
			var view = document.defaultView;
			var parentNode = domNode.parentNode;
			var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
			var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
			var hasCNode = isConstrainedValue(constrainedNode);
			var hasCContainer = isConstrainedValue(constrainedContainer);
			var infinity = Number.POSITIVE_INFINITY;
	
			if (hasCNode || hasCContainer) {
				return Math.min(
					hasCNode? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
					hasCContainer? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
			}
	
			return 'none';
		}
		// returns Number or undefined if no constraint
		helpers.getConstraintWidth = function(domNode) {
			return getConstraintDimension(domNode, 'max-width', 'clientWidth');
		};
		// returns Number or undefined if no constraint
		helpers.getConstraintHeight = function(domNode) {
			return getConstraintDimension(domNode, 'max-height', 'clientHeight');
		};
		helpers.getMaximumWidth = function(domNode) {
			var container = domNode.parentNode;
			var paddingLeft = parseInt(helpers.getStyle(container, 'padding-left'), 10);
			var paddingRight = parseInt(helpers.getStyle(container, 'padding-right'), 10);
			var w = container.clientWidth - paddingLeft - paddingRight;
			var cw = helpers.getConstraintWidth(domNode);
			return isNaN(cw)? w : Math.min(w, cw);
		};
		helpers.getMaximumHeight = function(domNode) {
			var container = domNode.parentNode;
			var paddingTop = parseInt(helpers.getStyle(container, 'padding-top'), 10);
			var paddingBottom = parseInt(helpers.getStyle(container, 'padding-bottom'), 10);
			var h = container.clientHeight - paddingTop - paddingBottom;
			var ch = helpers.getConstraintHeight(domNode);
			return isNaN(ch)? h : Math.min(h, ch);
		};
		helpers.getStyle = function(el, property) {
			return el.currentStyle ?
				el.currentStyle[property] :
				document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
		};
		helpers.retinaScale = function(chart) {
			var pixelRatio = chart.currentDevicePixelRatio = window.devicePixelRatio || 1;
			if (pixelRatio === 1) {
				return;
			}
	
			var canvas = chart.canvas;
			var height = chart.height;
			var width = chart.width;
	
			canvas.height = height * pixelRatio;
			canvas.width = width * pixelRatio;
			chart.ctx.scale(pixelRatio, pixelRatio);
	
			// If no style has been set on the canvas, the render size is used as display size,
			// making the chart visually bigger, so let's enforce it to the "correct" values.
			// See https://github.com/chartjs/Chart.js/issues/3575
			canvas.style.height = height + 'px';
			canvas.style.width = width + 'px';
		};
		// -- Canvas methods
		helpers.clear = function(chart) {
			chart.ctx.clearRect(0, 0, chart.width, chart.height);
		};
		helpers.fontString = function(pixelSize, fontStyle, fontFamily) {
			return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
		};
		helpers.longestText = function(ctx, font, arrayOfThings, cache) {
			cache = cache || {};
			var data = cache.data = cache.data || {};
			var gc = cache.garbageCollect = cache.garbageCollect || [];
	
			if (cache.font !== font) {
				data = cache.data = {};
				gc = cache.garbageCollect = [];
				cache.font = font;
			}
	
			ctx.font = font;
			var longest = 0;
			helpers.each(arrayOfThings, function(thing) {
				// Undefined strings and arrays should not be measured
				if (thing !== undefined && thing !== null && helpers.isArray(thing) !== true) {
					longest = helpers.measureText(ctx, data, gc, longest, thing);
				} else if (helpers.isArray(thing)) {
					// if it is an array lets measure each element
					// to do maybe simplify this function a bit so we can do this more recursively?
					helpers.each(thing, function(nestedThing) {
						// Undefined strings and arrays should not be measured
						if (nestedThing !== undefined && nestedThing !== null && !helpers.isArray(nestedThing)) {
							longest = helpers.measureText(ctx, data, gc, longest, nestedThing);
						}
					});
				}
			});
	
			var gcLen = gc.length / 2;
			if (gcLen > arrayOfThings.length) {
				for (var i = 0; i < gcLen; i++) {
					delete data[gc[i]];
				}
				gc.splice(0, gcLen);
			}
			return longest;
		};
		helpers.measureText = function(ctx, data, gc, longest, string) {
			var textWidth = data[string];
			if (!textWidth) {
				textWidth = data[string] = ctx.measureText(string).width;
				gc.push(string);
			}
			if (textWidth > longest) {
				longest = textWidth;
			}
			return longest;
		};
		helpers.numberOfLabelLines = function(arrayOfThings) {
			var numberOfLines = 1;
			helpers.each(arrayOfThings, function(thing) {
				if (helpers.isArray(thing)) {
					if (thing.length > numberOfLines) {
						numberOfLines = thing.length;
					}
				}
			});
			return numberOfLines;
		};
		helpers.drawRoundedRectangle = function(ctx, x, y, width, height, radius) {
			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			ctx.lineTo(x + width - radius, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
			ctx.lineTo(x + width, y + height - radius);
			ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
			ctx.lineTo(x + radius, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
			ctx.lineTo(x, y + radius);
			ctx.quadraticCurveTo(x, y, x + radius, y);
			ctx.closePath();
		};
		helpers.color = function(c) {
			if (!color) {
				console.error('Color.js not found!');
				return c;
			}
	
			/* global CanvasGradient */
			if (c instanceof CanvasGradient) {
				return color(Chart.defaults.global.defaultColor);
			}
	
			return color(c);
		};
		helpers.isArray = Array.isArray?
			function(obj) {
				return Array.isArray(obj);
			} :
			function(obj) {
				return Object.prototype.toString.call(obj) === '[object Array]';
			};
		// ! @see http://stackoverflow.com/a/14853974
		helpers.arrayEquals = function(a0, a1) {
			var i, ilen, v0, v1;
	
			if (!a0 || !a1 || a0.length !== a1.length) {
				return false;
			}
	
			for (i = 0, ilen=a0.length; i < ilen; ++i) {
				v0 = a0[i];
				v1 = a1[i];
	
				if (v0 instanceof Array && v1 instanceof Array) {
					if (!helpers.arrayEquals(v0, v1)) {
						return false;
					}
				} else if (v0 !== v1) {
					// NOTE: two different object instances will never be equal: {x:20} != {x:20}
					return false;
				}
			}
	
			return true;
		};
		helpers.callCallback = function(fn, args, _tArg) {
			if (fn && typeof fn.call === 'function') {
				fn.apply(_tArg, args);
			}
		};
		helpers.getHoverColor = function(colorValue) {
			/* global CanvasPattern */
			return (colorValue instanceof CanvasPattern) ?
				colorValue :
				helpers.color(colorValue).saturate(0.5).darken(0.1).rgbString();
		};
	};


/***/ },

/***/ 412:
/*!**********************************!*\
  !*** ./~/chartjs-color/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* MIT license */
	var convert = __webpack_require__(/*! color-convert */ 413);
	var string = __webpack_require__(/*! chartjs-color-string */ 415);
	
	var Color = function (obj) {
		if (obj instanceof Color) {
			return obj;
		}
		if (!(this instanceof Color)) {
			return new Color(obj);
		}
	
		this.valid = false;
		this.values = {
			rgb: [0, 0, 0],
			hsl: [0, 0, 0],
			hsv: [0, 0, 0],
			hwb: [0, 0, 0],
			cmyk: [0, 0, 0, 0],
			alpha: 1
		};
	
		// parse Color() argument
		var vals;
		if (typeof obj === 'string') {
			vals = string.getRgba(obj);
			if (vals) {
				this.setValues('rgb', vals);
			} else if (vals = string.getHsla(obj)) {
				this.setValues('hsl', vals);
			} else if (vals = string.getHwb(obj)) {
				this.setValues('hwb', vals);
			}
		} else if (typeof obj === 'object') {
			vals = obj;
			if (vals.r !== undefined || vals.red !== undefined) {
				this.setValues('rgb', vals);
			} else if (vals.l !== undefined || vals.lightness !== undefined) {
				this.setValues('hsl', vals);
			} else if (vals.v !== undefined || vals.value !== undefined) {
				this.setValues('hsv', vals);
			} else if (vals.w !== undefined || vals.whiteness !== undefined) {
				this.setValues('hwb', vals);
			} else if (vals.c !== undefined || vals.cyan !== undefined) {
				this.setValues('cmyk', vals);
			}
		}
	};
	
	Color.prototype = {
		isValid: function () {
			return this.valid;
		},
		rgb: function () {
			return this.setSpace('rgb', arguments);
		},
		hsl: function () {
			return this.setSpace('hsl', arguments);
		},
		hsv: function () {
			return this.setSpace('hsv', arguments);
		},
		hwb: function () {
			return this.setSpace('hwb', arguments);
		},
		cmyk: function () {
			return this.setSpace('cmyk', arguments);
		},
	
		rgbArray: function () {
			return this.values.rgb;
		},
		hslArray: function () {
			return this.values.hsl;
		},
		hsvArray: function () {
			return this.values.hsv;
		},
		hwbArray: function () {
			var values = this.values;
			if (values.alpha !== 1) {
				return values.hwb.concat([values.alpha]);
			}
			return values.hwb;
		},
		cmykArray: function () {
			return this.values.cmyk;
		},
		rgbaArray: function () {
			var values = this.values;
			return values.rgb.concat([values.alpha]);
		},
		hslaArray: function () {
			var values = this.values;
			return values.hsl.concat([values.alpha]);
		},
		alpha: function (val) {
			if (val === undefined) {
				return this.values.alpha;
			}
			this.setValues('alpha', val);
			return this;
		},
	
		red: function (val) {
			return this.setChannel('rgb', 0, val);
		},
		green: function (val) {
			return this.setChannel('rgb', 1, val);
		},
		blue: function (val) {
			return this.setChannel('rgb', 2, val);
		},
		hue: function (val) {
			if (val) {
				val %= 360;
				val = val < 0 ? 360 + val : val;
			}
			return this.setChannel('hsl', 0, val);
		},
		saturation: function (val) {
			return this.setChannel('hsl', 1, val);
		},
		lightness: function (val) {
			return this.setChannel('hsl', 2, val);
		},
		saturationv: function (val) {
			return this.setChannel('hsv', 1, val);
		},
		whiteness: function (val) {
			return this.setChannel('hwb', 1, val);
		},
		blackness: function (val) {
			return this.setChannel('hwb', 2, val);
		},
		value: function (val) {
			return this.setChannel('hsv', 2, val);
		},
		cyan: function (val) {
			return this.setChannel('cmyk', 0, val);
		},
		magenta: function (val) {
			return this.setChannel('cmyk', 1, val);
		},
		yellow: function (val) {
			return this.setChannel('cmyk', 2, val);
		},
		black: function (val) {
			return this.setChannel('cmyk', 3, val);
		},
	
		hexString: function () {
			return string.hexString(this.values.rgb);
		},
		rgbString: function () {
			return string.rgbString(this.values.rgb, this.values.alpha);
		},
		rgbaString: function () {
			return string.rgbaString(this.values.rgb, this.values.alpha);
		},
		percentString: function () {
			return string.percentString(this.values.rgb, this.values.alpha);
		},
		hslString: function () {
			return string.hslString(this.values.hsl, this.values.alpha);
		},
		hslaString: function () {
			return string.hslaString(this.values.hsl, this.values.alpha);
		},
		hwbString: function () {
			return string.hwbString(this.values.hwb, this.values.alpha);
		},
		keyword: function () {
			return string.keyword(this.values.rgb, this.values.alpha);
		},
	
		rgbNumber: function () {
			var rgb = this.values.rgb;
			return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
		},
	
		luminosity: function () {
			// http://www.w3.org/TR/WCAG20/#relativeluminancedef
			var rgb = this.values.rgb;
			var lum = [];
			for (var i = 0; i < rgb.length; i++) {
				var chan = rgb[i] / 255;
				lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
			}
			return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
		},
	
		contrast: function (color2) {
			// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
			var lum1 = this.luminosity();
			var lum2 = color2.luminosity();
			if (lum1 > lum2) {
				return (lum1 + 0.05) / (lum2 + 0.05);
			}
			return (lum2 + 0.05) / (lum1 + 0.05);
		},
	
		level: function (color2) {
			var contrastRatio = this.contrast(color2);
			if (contrastRatio >= 7.1) {
				return 'AAA';
			}
	
			return (contrastRatio >= 4.5) ? 'AA' : '';
		},
	
		dark: function () {
			// YIQ equation from http://24ways.org/2010/calculating-color-contrast
			var rgb = this.values.rgb;
			var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
			return yiq < 128;
		},
	
		light: function () {
			return !this.dark();
		},
	
		negate: function () {
			var rgb = [];
			for (var i = 0; i < 3; i++) {
				rgb[i] = 255 - this.values.rgb[i];
			}
			this.setValues('rgb', rgb);
			return this;
		},
	
		lighten: function (ratio) {
			var hsl = this.values.hsl;
			hsl[2] += hsl[2] * ratio;
			this.setValues('hsl', hsl);
			return this;
		},
	
		darken: function (ratio) {
			var hsl = this.values.hsl;
			hsl[2] -= hsl[2] * ratio;
			this.setValues('hsl', hsl);
			return this;
		},
	
		saturate: function (ratio) {
			var hsl = this.values.hsl;
			hsl[1] += hsl[1] * ratio;
			this.setValues('hsl', hsl);
			return this;
		},
	
		desaturate: function (ratio) {
			var hsl = this.values.hsl;
			hsl[1] -= hsl[1] * ratio;
			this.setValues('hsl', hsl);
			return this;
		},
	
		whiten: function (ratio) {
			var hwb = this.values.hwb;
			hwb[1] += hwb[1] * ratio;
			this.setValues('hwb', hwb);
			return this;
		},
	
		blacken: function (ratio) {
			var hwb = this.values.hwb;
			hwb[2] += hwb[2] * ratio;
			this.setValues('hwb', hwb);
			return this;
		},
	
		greyscale: function () {
			var rgb = this.values.rgb;
			// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
			var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
			this.setValues('rgb', [val, val, val]);
			return this;
		},
	
		clearer: function (ratio) {
			var alpha = this.values.alpha;
			this.setValues('alpha', alpha - (alpha * ratio));
			return this;
		},
	
		opaquer: function (ratio) {
			var alpha = this.values.alpha;
			this.setValues('alpha', alpha + (alpha * ratio));
			return this;
		},
	
		rotate: function (degrees) {
			var hsl = this.values.hsl;
			var hue = (hsl[0] + degrees) % 360;
			hsl[0] = hue < 0 ? 360 + hue : hue;
			this.setValues('hsl', hsl);
			return this;
		},
	
		/**
		 * Ported from sass implementation in C
		 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		 */
		mix: function (mixinColor, weight) {
			var color1 = this;
			var color2 = mixinColor;
			var p = weight === undefined ? 0.5 : weight;
	
			var w = 2 * p - 1;
			var a = color1.alpha() - color2.alpha();
	
			var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
			var w2 = 1 - w1;
	
			return this
				.rgb(
					w1 * color1.red() + w2 * color2.red(),
					w1 * color1.green() + w2 * color2.green(),
					w1 * color1.blue() + w2 * color2.blue()
				)
				.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
		},
	
		toJSON: function () {
			return this.rgb();
		},
	
		clone: function () {
			// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
			// making the final build way to big to embed in Chart.js. So let's do it manually,
			// assuming that values to clone are 1 dimension arrays containing only numbers,
			// except 'alpha' which is a number.
			var result = new Color();
			var source = this.values;
			var target = result.values;
			var value, type;
	
			for (var prop in source) {
				if (source.hasOwnProperty(prop)) {
					value = source[prop];
					type = ({}).toString.call(value);
					if (type === '[object Array]') {
						target[prop] = value.slice(0);
					} else if (type === '[object Number]') {
						target[prop] = value;
					} else {
						console.error('unexpected color value:', value);
					}
				}
			}
	
			return result;
		}
	};
	
	Color.prototype.spaces = {
		rgb: ['red', 'green', 'blue'],
		hsl: ['hue', 'saturation', 'lightness'],
		hsv: ['hue', 'saturation', 'value'],
		hwb: ['hue', 'whiteness', 'blackness'],
		cmyk: ['cyan', 'magenta', 'yellow', 'black']
	};
	
	Color.prototype.maxes = {
		rgb: [255, 255, 255],
		hsl: [360, 100, 100],
		hsv: [360, 100, 100],
		hwb: [360, 100, 100],
		cmyk: [100, 100, 100, 100]
	};
	
	Color.prototype.getValues = function (space) {
		var values = this.values;
		var vals = {};
	
		for (var i = 0; i < space.length; i++) {
			vals[space.charAt(i)] = values[space][i];
		}
	
		if (values.alpha !== 1) {
			vals.a = values.alpha;
		}
	
		// {r: 255, g: 255, b: 255, a: 0.4}
		return vals;
	};
	
	Color.prototype.setValues = function (space, vals) {
		var values = this.values;
		var spaces = this.spaces;
		var maxes = this.maxes;
		var alpha = 1;
		var i;
	
		this.valid = true;
	
		if (space === 'alpha') {
			alpha = vals;
		} else if (vals.length) {
			// [10, 10, 10]
			values[space] = vals.slice(0, space.length);
			alpha = vals[space.length];
		} else if (vals[space.charAt(0)] !== undefined) {
			// {r: 10, g: 10, b: 10}
			for (i = 0; i < space.length; i++) {
				values[space][i] = vals[space.charAt(i)];
			}
	
			alpha = vals.a;
		} else if (vals[spaces[space][0]] !== undefined) {
			// {red: 10, green: 10, blue: 10}
			var chans = spaces[space];
	
			for (i = 0; i < space.length; i++) {
				values[space][i] = vals[chans[i]];
			}
	
			alpha = vals.alpha;
		}
	
		values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));
	
		if (space === 'alpha') {
			return false;
		}
	
		var capped;
	
		// cap values of the space prior converting all values
		for (i = 0; i < space.length; i++) {
			capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
			values[space][i] = Math.round(capped);
		}
	
		// convert to all the other color spaces
		for (var sname in spaces) {
			if (sname !== space) {
				values[sname] = convert[space][sname](values[space]);
			}
		}
	
		return true;
	};
	
	Color.prototype.setSpace = function (space, args) {
		var vals = args[0];
	
		if (vals === undefined) {
			// color.rgb()
			return this.getValues(space);
		}
	
		// color.rgb(10, 10, 10)
		if (typeof vals === 'number') {
			vals = Array.prototype.slice.call(args);
		}
	
		this.setValues(space, vals);
		return this;
	};
	
	Color.prototype.setChannel = function (space, index, val) {
		var svalues = this.values[space];
		if (val === undefined) {
			// color.red()
			return svalues[index];
		} else if (val === svalues[index]) {
			// color.red(color.red())
			return this;
		}
	
		// color.red(100)
		svalues[index] = val;
		this.setValues(space, svalues);
	
		return this;
	};
	
	if (typeof window !== 'undefined') {
		window.Color = Color;
	}
	
	module.exports = Color;


/***/ },

/***/ 413:
/*!**************************************************!*\
  !*** ./~/chartjs-color/~/color-convert/index.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var conversions = __webpack_require__(/*! ./conversions */ 414);
	
	var convert = function() {
	   return new Converter();
	}
	
	for (var func in conversions) {
	  // export Raw versions
	  convert[func + "Raw"] =  (function(func) {
	    // accept array or plain args
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      return conversions[func](arg);
	    }
	  })(func);
	
	  var pair = /(\w+)2(\w+)/.exec(func),
	      from = pair[1],
	      to = pair[2];
	
	  // export rgb2hsl and ["rgb"]["hsl"]
	  convert[from] = convert[from] || {};
	
	  convert[from][to] = convert[func] = (function(func) { 
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      
	      var val = conversions[func](arg);
	      if (typeof val == "string" || val === undefined)
	        return val; // keyword
	
	      for (var i = 0; i < val.length; i++)
	        val[i] = Math.round(val[i]);
	      return val;
	    }
	  })(func);
	}
	
	
	/* Converter does lazy conversion and caching */
	var Converter = function() {
	   this.convs = {};
	};
	
	/* Either get the values for a space or
	  set the values for a space, depending on args */
	Converter.prototype.routeSpace = function(space, args) {
	   var values = args[0];
	   if (values === undefined) {
	      // color.rgb()
	      return this.getValues(space);
	   }
	   // color.rgb(10, 10, 10)
	   if (typeof values == "number") {
	      values = Array.prototype.slice.call(args);        
	   }
	
	   return this.setValues(space, values);
	};
	  
	/* Set the values for a space, invalidating cache */
	Converter.prototype.setValues = function(space, values) {
	   this.space = space;
	   this.convs = {};
	   this.convs[space] = values;
	   return this;
	};
	
	/* Get the values for a space. If there's already
	  a conversion for the space, fetch it, otherwise
	  compute it */
	Converter.prototype.getValues = function(space) {
	   var vals = this.convs[space];
	   if (!vals) {
	      var fspace = this.space,
	          from = this.convs[fspace];
	      vals = convert[fspace][space](from);
	
	      this.convs[space] = vals;
	   }
	  return vals;
	};
	
	["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
	   Converter.prototype[space] = function(vals) {
	      return this.routeSpace(space, arguments);
	   }
	});
	
	module.exports = convert;

/***/ },

/***/ 414:
/*!********************************************************!*\
  !*** ./~/chartjs-color/~/color-convert/conversions.js ***!
  \********************************************************/
/***/ function(module, exports) {

	/* MIT license */
	
	module.exports = {
	  rgb2hsl: rgb2hsl,
	  rgb2hsv: rgb2hsv,
	  rgb2hwb: rgb2hwb,
	  rgb2cmyk: rgb2cmyk,
	  rgb2keyword: rgb2keyword,
	  rgb2xyz: rgb2xyz,
	  rgb2lab: rgb2lab,
	  rgb2lch: rgb2lch,
	
	  hsl2rgb: hsl2rgb,
	  hsl2hsv: hsl2hsv,
	  hsl2hwb: hsl2hwb,
	  hsl2cmyk: hsl2cmyk,
	  hsl2keyword: hsl2keyword,
	
	  hsv2rgb: hsv2rgb,
	  hsv2hsl: hsv2hsl,
	  hsv2hwb: hsv2hwb,
	  hsv2cmyk: hsv2cmyk,
	  hsv2keyword: hsv2keyword,
	
	  hwb2rgb: hwb2rgb,
	  hwb2hsl: hwb2hsl,
	  hwb2hsv: hwb2hsv,
	  hwb2cmyk: hwb2cmyk,
	  hwb2keyword: hwb2keyword,
	
	  cmyk2rgb: cmyk2rgb,
	  cmyk2hsl: cmyk2hsl,
	  cmyk2hsv: cmyk2hsv,
	  cmyk2hwb: cmyk2hwb,
	  cmyk2keyword: cmyk2keyword,
	
	  keyword2rgb: keyword2rgb,
	  keyword2hsl: keyword2hsl,
	  keyword2hsv: keyword2hsv,
	  keyword2hwb: keyword2hwb,
	  keyword2cmyk: keyword2cmyk,
	  keyword2lab: keyword2lab,
	  keyword2xyz: keyword2xyz,
	
	  xyz2rgb: xyz2rgb,
	  xyz2lab: xyz2lab,
	  xyz2lch: xyz2lch,
	
	  lab2xyz: lab2xyz,
	  lab2rgb: lab2rgb,
	  lab2lch: lab2lch,
	
	  lch2lab: lch2lab,
	  lch2xyz: lch2xyz,
	  lch2rgb: lch2rgb
	}
	
	
	function rgb2hsl(rgb) {
	  var r = rgb[0]/255,
	      g = rgb[1]/255,
	      b = rgb[2]/255,
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, l;
	
	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g)/ delta;
	
	  h = Math.min(h * 60, 360);
	
	  if (h < 0)
	    h += 360;
	
	  l = (min + max) / 2;
	
	  if (max == min)
	    s = 0;
	  else if (l <= 0.5)
	    s = delta / (max + min);
	  else
	    s = delta / (2 - max - min);
	
	  return [h, s * 100, l * 100];
	}
	
	function rgb2hsv(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, v;
	
	  if (max == 0)
	    s = 0;
	  else
	    s = (delta/max * 1000)/10;
	
	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g) / delta;
	
	  h = Math.min(h * 60, 360);
	
	  if (h < 0)
	    h += 360;
	
	  v = ((max / 255) * 1000) / 10;
	
	  return [h, s, v];
	}
	
	function rgb2hwb(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      h = rgb2hsl(rgb)[0],
	      w = 1/255 * Math.min(r, Math.min(g, b)),
	      b = 1 - 1/255 * Math.max(r, Math.max(g, b));
	
	  return [h, w * 100, b * 100];
	}
	
	function rgb2cmyk(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255,
	      c, m, y, k;
	
	  k = Math.min(1 - r, 1 - g, 1 - b);
	  c = (1 - r - k) / (1 - k) || 0;
	  m = (1 - g - k) / (1 - k) || 0;
	  y = (1 - b - k) / (1 - k) || 0;
	  return [c * 100, m * 100, y * 100, k * 100];
	}
	
	function rgb2keyword(rgb) {
	  return reverseKeywords[JSON.stringify(rgb)];
	}
	
	function rgb2xyz(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255;
	
	  // assume sRGB
	  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
	
	  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
	
	  return [x * 100, y *100, z * 100];
	}
	
	function rgb2lab(rgb) {
	  var xyz = rgb2xyz(rgb),
	        x = xyz[0],
	        y = xyz[1],
	        z = xyz[2],
	        l, a, b;
	
	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;
	
	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);
	
	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);
	
	  return [l, a, b];
	}
	
	function rgb2lch(args) {
	  return lab2lch(rgb2lab(args));
	}
	
	function hsl2rgb(hsl) {
	  var h = hsl[0] / 360,
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      t1, t2, t3, rgb, val;
	
	  if (s == 0) {
	    val = l * 255;
	    return [val, val, val];
	  }
	
	  if (l < 0.5)
	    t2 = l * (1 + s);
	  else
	    t2 = l + s - l * s;
	  t1 = 2 * l - t2;
	
	  rgb = [0, 0, 0];
	  for (var i = 0; i < 3; i++) {
	    t3 = h + 1 / 3 * - (i - 1);
	    t3 < 0 && t3++;
	    t3 > 1 && t3--;
	
	    if (6 * t3 < 1)
	      val = t1 + (t2 - t1) * 6 * t3;
	    else if (2 * t3 < 1)
	      val = t2;
	    else if (3 * t3 < 2)
	      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
	    else
	      val = t1;
	
	    rgb[i] = val * 255;
	  }
	
	  return rgb;
	}
	
	function hsl2hsv(hsl) {
	  var h = hsl[0],
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      sv, v;
	
	  if(l === 0) {
	      // no need to do calc on black
	      // also avoids divide by 0 error
	      return [0, 0, 0];
	  }
	
	  l *= 2;
	  s *= (l <= 1) ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = (2 * s) / (l + s);
	  return [h, sv * 100, v * 100];
	}
	
	function hsl2hwb(args) {
	  return rgb2hwb(hsl2rgb(args));
	}
	
	function hsl2cmyk(args) {
	  return rgb2cmyk(hsl2rgb(args));
	}
	
	function hsl2keyword(args) {
	  return rgb2keyword(hsl2rgb(args));
	}
	
	
	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60,
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      hi = Math.floor(h) % 6;
	
	  var f = h - Math.floor(h),
	      p = 255 * v * (1 - s),
	      q = 255 * v * (1 - (s * f)),
	      t = 255 * v * (1 - (s * (1 - f))),
	      v = 255 * v;
	
	  switch(hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}
	
	function hsv2hsl(hsv) {
	  var h = hsv[0],
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      sl, l;
	
	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= (l <= 1) ? l : 2 - l;
	  sl = sl || 0;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}
	
	function hsv2hwb(args) {
	  return rgb2hwb(hsv2rgb(args))
	}
	
	function hsv2cmyk(args) {
	  return rgb2cmyk(hsv2rgb(args));
	}
	
	function hsv2keyword(args) {
	  return rgb2keyword(hsv2rgb(args));
	}
	
	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	function hwb2rgb(hwb) {
	  var h = hwb[0] / 360,
	      wh = hwb[1] / 100,
	      bl = hwb[2] / 100,
	      ratio = wh + bl,
	      i, v, f, n;
	
	  // wh + bl cant be > 1
	  if (ratio > 1) {
	    wh /= ratio;
	    bl /= ratio;
	  }
	
	  i = Math.floor(6 * h);
	  v = 1 - bl;
	  f = 6 * h - i;
	  if ((i & 0x01) != 0) {
	    f = 1 - f;
	  }
	  n = wh + f * (v - wh);  // linear interpolation
	
	  switch (i) {
	    default:
	    case 6:
	    case 0: r = v; g = n; b = wh; break;
	    case 1: r = n; g = v; b = wh; break;
	    case 2: r = wh; g = v; b = n; break;
	    case 3: r = wh; g = n; b = v; break;
	    case 4: r = n; g = wh; b = v; break;
	    case 5: r = v; g = wh; b = n; break;
	  }
	
	  return [r * 255, g * 255, b * 255];
	}
	
	function hwb2hsl(args) {
	  return rgb2hsl(hwb2rgb(args));
	}
	
	function hwb2hsv(args) {
	  return rgb2hsv(hwb2rgb(args));
	}
	
	function hwb2cmyk(args) {
	  return rgb2cmyk(hwb2rgb(args));
	}
	
	function hwb2keyword(args) {
	  return rgb2keyword(hwb2rgb(args));
	}
	
	function cmyk2rgb(cmyk) {
	  var c = cmyk[0] / 100,
	      m = cmyk[1] / 100,
	      y = cmyk[2] / 100,
	      k = cmyk[3] / 100,
	      r, g, b;
	
	  r = 1 - Math.min(1, c * (1 - k) + k);
	  g = 1 - Math.min(1, m * (1 - k) + k);
	  b = 1 - Math.min(1, y * (1 - k) + k);
	  return [r * 255, g * 255, b * 255];
	}
	
	function cmyk2hsl(args) {
	  return rgb2hsl(cmyk2rgb(args));
	}
	
	function cmyk2hsv(args) {
	  return rgb2hsv(cmyk2rgb(args));
	}
	
	function cmyk2hwb(args) {
	  return rgb2hwb(cmyk2rgb(args));
	}
	
	function cmyk2keyword(args) {
	  return rgb2keyword(cmyk2rgb(args));
	}
	
	
	function xyz2rgb(xyz) {
	  var x = xyz[0] / 100,
	      y = xyz[1] / 100,
	      z = xyz[2] / 100,
	      r, g, b;
	
	  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
	
	  // assume sRGB
	  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
	    : r = (r * 12.92);
	
	  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
	    : g = (g * 12.92);
	
	  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
	    : b = (b * 12.92);
	
	  r = Math.min(Math.max(0, r), 1);
	  g = Math.min(Math.max(0, g), 1);
	  b = Math.min(Math.max(0, b), 1);
	
	  return [r * 255, g * 255, b * 255];
	}
	
	function xyz2lab(xyz) {
	  var x = xyz[0],
	      y = xyz[1],
	      z = xyz[2],
	      l, a, b;
	
	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;
	
	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);
	
	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);
	
	  return [l, a, b];
	}
	
	function xyz2lch(args) {
	  return lab2lch(xyz2lab(args));
	}
	
	function lab2xyz(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      x, y, z, y2;
	
	  if (l <= 8) {
	    y = (l * 100) / 903.3;
	    y2 = (7.787 * (y / 100)) + (16 / 116);
	  } else {
	    y = 100 * Math.pow((l + 16) / 116, 3);
	    y2 = Math.pow(y / 100, 1/3);
	  }
	
	  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);
	
	  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);
	
	  return [x, y, z];
	}
	
	function lab2lch(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      hr, h, c;
	
	  hr = Math.atan2(b, a);
	  h = hr * 360 / 2 / Math.PI;
	  if (h < 0) {
	    h += 360;
	  }
	  c = Math.sqrt(a * a + b * b);
	  return [l, c, h];
	}
	
	function lab2rgb(args) {
	  return xyz2rgb(lab2xyz(args));
	}
	
	function lch2lab(lch) {
	  var l = lch[0],
	      c = lch[1],
	      h = lch[2],
	      a, b, hr;
	
	  hr = h / 360 * 2 * Math.PI;
	  a = c * Math.cos(hr);
	  b = c * Math.sin(hr);
	  return [l, a, b];
	}
	
	function lch2xyz(args) {
	  return lab2xyz(lch2lab(args));
	}
	
	function lch2rgb(args) {
	  return lab2rgb(lch2lab(args));
	}
	
	function keyword2rgb(keyword) {
	  return cssKeywords[keyword];
	}
	
	function keyword2hsl(args) {
	  return rgb2hsl(keyword2rgb(args));
	}
	
	function keyword2hsv(args) {
	  return rgb2hsv(keyword2rgb(args));
	}
	
	function keyword2hwb(args) {
	  return rgb2hwb(keyword2rgb(args));
	}
	
	function keyword2cmyk(args) {
	  return rgb2cmyk(keyword2rgb(args));
	}
	
	function keyword2lab(args) {
	  return rgb2lab(keyword2rgb(args));
	}
	
	function keyword2xyz(args) {
	  return rgb2xyz(keyword2rgb(args));
	}
	
	var cssKeywords = {
	  aliceblue:  [240,248,255],
	  antiquewhite: [250,235,215],
	  aqua: [0,255,255],
	  aquamarine: [127,255,212],
	  azure:  [240,255,255],
	  beige:  [245,245,220],
	  bisque: [255,228,196],
	  black:  [0,0,0],
	  blanchedalmond: [255,235,205],
	  blue: [0,0,255],
	  blueviolet: [138,43,226],
	  brown:  [165,42,42],
	  burlywood:  [222,184,135],
	  cadetblue:  [95,158,160],
	  chartreuse: [127,255,0],
	  chocolate:  [210,105,30],
	  coral:  [255,127,80],
	  cornflowerblue: [100,149,237],
	  cornsilk: [255,248,220],
	  crimson:  [220,20,60],
	  cyan: [0,255,255],
	  darkblue: [0,0,139],
	  darkcyan: [0,139,139],
	  darkgoldenrod:  [184,134,11],
	  darkgray: [169,169,169],
	  darkgreen:  [0,100,0],
	  darkgrey: [169,169,169],
	  darkkhaki:  [189,183,107],
	  darkmagenta:  [139,0,139],
	  darkolivegreen: [85,107,47],
	  darkorange: [255,140,0],
	  darkorchid: [153,50,204],
	  darkred:  [139,0,0],
	  darksalmon: [233,150,122],
	  darkseagreen: [143,188,143],
	  darkslateblue:  [72,61,139],
	  darkslategray:  [47,79,79],
	  darkslategrey:  [47,79,79],
	  darkturquoise:  [0,206,209],
	  darkviolet: [148,0,211],
	  deeppink: [255,20,147],
	  deepskyblue:  [0,191,255],
	  dimgray:  [105,105,105],
	  dimgrey:  [105,105,105],
	  dodgerblue: [30,144,255],
	  firebrick:  [178,34,34],
	  floralwhite:  [255,250,240],
	  forestgreen:  [34,139,34],
	  fuchsia:  [255,0,255],
	  gainsboro:  [220,220,220],
	  ghostwhite: [248,248,255],
	  gold: [255,215,0],
	  goldenrod:  [218,165,32],
	  gray: [128,128,128],
	  green:  [0,128,0],
	  greenyellow:  [173,255,47],
	  grey: [128,128,128],
	  honeydew: [240,255,240],
	  hotpink:  [255,105,180],
	  indianred:  [205,92,92],
	  indigo: [75,0,130],
	  ivory:  [255,255,240],
	  khaki:  [240,230,140],
	  lavender: [230,230,250],
	  lavenderblush:  [255,240,245],
	  lawngreen:  [124,252,0],
	  lemonchiffon: [255,250,205],
	  lightblue:  [173,216,230],
	  lightcoral: [240,128,128],
	  lightcyan:  [224,255,255],
	  lightgoldenrodyellow: [250,250,210],
	  lightgray:  [211,211,211],
	  lightgreen: [144,238,144],
	  lightgrey:  [211,211,211],
	  lightpink:  [255,182,193],
	  lightsalmon:  [255,160,122],
	  lightseagreen:  [32,178,170],
	  lightskyblue: [135,206,250],
	  lightslategray: [119,136,153],
	  lightslategrey: [119,136,153],
	  lightsteelblue: [176,196,222],
	  lightyellow:  [255,255,224],
	  lime: [0,255,0],
	  limegreen:  [50,205,50],
	  linen:  [250,240,230],
	  magenta:  [255,0,255],
	  maroon: [128,0,0],
	  mediumaquamarine: [102,205,170],
	  mediumblue: [0,0,205],
	  mediumorchid: [186,85,211],
	  mediumpurple: [147,112,219],
	  mediumseagreen: [60,179,113],
	  mediumslateblue:  [123,104,238],
	  mediumspringgreen:  [0,250,154],
	  mediumturquoise:  [72,209,204],
	  mediumvioletred:  [199,21,133],
	  midnightblue: [25,25,112],
	  mintcream:  [245,255,250],
	  mistyrose:  [255,228,225],
	  moccasin: [255,228,181],
	  navajowhite:  [255,222,173],
	  navy: [0,0,128],
	  oldlace:  [253,245,230],
	  olive:  [128,128,0],
	  olivedrab:  [107,142,35],
	  orange: [255,165,0],
	  orangered:  [255,69,0],
	  orchid: [218,112,214],
	  palegoldenrod:  [238,232,170],
	  palegreen:  [152,251,152],
	  paleturquoise:  [175,238,238],
	  palevioletred:  [219,112,147],
	  papayawhip: [255,239,213],
	  peachpuff:  [255,218,185],
	  peru: [205,133,63],
	  pink: [255,192,203],
	  plum: [221,160,221],
	  powderblue: [176,224,230],
	  purple: [128,0,128],
	  rebeccapurple: [102, 51, 153],
	  red:  [255,0,0],
	  rosybrown:  [188,143,143],
	  royalblue:  [65,105,225],
	  saddlebrown:  [139,69,19],
	  salmon: [250,128,114],
	  sandybrown: [244,164,96],
	  seagreen: [46,139,87],
	  seashell: [255,245,238],
	  sienna: [160,82,45],
	  silver: [192,192,192],
	  skyblue:  [135,206,235],
	  slateblue:  [106,90,205],
	  slategray:  [112,128,144],
	  slategrey:  [112,128,144],
	  snow: [255,250,250],
	  springgreen:  [0,255,127],
	  steelblue:  [70,130,180],
	  tan:  [210,180,140],
	  teal: [0,128,128],
	  thistle:  [216,191,216],
	  tomato: [255,99,71],
	  turquoise:  [64,224,208],
	  violet: [238,130,238],
	  wheat:  [245,222,179],
	  white:  [255,255,255],
	  whitesmoke: [245,245,245],
	  yellow: [255,255,0],
	  yellowgreen:  [154,205,50]
	};
	
	var reverseKeywords = {};
	for (var key in cssKeywords) {
	  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
	}


/***/ },

/***/ 415:
/*!************************************************!*\
  !*** ./~/chartjs-color-string/color-string.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* MIT license */
	var colorNames = __webpack_require__(/*! color-name */ 416);
	
	module.exports = {
	   getRgba: getRgba,
	   getHsla: getHsla,
	   getRgb: getRgb,
	   getHsl: getHsl,
	   getHwb: getHwb,
	   getAlpha: getAlpha,
	
	   hexString: hexString,
	   rgbString: rgbString,
	   rgbaString: rgbaString,
	   percentString: percentString,
	   percentaString: percentaString,
	   hslString: hslString,
	   hslaString: hslaString,
	   hwbString: hwbString,
	   keyword: keyword
	}
	
	function getRgba(string) {
	   if (!string) {
	      return;
	   }
	   var abbr =  /^#([a-fA-F0-9]{3})$/,
	       hex =  /^#([a-fA-F0-9]{6})$/,
	       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	       keyword = /(\w+)/;
	
	   var rgb = [0, 0, 0],
	       a = 1,
	       match = string.match(abbr);
	   if (match) {
	      match = match[1];
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match[i] + match[i], 16);
	      }
	   }
	   else if (match = string.match(hex)) {
	      match = match[1];
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
	      }
	   }
	   else if (match = string.match(rgba)) {
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match[i + 1]);
	      }
	      a = parseFloat(match[4]);
	   }
	   else if (match = string.match(per)) {
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
	      }
	      a = parseFloat(match[4]);
	   }
	   else if (match = string.match(keyword)) {
	      if (match[1] == "transparent") {
	         return [0, 0, 0, 0];
	      }
	      rgb = colorNames[match[1]];
	      if (!rgb) {
	         return;
	      }
	   }
	
	   for (var i = 0; i < rgb.length; i++) {
	      rgb[i] = scale(rgb[i], 0, 255);
	   }
	   if (!a && a != 0) {
	      a = 1;
	   }
	   else {
	      a = scale(a, 0, 1);
	   }
	   rgb[3] = a;
	   return rgb;
	}
	
	function getHsla(string) {
	   if (!string) {
	      return;
	   }
	   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	   var match = string.match(hsl);
	   if (match) {
	      var alpha = parseFloat(match[4]);
	      var h = scale(parseInt(match[1]), 0, 360),
	          s = scale(parseFloat(match[2]), 0, 100),
	          l = scale(parseFloat(match[3]), 0, 100),
	          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	      return [h, s, l, a];
	   }
	}
	
	function getHwb(string) {
	   if (!string) {
	      return;
	   }
	   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	   var match = string.match(hwb);
	   if (match) {
	    var alpha = parseFloat(match[4]);
	      var h = scale(parseInt(match[1]), 0, 360),
	          w = scale(parseFloat(match[2]), 0, 100),
	          b = scale(parseFloat(match[3]), 0, 100),
	          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	      return [h, w, b, a];
	   }
	}
	
	function getRgb(string) {
	   var rgba = getRgba(string);
	   return rgba && rgba.slice(0, 3);
	}
	
	function getHsl(string) {
	  var hsla = getHsla(string);
	  return hsla && hsla.slice(0, 3);
	}
	
	function getAlpha(string) {
	   var vals = getRgba(string);
	   if (vals) {
	      return vals[3];
	   }
	   else if (vals = getHsla(string)) {
	      return vals[3];
	   }
	   else if (vals = getHwb(string)) {
	      return vals[3];
	   }
	}
	
	// generators
	function hexString(rgb) {
	   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
	              + hexDouble(rgb[2]);
	}
	
	function rgbString(rgba, alpha) {
	   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	      return rgbaString(rgba, alpha);
	   }
	   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
	}
	
	function rgbaString(rgba, alpha) {
	   if (alpha === undefined) {
	      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
	   }
	   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
	           + ", " + alpha + ")";
	}
	
	function percentString(rgba, alpha) {
	   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	      return percentaString(rgba, alpha);
	   }
	   var r = Math.round(rgba[0]/255 * 100),
	       g = Math.round(rgba[1]/255 * 100),
	       b = Math.round(rgba[2]/255 * 100);
	
	   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
	}
	
	function percentaString(rgba, alpha) {
	   var r = Math.round(rgba[0]/255 * 100),
	       g = Math.round(rgba[1]/255 * 100),
	       b = Math.round(rgba[2]/255 * 100);
	   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
	}
	
	function hslString(hsla, alpha) {
	   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
	      return hslaString(hsla, alpha);
	   }
	   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
	}
	
	function hslaString(hsla, alpha) {
	   if (alpha === undefined) {
	      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
	   }
	   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
	           + alpha + ")";
	}
	
	// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	function hwbString(hwb, alpha) {
	   if (alpha === undefined) {
	      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
	   }
	   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
	           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
	}
	
	function keyword(rgb) {
	  return reverseNames[rgb.slice(0, 3)];
	}
	
	// helpers
	function scale(num, min, max) {
	   return Math.min(Math.max(min, num), max);
	}
	
	function hexDouble(num) {
	  var str = num.toString(16).toUpperCase();
	  return (str.length < 2) ? "0" + str : str;
	}
	
	
	//create a list of reverse color names
	var reverseNames = {};
	for (var name in colorNames) {
	   reverseNames[colorNames[name]] = name;
	}


/***/ },

/***/ 416:
/*!*******************************!*\
  !*** ./~/color-name/index.js ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};

/***/ },

/***/ 417:
/*!**********************************************!*\
  !*** ./~/chart.js/src/platforms/platform.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// By default, select the browser (DOM) platform.
	// @TODO Make possible to select another platform at build time.
	var implementation = __webpack_require__(/*! ./platform.dom.js */ 418);
	
	module.exports = function(Chart) {
		/**
		 * @namespace Chart.platform
		 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
		 * @since 2.4.0
		 */
		Chart.platform = {
			/**
			 * Called at chart construction time, returns a context2d instance implementing
			 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
			 * @param {*} item - The native item from which to acquire context (platform specific)
			 * @param {Object} options - The chart options
			 * @returns {CanvasRenderingContext2D} context2d instance
			 */
			acquireContext: function() {},
	
			/**
			 * Called at chart destruction time, releases any resources associated to the context
			 * previously returned by the acquireContext() method.
			 * @param {CanvasRenderingContext2D} context - The context2d instance
			 * @returns {Boolean} true if the method succeeded, else false
			 */
			releaseContext: function() {},
	
			/**
			 * Registers the specified listener on the given chart.
			 * @param {Chart} chart - Chart from which to listen for event
			 * @param {String} type - The ({@link IEvent}) type to listen for
			 * @param {Function} listener - Receives a notification (an object that implements
			 * the {@link IEvent} interface) when an event of the specified type occurs.
			 */
			addEventListener: function() {},
	
			/**
			 * Removes the specified listener previously registered with addEventListener.
			 * @param {Chart} chart -Chart from which to remove the listener
			 * @param {String} type - The ({@link IEvent}) type to remove
			 * @param {Function} listener - The listener function to remove from the event target.
			 */
			removeEventListener: function() {}
		};
	
		/**
		 * @interface IPlatform
		 * Allows abstracting platform dependencies away from the chart
		 * @borrows Chart.platform.acquireContext as acquireContext
		 * @borrows Chart.platform.releaseContext as releaseContext
		 * @borrows Chart.platform.addEventListener as addEventListener
		 * @borrows Chart.platform.removeEventListener as removeEventListener
		 */
	
		/**
		 * @interface IEvent
		 * @prop {String} type - The event type name, possible values are:
		 * 'contextmenu', 'mouseenter', 'mousedown', 'mousemove', 'mouseup', 'mouseout',
		 * 'click', 'dblclick', 'keydown', 'keypress', 'keyup' and 'resize'
		 * @prop {*} native - The original native event (null for emulated events, e.g. 'resize')
		 * @prop {Number} x - The mouse x position, relative to the canvas (null for incompatible events)
		 * @prop {Number} y - The mouse y position, relative to the canvas (null for incompatible events)
		 */
	
		Chart.helpers.extend(Chart.platform, implementation(Chart));
	};


/***/ },

/***/ 418:
/*!**************************************************!*\
  !*** ./~/chart.js/src/platforms/platform.dom.js ***!
  \**************************************************/
/***/ function(module, exports) {

	'use strict';
	
	// Chart.Platform implementation for targeting a web browser
	module.exports = function(Chart) {
		var helpers = Chart.helpers;
	
		// DOM event types -> Chart.js event types.
		// Note: only events with different types are mapped.
		// https://developer.mozilla.org/en-US/docs/Web/Events
		var eventTypeMap = {
			// Touch events
			touchstart: 'mousedown',
			touchmove: 'mousemove',
			touchend: 'mouseup',
	
			// Pointer events
			pointerenter: 'mouseenter',
			pointerdown: 'mousedown',
			pointermove: 'mousemove',
			pointerup: 'mouseup',
			pointerleave: 'mouseout',
			pointerout: 'mouseout'
		};
	
		/**
		 * The "used" size is the final value of a dimension property after all calculations have
		 * been performed. This method uses the computed style of `element` but returns undefined
		 * if the computed style is not expressed in pixels. That can happen in some cases where
		 * `element` has a size relative to its parent and this last one is not yet displayed,
		 * for example because of `display: none` on a parent node.
		 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
		 * @returns {Number} Size in pixels or undefined if unknown.
		 */
		function readUsedSize(element, property) {
			var value = helpers.getStyle(element, property);
			var matches = value && value.match(/(\d+)px/);
			return matches? Number(matches[1]) : undefined;
		}
	
		/**
		 * Initializes the canvas style and render size without modifying the canvas display size,
		 * since responsiveness is handled by the controller.resize() method. The config is used
		 * to determine the aspect ratio to apply in case no explicit height has been specified.
		 */
		function initCanvas(canvas, config) {
			var style = canvas.style;
	
			// NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
			// returns null or '' if no explicit value has been set to the canvas attribute.
			var renderHeight = canvas.getAttribute('height');
			var renderWidth = canvas.getAttribute('width');
	
			// Chart.js modifies some canvas values that we want to restore on destroy
			canvas._chartjs = {
				initial: {
					height: renderHeight,
					width: renderWidth,
					style: {
						display: style.display,
						height: style.height,
						width: style.width
					}
				}
			};
	
			// Force canvas to display as block to avoid extra space caused by inline
			// elements, which would interfere with the responsive resize process.
			// https://github.com/chartjs/Chart.js/issues/2538
			style.display = style.display || 'block';
	
			if (renderWidth === null || renderWidth === '') {
				var displayWidth = readUsedSize(canvas, 'width');
				if (displayWidth !== undefined) {
					canvas.width = displayWidth;
				}
			}
	
			if (renderHeight === null || renderHeight === '') {
				if (canvas.style.height === '') {
					// If no explicit render height and style height, let's apply the aspect ratio,
					// which one can be specified by the user but also by charts as default option
					// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
					canvas.height = canvas.width / (config.options.aspectRatio || 2);
				} else {
					var displayHeight = readUsedSize(canvas, 'height');
					if (displayWidth !== undefined) {
						canvas.height = displayHeight;
					}
				}
			}
	
			return canvas;
		}
	
		function createEvent(type, chart, x, y, native) {
			return {
				type: type,
				chart: chart,
				native: native || null,
				x: x !== undefined? x : null,
				y: y !== undefined? y : null,
			};
		}
	
		function fromNativeEvent(event, chart) {
			var type = eventTypeMap[event.type] || event.type;
			var pos = helpers.getRelativePosition(event, chart);
			return createEvent(type, chart, pos.x, pos.y, event);
		}
	
		function createResizer(handler) {
			var iframe = document.createElement('iframe');
			iframe.className = 'chartjs-hidden-iframe';
			iframe.style.cssText =
				'display:block;'+
				'overflow:hidden;'+
				'border:0;'+
				'margin:0;'+
				'top:0;'+
				'left:0;'+
				'bottom:0;'+
				'right:0;'+
				'height:100%;'+
				'width:100%;'+
				'position:absolute;'+
				'pointer-events:none;'+
				'z-index:-1;';
	
			// Prevent the iframe to gain focus on tab.
			// https://github.com/chartjs/Chart.js/issues/3090
			iframe.tabIndex = -1;
	
			// If the iframe is re-attached to the DOM, the resize listener is removed because the
			// content is reloaded, so make sure to install the handler after the iframe is loaded.
			// https://github.com/chartjs/Chart.js/issues/3521
			helpers.addEvent(iframe, 'load', function() {
				helpers.addEvent(iframe.contentWindow || iframe, 'resize', handler);
	
				// The iframe size might have changed while loading, which can also
				// happen if the size has been changed while detached from the DOM.
				handler();
			});
	
			return iframe;
		}
	
		function addResizeListener(node, listener, chart) {
			var stub = node._chartjs = {
				ticking: false
			};
	
			// Throttle the callback notification until the next animation frame.
			var notify = function() {
				if (!stub.ticking) {
					stub.ticking = true;
					helpers.requestAnimFrame.call(window, function() {
						if (stub.resizer) {
							stub.ticking = false;
							return listener(createEvent('resize', chart));
						}
					});
				}
			};
	
			// Let's keep track of this added iframe and thus avoid DOM query when removing it.
			stub.resizer = createResizer(notify);
	
			node.insertBefore(stub.resizer, node.firstChild);
		}
	
		function removeResizeListener(node) {
			if (!node || !node._chartjs) {
				return;
			}
	
			var resizer = node._chartjs.resizer;
			if (resizer) {
				resizer.parentNode.removeChild(resizer);
				node._chartjs.resizer = null;
			}
	
			delete node._chartjs;
		}
	
		return {
			acquireContext: function(item, config) {
				if (typeof item === 'string') {
					item = document.getElementById(item);
				} else if (item.length) {
					// Support for array based queries (such as jQuery)
					item = item[0];
				}
	
				if (item && item.canvas) {
					// Support for any object associated to a canvas (including a context2d)
					item = item.canvas;
				}
	
				if (item instanceof HTMLCanvasElement) {
					// To prevent canvas fingerprinting, some add-ons undefine the getContext
					// method, for example: https://github.com/kkapsner/CanvasBlocker
					// https://github.com/chartjs/Chart.js/issues/2807
					var context = item.getContext && item.getContext('2d');
					if (context instanceof CanvasRenderingContext2D) {
						initCanvas(item, config);
						return context;
					}
				}
	
				return null;
			},
	
			releaseContext: function(context) {
				var canvas = context.canvas;
				if (!canvas._chartjs) {
					return;
				}
	
				var initial = canvas._chartjs.initial;
				['height', 'width'].forEach(function(prop) {
					var value = initial[prop];
					if (value === undefined || value === null) {
						canvas.removeAttribute(prop);
					} else {
						canvas.setAttribute(prop, value);
					}
				});
	
				helpers.each(initial.style || {}, function(value, key) {
					canvas.style[key] = value;
				});
	
				// The canvas render size might have been changed (and thus the state stack discarded),
				// we can't use save() and restore() to restore the initial state. So make sure that at
				// least the canvas context is reset to the default state by setting the canvas width.
				// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
				canvas.width = canvas.width;
	
				delete canvas._chartjs;
			},
	
			addEventListener: function(chart, type, listener) {
				var canvas = chart.chart.canvas;
				if (type === 'resize') {
					// Note: the resize event is not supported on all browsers.
					addResizeListener(canvas.parentNode, listener, chart.chart);
					return;
				}
	
				var stub = listener._chartjs || (listener._chartjs = {});
				var proxies = stub.proxies || (stub.proxies = {});
				var proxy = proxies[chart.id + '_' + type] = function(event) {
					listener(fromNativeEvent(event, chart.chart));
				};
	
				helpers.addEvent(canvas, type, proxy);
			},
	
			removeEventListener: function(chart, type, listener) {
				var canvas = chart.chart.canvas;
				if (type === 'resize') {
					// Note: the resize event is not supported on all browsers.
					removeResizeListener(canvas.parentNode, listener);
					return;
				}
	
				var stub = listener._chartjs || {};
				var proxies = stub.proxies || {};
				var proxy = proxies[chart.id + '_' + type];
				if (!proxy) {
					return;
				}
	
				helpers.removeEvent(canvas, type, proxy);
			}
		};
	};


/***/ },

/***/ 419:
/*!***************************************************!*\
  !*** ./~/chart.js/src/core/core.canvasHelpers.js ***!
  \***************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
		// Global Chart canvas helpers object for drawing items to canvas
		var helpers = Chart.canvasHelpers = {};
	
		helpers.drawPoint = function(ctx, pointStyle, radius, x, y) {
			var type, edgeLength, xOffset, yOffset, height, size;
	
			if (typeof pointStyle === 'object') {
				type = pointStyle.toString();
				if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
					ctx.drawImage(pointStyle, x - pointStyle.width / 2, y - pointStyle.height / 2);
					return;
				}
			}
	
			if (isNaN(radius) || radius <= 0) {
				return;
			}
	
			switch (pointStyle) {
			// Default includes circle
			default:
				ctx.beginPath();
				ctx.arc(x, y, radius, 0, Math.PI * 2);
				ctx.closePath();
				ctx.fill();
				break;
			case 'triangle':
				ctx.beginPath();
				edgeLength = 3 * radius / Math.sqrt(3);
				height = edgeLength * Math.sqrt(3) / 2;
				ctx.moveTo(x - edgeLength / 2, y + height / 3);
				ctx.lineTo(x + edgeLength / 2, y + height / 3);
				ctx.lineTo(x, y - 2 * height / 3);
				ctx.closePath();
				ctx.fill();
				break;
			case 'rect':
				size = 1 / Math.SQRT2 * radius;
				ctx.beginPath();
				ctx.fillRect(x - size, y - size, 2 * size, 2 * size);
				ctx.strokeRect(x - size, y - size, 2 * size, 2 * size);
				break;
			case 'rectRounded':
				var offset = radius / Math.SQRT2;
				var leftX = x - offset;
				var topY = y - offset;
				var sideSize = Math.SQRT2 * radius;
				Chart.helpers.drawRoundedRectangle(ctx, leftX, topY, sideSize, sideSize, radius / 2);
				ctx.fill();
				break;
			case 'rectRot':
				size = 1 / Math.SQRT2 * radius;
				ctx.beginPath();
				ctx.moveTo(x - size, y);
				ctx.lineTo(x, y + size);
				ctx.lineTo(x + size, y);
				ctx.lineTo(x, y - size);
				ctx.closePath();
				ctx.fill();
				break;
			case 'cross':
				ctx.beginPath();
				ctx.moveTo(x, y + radius);
				ctx.lineTo(x, y - radius);
				ctx.moveTo(x - radius, y);
				ctx.lineTo(x + radius, y);
				ctx.closePath();
				break;
			case 'crossRot':
				ctx.beginPath();
				xOffset = Math.cos(Math.PI / 4) * radius;
				yOffset = Math.sin(Math.PI / 4) * radius;
				ctx.moveTo(x - xOffset, y - yOffset);
				ctx.lineTo(x + xOffset, y + yOffset);
				ctx.moveTo(x - xOffset, y + yOffset);
				ctx.lineTo(x + xOffset, y - yOffset);
				ctx.closePath();
				break;
			case 'star':
				ctx.beginPath();
				ctx.moveTo(x, y + radius);
				ctx.lineTo(x, y - radius);
				ctx.moveTo(x - radius, y);
				ctx.lineTo(x + radius, y);
				xOffset = Math.cos(Math.PI / 4) * radius;
				yOffset = Math.sin(Math.PI / 4) * radius;
				ctx.moveTo(x - xOffset, y - yOffset);
				ctx.lineTo(x + xOffset, y + yOffset);
				ctx.moveTo(x - xOffset, y + yOffset);
				ctx.lineTo(x + xOffset, y - yOffset);
				ctx.closePath();
				break;
			case 'line':
				ctx.beginPath();
				ctx.moveTo(x - radius, y);
				ctx.lineTo(x + radius, y);
				ctx.closePath();
				break;
			case 'dash':
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.lineTo(x + radius, y);
				ctx.closePath();
				break;
			}
	
			ctx.stroke();
		};
	
		helpers.clipArea = function(ctx, clipArea) {
			ctx.save();
			ctx.beginPath();
			ctx.rect(clipArea.left, clipArea.top, clipArea.right - clipArea.left, clipArea.bottom - clipArea.top);
			ctx.clip();
		};
	
		helpers.unclipArea = function(ctx) {
			ctx.restore();
		};
	
	};


/***/ },

/***/ 420:
/*!********************************************!*\
  !*** ./~/chart.js/src/core/core.plugin.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.global.plugins = {};
	
		/**
		 * The plugin service singleton
		 * @namespace Chart.plugins
		 * @since 2.1.0
		 */
		Chart.plugins = {
			/**
			 * Globally registered plugins.
			 * @private
			 */
			_plugins: [],
	
			/**
			 * This identifier is used to invalidate the descriptors cache attached to each chart
			 * when a global plugin is registered or unregistered. In this case, the cache ID is
			 * incremented and descriptors are regenerated during following API calls.
			 * @private
			 */
			_cacheId: 0,
	
			/**
			 * Registers the given plugin(s) if not already registered.
			 * @param {Array|Object} plugins plugin instance(s).
			 */
			register: function(plugins) {
				var p = this._plugins;
				([]).concat(plugins).forEach(function(plugin) {
					if (p.indexOf(plugin) === -1) {
						p.push(plugin);
					}
				});
	
				this._cacheId++;
			},
	
			/**
			 * Unregisters the given plugin(s) only if registered.
			 * @param {Array|Object} plugins plugin instance(s).
			 */
			unregister: function(plugins) {
				var p = this._plugins;
				([]).concat(plugins).forEach(function(plugin) {
					var idx = p.indexOf(plugin);
					if (idx !== -1) {
						p.splice(idx, 1);
					}
				});
	
				this._cacheId++;
			},
	
			/**
			 * Remove all registered plugins.
			 * @since 2.1.5
			 */
			clear: function() {
				this._plugins = [];
				this._cacheId++;
			},
	
			/**
			 * Returns the number of registered plugins?
			 * @returns {Number}
			 * @since 2.1.5
			 */
			count: function() {
				return this._plugins.length;
			},
	
			/**
			 * Returns all registered plugin instances.
			 * @returns {Array} array of plugin objects.
			 * @since 2.1.5
			 */
			getAll: function() {
				return this._plugins;
			},
	
			/**
			 * Calls enabled plugins for `chart` on the specified hook and with the given args.
			 * This method immediately returns as soon as a plugin explicitly returns false. The
			 * returned value can be used, for instance, to interrupt the current action.
			 * @param {Object} chart - The chart instance for which plugins should be called.
			 * @param {String} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
			 * @param {Array} [args] - Extra arguments to apply to the hook call.
			 * @returns {Boolean} false if any of the plugins return false, else returns true.
			 */
			notify: function(chart, hook, args) {
				var descriptors = this.descriptors(chart);
				var ilen = descriptors.length;
				var i, descriptor, plugin, params, method;
	
				for (i=0; i<ilen; ++i) {
					descriptor = descriptors[i];
					plugin = descriptor.plugin;
					method = plugin[hook];
					if (typeof method === 'function') {
						params = [chart].concat(args || []);
						params.push(descriptor.options);
						if (method.apply(plugin, params) === false) {
							return false;
						}
					}
				}
	
				return true;
			},
	
			/**
			 * Returns descriptors of enabled plugins for the given chart.
			 * @returns {Array} [{ plugin, options }]
			 * @private
			 */
			descriptors: function(chart) {
				var cache = chart._plugins || (chart._plugins = {});
				if (cache.id === this._cacheId) {
					return cache.descriptors;
				}
	
				var plugins = [];
				var descriptors = [];
				var config = (chart && chart.config) || {};
				var defaults = Chart.defaults.global.plugins;
				var options = (config.options && config.options.plugins) || {};
	
				this._plugins.concat(config.plugins || []).forEach(function(plugin) {
					var idx = plugins.indexOf(plugin);
					if (idx !== -1) {
						return;
					}
	
					var id = plugin.id;
					var opts = options[id];
					if (opts === false) {
						return;
					}
	
					if (opts === true) {
						opts = helpers.clone(defaults[id]);
					}
	
					plugins.push(plugin);
					descriptors.push({
						plugin: plugin,
						options: opts || {}
					});
				});
	
				cache.descriptors = descriptors;
				cache.id = this._cacheId;
				return descriptors;
			}
		};
	
		/**
		 * Plugin extension hooks.
		 * @interface IPlugin
		 * @since 2.1.0
		 */
		/**
		 * @method IPlugin#beforeInit
		 * @desc Called before initializing `chart`.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#afterInit
		 * @desc Called after `chart` has been initialized and before the first update.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#beforeUpdate
		 * @desc Called before updating `chart`. If any plugin returns `false`, the update
		 * is cancelled (and thus subsequent render(s)) until another `update` is triggered.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 * @returns {Boolean} `false` to cancel the chart update.
		 */
		/**
		 * @method IPlugin#afterUpdate
		 * @desc Called after `chart` has been updated and before rendering. Note that this
		 * hook will not be called if the chart update has been previously cancelled.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#beforeDatasetsUpdate
	 	 * @desc Called before updating the `chart` datasets. If any plugin returns `false`,
		 * the datasets update is cancelled until another `update` is triggered.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 * @returns {Boolean} false to cancel the datasets update.
		 * @since version 2.1.5
		 */
		/**
		 * @method IPlugin#afterDatasetsUpdate
		 * @desc Called after the `chart` datasets have been updated. Note that this hook
		 * will not be called if the datasets update has been previously cancelled.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 * @since version 2.1.5
		 */
		/**
		 * @method IPlugin#beforeLayout
		 * @desc Called before laying out `chart`. If any plugin returns `false`,
		 * the layout update is cancelled until another `update` is triggered.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 * @returns {Boolean} `false` to cancel the chart layout.
		 */
		/**
		 * @method IPlugin#afterLayout
		 * @desc Called after the `chart` has been layed out. Note that this hook will not
		 * be called if the layout update has been previously cancelled.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#beforeRender
		 * @desc Called before rendering `chart`. If any plugin returns `false`,
		 * the rendering is cancelled until another `render` is triggered.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 * @returns {Boolean} `false` to cancel the chart rendering.
		 */
		/**
		 * @method IPlugin#afterRender
		 * @desc Called after the `chart` has been fully rendered (and animation completed). Note
		 * that this hook will not be called if the rendering has been previously cancelled.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#beforeDraw
		 * @desc Called before drawing `chart` at every animation frame specified by the given
		 * easing value. If any plugin returns `false`, the frame drawing is cancelled until
		 * another `render` is triggered.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
		 * @param {Object} options - The plugin options.
		 * @returns {Boolean} `false` to cancel the chart drawing.
		 */
		/**
		 * @method IPlugin#afterDraw
		 * @desc Called after the `chart` has been drawn for the specific easing value. Note
		 * that this hook will not be called if the drawing has been previously cancelled.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#beforeDatasetsDraw
	 	 * @desc Called before drawing the `chart` datasets. If any plugin returns `false`,
		 * the datasets drawing is cancelled until another `render` is triggered.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
		 * @param {Object} options - The plugin options.
		 * @returns {Boolean} `false` to cancel the chart datasets drawing.
		 */
		/**
		 * @method IPlugin#afterDatasetsDraw
		 * @desc Called after the `chart` datasets have been drawn. Note that this hook
		 * will not be called if the datasets drawing has been previously cancelled.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#beforeEvent
	 	 * @desc Called before processing the specified `event`. If any plugin returns `false`,
		 * the event will be discarded.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {IEvent} event - The event object.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#afterEvent
		 * @desc Called after the `event` has been consumed. Note that this hook
		 * will not be called if the `event` has been previously discarded.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {IEvent} event - The event object.
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#resize
		 * @desc Called after the chart as been resized.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Number} size - The new canvas display size (eq. canvas.style width & height).
		 * @param {Object} options - The plugin options.
		 */
		/**
		 * @method IPlugin#destroy
		 * @desc Called after the chart as been destroyed.
		 * @param {Chart.Controller} chart - The chart instance.
		 * @param {Object} options - The plugin options.
		 */
	
		/**
		 * Provided for backward compatibility, use Chart.plugins instead
		 * @namespace Chart.pluginService
		 * @deprecated since version 2.1.5
		 * @todo remove at version 3
		 * @private
		 */
		Chart.pluginService = Chart.plugins;
	
		/**
		 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
		 * effect, instead simply create/register plugins via plain JavaScript objects.
		 * @interface Chart.PluginBase
		 * @deprecated since version 2.5.0
		 * @todo remove at version 3
		 * @private
		 */
		Chart.PluginBase = helpers.inherits({});
	};


/***/ },

/***/ 421:
/*!*********************************************!*\
  !*** ./~/chart.js/src/core/core.element.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.elements = {};
	
		Chart.Element = function(configuration) {
			helpers.extend(this, configuration);
			this.initialize.apply(this, arguments);
		};
	
		helpers.extend(Chart.Element.prototype, {
	
			initialize: function() {
				this.hidden = false;
			},
	
			pivot: function() {
				var me = this;
				if (!me._view) {
					me._view = helpers.clone(me._model);
				}
				me._start = helpers.clone(me._view);
				return me;
			},
	
			transition: function(ease) {
				var me = this;
	
				if (!me._view) {
					me._view = helpers.clone(me._model);
				}
	
				// No animation -> No Transition
				if (ease === 1) {
					me._view = me._model;
					me._start = null;
					return me;
				}
	
				if (!me._start) {
					me.pivot();
				}
	
				helpers.each(me._model, function(value, key) {
	
					if (key[0] === '_') {
						// Only non-underscored properties
					// Init if doesn't exist
					} else if (!me._view.hasOwnProperty(key)) {
						if (typeof value === 'number' && !isNaN(me._view[key])) {
							me._view[key] = value * ease;
						} else {
							me._view[key] = value;
						}
					// No unnecessary computations
					} else if (value === me._view[key]) {
						// It's the same! Woohoo!
					// Color transitions if possible
					} else if (typeof value === 'string') {
						try {
							var color = helpers.color(me._model[key]).mix(helpers.color(me._start[key]), ease);
							me._view[key] = color.rgbString();
						} catch (err) {
							me._view[key] = value;
						}
					// Number transitions
					} else if (typeof value === 'number') {
						var startVal = me._start[key] !== undefined && isNaN(me._start[key]) === false ? me._start[key] : 0;
						me._view[key] = ((me._model[key] - startVal) * ease) + startVal;
					// Everything else
					} else {
						me._view[key] = value;
					}
				}, me);
	
				return me;
			},
	
			tooltipPosition: function() {
				return {
					x: this._model.x,
					y: this._model.y
				};
			},
	
			hasValue: function() {
				return helpers.isNumber(this._model.x) && helpers.isNumber(this._model.y);
			}
		});
	
		Chart.Element.extend = helpers.inherits;
	
	};


/***/ },

/***/ 422:
/*!***********************************************!*\
  !*** ./~/chart.js/src/core/core.animation.js ***!
  \***********************************************/
/***/ function(module, exports) {

	/* global window: false */
	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.global.animation = {
			duration: 1000,
			easing: 'easeOutQuart',
			onProgress: helpers.noop,
			onComplete: helpers.noop
		};
	
		Chart.Animation = Chart.Element.extend({
			currentStep: null, // the current animation step
			numSteps: 60, // default number of steps
			easing: '', // the easing to use for this animation
			render: null, // render function used by the animation service
	
			onAnimationProgress: null, // user specified callback to fire on each step of the animation
			onAnimationComplete: null // user specified callback to fire when the animation finishes
		});
	
		Chart.animationService = {
			frameDuration: 17,
			animations: [],
			dropFrames: 0,
			request: null,
	
			/**
			 * @function Chart.animationService.addAnimation
			 * @param chartInstance {ChartController} the chart to animate
			 * @param animationObject {IAnimation} the animation that we will animate
			 * @param duration {Number} length of animation in ms
			 * @param lazy {Boolean} if true, the chart is not marked as animating to enable more responsive interactions
			 */
			addAnimation: function(chartInstance, animationObject, duration, lazy) {
				var me = this;
	
				if (!lazy) {
					chartInstance.animating = true;
				}
	
				for (var index = 0; index < me.animations.length; ++index) {
					if (me.animations[index].chartInstance === chartInstance) {
						// replacing an in progress animation
						me.animations[index].animationObject = animationObject;
						return;
					}
				}
	
				me.animations.push({
					chartInstance: chartInstance,
					animationObject: animationObject
				});
	
				// If there are no animations queued, manually kickstart a digest, for lack of a better word
				if (me.animations.length === 1) {
					me.requestAnimationFrame();
				}
			},
			// Cancel the animation for a given chart instance
			cancelAnimation: function(chartInstance) {
				var index = helpers.findIndex(this.animations, function(animationWrapper) {
					return animationWrapper.chartInstance === chartInstance;
				});
	
				if (index !== -1) {
					this.animations.splice(index, 1);
					chartInstance.animating = false;
				}
			},
			requestAnimationFrame: function() {
				var me = this;
				if (me.request === null) {
					// Skip animation frame requests until the active one is executed.
					// This can happen when processing mouse events, e.g. 'mousemove'
					// and 'mouseout' events will trigger multiple renders.
					me.request = helpers.requestAnimFrame.call(window, function() {
						me.request = null;
						me.startDigest();
					});
				}
			},
			startDigest: function() {
				var me = this;
	
				var startTime = Date.now();
				var framesToDrop = 0;
	
				if (me.dropFrames > 1) {
					framesToDrop = Math.floor(me.dropFrames);
					me.dropFrames = me.dropFrames % 1;
				}
	
				var i = 0;
				while (i < me.animations.length) {
					if (me.animations[i].animationObject.currentStep === null) {
						me.animations[i].animationObject.currentStep = 0;
					}
	
					me.animations[i].animationObject.currentStep += 1 + framesToDrop;
	
					if (me.animations[i].animationObject.currentStep > me.animations[i].animationObject.numSteps) {
						me.animations[i].animationObject.currentStep = me.animations[i].animationObject.numSteps;
					}
	
					me.animations[i].animationObject.render(me.animations[i].chartInstance, me.animations[i].animationObject);
					if (me.animations[i].animationObject.onAnimationProgress && me.animations[i].animationObject.onAnimationProgress.call) {
						me.animations[i].animationObject.onAnimationProgress.call(me.animations[i].chartInstance, me.animations[i]);
					}
	
					if (me.animations[i].animationObject.currentStep === me.animations[i].animationObject.numSteps) {
						if (me.animations[i].animationObject.onAnimationComplete && me.animations[i].animationObject.onAnimationComplete.call) {
							me.animations[i].animationObject.onAnimationComplete.call(me.animations[i].chartInstance, me.animations[i]);
						}
	
						// executed the last frame. Remove the animation.
						me.animations[i].chartInstance.animating = false;
	
						me.animations.splice(i, 1);
					} else {
						++i;
					}
				}
	
				var endTime = Date.now();
				var dropFrames = (endTime - startTime) / me.frameDuration;
	
				me.dropFrames += dropFrames;
	
				// Do we have more stuff to animate?
				if (me.animations.length > 0) {
					me.requestAnimationFrame();
				}
			}
		};
	};


/***/ },

/***/ 423:
/*!************************************************!*\
  !*** ./~/chart.js/src/core/core.controller.js ***!
  \************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
		var plugins = Chart.plugins;
		var platform = Chart.platform;
	
		// Create a dictionary of chart types, to allow for extension of existing types
		Chart.types = {};
	
		// Store a reference to each instance - allowing us to globally resize chart instances on window resize.
		// Destroy method on the chart will remove the instance of the chart from this reference.
		Chart.instances = {};
	
		// Controllers available for dataset visualization eg. bar, line, slice, etc.
		Chart.controllers = {};
	
		/**
		 * Initializes the given config with global and chart default values.
		 */
		function initConfig(config) {
			config = config || {};
	
			// Do NOT use configMerge() for the data object because this method merges arrays
			// and so would change references to labels and datasets, preventing data updates.
			var data = config.data = config.data || {};
			data.datasets = data.datasets || [];
			data.labels = data.labels || [];
	
			config.options = helpers.configMerge(
				Chart.defaults.global,
				Chart.defaults[config.type],
				config.options || {});
	
			return config;
		}
	
		/**
		 * Updates the config of the chart
		 * @param chart {Chart.Controller} chart to update the options for
		 */
		function updateConfig(chart) {
			var newOptions = chart.options;
	
			// Update Scale(s) with options
			if (newOptions.scale) {
				chart.scale.options = newOptions.scale;
			} else if (newOptions.scales) {
				newOptions.scales.xAxes.concat(newOptions.scales.yAxes).forEach(function(scaleOptions) {
					chart.scales[scaleOptions.id].options = scaleOptions;
				});
			}
	
			// Tooltip
			chart.tooltip._options = newOptions.tooltips;
		}
	
		/**
		 * @class Chart.Controller
		 * The main controller of a chart.
		 */
		Chart.Controller = function(item, config, instance) {
			var me = this;
	
			config = initConfig(config);
	
			var context = platform.acquireContext(item, config);
			var canvas = context && context.canvas;
			var height = canvas && canvas.height;
			var width = canvas && canvas.width;
	
			instance.ctx = context;
			instance.canvas = canvas;
			instance.config = config;
			instance.width = width;
			instance.height = height;
			instance.aspectRatio = height? width / height : null;
	
			me.id = helpers.uid();
			me.chart = instance;
			me.config = config;
			me.options = config.options;
			me._bufferedRender = false;
	
			// Add the chart instance to the global namespace
			Chart.instances[me.id] = me;
	
			Object.defineProperty(me, 'data', {
				get: function() {
					return me.config.data;
				}
			});
	
			if (!context || !canvas) {
				// The given item is not a compatible context2d element, let's return before finalizing
				// the chart initialization but after setting basic chart / controller properties that
				// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
				// https://github.com/chartjs/Chart.js/issues/2807
				console.error("Failed to create chart: can't acquire context from the given item");
				return me;
			}
	
			me.initialize();
			me.update();
	
			return me;
		};
	
		helpers.extend(Chart.Controller.prototype, /** @lends Chart.Controller.prototype */ {
			initialize: function() {
				var me = this;
	
				// Before init plugin notification
				plugins.notify(me, 'beforeInit');
	
				helpers.retinaScale(me.chart);
	
				me.bindEvents();
	
				if (me.options.responsive) {
					// Initial resize before chart draws (must be silent to preserve initial animations).
					me.resize(true);
				}
	
				// Make sure scales have IDs and are built before we build any controllers.
				me.ensureScalesHaveIDs();
				me.buildScales();
				me.initToolTip();
	
				// After init plugin notification
				plugins.notify(me, 'afterInit');
	
				return me;
			},
	
			clear: function() {
				helpers.clear(this.chart);
				return this;
			},
	
			stop: function() {
				// Stops any current animation loop occurring
				Chart.animationService.cancelAnimation(this);
				return this;
			},
	
			resize: function(silent) {
				var me = this;
				var chart = me.chart;
				var options = me.options;
				var canvas = chart.canvas;
				var aspectRatio = (options.maintainAspectRatio && chart.aspectRatio) || null;
	
				// the canvas render width and height will be casted to integers so make sure that
				// the canvas display style uses the same integer values to avoid blurring effect.
				var newWidth = Math.floor(helpers.getMaximumWidth(canvas));
				var newHeight = Math.floor(aspectRatio? newWidth / aspectRatio : helpers.getMaximumHeight(canvas));
	
				if (chart.width === newWidth && chart.height === newHeight) {
					return;
				}
	
				canvas.width = chart.width = newWidth;
				canvas.height = chart.height = newHeight;
				canvas.style.width = newWidth + 'px';
				canvas.style.height = newHeight + 'px';
	
				helpers.retinaScale(chart);
	
				if (!silent) {
					// Notify any plugins about the resize
					var newSize = {width: newWidth, height: newHeight};
					plugins.notify(me, 'resize', [newSize]);
	
					// Notify of resize
					if (me.options.onResize) {
						me.options.onResize(me, newSize);
					}
	
					me.stop();
					me.update(me.options.responsiveAnimationDuration);
				}
			},
	
			ensureScalesHaveIDs: function() {
				var options = this.options;
				var scalesOptions = options.scales || {};
				var scaleOptions = options.scale;
	
				helpers.each(scalesOptions.xAxes, function(xAxisOptions, index) {
					xAxisOptions.id = xAxisOptions.id || ('x-axis-' + index);
				});
	
				helpers.each(scalesOptions.yAxes, function(yAxisOptions, index) {
					yAxisOptions.id = yAxisOptions.id || ('y-axis-' + index);
				});
	
				if (scaleOptions) {
					scaleOptions.id = scaleOptions.id || 'scale';
				}
			},
	
			/**
			 * Builds a map of scale ID to scale object for future lookup.
			 */
			buildScales: function() {
				var me = this;
				var options = me.options;
				var scales = me.scales = {};
				var items = [];
	
				if (options.scales) {
					items = items.concat(
						(options.scales.xAxes || []).map(function(xAxisOptions) {
							return {options: xAxisOptions, dtype: 'category'};
						}),
						(options.scales.yAxes || []).map(function(yAxisOptions) {
							return {options: yAxisOptions, dtype: 'linear'};
						})
					);
				}
	
				if (options.scale) {
					items.push({options: options.scale, dtype: 'radialLinear', isDefault: true});
				}
	
				helpers.each(items, function(item) {
					var scaleOptions = item.options;
					var scaleType = helpers.getValueOrDefault(scaleOptions.type, item.dtype);
					var scaleClass = Chart.scaleService.getScaleConstructor(scaleType);
					if (!scaleClass) {
						return;
					}
	
					var scale = new scaleClass({
						id: scaleOptions.id,
						options: scaleOptions,
						ctx: me.chart.ctx,
						chart: me
					});
	
					scales[scale.id] = scale;
	
					// TODO(SB): I think we should be able to remove this custom case (options.scale)
					// and consider it as a regular scale part of the "scales"" map only! This would
					// make the logic easier and remove some useless? custom code.
					if (item.isDefault) {
						me.scale = scale;
					}
				});
	
				Chart.scaleService.addScalesToLayout(this);
			},
	
			buildOrUpdateControllers: function() {
				var me = this;
				var types = [];
				var newControllers = [];
	
				helpers.each(me.data.datasets, function(dataset, datasetIndex) {
					var meta = me.getDatasetMeta(datasetIndex);
					if (!meta.type) {
						meta.type = dataset.type || me.config.type;
					}
	
					types.push(meta.type);
	
					if (meta.controller) {
						meta.controller.updateIndex(datasetIndex);
					} else {
						meta.controller = new Chart.controllers[meta.type](me, datasetIndex);
						newControllers.push(meta.controller);
					}
				}, me);
	
				if (types.length > 1) {
					for (var i = 1; i < types.length; i++) {
						if (types[i] !== types[i - 1]) {
							me.isCombo = true;
							break;
						}
					}
				}
	
				return newControllers;
			},
	
			/**
			 * Reset the elements of all datasets
			 * @private
			 */
			resetElements: function() {
				var me = this;
				helpers.each(me.data.datasets, function(dataset, datasetIndex) {
					me.getDatasetMeta(datasetIndex).controller.reset();
				}, me);
			},
	
			/**
			* Resets the chart back to it's state before the initial animation
			*/
			reset: function() {
				this.resetElements();
				this.tooltip.initialize();
			},
	
			update: function(animationDuration, lazy) {
				var me = this;
	
				updateConfig(me);
	
				if (plugins.notify(me, 'beforeUpdate') === false) {
					return;
				}
	
				// In case the entire data object changed
				me.tooltip._data = me.data;
	
				// Make sure dataset controllers are updated and new controllers are reset
				var newControllers = me.buildOrUpdateControllers();
	
				// Make sure all dataset controllers have correct meta data counts
				helpers.each(me.data.datasets, function(dataset, datasetIndex) {
					me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();
				}, me);
	
				me.updateLayout();
	
				// Can only reset the new controllers after the scales have been updated
				helpers.each(newControllers, function(controller) {
					controller.reset();
				});
	
				me.updateDatasets();
	
				// Do this before render so that any plugins that need final scale updates can use it
				plugins.notify(me, 'afterUpdate');
	
				if (me._bufferedRender) {
					me._bufferedRequest = {
						lazy: lazy,
						duration: animationDuration
					};
				} else {
					me.render(animationDuration, lazy);
				}
			},
	
			/**
			 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
			 * hook, in which case, plugins will not be called on `afterLayout`.
			 * @private
			 */
			updateLayout: function() {
				var me = this;
	
				if (plugins.notify(me, 'beforeLayout') === false) {
					return;
				}
	
				Chart.layoutService.update(this, this.chart.width, this.chart.height);
	
				/**
				 * Provided for backward compatibility, use `afterLayout` instead.
				 * @method IPlugin#afterScaleUpdate
				 * @deprecated since version 2.5.0
				 * @todo remove at version 3
				 */
				plugins.notify(me, 'afterScaleUpdate');
				plugins.notify(me, 'afterLayout');
			},
	
			/**
			 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
			 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
			 * @private
			 */
			updateDatasets: function() {
				var me = this;
	
				if (plugins.notify(me, 'beforeDatasetsUpdate') === false) {
					return;
				}
	
				for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
					me.getDatasetMeta(i).controller.update();
				}
	
				plugins.notify(me, 'afterDatasetsUpdate');
			},
	
			render: function(duration, lazy) {
				var me = this;
	
				if (plugins.notify(me, 'beforeRender') === false) {
					return;
				}
	
				var animationOptions = me.options.animation;
				var onComplete = function() {
					plugins.notify(me, 'afterRender');
					var callback = animationOptions && animationOptions.onComplete;
					if (callback && callback.call) {
						callback.call(me);
					}
				};
	
				if (animationOptions && ((typeof duration !== 'undefined' && duration !== 0) || (typeof duration === 'undefined' && animationOptions.duration !== 0))) {
					var animation = new Chart.Animation();
					animation.numSteps = (duration || animationOptions.duration) / 16.66; // 60 fps
					animation.easing = animationOptions.easing;
	
					// render function
					animation.render = function(chartInstance, animationObject) {
						var easingFunction = helpers.easingEffects[animationObject.easing];
						var stepDecimal = animationObject.currentStep / animationObject.numSteps;
						var easeDecimal = easingFunction(stepDecimal);
	
						chartInstance.draw(easeDecimal, stepDecimal, animationObject.currentStep);
					};
	
					// user events
					animation.onAnimationProgress = animationOptions.onProgress;
					animation.onAnimationComplete = onComplete;
	
					Chart.animationService.addAnimation(me, animation, duration, lazy);
				} else {
					me.draw();
					onComplete();
				}
	
				return me;
			},
	
			draw: function(easingValue) {
				var me = this;
	
				me.clear();
	
				if (easingValue === undefined || easingValue === null) {
					easingValue = 1;
				}
	
				if (plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
					return;
				}
	
				// Draw all the scales
				helpers.each(me.boxes, function(box) {
					box.draw(me.chartArea);
				}, me);
	
				if (me.scale) {
					me.scale.draw();
				}
	
				me.drawDatasets(easingValue);
	
				// Finally draw the tooltip
				me.tooltip.transition(easingValue).draw();
	
				plugins.notify(me, 'afterDraw', [easingValue]);
			},
	
			/**
			 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
			 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
			 * @private
			 */
			drawDatasets: function(easingValue) {
				var me = this;
	
				if (plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
					return;
				}
	
				// Draw each dataset via its respective controller (reversed to support proper line stacking)
				helpers.each(me.data.datasets, function(dataset, datasetIndex) {
					if (me.isDatasetVisible(datasetIndex)) {
						me.getDatasetMeta(datasetIndex).controller.draw(easingValue);
					}
				}, me, true);
	
				plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
			},
	
			// Get the single element that was clicked on
			// @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
			getElementAtEvent: function(e) {
				return Chart.Interaction.modes.single(this, e);
			},
	
			getElementsAtEvent: function(e) {
				return Chart.Interaction.modes.label(this, e, {intersect: true});
			},
	
			getElementsAtXAxis: function(e) {
				return Chart.Interaction.modes['x-axis'](this, e, {intersect: true});
			},
	
			getElementsAtEventForMode: function(e, mode, options) {
				var method = Chart.Interaction.modes[mode];
				if (typeof method === 'function') {
					return method(this, e, options);
				}
	
				return [];
			},
	
			getDatasetAtEvent: function(e) {
				return Chart.Interaction.modes.dataset(this, e, {intersect: true});
			},
	
			getDatasetMeta: function(datasetIndex) {
				var me = this;
				var dataset = me.data.datasets[datasetIndex];
				if (!dataset._meta) {
					dataset._meta = {};
				}
	
				var meta = dataset._meta[me.id];
				if (!meta) {
					meta = dataset._meta[me.id] = {
						type: null,
						data: [],
						dataset: null,
						controller: null,
						hidden: null,			// See isDatasetVisible() comment
						xAxisID: null,
						yAxisID: null
					};
				}
	
				return meta;
			},
	
			getVisibleDatasetCount: function() {
				var count = 0;
				for (var i = 0, ilen = this.data.datasets.length; i<ilen; ++i) {
					if (this.isDatasetVisible(i)) {
						count++;
					}
				}
				return count;
			},
	
			isDatasetVisible: function(datasetIndex) {
				var meta = this.getDatasetMeta(datasetIndex);
	
				// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
				// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
				return typeof meta.hidden === 'boolean'? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
			},
	
			generateLegend: function() {
				return this.options.legendCallback(this);
			},
	
			destroy: function() {
				var me = this;
				var canvas = me.chart.canvas;
				var meta, i, ilen;
	
				me.stop();
	
				// dataset controllers need to cleanup associated data
				for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
					meta = me.getDatasetMeta(i);
					if (meta.controller) {
						meta.controller.destroy();
						meta.controller = null;
					}
				}
	
				if (canvas) {
					me.unbindEvents();
					helpers.clear(me.chart);
					platform.releaseContext(me.chart.ctx);
					me.chart.canvas = null;
					me.chart.ctx = null;
				}
	
				plugins.notify(me, 'destroy');
	
				delete Chart.instances[me.id];
			},
	
			toBase64Image: function() {
				return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
			},
	
			initToolTip: function() {
				var me = this;
				me.tooltip = new Chart.Tooltip({
					_chart: me.chart,
					_chartInstance: me,
					_data: me.data,
					_options: me.options.tooltips
				}, me);
				me.tooltip.initialize();
			},
	
			/**
			 * @private
			 */
			bindEvents: function() {
				var me = this;
				var listeners = me._listeners = {};
				var listener = function() {
					me.eventHandler.apply(me, arguments);
				};
	
				helpers.each(me.options.events, function(type) {
					platform.addEventListener(me, type, listener);
					listeners[type] = listener;
				});
	
				// Responsiveness is currently based on the use of an iframe, however this method causes
				// performance issues and could be troublesome when used with ad blockers. So make sure
				// that the user is still able to create a chart without iframe when responsive is false.
				// See https://github.com/chartjs/Chart.js/issues/2210
				if (me.options.responsive) {
					listener = function() {
						me.resize();
					};
	
					platform.addEventListener(me, 'resize', listener);
					listeners.resize = listener;
				}
			},
	
			/**
			 * @private
			 */
			unbindEvents: function() {
				var me = this;
				var listeners = me._listeners;
				if (!listeners) {
					return;
				}
	
				delete me._listeners;
				helpers.each(listeners, function(listener, type) {
					platform.removeEventListener(me, type, listener);
				});
			},
	
			updateHoverStyle: function(elements, mode, enabled) {
				var method = enabled? 'setHoverStyle' : 'removeHoverStyle';
				var element, i, ilen;
	
				for (i=0, ilen=elements.length; i<ilen; ++i) {
					element = elements[i];
					if (element) {
						this.getDatasetMeta(element._datasetIndex).controller[method](element);
					}
				}
			},
	
			/**
			 * @private
			 */
			eventHandler: function(e) {
				var me = this;
				var tooltip = me.tooltip;
	
				if (plugins.notify(me, 'beforeEvent', [e]) === false) {
					return;
				}
	
				// Buffer any update calls so that renders do not occur
				me._bufferedRender = true;
				me._bufferedRequest = null;
	
				var changed = me.handleEvent(e);
				changed |= tooltip && tooltip.handleEvent(e);
	
				plugins.notify(me, 'afterEvent', [e]);
	
				var bufferedRequest = me._bufferedRequest;
				if (bufferedRequest) {
					// If we have an update that was triggered, we need to do a normal render
					me.render(bufferedRequest.duration, bufferedRequest.lazy);
				} else if (changed && !me.animating) {
					// If entering, leaving, or changing elements, animate the change via pivot
					me.stop();
	
					// We only need to render at this point. Updating will cause scales to be
					// recomputed generating flicker & using more memory than necessary.
					me.render(me.options.hover.animationDuration, true);
				}
	
				me._bufferedRender = false;
				me._bufferedRequest = null;
	
				return me;
			},
	
			/**
			 * Handle an event
			 * @private
			 * @param {IEvent} event the event to handle
			 * @return {Boolean} true if the chart needs to re-render
			 */
			handleEvent: function(e) {
				var me = this;
				var options = me.options || {};
				var hoverOptions = options.hover;
				var changed = false;
	
				me.lastActive = me.lastActive || [];
	
				// Find Active Elements for hover and tooltips
				if (e.type === 'mouseout') {
					me.active = [];
				} else {
					me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
				}
	
				// On Hover hook
				if (hoverOptions.onHover) {
					// Need to call with native event here to not break backwards compatibility
					hoverOptions.onHover.call(me, e.native, me.active);
				}
	
				if (e.type === 'mouseup' || e.type === 'click') {
					if (options.onClick) {
						// Use e.native here for backwards compatibility
						options.onClick.call(me, e.native, me.active);
					}
				}
	
				// Remove styling for last active (even if it may still be active)
				if (me.lastActive.length) {
					me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
				}
	
				// Built in hover styling
				if (me.active.length && hoverOptions.mode) {
					me.updateHoverStyle(me.active, hoverOptions.mode, true);
				}
	
				changed = !helpers.arrayEquals(me.active, me.lastActive);
	
				// Remember Last Actives
				me.lastActive = me.active;
	
				return changed;
			}
		});
	};


/***/ },

/***/ 424:
/*!*******************************************************!*\
  !*** ./~/chart.js/src/core/core.datasetController.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
	
		/**
		 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
		 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
		 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
		 */
		function listenArrayEvents(array, listener) {
			if (array._chartjs) {
				array._chartjs.listeners.push(listener);
				return;
			}
	
			Object.defineProperty(array, '_chartjs', {
				configurable: true,
				enumerable: false,
				value: {
					listeners: [listener]
				}
			});
	
			arrayEvents.forEach(function(key) {
				var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
				var base = array[key];
	
				Object.defineProperty(array, key, {
					configurable: true,
					enumerable: false,
					value: function() {
						var args = Array.prototype.slice.call(arguments);
						var res = base.apply(this, args);
	
						helpers.each(array._chartjs.listeners, function(object) {
							if (typeof object[method] === 'function') {
								object[method].apply(object, args);
							}
						});
	
						return res;
					}
				});
			});
		}
	
		/**
		 * Removes the given array event listener and cleanup extra attached properties (such as
		 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
		 */
		function unlistenArrayEvents(array, listener) {
			var stub = array._chartjs;
			if (!stub) {
				return;
			}
	
			var listeners = stub.listeners;
			var index = listeners.indexOf(listener);
			if (index !== -1) {
				listeners.splice(index, 1);
			}
	
			if (listeners.length > 0) {
				return;
			}
	
			arrayEvents.forEach(function(key) {
				delete array[key];
			});
	
			delete array._chartjs;
		}
	
		// Base class for all dataset controllers (line, bar, etc)
		Chart.DatasetController = function(chart, datasetIndex) {
			this.initialize(chart, datasetIndex);
		};
	
		helpers.extend(Chart.DatasetController.prototype, {
	
			/**
			 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
			 * @type {Chart.core.element}
			 */
			datasetElementType: null,
	
			/**
			 * Element type used to generate a meta data (e.g. Chart.element.Point).
			 * @type {Chart.core.element}
			 */
			dataElementType: null,
	
			initialize: function(chart, datasetIndex) {
				var me = this;
				me.chart = chart;
				me.index = datasetIndex;
				me.linkScales();
				me.addElements();
			},
	
			updateIndex: function(datasetIndex) {
				this.index = datasetIndex;
			},
	
			linkScales: function() {
				var me = this;
				var meta = me.getMeta();
				var dataset = me.getDataset();
	
				if (meta.xAxisID === null) {
					meta.xAxisID = dataset.xAxisID || me.chart.options.scales.xAxes[0].id;
				}
				if (meta.yAxisID === null) {
					meta.yAxisID = dataset.yAxisID || me.chart.options.scales.yAxes[0].id;
				}
			},
	
			getDataset: function() {
				return this.chart.data.datasets[this.index];
			},
	
			getMeta: function() {
				return this.chart.getDatasetMeta(this.index);
			},
	
			getScaleForId: function(scaleID) {
				return this.chart.scales[scaleID];
			},
	
			reset: function() {
				this.update(true);
			},
	
			/**
			 * @private
			 */
			destroy: function() {
				if (this._data) {
					unlistenArrayEvents(this._data, this);
				}
			},
	
			createMetaDataset: function() {
				var me = this;
				var type = me.datasetElementType;
				return type && new type({
					_chart: me.chart.chart,
					_datasetIndex: me.index
				});
			},
	
			createMetaData: function(index) {
				var me = this;
				var type = me.dataElementType;
				return type && new type({
					_chart: me.chart.chart,
					_datasetIndex: me.index,
					_index: index
				});
			},
	
			addElements: function() {
				var me = this;
				var meta = me.getMeta();
				var data = me.getDataset().data || [];
				var metaData = meta.data;
				var i, ilen;
	
				for (i=0, ilen=data.length; i<ilen; ++i) {
					metaData[i] = metaData[i] || me.createMetaData(i);
				}
	
				meta.dataset = meta.dataset || me.createMetaDataset();
			},
	
			addElementAndReset: function(index) {
				var element = this.createMetaData(index);
				this.getMeta().data.splice(index, 0, element);
				this.updateElement(element, index, true);
			},
	
			buildOrUpdateElements: function() {
				var me = this;
				var dataset = me.getDataset();
				var data = dataset.data || (dataset.data = []);
	
				// In order to correctly handle data addition/deletion animation (an thus simulate
				// real-time charts), we need to monitor these data modifications and synchronize
				// the internal meta data accordingly.
				if (me._data !== data) {
					if (me._data) {
						// This case happens when the user replaced the data array instance.
						unlistenArrayEvents(me._data, me);
					}
	
					listenArrayEvents(data, me);
					me._data = data;
				}
	
				// Re-sync meta data in case the user replaced the data array or if we missed
				// any updates and so make sure that we handle number of datapoints changing.
				me.resyncElements();
			},
	
			update: helpers.noop,
	
			draw: function(ease) {
				var easingDecimal = ease || 1;
				var i, len;
				var metaData = this.getMeta().data;
				for (i = 0, len = metaData.length; i < len; ++i) {
					metaData[i].transition(easingDecimal).draw();
				}
			},
	
			removeHoverStyle: function(element, elementOpts) {
				var dataset = this.chart.data.datasets[element._datasetIndex],
					index = element._index,
					custom = element.custom || {},
					valueOrDefault = helpers.getValueAtIndexOrDefault,
					model = element._model;
	
				model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : valueOrDefault(dataset.backgroundColor, index, elementOpts.backgroundColor);
				model.borderColor = custom.borderColor ? custom.borderColor : valueOrDefault(dataset.borderColor, index, elementOpts.borderColor);
				model.borderWidth = custom.borderWidth ? custom.borderWidth : valueOrDefault(dataset.borderWidth, index, elementOpts.borderWidth);
			},
	
			setHoverStyle: function(element) {
				var dataset = this.chart.data.datasets[element._datasetIndex],
					index = element._index,
					custom = element.custom || {},
					valueOrDefault = helpers.getValueAtIndexOrDefault,
					getHoverColor = helpers.getHoverColor,
					model = element._model;
	
				model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : valueOrDefault(dataset.hoverBackgroundColor, index, getHoverColor(model.backgroundColor));
				model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : valueOrDefault(dataset.hoverBorderColor, index, getHoverColor(model.borderColor));
				model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : valueOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
			},
	
			/**
			 * @private
			 */
			resyncElements: function() {
				var me = this;
				var meta = me.getMeta();
				var data = me.getDataset().data;
				var numMeta = meta.data.length;
				var numData = data.length;
	
				if (numData < numMeta) {
					meta.data.splice(numData, numMeta - numData);
				} else if (numData > numMeta) {
					me.insertElements(numMeta, numData - numMeta);
				}
			},
	
			/**
			 * @private
			 */
			insertElements: function(start, count) {
				for (var i=0; i<count; ++i) {
					this.addElementAndReset(start + i);
				}
			},
	
			/**
			 * @private
			 */
			onDataPush: function() {
				this.insertElements(this.getDataset().data.length-1, arguments.length);
			},
	
			/**
			 * @private
			 */
			onDataPop: function() {
				this.getMeta().data.pop();
			},
	
			/**
			 * @private
			 */
			onDataShift: function() {
				this.getMeta().data.shift();
			},
	
			/**
			 * @private
			 */
			onDataSplice: function(start, count) {
				this.getMeta().data.splice(start, count);
				this.insertElements(start, arguments.length - 2);
			},
	
			/**
			 * @private
			 */
			onDataUnshift: function() {
				this.insertElements(0, arguments.length);
			}
		});
	
		Chart.DatasetController.extend = helpers.inherits;
	};


/***/ },

/***/ 425:
/*!***************************************************!*\
  !*** ./~/chart.js/src/core/core.layoutService.js ***!
  \***************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		// The layout service is very self explanatory.  It's responsible for the layout within a chart.
		// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
		// It is this service's responsibility of carrying out that layout.
		Chart.layoutService = {
			defaults: {},
	
			// Register a box to a chartInstance. A box is simply a reference to an object that requires layout. eg. Scales, Legend, Plugins.
			addBox: function(chartInstance, box) {
				if (!chartInstance.boxes) {
					chartInstance.boxes = [];
				}
				chartInstance.boxes.push(box);
			},
	
			removeBox: function(chartInstance, box) {
				if (!chartInstance.boxes) {
					return;
				}
				chartInstance.boxes.splice(chartInstance.boxes.indexOf(box), 1);
			},
	
			// The most important function
			update: function(chartInstance, width, height) {
	
				if (!chartInstance) {
					return;
				}
	
				var layoutOptions = chartInstance.options.layout;
				var padding = layoutOptions ? layoutOptions.padding : null;
	
				var leftPadding = 0;
				var rightPadding = 0;
				var topPadding = 0;
				var bottomPadding = 0;
	
				if (!isNaN(padding)) {
					// options.layout.padding is a number. assign to all
					leftPadding = padding;
					rightPadding = padding;
					topPadding = padding;
					bottomPadding = padding;
				} else {
					leftPadding = padding.left || 0;
					rightPadding = padding.right || 0;
					topPadding = padding.top || 0;
					bottomPadding = padding.bottom || 0;
				}
	
				var leftBoxes = helpers.where(chartInstance.boxes, function(box) {
					return box.options.position === 'left';
				});
				var rightBoxes = helpers.where(chartInstance.boxes, function(box) {
					return box.options.position === 'right';
				});
				var topBoxes = helpers.where(chartInstance.boxes, function(box) {
					return box.options.position === 'top';
				});
				var bottomBoxes = helpers.where(chartInstance.boxes, function(box) {
					return box.options.position === 'bottom';
				});
	
				// Boxes that overlay the chartarea such as the radialLinear scale
				var chartAreaBoxes = helpers.where(chartInstance.boxes, function(box) {
					return box.options.position === 'chartArea';
				});
	
				// Ensure that full width boxes are at the very top / bottom
				topBoxes.sort(function(a, b) {
					return (b.options.fullWidth ? 1 : 0) - (a.options.fullWidth ? 1 : 0);
				});
				bottomBoxes.sort(function(a, b) {
					return (a.options.fullWidth ? 1 : 0) - (b.options.fullWidth ? 1 : 0);
				});
	
				// Essentially we now have any number of boxes on each of the 4 sides.
				// Our canvas looks like the following.
				// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
				// B1 is the bottom axis
				// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
				// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
				// an error will be thrown.
				//
				// |----------------------------------------------------|
				// |                  T1 (Full Width)                   |
				// |----------------------------------------------------|
				// |    |    |                 T2                  |    |
				// |    |----|-------------------------------------|----|
				// |    |    | C1 |                           | C2 |    |
				// |    |    |----|                           |----|    |
				// |    |    |                                     |    |
				// | L1 | L2 |           ChartArea (C0)            | R1 |
				// |    |    |                                     |    |
				// |    |    |----|                           |----|    |
				// |    |    | C3 |                           | C4 |    |
				// |    |----|-------------------------------------|----|
				// |    |    |                 B1                  |    |
				// |----------------------------------------------------|
				// |                  B2 (Full Width)                   |
				// |----------------------------------------------------|
				//
				// What we do to find the best sizing, we do the following
				// 1. Determine the minimum size of the chart area.
				// 2. Split the remaining width equally between each vertical axis
				// 3. Split the remaining height equally between each horizontal axis
				// 4. Give each layout the maximum size it can be. The layout will return it's minimum size
				// 5. Adjust the sizes of each axis based on it's minimum reported size.
				// 6. Refit each axis
				// 7. Position each axis in the final location
				// 8. Tell the chart the final location of the chart area
				// 9. Tell any axes that overlay the chart area the positions of the chart area
	
				// Step 1
				var chartWidth = width - leftPadding - rightPadding;
				var chartHeight = height - topPadding - bottomPadding;
				var chartAreaWidth = chartWidth / 2; // min 50%
				var chartAreaHeight = chartHeight / 2; // min 50%
	
				// Step 2
				var verticalBoxWidth = (width - chartAreaWidth) / (leftBoxes.length + rightBoxes.length);
	
				// Step 3
				var horizontalBoxHeight = (height - chartAreaHeight) / (topBoxes.length + bottomBoxes.length);
	
				// Step 4
				var maxChartAreaWidth = chartWidth;
				var maxChartAreaHeight = chartHeight;
				var minBoxSizes = [];
	
				function getMinimumBoxSize(box) {
					var minSize;
					var isHorizontal = box.isHorizontal();
	
					if (isHorizontal) {
						minSize = box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, horizontalBoxHeight);
						maxChartAreaHeight -= minSize.height;
					} else {
						minSize = box.update(verticalBoxWidth, chartAreaHeight);
						maxChartAreaWidth -= minSize.width;
					}
	
					minBoxSizes.push({
						horizontal: isHorizontal,
						minSize: minSize,
						box: box,
					});
				}
	
				helpers.each(leftBoxes.concat(rightBoxes, topBoxes, bottomBoxes), getMinimumBoxSize);
	
				// If a horizontal box has padding, we move the left boxes over to avoid ugly charts (see issue #2478)
				var maxHorizontalLeftPadding = 0;
				var maxHorizontalRightPadding = 0;
				var maxVerticalTopPadding = 0;
				var maxVerticalBottomPadding = 0;
	
				helpers.each(topBoxes.concat(bottomBoxes), function(horizontalBox) {
					if (horizontalBox.getPadding) {
						var boxPadding = horizontalBox.getPadding();
						maxHorizontalLeftPadding = Math.max(maxHorizontalLeftPadding, boxPadding.left);
						maxHorizontalRightPadding = Math.max(maxHorizontalRightPadding, boxPadding.right);
					}
				});
	
				helpers.each(leftBoxes.concat(rightBoxes), function(verticalBox) {
					if (verticalBox.getPadding) {
						var boxPadding = verticalBox.getPadding();
						maxVerticalTopPadding = Math.max(maxVerticalTopPadding, boxPadding.top);
						maxVerticalBottomPadding = Math.max(maxVerticalBottomPadding, boxPadding.bottom);
					}
				});
	
				// At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
				// be if the axes are drawn at their minimum sizes.
				// Steps 5 & 6
				var totalLeftBoxesWidth = leftPadding;
				var totalRightBoxesWidth = rightPadding;
				var totalTopBoxesHeight = topPadding;
				var totalBottomBoxesHeight = bottomPadding;
	
				// Function to fit a box
				function fitBox(box) {
					var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBox) {
						return minBox.box === box;
					});
	
					if (minBoxSize) {
						if (box.isHorizontal()) {
							var scaleMargin = {
								left: Math.max(totalLeftBoxesWidth, maxHorizontalLeftPadding),
								right: Math.max(totalRightBoxesWidth, maxHorizontalRightPadding),
								top: 0,
								bottom: 0
							};
	
							// Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
							// on the margin. Sometimes they need to increase in size slightly
							box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
						} else {
							box.update(minBoxSize.minSize.width, maxChartAreaHeight);
						}
					}
				}
	
				// Update, and calculate the left and right margins for the horizontal boxes
				helpers.each(leftBoxes.concat(rightBoxes), fitBox);
	
				helpers.each(leftBoxes, function(box) {
					totalLeftBoxesWidth += box.width;
				});
	
				helpers.each(rightBoxes, function(box) {
					totalRightBoxesWidth += box.width;
				});
	
				// Set the Left and Right margins for the horizontal boxes
				helpers.each(topBoxes.concat(bottomBoxes), fitBox);
	
				// Figure out how much margin is on the top and bottom of the vertical boxes
				helpers.each(topBoxes, function(box) {
					totalTopBoxesHeight += box.height;
				});
	
				helpers.each(bottomBoxes, function(box) {
					totalBottomBoxesHeight += box.height;
				});
	
				function finalFitVerticalBox(box) {
					var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minSize) {
						return minSize.box === box;
					});
	
					var scaleMargin = {
						left: 0,
						right: 0,
						top: totalTopBoxesHeight,
						bottom: totalBottomBoxesHeight
					};
	
					if (minBoxSize) {
						box.update(minBoxSize.minSize.width, maxChartAreaHeight, scaleMargin);
					}
				}
	
				// Let the left layout know the final margin
				helpers.each(leftBoxes.concat(rightBoxes), finalFitVerticalBox);
	
				// Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
				totalLeftBoxesWidth = leftPadding;
				totalRightBoxesWidth = rightPadding;
				totalTopBoxesHeight = topPadding;
				totalBottomBoxesHeight = bottomPadding;
	
				helpers.each(leftBoxes, function(box) {
					totalLeftBoxesWidth += box.width;
				});
	
				helpers.each(rightBoxes, function(box) {
					totalRightBoxesWidth += box.width;
				});
	
				helpers.each(topBoxes, function(box) {
					totalTopBoxesHeight += box.height;
				});
				helpers.each(bottomBoxes, function(box) {
					totalBottomBoxesHeight += box.height;
				});
	
				// We may be adding some padding to account for rotated x axis labels
				var leftPaddingAddition = Math.max(maxHorizontalLeftPadding - totalLeftBoxesWidth, 0);
				totalLeftBoxesWidth += leftPaddingAddition;
				totalRightBoxesWidth += Math.max(maxHorizontalRightPadding - totalRightBoxesWidth, 0);
	
				var topPaddingAddition = Math.max(maxVerticalTopPadding - totalTopBoxesHeight, 0);
				totalTopBoxesHeight += topPaddingAddition;
				totalBottomBoxesHeight += Math.max(maxVerticalBottomPadding - totalBottomBoxesHeight, 0);
	
				// Figure out if our chart area changed. This would occur if the dataset layout label rotation
				// changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
				// without calling `fit` again
				var newMaxChartAreaHeight = height - totalTopBoxesHeight - totalBottomBoxesHeight;
				var newMaxChartAreaWidth = width - totalLeftBoxesWidth - totalRightBoxesWidth;
	
				if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
					helpers.each(leftBoxes, function(box) {
						box.height = newMaxChartAreaHeight;
					});
	
					helpers.each(rightBoxes, function(box) {
						box.height = newMaxChartAreaHeight;
					});
	
					helpers.each(topBoxes, function(box) {
						if (!box.options.fullWidth) {
							box.width = newMaxChartAreaWidth;
						}
					});
	
					helpers.each(bottomBoxes, function(box) {
						if (!box.options.fullWidth) {
							box.width = newMaxChartAreaWidth;
						}
					});
	
					maxChartAreaHeight = newMaxChartAreaHeight;
					maxChartAreaWidth = newMaxChartAreaWidth;
				}
	
				// Step 7 - Position the boxes
				var left = leftPadding + leftPaddingAddition;
				var top = topPadding + topPaddingAddition;
	
				function placeBox(box) {
					if (box.isHorizontal()) {
						box.left = box.options.fullWidth ? leftPadding : totalLeftBoxesWidth;
						box.right = box.options.fullWidth ? width - rightPadding : totalLeftBoxesWidth + maxChartAreaWidth;
						box.top = top;
						box.bottom = top + box.height;
	
						// Move to next point
						top = box.bottom;
	
					} else {
	
						box.left = left;
						box.right = left + box.width;
						box.top = totalTopBoxesHeight;
						box.bottom = totalTopBoxesHeight + maxChartAreaHeight;
	
						// Move to next point
						left = box.right;
					}
				}
	
				helpers.each(leftBoxes.concat(topBoxes), placeBox);
	
				// Account for chart width and height
				left += maxChartAreaWidth;
				top += maxChartAreaHeight;
	
				helpers.each(rightBoxes, placeBox);
				helpers.each(bottomBoxes, placeBox);
	
				// Step 8
				chartInstance.chartArea = {
					left: totalLeftBoxesWidth,
					top: totalTopBoxesHeight,
					right: totalLeftBoxesWidth + maxChartAreaWidth,
					bottom: totalTopBoxesHeight + maxChartAreaHeight
				};
	
				// Step 9
				helpers.each(chartAreaBoxes, function(box) {
					box.left = chartInstance.chartArea.left;
					box.top = chartInstance.chartArea.top;
					box.right = chartInstance.chartArea.right;
					box.bottom = chartInstance.chartArea.bottom;
	
					box.update(maxChartAreaWidth, maxChartAreaHeight);
				});
			}
		};
	};


/***/ },

/***/ 426:
/*!**************************************************!*\
  !*** ./~/chart.js/src/core/core.scaleService.js ***!
  \**************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.scaleService = {
			// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
			// use the new chart options to grab the correct scale
			constructors: {},
			// Use a registration function so that we can move to an ES6 map when we no longer need to support
			// old browsers
	
			// Scale config defaults
			defaults: {},
			registerScaleType: function(type, scaleConstructor, defaults) {
				this.constructors[type] = scaleConstructor;
				this.defaults[type] = helpers.clone(defaults);
			},
			getScaleConstructor: function(type) {
				return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
			},
			getScaleDefaults: function(type) {
				// Return the scale defaults merged with the global settings so that we always use the latest ones
				return this.defaults.hasOwnProperty(type) ? helpers.scaleMerge(Chart.defaults.scale, this.defaults[type]) : {};
			},
			updateScaleDefaults: function(type, additions) {
				var defaults = this.defaults;
				if (defaults.hasOwnProperty(type)) {
					defaults[type] = helpers.extend(defaults[type], additions);
				}
			},
			addScalesToLayout: function(chartInstance) {
				// Adds each scale to the chart.boxes array to be sized accordingly
				helpers.each(chartInstance.scales, function(scale) {
					Chart.layoutService.addBox(chartInstance, scale);
				});
			}
		};
	};


/***/ },

/***/ 427:
/*!*******************************************!*\
  !*** ./~/chart.js/src/core/core.ticks.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		/**
		 * Namespace to hold static tick generation functions
		 * @namespace Chart.Ticks
		 */
		Chart.Ticks = {
			/**
			 * Namespace to hold generators for different types of ticks
			 * @namespace Chart.Ticks.generators
			 */
			generators: {
				/**
				 * Interface for the options provided to the numeric tick generator
				 * @interface INumericTickGenerationOptions
				 */
				/**
				 * The maximum number of ticks to display
				 * @name INumericTickGenerationOptions#maxTicks
				 * @type Number
				 */
				/**
				 * The distance between each tick.
				 * @name INumericTickGenerationOptions#stepSize
				 * @type Number
				 * @optional
				 */
				/**
				 * Forced minimum for the ticks. If not specified, the minimum of the data range is used to calculate the tick minimum
				 * @name INumericTickGenerationOptions#min
				 * @type Number
				 * @optional
				 */
				/**
				 * The maximum value of the ticks. If not specified, the maximum of the data range is used to calculate the tick maximum
				 * @name INumericTickGenerationOptions#max
				 * @type Number
				 * @optional
				 */
	
				/**
				 * Generate a set of linear ticks
				 * @method Chart.Ticks.generators.linear
				 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
				 * @param dataRange {IRange} the range of the data
				 * @returns {Array<Number>} array of tick values
				 */
				linear: function(generationOptions, dataRange) {
					var ticks = [];
					// To get a "nice" value for the tick spacing, we will use the appropriately named
					// "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
					// for details.
	
					var spacing;
					if (generationOptions.stepSize && generationOptions.stepSize > 0) {
						spacing = generationOptions.stepSize;
					} else {
						var niceRange = helpers.niceNum(dataRange.max - dataRange.min, false);
						spacing = helpers.niceNum(niceRange / (generationOptions.maxTicks - 1), true);
					}
					var niceMin = Math.floor(dataRange.min / spacing) * spacing;
					var niceMax = Math.ceil(dataRange.max / spacing) * spacing;
	
					// If min, max and stepSize is set and they make an evenly spaced scale use it.
					if (generationOptions.min && generationOptions.max && generationOptions.stepSize) {
						// If very close to our whole number, use it.
						if (helpers.almostWhole((generationOptions.max - generationOptions.min) / generationOptions.stepSize, spacing / 1000)) {
							niceMin = generationOptions.min;
							niceMax = generationOptions.max;
						}
					}
	
					var numSpaces = (niceMax - niceMin) / spacing;
					// If very close to our rounded value, use it.
					if (helpers.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
						numSpaces = Math.round(numSpaces);
					} else {
						numSpaces = Math.ceil(numSpaces);
					}
	
					// Put the values into the ticks array
					ticks.push(generationOptions.min !== undefined ? generationOptions.min : niceMin);
					for (var j = 1; j < numSpaces; ++j) {
						ticks.push(niceMin + (j * spacing));
					}
					ticks.push(generationOptions.max !== undefined ? generationOptions.max : niceMax);
	
					return ticks;
				},
	
				/**
				 * Generate a set of logarithmic ticks
				 * @method Chart.Ticks.generators.logarithmic
				 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
				 * @param dataRange {IRange} the range of the data
				 * @returns {Array<Number>} array of tick values
				 */
				logarithmic: function(generationOptions, dataRange) {
					var ticks = [];
					var getValueOrDefault = helpers.getValueOrDefault;
	
					// Figure out what the max number of ticks we can support it is based on the size of
					// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
					// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
					// the graph
					var tickVal = getValueOrDefault(generationOptions.min, Math.pow(10, Math.floor(helpers.log10(dataRange.min))));
	
					var endExp = Math.floor(helpers.log10(dataRange.max));
					var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
					var exp;
					var significand;
	
					if (tickVal === 0) {
						exp = Math.floor(helpers.log10(dataRange.minNotZero));
						significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));
	
						ticks.push(tickVal);
						tickVal = significand * Math.pow(10, exp);
					} else {
						exp = Math.floor(helpers.log10(tickVal));
						significand = Math.floor(tickVal / Math.pow(10, exp));
					}
	
					do {
						ticks.push(tickVal);
	
						++significand;
						if (significand === 10) {
							significand = 1;
							++exp;
						}
	
						tickVal = significand * Math.pow(10, exp);
					} while (exp < endExp || (exp === endExp && significand < endSignificand));
	
					var lastTick = getValueOrDefault(generationOptions.max, tickVal);
					ticks.push(lastTick);
	
					return ticks;
				}
			},
	
			/**
			 * Namespace to hold formatters for different types of ticks
			 * @namespace Chart.Ticks.formatters
			 */
			formatters: {
				/**
				 * Formatter for value labels
				 * @method Chart.Ticks.formatters.values
				 * @param value the value to display
				 * @return {String|Array} the label to display
				 */
				values: function(value) {
					return helpers.isArray(value) ? value : '' + value;
				},
	
				/**
				 * Formatter for linear numeric ticks
				 * @method Chart.Ticks.formatters.linear
				 * @param tickValue {Number} the value to be formatted
				 * @param index {Number} the position of the tickValue parameter in the ticks array
				 * @param ticks {Array<Number>} the list of ticks being converted
				 * @return {String} string representation of the tickValue parameter
				 */
				linear: function(tickValue, index, ticks) {
					// If we have lots of ticks, don't use the ones
					var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];
	
					// If we have a number like 2.5 as the delta, figure out how many decimal places we need
					if (Math.abs(delta) > 1) {
						if (tickValue !== Math.floor(tickValue)) {
							// not an integer
							delta = tickValue - Math.floor(tickValue);
						}
					}
	
					var logDelta = helpers.log10(Math.abs(delta));
					var tickString = '';
	
					if (tickValue !== 0) {
						var numDecimal = -1 * Math.floor(logDelta);
						numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
						tickString = tickValue.toFixed(numDecimal);
					} else {
						tickString = '0'; // never show decimal places for 0
					}
	
					return tickString;
				},
	
				logarithmic: function(tickValue, index, ticks) {
					var remain = tickValue / (Math.pow(10, Math.floor(helpers.log10(tickValue))));
	
					if (tickValue === 0) {
						return '0';
					} else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
						return tickValue.toExponential();
					}
					return '';
				}
			}
		};
	};


/***/ },

/***/ 428:
/*!*******************************************!*\
  !*** ./~/chart.js/src/core/core.scale.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.scale = {
			display: true,
			position: 'left',
	
			// grid line settings
			gridLines: {
				display: true,
				color: 'rgba(0, 0, 0, 0.1)',
				lineWidth: 1,
				drawBorder: true,
				drawOnChartArea: true,
				drawTicks: true,
				tickMarkLength: 10,
				zeroLineWidth: 1,
				zeroLineColor: 'rgba(0,0,0,0.25)',
				offsetGridLines: false,
				borderDash: [],
				borderDashOffset: 0.0
			},
	
			// scale label
			scaleLabel: {
				// actual label
				labelString: '',
	
				// display property
				display: false
			},
	
			// label settings
			ticks: {
				beginAtZero: false,
				minRotation: 0,
				maxRotation: 50,
				mirror: false,
				padding: 0,
				reverse: false,
				display: true,
				autoSkip: true,
				autoSkipPadding: 0,
				labelOffset: 0,
				// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
				callback: Chart.Ticks.formatters.values
			}
		};
	
		function computeTextSize(context, tick, font) {
			return helpers.isArray(tick) ?
				helpers.longestText(context, font, tick) :
				context.measureText(tick).width;
		}
	
		function parseFontOptions(options) {
			var getValueOrDefault = helpers.getValueOrDefault;
			var globalDefaults = Chart.defaults.global;
			var size = getValueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
			var style = getValueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle);
			var family = getValueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily);
	
			return {
				size: size,
				style: style,
				family: family,
				font: helpers.fontString(size, style, family)
			};
		}
	
		Chart.Scale = Chart.Element.extend({
			/**
			 * Get the padding needed for the scale
			 * @method getPadding
			 * @private
			 * @returns {Padding} the necessary padding
			 */
			getPadding: function() {
				var me = this;
				return {
					left: me.paddingLeft || 0,
					top: me.paddingTop || 0,
					right: me.paddingRight || 0,
					bottom: me.paddingBottom || 0
				};
			},
	
			// These methods are ordered by lifecyle. Utilities then follow.
			// Any function defined here is inherited by all scale types.
			// Any function can be extended by the scale type
	
			beforeUpdate: function() {
				helpers.callCallback(this.options.beforeUpdate, [this]);
			},
			update: function(maxWidth, maxHeight, margins) {
				var me = this;
	
				// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
				me.beforeUpdate();
	
				// Absorb the master measurements
				me.maxWidth = maxWidth;
				me.maxHeight = maxHeight;
				me.margins = helpers.extend({
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}, margins);
				me.longestTextCache = me.longestTextCache || {};
	
				// Dimensions
				me.beforeSetDimensions();
				me.setDimensions();
				me.afterSetDimensions();
	
				// Data min/max
				me.beforeDataLimits();
				me.determineDataLimits();
				me.afterDataLimits();
	
				// Ticks
				me.beforeBuildTicks();
				me.buildTicks();
				me.afterBuildTicks();
	
				me.beforeTickToLabelConversion();
				me.convertTicksToLabels();
				me.afterTickToLabelConversion();
	
				// Tick Rotation
				me.beforeCalculateTickRotation();
				me.calculateTickRotation();
				me.afterCalculateTickRotation();
				// Fit
				me.beforeFit();
				me.fit();
				me.afterFit();
				//
				me.afterUpdate();
	
				return me.minSize;
	
			},
			afterUpdate: function() {
				helpers.callCallback(this.options.afterUpdate, [this]);
			},
	
			//
	
			beforeSetDimensions: function() {
				helpers.callCallback(this.options.beforeSetDimensions, [this]);
			},
			setDimensions: function() {
				var me = this;
				// Set the unconstrained dimension before label rotation
				if (me.isHorizontal()) {
					// Reset position before calculating rotation
					me.width = me.maxWidth;
					me.left = 0;
					me.right = me.width;
				} else {
					me.height = me.maxHeight;
	
					// Reset position before calculating rotation
					me.top = 0;
					me.bottom = me.height;
				}
	
				// Reset padding
				me.paddingLeft = 0;
				me.paddingTop = 0;
				me.paddingRight = 0;
				me.paddingBottom = 0;
			},
			afterSetDimensions: function() {
				helpers.callCallback(this.options.afterSetDimensions, [this]);
			},
	
			// Data limits
			beforeDataLimits: function() {
				helpers.callCallback(this.options.beforeDataLimits, [this]);
			},
			determineDataLimits: helpers.noop,
			afterDataLimits: function() {
				helpers.callCallback(this.options.afterDataLimits, [this]);
			},
	
			//
			beforeBuildTicks: function() {
				helpers.callCallback(this.options.beforeBuildTicks, [this]);
			},
			buildTicks: helpers.noop,
			afterBuildTicks: function() {
				helpers.callCallback(this.options.afterBuildTicks, [this]);
			},
	
			beforeTickToLabelConversion: function() {
				helpers.callCallback(this.options.beforeTickToLabelConversion, [this]);
			},
			convertTicksToLabels: function() {
				var me = this;
				// Convert ticks to strings
				var tickOpts = me.options.ticks;
				me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback);
			},
			afterTickToLabelConversion: function() {
				helpers.callCallback(this.options.afterTickToLabelConversion, [this]);
			},
	
			//
	
			beforeCalculateTickRotation: function() {
				helpers.callCallback(this.options.beforeCalculateTickRotation, [this]);
			},
			calculateTickRotation: function() {
				var me = this;
				var context = me.ctx;
				var tickOpts = me.options.ticks;
	
				// Get the width of each grid by calculating the difference
				// between x offsets between 0 and 1.
				var tickFont = parseFontOptions(tickOpts);
				context.font = tickFont.font;
	
				var labelRotation = tickOpts.minRotation || 0;
	
				if (me.options.display && me.isHorizontal()) {
					var originalLabelWidth = helpers.longestText(context, tickFont.font, me.ticks, me.longestTextCache);
					var labelWidth = originalLabelWidth;
					var cosRotation;
					var sinRotation;
	
					// Allow 3 pixels x2 padding either side for label readability
					var tickWidth = me.getPixelForTick(1) - me.getPixelForTick(0) - 6;
	
					// Max label rotation can be set or default to 90 - also act as a loop counter
					while (labelWidth > tickWidth && labelRotation < tickOpts.maxRotation) {
						var angleRadians = helpers.toRadians(labelRotation);
						cosRotation = Math.cos(angleRadians);
						sinRotation = Math.sin(angleRadians);
	
						if (sinRotation * originalLabelWidth > me.maxHeight) {
							// go back one step
							labelRotation--;
							break;
						}
	
						labelRotation++;
						labelWidth = cosRotation * originalLabelWidth;
					}
				}
	
				me.labelRotation = labelRotation;
			},
			afterCalculateTickRotation: function() {
				helpers.callCallback(this.options.afterCalculateTickRotation, [this]);
			},
	
			//
	
			beforeFit: function() {
				helpers.callCallback(this.options.beforeFit, [this]);
			},
			fit: function() {
				var me = this;
				// Reset
				var minSize = me.minSize = {
					width: 0,
					height: 0
				};
	
				var opts = me.options;
				var tickOpts = opts.ticks;
				var scaleLabelOpts = opts.scaleLabel;
				var gridLineOpts = opts.gridLines;
				var display = opts.display;
				var isHorizontal = me.isHorizontal();
	
				var tickFont = parseFontOptions(tickOpts);
				var scaleLabelFontSize = parseFontOptions(scaleLabelOpts).size * 1.5;
				var tickMarkLength = opts.gridLines.tickMarkLength;
	
				// Width
				if (isHorizontal) {
					// subtract the margins to line up with the chartArea if we are a full width scale
					minSize.width = me.isFullWidth() ? me.maxWidth - me.margins.left - me.margins.right : me.maxWidth;
				} else {
					minSize.width = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
				}
	
				// height
				if (isHorizontal) {
					minSize.height = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
				} else {
					minSize.height = me.maxHeight; // fill all the height
				}
	
				// Are we showing a title for the scale?
				if (scaleLabelOpts.display && display) {
					if (isHorizontal) {
						minSize.height += scaleLabelFontSize;
					} else {
						minSize.width += scaleLabelFontSize;
					}
				}
	
				// Don't bother fitting the ticks if we are not showing them
				if (tickOpts.display && display) {
					var largestTextWidth = helpers.longestText(me.ctx, tickFont.font, me.ticks, me.longestTextCache);
					var tallestLabelHeightInLines = helpers.numberOfLabelLines(me.ticks);
					var lineSpace = tickFont.size * 0.5;
	
					if (isHorizontal) {
						// A horizontal axis is more constrained by the height.
						me.longestLabelWidth = largestTextWidth;
	
						var angleRadians = helpers.toRadians(me.labelRotation);
						var cosRotation = Math.cos(angleRadians);
						var sinRotation = Math.sin(angleRadians);
	
						// TODO - improve this calculation
						var labelHeight = (sinRotation * largestTextWidth)
							+ (tickFont.size * tallestLabelHeightInLines)
							+ (lineSpace * tallestLabelHeightInLines);
	
						minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight);
						me.ctx.font = tickFont.font;
	
						var firstTick = me.ticks[0];
						var firstLabelWidth = computeTextSize(me.ctx, firstTick, tickFont.font);
	
						var lastTick = me.ticks[me.ticks.length - 1];
						var lastLabelWidth = computeTextSize(me.ctx, lastTick, tickFont.font);
	
						// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned which means that the right padding is dominated
						// by the font height
						if (me.labelRotation !== 0) {
							me.paddingLeft = opts.position === 'bottom'? (cosRotation * firstLabelWidth) + 3: (cosRotation * lineSpace) + 3; // add 3 px to move away from canvas edges
							me.paddingRight = opts.position === 'bottom'? (cosRotation * lineSpace) + 3: (cosRotation * lastLabelWidth) + 3;
						} else {
							me.paddingLeft = firstLabelWidth / 2 + 3; // add 3 px to move away from canvas edges
							me.paddingRight = lastLabelWidth / 2 + 3;
						}
					} else {
						// A vertical axis is more constrained by the width. Labels are the dominant factor here, so get that length first
						// Account for padding
	
						if (tickOpts.mirror) {
							largestTextWidth = 0;
						} else {
							largestTextWidth += me.options.ticks.padding;
						}
						minSize.width += largestTextWidth;
						me.paddingTop = tickFont.size / 2;
						me.paddingBottom = tickFont.size / 2;
					}
				}
	
				me.handleMargins();
	
				me.width = minSize.width;
				me.height = minSize.height;
			},
	
			/**
			 * Handle margins and padding interactions
			 * @private
			 */
			handleMargins: function() {
				var me = this;
				if (me.margins) {
					me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
					me.paddingTop = Math.max(me.paddingTop - me.margins.top, 0);
					me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
					me.paddingBottom = Math.max(me.paddingBottom - me.margins.bottom, 0);
				}
			},
	
			afterFit: function() {
				helpers.callCallback(this.options.afterFit, [this]);
			},
	
			// Shared Methods
			isHorizontal: function() {
				return this.options.position === 'top' || this.options.position === 'bottom';
			},
			isFullWidth: function() {
				return (this.options.fullWidth);
			},
	
			// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
			getRightValue: function(rawValue) {
				// Null and undefined values first
				if (rawValue === null || typeof(rawValue) === 'undefined') {
					return NaN;
				}
				// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
				if (typeof(rawValue) === 'number' && !isFinite(rawValue)) {
					return NaN;
				}
				// If it is in fact an object, dive in one more level
				if (typeof(rawValue) === 'object') {
					if ((rawValue instanceof Date) || (rawValue.isValid)) {
						return rawValue;
					}
					return this.getRightValue(this.isHorizontal() ? rawValue.x : rawValue.y);
				}
	
				// Value is good, return it
				return rawValue;
			},
	
			// Used to get the value to display in the tooltip for the data at the given index
			// function getLabelForIndex(index, datasetIndex)
			getLabelForIndex: helpers.noop,
	
			// Used to get data value locations.  Value can either be an index or a numerical value
			getPixelForValue: helpers.noop,
	
			// Used to get the data value from a given pixel. This is the inverse of getPixelForValue
			getValueForPixel: helpers.noop,
	
			// Used for tick location, should
			getPixelForTick: function(index, includeOffset) {
				var me = this;
				if (me.isHorizontal()) {
					var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
					var tickWidth = innerWidth / Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
					var pixel = (tickWidth * index) + me.paddingLeft;
	
					if (includeOffset) {
						pixel += tickWidth / 2;
					}
	
					var finalVal = me.left + Math.round(pixel);
					finalVal += me.isFullWidth() ? me.margins.left : 0;
					return finalVal;
				}
				var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
				return me.top + (index * (innerHeight / (me.ticks.length - 1)));
			},
	
			// Utility for getting the pixel location of a percentage of scale
			getPixelForDecimal: function(decimal /* , includeOffset*/) {
				var me = this;
				if (me.isHorizontal()) {
					var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
					var valueOffset = (innerWidth * decimal) + me.paddingLeft;
	
					var finalVal = me.left + Math.round(valueOffset);
					finalVal += me.isFullWidth() ? me.margins.left : 0;
					return finalVal;
				}
				return me.top + (decimal * me.height);
			},
	
			getBasePixel: function() {
				return this.getPixelForValue(this.getBaseValue());
			},
	
			getBaseValue: function() {
				var me = this;
				var min = me.min;
				var max = me.max;
	
				return me.beginAtZero ? 0:
					min < 0 && max < 0? max :
					min > 0 && max > 0? min :
					0;
			},
	
			// Actually draw the scale on the canvas
			// @param {rectangle} chartArea : the area of the chart to draw full grid lines on
			draw: function(chartArea) {
				var me = this;
				var options = me.options;
				if (!options.display) {
					return;
				}
	
				var context = me.ctx;
				var globalDefaults = Chart.defaults.global;
				var optionTicks = options.ticks;
				var gridLines = options.gridLines;
				var scaleLabel = options.scaleLabel;
	
				var isRotated = me.labelRotation !== 0;
				var skipRatio;
				var useAutoskipper = optionTicks.autoSkip;
				var isHorizontal = me.isHorizontal();
	
				// figure out the maximum number of gridlines to show
				var maxTicks;
				if (optionTicks.maxTicksLimit) {
					maxTicks = optionTicks.maxTicksLimit;
				}
	
				var tickFontColor = helpers.getValueOrDefault(optionTicks.fontColor, globalDefaults.defaultFontColor);
				var tickFont = parseFontOptions(optionTicks);
	
				var tl = gridLines.drawTicks ? gridLines.tickMarkLength : 0;
				var borderDash = helpers.getValueOrDefault(gridLines.borderDash, globalDefaults.borderDash);
				var borderDashOffset = helpers.getValueOrDefault(gridLines.borderDashOffset, globalDefaults.borderDashOffset);
	
				var scaleLabelFontColor = helpers.getValueOrDefault(scaleLabel.fontColor, globalDefaults.defaultFontColor);
				var scaleLabelFont = parseFontOptions(scaleLabel);
	
				var labelRotationRadians = helpers.toRadians(me.labelRotation);
				var cosRotation = Math.cos(labelRotationRadians);
				var longestRotatedLabel = me.longestLabelWidth * cosRotation;
	
				// Make sure we draw text in the correct color and font
				context.fillStyle = tickFontColor;
	
				var itemsToDraw = [];
	
				if (isHorizontal) {
					skipRatio = false;
	
					// Only calculate the skip ratio with the half width of longestRotateLabel if we got an actual rotation
					// See #2584
					if (isRotated) {
						longestRotatedLabel /= 2;
					}
	
					if ((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length > (me.width - (me.paddingLeft + me.paddingRight))) {
						skipRatio = 1 + Math.floor(((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length) / (me.width - (me.paddingLeft + me.paddingRight)));
					}
	
					// if they defined a max number of optionTicks,
					// increase skipRatio until that number is met
					if (maxTicks && me.ticks.length > maxTicks) {
						while (!skipRatio || me.ticks.length / (skipRatio || 1) > maxTicks) {
							if (!skipRatio) {
								skipRatio = 1;
							}
							skipRatio += 1;
						}
					}
	
					if (!useAutoskipper) {
						skipRatio = false;
					}
				}
	
	
				var xTickStart = options.position === 'right' ? me.left : me.right - tl;
				var xTickEnd = options.position === 'right' ? me.left + tl : me.right;
				var yTickStart = options.position === 'bottom' ? me.top : me.bottom - tl;
				var yTickEnd = options.position === 'bottom' ? me.top + tl : me.bottom;
	
				helpers.each(me.ticks, function(label, index) {
					// If the callback returned a null or undefined value, do not draw this line
					if (label === undefined || label === null) {
						return;
					}
	
					var isLastTick = me.ticks.length === index + 1;
	
					// Since we always show the last tick,we need may need to hide the last shown one before
					var shouldSkip = (skipRatio > 1 && index % skipRatio > 0) || (index % skipRatio === 0 && index + skipRatio >= me.ticks.length);
					if (shouldSkip && !isLastTick || (label === undefined || label === null)) {
						return;
					}
	
					var lineWidth, lineColor;
					if (index === (typeof me.zeroLineIndex !== 'undefined' ? me.zeroLineIndex : 0)) {
						// Draw the first index specially
						lineWidth = gridLines.zeroLineWidth;
						lineColor = gridLines.zeroLineColor;
					} else {
						lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, index);
						lineColor = helpers.getValueAtIndexOrDefault(gridLines.color, index);
					}
	
					// Common properties
					var tx1, ty1, tx2, ty2, x1, y1, x2, y2, labelX, labelY;
					var textAlign = 'middle';
					var textBaseline = 'middle';
	
					if (isHorizontal) {
	
						if (options.position === 'bottom') {
							// bottom
							textBaseline = !isRotated? 'top':'middle';
							textAlign = !isRotated? 'center': 'right';
							labelY = me.top + tl;
						} else {
							// top
							textBaseline = !isRotated? 'bottom':'middle';
							textAlign = !isRotated? 'center': 'left';
							labelY = me.bottom - tl;
						}
	
						var xLineValue = me.getPixelForTick(index) + helpers.aliasPixel(lineWidth); // xvalues for grid lines
						labelX = me.getPixelForTick(index, gridLines.offsetGridLines) + optionTicks.labelOffset; // x values for optionTicks (need to consider offsetLabel option)
	
						tx1 = tx2 = x1 = x2 = xLineValue;
						ty1 = yTickStart;
						ty2 = yTickEnd;
						y1 = chartArea.top;
						y2 = chartArea.bottom;
					} else {
						var isLeft = options.position === 'left';
						var tickPadding = optionTicks.padding;
						var labelXOffset;
	
						if (optionTicks.mirror) {
							textAlign = isLeft ? 'left' : 'right';
							labelXOffset = tickPadding;
						} else {
							textAlign = isLeft ? 'right' : 'left';
							labelXOffset = tl + tickPadding;
						}
	
						labelX = isLeft ? me.right - labelXOffset : me.left + labelXOffset;
	
						var yLineValue = me.getPixelForTick(index); // xvalues for grid lines
						yLineValue += helpers.aliasPixel(lineWidth);
						labelY = me.getPixelForTick(index, gridLines.offsetGridLines);
	
						tx1 = xTickStart;
						tx2 = xTickEnd;
						x1 = chartArea.left;
						x2 = chartArea.right;
						ty1 = ty2 = y1 = y2 = yLineValue;
					}
	
					itemsToDraw.push({
						tx1: tx1,
						ty1: ty1,
						tx2: tx2,
						ty2: ty2,
						x1: x1,
						y1: y1,
						x2: x2,
						y2: y2,
						labelX: labelX,
						labelY: labelY,
						glWidth: lineWidth,
						glColor: lineColor,
						glBorderDash: borderDash,
						glBorderDashOffset: borderDashOffset,
						rotation: -1 * labelRotationRadians,
						label: label,
						textBaseline: textBaseline,
						textAlign: textAlign
					});
				});
	
				// Draw all of the tick labels, tick marks, and grid lines at the correct places
				helpers.each(itemsToDraw, function(itemToDraw) {
					if (gridLines.display) {
						context.save();
						context.lineWidth = itemToDraw.glWidth;
						context.strokeStyle = itemToDraw.glColor;
						if (context.setLineDash) {
							context.setLineDash(itemToDraw.glBorderDash);
							context.lineDashOffset = itemToDraw.glBorderDashOffset;
						}
	
						context.beginPath();
	
						if (gridLines.drawTicks) {
							context.moveTo(itemToDraw.tx1, itemToDraw.ty1);
							context.lineTo(itemToDraw.tx2, itemToDraw.ty2);
						}
	
						if (gridLines.drawOnChartArea) {
							context.moveTo(itemToDraw.x1, itemToDraw.y1);
							context.lineTo(itemToDraw.x2, itemToDraw.y2);
						}
	
						context.stroke();
						context.restore();
					}
	
					if (optionTicks.display) {
						context.save();
						context.translate(itemToDraw.labelX, itemToDraw.labelY);
						context.rotate(itemToDraw.rotation);
						context.font = tickFont.font;
						context.textBaseline = itemToDraw.textBaseline;
						context.textAlign = itemToDraw.textAlign;
	
						var label = itemToDraw.label;
						if (helpers.isArray(label)) {
							for (var i = 0, y = 0; i < label.length; ++i) {
								// We just make sure the multiline element is a string here..
								context.fillText('' + label[i], 0, y);
								// apply same lineSpacing as calculated @ L#320
								y += (tickFont.size * 1.5);
							}
						} else {
							context.fillText(label, 0, 0);
						}
						context.restore();
					}
				});
	
				if (scaleLabel.display) {
					// Draw the scale label
					var scaleLabelX;
					var scaleLabelY;
					var rotation = 0;
	
					if (isHorizontal) {
						scaleLabelX = me.left + ((me.right - me.left) / 2); // midpoint of the width
						scaleLabelY = options.position === 'bottom' ? me.bottom - (scaleLabelFont.size / 2) : me.top + (scaleLabelFont.size / 2);
					} else {
						var isLeft = options.position === 'left';
						scaleLabelX = isLeft ? me.left + (scaleLabelFont.size / 2) : me.right - (scaleLabelFont.size / 2);
						scaleLabelY = me.top + ((me.bottom - me.top) / 2);
						rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
					}
	
					context.save();
					context.translate(scaleLabelX, scaleLabelY);
					context.rotate(rotation);
					context.textAlign = 'center';
					context.textBaseline = 'middle';
					context.fillStyle = scaleLabelFontColor; // render in correct colour
					context.font = scaleLabelFont.font;
					context.fillText(scaleLabel.labelString, 0, 0);
					context.restore();
				}
	
				if (gridLines.drawBorder) {
					// Draw the line at the edge of the axis
					context.lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, 0);
					context.strokeStyle = helpers.getValueAtIndexOrDefault(gridLines.color, 0);
					var x1 = me.left,
						x2 = me.right,
						y1 = me.top,
						y2 = me.bottom;
	
					var aliasPixel = helpers.aliasPixel(context.lineWidth);
					if (isHorizontal) {
						y1 = y2 = options.position === 'top' ? me.bottom : me.top;
						y1 += aliasPixel;
						y2 += aliasPixel;
					} else {
						x1 = x2 = options.position === 'left' ? me.right : me.left;
						x1 += aliasPixel;
						x2 += aliasPixel;
					}
	
					context.beginPath();
					context.moveTo(x1, y1);
					context.lineTo(x2, y2);
					context.stroke();
				}
			}
		});
	};


/***/ },

/***/ 429:
/*!*******************************************!*\
  !*** ./~/chart.js/src/core/core.title.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.global.title = {
			display: false,
			position: 'top',
			fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)
	
			fontStyle: 'bold',
			padding: 10,
	
			// actual title
			text: ''
		};
	
		var noop = helpers.noop;
		Chart.Title = Chart.Element.extend({
	
			initialize: function(config) {
				var me = this;
				helpers.extend(me, config);
	
				// Contains hit boxes for each dataset (in dataset order)
				me.legendHitBoxes = [];
			},
	
			// These methods are ordered by lifecycle. Utilities then follow.
	
			beforeUpdate: noop,
			update: function(maxWidth, maxHeight, margins) {
				var me = this;
	
				// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
				me.beforeUpdate();
	
				// Absorb the master measurements
				me.maxWidth = maxWidth;
				me.maxHeight = maxHeight;
				me.margins = margins;
	
				// Dimensions
				me.beforeSetDimensions();
				me.setDimensions();
				me.afterSetDimensions();
				// Labels
				me.beforeBuildLabels();
				me.buildLabels();
				me.afterBuildLabels();
	
				// Fit
				me.beforeFit();
				me.fit();
				me.afterFit();
				//
				me.afterUpdate();
	
				return me.minSize;
	
			},
			afterUpdate: noop,
	
			//
	
			beforeSetDimensions: noop,
			setDimensions: function() {
				var me = this;
				// Set the unconstrained dimension before label rotation
				if (me.isHorizontal()) {
					// Reset position before calculating rotation
					me.width = me.maxWidth;
					me.left = 0;
					me.right = me.width;
				} else {
					me.height = me.maxHeight;
	
					// Reset position before calculating rotation
					me.top = 0;
					me.bottom = me.height;
				}
	
				// Reset padding
				me.paddingLeft = 0;
				me.paddingTop = 0;
				me.paddingRight = 0;
				me.paddingBottom = 0;
	
				// Reset minSize
				me.minSize = {
					width: 0,
					height: 0
				};
			},
			afterSetDimensions: noop,
	
			//
	
			beforeBuildLabels: noop,
			buildLabels: noop,
			afterBuildLabels: noop,
	
			//
	
			beforeFit: noop,
			fit: function() {
				var me = this,
					valueOrDefault = helpers.getValueOrDefault,
					opts = me.options,
					globalDefaults = Chart.defaults.global,
					display = opts.display,
					fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
					minSize = me.minSize;
	
				if (me.isHorizontal()) {
					minSize.width = me.maxWidth; // fill all the width
					minSize.height = display ? fontSize + (opts.padding * 2) : 0;
				} else {
					minSize.width = display ? fontSize + (opts.padding * 2) : 0;
					minSize.height = me.maxHeight; // fill all the height
				}
	
				me.width = minSize.width;
				me.height = minSize.height;
	
			},
			afterFit: noop,
	
			// Shared Methods
			isHorizontal: function() {
				var pos = this.options.position;
				return pos === 'top' || pos === 'bottom';
			},
	
			// Actually draw the title block on the canvas
			draw: function() {
				var me = this,
					ctx = me.ctx,
					valueOrDefault = helpers.getValueOrDefault,
					opts = me.options,
					globalDefaults = Chart.defaults.global;
	
				if (opts.display) {
					var fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
						fontStyle = valueOrDefault(opts.fontStyle, globalDefaults.defaultFontStyle),
						fontFamily = valueOrDefault(opts.fontFamily, globalDefaults.defaultFontFamily),
						titleFont = helpers.fontString(fontSize, fontStyle, fontFamily),
						rotation = 0,
						titleX,
						titleY,
						top = me.top,
						left = me.left,
						bottom = me.bottom,
						right = me.right,
						maxWidth;
	
					ctx.fillStyle = valueOrDefault(opts.fontColor, globalDefaults.defaultFontColor); // render in correct colour
					ctx.font = titleFont;
	
					// Horizontal
					if (me.isHorizontal()) {
						titleX = left + ((right - left) / 2); // midpoint of the width
						titleY = top + ((bottom - top) / 2); // midpoint of the height
						maxWidth = right - left;
					} else {
						titleX = opts.position === 'left' ? left + (fontSize / 2) : right - (fontSize / 2);
						titleY = top + ((bottom - top) / 2);
						maxWidth = bottom - top;
						rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
					}
	
					ctx.save();
					ctx.translate(titleX, titleY);
					ctx.rotate(rotation);
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					ctx.fillText(opts.text, 0, 0, maxWidth);
					ctx.restore();
				}
			}
		});
	
		function createNewTitleBlockAndAttach(chartInstance, titleOpts) {
			var title = new Chart.Title({
				ctx: chartInstance.chart.ctx,
				options: titleOpts,
				chart: chartInstance
			});
			chartInstance.titleBlock = title;
			Chart.layoutService.addBox(chartInstance, title);
		}
	
		// Register the title plugin
		Chart.plugins.register({
			beforeInit: function(chartInstance) {
				var titleOpts = chartInstance.options.title;
	
				if (titleOpts) {
					createNewTitleBlockAndAttach(chartInstance, titleOpts);
				}
			},
			beforeUpdate: function(chartInstance) {
				var titleOpts = chartInstance.options.title;
	
				if (titleOpts) {
					titleOpts = helpers.configMerge(Chart.defaults.global.title, titleOpts);
	
					if (chartInstance.titleBlock) {
						chartInstance.titleBlock.options = titleOpts;
					} else {
						createNewTitleBlockAndAttach(chartInstance, titleOpts);
					}
				} else {
					Chart.layoutService.removeBox(chartInstance, chartInstance.titleBlock);
					delete chartInstance.titleBlock;
				}
			}
		});
	};


/***/ },

/***/ 430:
/*!********************************************!*\
  !*** ./~/chart.js/src/core/core.legend.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
		var noop = helpers.noop;
	
		Chart.defaults.global.legend = {
	
			display: true,
			position: 'top',
			fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)
			reverse: false,
	
			// a callback that will handle
			onClick: function(e, legendItem) {
				var index = legendItem.datasetIndex;
				var ci = this.chart;
				var meta = ci.getDatasetMeta(index);
	
				// See controller.isDatasetVisible comment
				meta.hidden = meta.hidden === null? !ci.data.datasets[index].hidden : null;
	
				// We hid a dataset ... rerender the chart
				ci.update();
			},
	
			onHover: null,
	
			labels: {
				boxWidth: 40,
				padding: 10,
				// Generates labels shown in the legend
				// Valid properties to return:
				// text : text to display
				// fillStyle : fill of coloured box
				// strokeStyle: stroke of coloured box
				// hidden : if this legend item refers to a hidden item
				// lineCap : cap style for line
				// lineDash
				// lineDashOffset :
				// lineJoin :
				// lineWidth :
				generateLabels: function(chart) {
					var data = chart.data;
					return helpers.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
						return {
							text: dataset.label,
							fillStyle: (!helpers.isArray(dataset.backgroundColor) ? dataset.backgroundColor : dataset.backgroundColor[0]),
							hidden: !chart.isDatasetVisible(i),
							lineCap: dataset.borderCapStyle,
							lineDash: dataset.borderDash,
							lineDashOffset: dataset.borderDashOffset,
							lineJoin: dataset.borderJoinStyle,
							lineWidth: dataset.borderWidth,
							strokeStyle: dataset.borderColor,
							pointStyle: dataset.pointStyle,
	
							// Below is extra data used for toggling the datasets
							datasetIndex: i
						};
					}, this) : [];
				}
			}
		};
	
		/**
		 * Helper function to get the box width based on the usePointStyle option
		 * @param labelopts {Object} the label options on the legend
		 * @param fontSize {Number} the label font size
		 * @return {Number} width of the color box area
		 */
		function getBoxWidth(labelOpts, fontSize) {
			return labelOpts.usePointStyle ?
				fontSize * Math.SQRT2 :
				labelOpts.boxWidth;
		}
	
		Chart.Legend = Chart.Element.extend({
	
			initialize: function(config) {
				helpers.extend(this, config);
	
				// Contains hit boxes for each dataset (in dataset order)
				this.legendHitBoxes = [];
	
				// Are we in doughnut mode which has a different data type
				this.doughnutMode = false;
			},
	
			// These methods are ordered by lifecycle. Utilities then follow.
			// Any function defined here is inherited by all legend types.
			// Any function can be extended by the legend type
	
			beforeUpdate: noop,
			update: function(maxWidth, maxHeight, margins) {
				var me = this;
	
				// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
				me.beforeUpdate();
	
				// Absorb the master measurements
				me.maxWidth = maxWidth;
				me.maxHeight = maxHeight;
				me.margins = margins;
	
				// Dimensions
				me.beforeSetDimensions();
				me.setDimensions();
				me.afterSetDimensions();
				// Labels
				me.beforeBuildLabels();
				me.buildLabels();
				me.afterBuildLabels();
	
				// Fit
				me.beforeFit();
				me.fit();
				me.afterFit();
				//
				me.afterUpdate();
	
				return me.minSize;
			},
			afterUpdate: noop,
	
			//
	
			beforeSetDimensions: noop,
			setDimensions: function() {
				var me = this;
				// Set the unconstrained dimension before label rotation
				if (me.isHorizontal()) {
					// Reset position before calculating rotation
					me.width = me.maxWidth;
					me.left = 0;
					me.right = me.width;
				} else {
					me.height = me.maxHeight;
	
					// Reset position before calculating rotation
					me.top = 0;
					me.bottom = me.height;
				}
	
				// Reset padding
				me.paddingLeft = 0;
				me.paddingTop = 0;
				me.paddingRight = 0;
				me.paddingBottom = 0;
	
				// Reset minSize
				me.minSize = {
					width: 0,
					height: 0
				};
			},
			afterSetDimensions: noop,
	
			//
	
			beforeBuildLabels: noop,
			buildLabels: function() {
				var me = this;
				var labelOpts = me.options.labels;
				var legendItems = labelOpts.generateLabels.call(me, me.chart);
	
				if (labelOpts.filter) {
					legendItems = legendItems.filter(function(item) {
						return labelOpts.filter(item, me.chart.data);
					});
				}
	
				if (me.options.reverse) {
					legendItems.reverse();
				}
	
				me.legendItems = legendItems;
			},
			afterBuildLabels: noop,
	
			//
	
			beforeFit: noop,
			fit: function() {
				var me = this;
				var opts = me.options;
				var labelOpts = opts.labels;
				var display = opts.display;
	
				var ctx = me.ctx;
	
				var globalDefault = Chart.defaults.global,
					itemOrDefault = helpers.getValueOrDefault,
					fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
					fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
					fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
					labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);
	
				// Reset hit boxes
				var hitboxes = me.legendHitBoxes = [];
	
				var minSize = me.minSize;
				var isHorizontal = me.isHorizontal();
	
				if (isHorizontal) {
					minSize.width = me.maxWidth; // fill all the width
					minSize.height = display ? 10 : 0;
				} else {
					minSize.width = display ? 10 : 0;
					minSize.height = me.maxHeight; // fill all the height
				}
	
				// Increase sizes here
				if (display) {
					ctx.font = labelFont;
	
					if (isHorizontal) {
						// Labels
	
						// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
						var lineWidths = me.lineWidths = [0];
						var totalHeight = me.legendItems.length ? fontSize + (labelOpts.padding) : 0;
	
						ctx.textAlign = 'left';
						ctx.textBaseline = 'top';
	
						helpers.each(me.legendItems, function(legendItem, i) {
							var boxWidth = getBoxWidth(labelOpts, fontSize);
							var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
	
							if (lineWidths[lineWidths.length - 1] + width + labelOpts.padding >= me.width) {
								totalHeight += fontSize + (labelOpts.padding);
								lineWidths[lineWidths.length] = me.left;
							}
	
							// Store the hitbox width and height here. Final position will be updated in `draw`
							hitboxes[i] = {
								left: 0,
								top: 0,
								width: width,
								height: fontSize
							};
	
							lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
						});
	
						minSize.height += totalHeight;
	
					} else {
						var vPadding = labelOpts.padding;
						var columnWidths = me.columnWidths = [];
						var totalWidth = labelOpts.padding;
						var currentColWidth = 0;
						var currentColHeight = 0;
						var itemHeight = fontSize + vPadding;
	
						helpers.each(me.legendItems, function(legendItem, i) {
							var boxWidth = getBoxWidth(labelOpts, fontSize);
							var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
	
							// If too tall, go to new column
							if (currentColHeight + itemHeight > minSize.height) {
								totalWidth += currentColWidth + labelOpts.padding;
								columnWidths.push(currentColWidth); // previous column width
	
								currentColWidth = 0;
								currentColHeight = 0;
							}
	
							// Get max width
							currentColWidth = Math.max(currentColWidth, itemWidth);
							currentColHeight += itemHeight;
	
							// Store the hitbox width and height here. Final position will be updated in `draw`
							hitboxes[i] = {
								left: 0,
								top: 0,
								width: itemWidth,
								height: fontSize
							};
						});
	
						totalWidth += currentColWidth;
						columnWidths.push(currentColWidth);
						minSize.width += totalWidth;
					}
				}
	
				me.width = minSize.width;
				me.height = minSize.height;
			},
			afterFit: noop,
	
			// Shared Methods
			isHorizontal: function() {
				return this.options.position === 'top' || this.options.position === 'bottom';
			},
	
			// Actually draw the legend on the canvas
			draw: function() {
				var me = this;
				var opts = me.options;
				var labelOpts = opts.labels;
				var globalDefault = Chart.defaults.global,
					lineDefault = globalDefault.elements.line,
					legendWidth = me.width,
					lineWidths = me.lineWidths;
	
				if (opts.display) {
					var ctx = me.ctx,
						cursor,
						itemOrDefault = helpers.getValueOrDefault,
						fontColor = itemOrDefault(labelOpts.fontColor, globalDefault.defaultFontColor),
						fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
						fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
						fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
						labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);
	
					// Canvas setup
					ctx.textAlign = 'left';
					ctx.textBaseline = 'top';
					ctx.lineWidth = 0.5;
					ctx.strokeStyle = fontColor; // for strikethrough effect
					ctx.fillStyle = fontColor; // render in correct colour
					ctx.font = labelFont;
	
					var boxWidth = getBoxWidth(labelOpts, fontSize),
						hitboxes = me.legendHitBoxes;
	
					// current position
					var drawLegendBox = function(x, y, legendItem) {
						if (isNaN(boxWidth) || boxWidth <= 0) {
							return;
						}
	
						// Set the ctx for the box
						ctx.save();
	
						ctx.fillStyle = itemOrDefault(legendItem.fillStyle, globalDefault.defaultColor);
						ctx.lineCap = itemOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
						ctx.lineDashOffset = itemOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
						ctx.lineJoin = itemOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
						ctx.lineWidth = itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
						ctx.strokeStyle = itemOrDefault(legendItem.strokeStyle, globalDefault.defaultColor);
						var isLineWidthZero = (itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth) === 0);
	
						if (ctx.setLineDash) {
							// IE 9 and 10 do not support line dash
							ctx.setLineDash(itemOrDefault(legendItem.lineDash, lineDefault.borderDash));
						}
	
						if (opts.labels && opts.labels.usePointStyle) {
							// Recalculate x and y for drawPoint() because its expecting
							// x and y to be center of figure (instead of top left)
							var radius = fontSize * Math.SQRT2 / 2;
							var offSet = radius / Math.SQRT2;
							var centerX = x + offSet;
							var centerY = y + offSet;
	
							// Draw pointStyle as legend symbol
							Chart.canvasHelpers.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
						} else {
							// Draw box as legend symbol
							if (!isLineWidthZero) {
								ctx.strokeRect(x, y, boxWidth, fontSize);
							}
							ctx.fillRect(x, y, boxWidth, fontSize);
						}
	
						ctx.restore();
					};
					var fillText = function(x, y, legendItem, textWidth) {
						ctx.fillText(legendItem.text, boxWidth + (fontSize / 2) + x, y);
	
						if (legendItem.hidden) {
							// Strikethrough the text if hidden
							ctx.beginPath();
							ctx.lineWidth = 2;
							ctx.moveTo(boxWidth + (fontSize / 2) + x, y + (fontSize / 2));
							ctx.lineTo(boxWidth + (fontSize / 2) + x + textWidth, y + (fontSize / 2));
							ctx.stroke();
						}
					};
	
					// Horizontal
					var isHorizontal = me.isHorizontal();
					if (isHorizontal) {
						cursor = {
							x: me.left + ((legendWidth - lineWidths[0]) / 2),
							y: me.top + labelOpts.padding,
							line: 0
						};
					} else {
						cursor = {
							x: me.left + labelOpts.padding,
							y: me.top + labelOpts.padding,
							line: 0
						};
					}
	
					var itemHeight = fontSize + labelOpts.padding;
					helpers.each(me.legendItems, function(legendItem, i) {
						var textWidth = ctx.measureText(legendItem.text).width,
							width = boxWidth + (fontSize / 2) + textWidth,
							x = cursor.x,
							y = cursor.y;
	
						if (isHorizontal) {
							if (x + width >= legendWidth) {
								y = cursor.y += itemHeight;
								cursor.line++;
								x = cursor.x = me.left + ((legendWidth - lineWidths[cursor.line]) / 2);
							}
						} else if (y + itemHeight > me.bottom) {
							x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
							y = cursor.y = me.top + labelOpts.padding;
							cursor.line++;
						}
	
						drawLegendBox(x, y, legendItem);
	
						hitboxes[i].left = x;
						hitboxes[i].top = y;
	
						// Fill the actual label
						fillText(x, y, legendItem, textWidth);
	
						if (isHorizontal) {
							cursor.x += width + (labelOpts.padding);
						} else {
							cursor.y += itemHeight;
						}
	
					});
				}
			},
	
			/**
			 * Handle an event
			 * @private
			 * @param {IEvent} event - The event to handle
			 * @return {Boolean} true if a change occured
			 */
			handleEvent: function(e) {
				var me = this;
				var opts = me.options;
				var type = e.type === 'mouseup' ? 'click' : e.type;
				var changed = false;
	
				if (type === 'mousemove') {
					if (!opts.onHover) {
						return;
					}
				} else if (type === 'click') {
					if (!opts.onClick) {
						return;
					}
				} else {
					return;
				}
	
				// Chart event already has relative position in it
				var x = e.x,
					y = e.y;
	
				if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
					// See if we are touching one of the dataset boxes
					var lh = me.legendHitBoxes;
					for (var i = 0; i < lh.length; ++i) {
						var hitBox = lh[i];
	
						if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
							// Touching an element
							if (type === 'click') {
								// use e.native for backwards compatibility
								opts.onClick.call(me, e.native, me.legendItems[i]);
								changed = true;
								break;
							} else if (type === 'mousemove') {
								// use e.native for backwards compatibility
								opts.onHover.call(me, e.native, me.legendItems[i]);
								changed = true;
								break;
							}
						}
					}
				}
	
				return changed;
			}
		});
	
		function createNewLegendAndAttach(chartInstance, legendOpts) {
			var legend = new Chart.Legend({
				ctx: chartInstance.chart.ctx,
				options: legendOpts,
				chart: chartInstance
			});
			chartInstance.legend = legend;
			Chart.layoutService.addBox(chartInstance, legend);
		}
	
		// Register the legend plugin
		Chart.plugins.register({
			beforeInit: function(chartInstance) {
				var legendOpts = chartInstance.options.legend;
	
				if (legendOpts) {
					createNewLegendAndAttach(chartInstance, legendOpts);
				}
			},
			beforeUpdate: function(chartInstance) {
				var legendOpts = chartInstance.options.legend;
	
				if (legendOpts) {
					legendOpts = helpers.configMerge(Chart.defaults.global.legend, legendOpts);
	
					if (chartInstance.legend) {
						chartInstance.legend.options = legendOpts;
					} else {
						createNewLegendAndAttach(chartInstance, legendOpts);
					}
				} else {
					Chart.layoutService.removeBox(chartInstance, chartInstance.legend);
					delete chartInstance.legend;
				}
			},
			afterEvent: function(chartInstance, e) {
				var legend = chartInstance.legend;
				if (legend) {
					legend.handleEvent(e);
				}
			}
		});
	};


/***/ },

/***/ 431:
/*!*************************************************!*\
  !*** ./~/chart.js/src/core/core.interaction.js ***!
  \*************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
		var helpers = Chart.helpers;
	
		/**
		 * Helper function to get relative position for an event
		 * @param {Event|IEvent} event - The event to get the position for
		 * @param {Chart} chart - The chart
		 * @returns {Point} the event position
		 */
		function getRelativePosition(e, chart) {
			if (e.native) {
				return {
					x: e.x,
					y: e.y
				};
			}
	
			return helpers.getRelativePosition(e, chart);
		}
	
		/**
		 * Helper function to traverse all of the visible elements in the chart
		 * @param chart {chart} the chart
		 * @param handler {Function} the callback to execute for each visible item
		 */
		function parseVisibleItems(chart, handler) {
			var datasets = chart.data.datasets;
			var meta, i, j, ilen, jlen;
	
			for (i = 0, ilen = datasets.length; i < ilen; ++i) {
				if (!chart.isDatasetVisible(i)) {
					continue;
				}
	
				meta = chart.getDatasetMeta(i);
				for (j = 0, jlen = meta.data.length; j < jlen; ++j) {
					var element = meta.data[j];
					if (!element._view.skip) {
						handler(element);
					}
				}
			}
		}
	
		/**
		 * Helper function to get the items that intersect the event position
		 * @param items {ChartElement[]} elements to filter
		 * @param position {Point} the point to be nearest to
		 * @return {ChartElement[]} the nearest items
		 */
		function getIntersectItems(chart, position) {
			var elements = [];
	
			parseVisibleItems(chart, function(element) {
				if (element.inRange(position.x, position.y)) {
					elements.push(element);
				}
			});
	
			return elements;
		}
	
		/**
		 * Helper function to get the items nearest to the event position considering all visible items in teh chart
		 * @param chart {Chart} the chart to look at elements from
		 * @param position {Point} the point to be nearest to
		 * @param intersect {Boolean} if true, only consider items that intersect the position
		 * @param distanceMetric {Function} Optional function to provide the distance between
		 * @return {ChartElement[]} the nearest items
		 */
		function getNearestItems(chart, position, intersect, distanceMetric) {
			var minDistance = Number.POSITIVE_INFINITY;
			var nearestItems = [];
	
			if (!distanceMetric) {
				distanceMetric = helpers.distanceBetweenPoints;
			}
	
			parseVisibleItems(chart, function(element) {
				if (intersect && !element.inRange(position.x, position.y)) {
					return;
				}
	
				var center = element.getCenterPoint();
				var distance = distanceMetric(position, center);
	
				if (distance < minDistance) {
					nearestItems = [element];
					minDistance = distance;
				} else if (distance === minDistance) {
					// Can have multiple items at the same distance in which case we sort by size
					nearestItems.push(element);
				}
			});
	
			return nearestItems;
		}
	
		function indexMode(chart, e, options) {
			var position = getRelativePosition(e, chart.chart);
			var distanceMetric = function(pt1, pt2) {
				return Math.abs(pt1.x - pt2.x);
			};
			var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
			var elements = [];
	
			if (!items.length) {
				return [];
			}
	
			chart.data.datasets.forEach(function(dataset, datasetIndex) {
				if (chart.isDatasetVisible(datasetIndex)) {
					var meta = chart.getDatasetMeta(datasetIndex),
						element = meta.data[items[0]._index];
	
					// don't count items that are skipped (null data)
					if (element && !element._view.skip) {
						elements.push(element);
					}
				}
			});
	
			return elements;
		}
	
		/**
		 * @interface IInteractionOptions
		 */
		/**
		 * If true, only consider items that intersect the point
		 * @name IInterfaceOptions#boolean
		 * @type Boolean
		 */
	
		/**
		 * Contains interaction related functions
		 * @namespace Chart.Interaction
		 */
		Chart.Interaction = {
			// Helper function for different modes
			modes: {
				single: function(chart, e) {
					var position = getRelativePosition(e, chart.chart);
					var elements = [];
	
					parseVisibleItems(chart, function(element) {
						if (element.inRange(position.x, position.y)) {
							elements.push(element);
							return elements;
						}
					});
	
					return elements.slice(0, 1);
				},
	
				/**
				 * @function Chart.Interaction.modes.label
				 * @deprecated since version 2.4.0
				 */
				label: indexMode,
	
				/**
				 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
				 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
				 * @function Chart.Interaction.modes.index
				 * @since v2.4.0
				 * @param chart {chart} the chart we are returning items from
				 * @param e {Event} the event we are find things at
				 * @param options {IInteractionOptions} options to use during interaction
				 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
				 */
				index: indexMode,
	
				/**
				 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
				 * If the options.intersect is false, we find the nearest item and return the items in that dataset
				 * @function Chart.Interaction.modes.dataset
				 * @param chart {chart} the chart we are returning items from
				 * @param e {Event} the event we are find things at
				 * @param options {IInteractionOptions} options to use during interaction
				 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
				 */
				dataset: function(chart, e, options) {
					var position = getRelativePosition(e, chart.chart);
					var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false);
	
					if (items.length > 0) {
						items = chart.getDatasetMeta(items[0]._datasetIndex).data;
					}
	
					return items;
				},
	
				/**
				 * @function Chart.Interaction.modes.x-axis
				 * @deprecated since version 2.4.0. Use index mode and intersect == true
				 */
				'x-axis': function(chart, e) {
					return indexMode(chart, e, true);
				},
	
				/**
				 * Point mode returns all elements that hit test based on the event position
				 * of the event
				 * @function Chart.Interaction.modes.intersect
				 * @param chart {chart} the chart we are returning items from
				 * @param e {Event} the event we are find things at
				 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
				 */
				point: function(chart, e) {
					var position = getRelativePosition(e, chart.chart);
					return getIntersectItems(chart, position);
				},
	
				/**
				 * nearest mode returns the element closest to the point
				 * @function Chart.Interaction.modes.intersect
				 * @param chart {chart} the chart we are returning items from
				 * @param e {Event} the event we are find things at
				 * @param options {IInteractionOptions} options to use
				 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
				 */
				nearest: function(chart, e, options) {
					var position = getRelativePosition(e, chart.chart);
					var nearestItems = getNearestItems(chart, position, options.intersect);
	
					// We have multiple items at the same distance from the event. Now sort by smallest
					if (nearestItems.length > 1) {
						nearestItems.sort(function(a, b) {
							var sizeA = a.getArea();
							var sizeB = b.getArea();
							var ret = sizeA - sizeB;
	
							if (ret === 0) {
								// if equal sort by dataset index
								ret = a._datasetIndex - b._datasetIndex;
							}
	
							return ret;
						});
					}
	
					// Return only 1 item
					return nearestItems.slice(0, 1);
				},
	
				/**
				 * x mode returns the elements that hit-test at the current x coordinate
				 * @function Chart.Interaction.modes.x
				 * @param chart {chart} the chart we are returning items from
				 * @param e {Event} the event we are find things at
				 * @param options {IInteractionOptions} options to use
				 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
				 */
				x: function(chart, e, options) {
					var position = getRelativePosition(e, chart.chart);
					var items = [];
					var intersectsItem = false;
	
					parseVisibleItems(chart, function(element) {
						if (element.inXRange(position.x)) {
							items.push(element);
						}
	
						if (element.inRange(position.x, position.y)) {
							intersectsItem = true;
						}
					});
	
					// If we want to trigger on an intersect and we don't have any items
					// that intersect the position, return nothing
					if (options.intersect && !intersectsItem) {
						items = [];
					}
					return items;
				},
	
				/**
				 * y mode returns the elements that hit-test at the current y coordinate
				 * @function Chart.Interaction.modes.y
				 * @param chart {chart} the chart we are returning items from
				 * @param e {Event} the event we are find things at
				 * @param options {IInteractionOptions} options to use
				 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
				 */
				y: function(chart, e, options) {
					var position = getRelativePosition(e, chart.chart);
					var items = [];
					var intersectsItem = false;
	
					parseVisibleItems(chart, function(element) {
						if (element.inYRange(position.y)) {
							items.push(element);
						}
	
						if (element.inRange(position.x, position.y)) {
							intersectsItem = true;
						}
					});
	
					// If we want to trigger on an intersect and we don't have any items
					// that intersect the position, return nothing
					if (options.intersect && !intersectsItem) {
						items = [];
					}
					return items;
				}
			}
		};
	};


/***/ },

/***/ 432:
/*!*********************************************!*\
  !*** ./~/chart.js/src/core/core.tooltip.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		/**
	 	 * Helper method to merge the opacity into a color
	 	 */
		function mergeOpacity(colorString, opacity) {
			var color = helpers.color(colorString);
			return color.alpha(opacity * color.alpha()).rgbaString();
		}
	
		Chart.defaults.global.tooltips = {
			enabled: true,
			custom: null,
			mode: 'nearest',
			position: 'average',
			intersect: true,
			backgroundColor: 'rgba(0,0,0,0.8)',
			titleFontStyle: 'bold',
			titleSpacing: 2,
			titleMarginBottom: 6,
			titleFontColor: '#fff',
			titleAlign: 'left',
			bodySpacing: 2,
			bodyFontColor: '#fff',
			bodyAlign: 'left',
			footerFontStyle: 'bold',
			footerSpacing: 2,
			footerMarginTop: 6,
			footerFontColor: '#fff',
			footerAlign: 'left',
			yPadding: 6,
			xPadding: 6,
			caretSize: 5,
			cornerRadius: 6,
			multiKeyBackground: '#fff',
			displayColors: true,
			callbacks: {
				// Args are: (tooltipItems, data)
				beforeTitle: helpers.noop,
				title: function(tooltipItems, data) {
					// Pick first xLabel for now
					var title = '';
					var labels = data.labels;
					var labelCount = labels ? labels.length : 0;
	
					if (tooltipItems.length > 0) {
						var item = tooltipItems[0];
	
						if (item.xLabel) {
							title = item.xLabel;
						} else if (labelCount > 0 && item.index < labelCount) {
							title = labels[item.index];
						}
					}
	
					return title;
				},
				afterTitle: helpers.noop,
	
				// Args are: (tooltipItems, data)
				beforeBody: helpers.noop,
	
				// Args are: (tooltipItem, data)
				beforeLabel: helpers.noop,
				label: function(tooltipItem, data) {
					var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
					return datasetLabel + ': ' + tooltipItem.yLabel;
				},
				labelColor: function(tooltipItem, chartInstance) {
					var meta = chartInstance.getDatasetMeta(tooltipItem.datasetIndex);
					var activeElement = meta.data[tooltipItem.index];
					var view = activeElement._view;
					return {
						borderColor: view.borderColor,
						backgroundColor: view.backgroundColor
					};
				},
				afterLabel: helpers.noop,
	
				// Args are: (tooltipItems, data)
				afterBody: helpers.noop,
	
				// Args are: (tooltipItems, data)
				beforeFooter: helpers.noop,
				footer: helpers.noop,
				afterFooter: helpers.noop
			}
		};
	
		// Helper to push or concat based on if the 2nd parameter is an array or not
		function pushOrConcat(base, toPush) {
			if (toPush) {
				if (helpers.isArray(toPush)) {
					// base = base.concat(toPush);
					Array.prototype.push.apply(base, toPush);
				} else {
					base.push(toPush);
				}
			}
	
			return base;
		}
	
		// Private helper to create a tooltip item model
		// @param element : the chart element (point, arc, bar) to create the tooltip item for
		// @return : new tooltip item
		function createTooltipItem(element) {
			var xScale = element._xScale;
			var yScale = element._yScale || element._scale; // handle radar || polarArea charts
			var index = element._index,
				datasetIndex = element._datasetIndex;
	
			return {
				xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
				yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
				index: index,
				datasetIndex: datasetIndex,
				x: element._model.x,
				y: element._model.y
			};
		}
	
		/**
		 * Helper to get the reset model for the tooltip
		 * @param tooltipOpts {Object} the tooltip options
		 */
		function getBaseModel(tooltipOpts) {
			var globalDefaults = Chart.defaults.global;
			var getValueOrDefault = helpers.getValueOrDefault;
	
			return {
				// Positioning
				xPadding: tooltipOpts.xPadding,
				yPadding: tooltipOpts.yPadding,
				xAlign: tooltipOpts.xAlign,
				yAlign: tooltipOpts.yAlign,
	
				// Body
				bodyFontColor: tooltipOpts.bodyFontColor,
				_bodyFontFamily: getValueOrDefault(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
				_bodyFontStyle: getValueOrDefault(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
				_bodyAlign: tooltipOpts.bodyAlign,
				bodyFontSize: getValueOrDefault(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
				bodySpacing: tooltipOpts.bodySpacing,
	
				// Title
				titleFontColor: tooltipOpts.titleFontColor,
				_titleFontFamily: getValueOrDefault(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
				_titleFontStyle: getValueOrDefault(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
				titleFontSize: getValueOrDefault(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
				_titleAlign: tooltipOpts.titleAlign,
				titleSpacing: tooltipOpts.titleSpacing,
				titleMarginBottom: tooltipOpts.titleMarginBottom,
	
				// Footer
				footerFontColor: tooltipOpts.footerFontColor,
				_footerFontFamily: getValueOrDefault(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
				_footerFontStyle: getValueOrDefault(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
				footerFontSize: getValueOrDefault(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
				_footerAlign: tooltipOpts.footerAlign,
				footerSpacing: tooltipOpts.footerSpacing,
				footerMarginTop: tooltipOpts.footerMarginTop,
	
				// Appearance
				caretSize: tooltipOpts.caretSize,
				cornerRadius: tooltipOpts.cornerRadius,
				backgroundColor: tooltipOpts.backgroundColor,
				opacity: 0,
				legendColorBackground: tooltipOpts.multiKeyBackground,
				displayColors: tooltipOpts.displayColors
			};
		}
	
		/**
		 * Get the size of the tooltip
		 */
		function getTooltipSize(tooltip, model) {
			var ctx = tooltip._chart.ctx;
	
			var height = model.yPadding * 2; // Tooltip Padding
			var width = 0;
	
			// Count of all lines in the body
			var body = model.body;
			var combinedBodyLength = body.reduce(function(count, bodyItem) {
				return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
			}, 0);
			combinedBodyLength += model.beforeBody.length + model.afterBody.length;
	
			var titleLineCount = model.title.length;
			var footerLineCount = model.footer.length;
			var titleFontSize = model.titleFontSize,
				bodyFontSize = model.bodyFontSize,
				footerFontSize = model.footerFontSize;
	
			height += titleLineCount * titleFontSize; // Title Lines
			height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
			height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
			height += combinedBodyLength * bodyFontSize; // Body Lines
			height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
			height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
			height += footerLineCount * (footerFontSize); // Footer Lines
			height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing
	
			// Title width
			var widthPadding = 0;
			var maxLineWidth = function(line) {
				width = Math.max(width, ctx.measureText(line).width + widthPadding);
			};
	
			ctx.font = helpers.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
			helpers.each(model.title, maxLineWidth);
	
			// Body width
			ctx.font = helpers.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
			helpers.each(model.beforeBody.concat(model.afterBody), maxLineWidth);
	
			// Body lines may include some extra width due to the color box
			widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
			helpers.each(body, function(bodyItem) {
				helpers.each(bodyItem.before, maxLineWidth);
				helpers.each(bodyItem.lines, maxLineWidth);
				helpers.each(bodyItem.after, maxLineWidth);
			});
	
			// Reset back to 0
			widthPadding = 0;
	
			// Footer width
			ctx.font = helpers.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
			helpers.each(model.footer, maxLineWidth);
	
			// Add padding
			width += 2 * model.xPadding;
	
			return {
				width: width,
				height: height
			};
		}
	
		/**
		 * Helper to get the alignment of a tooltip given the size
		 */
		function determineAlignment(tooltip, size) {
			var model = tooltip._model;
			var chart = tooltip._chart;
			var chartArea = tooltip._chartInstance.chartArea;
			var xAlign = 'center';
			var yAlign = 'center';
	
			if (model.y < size.height) {
				yAlign = 'top';
			} else if (model.y > (chart.height - size.height)) {
				yAlign = 'bottom';
			}
	
			var lf, rf; // functions to determine left, right alignment
			var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
			var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
			var midX = (chartArea.left + chartArea.right) / 2;
			var midY = (chartArea.top + chartArea.bottom) / 2;
	
			if (yAlign === 'center') {
				lf = function(x) {
					return x <= midX;
				};
				rf = function(x) {
					return x > midX;
				};
			} else {
				lf = function(x) {
					return x <= (size.width / 2);
				};
				rf = function(x) {
					return x >= (chart.width - (size.width / 2));
				};
			}
	
			olf = function(x) {
				return x + size.width > chart.width;
			};
			orf = function(x) {
				return x - size.width < 0;
			};
			yf = function(y) {
				return y <= midY ? 'top' : 'bottom';
			};
	
			if (lf(model.x)) {
				xAlign = 'left';
	
				// Is tooltip too wide and goes over the right side of the chart.?
				if (olf(model.x)) {
					xAlign = 'center';
					yAlign = yf(model.y);
				}
			} else if (rf(model.x)) {
				xAlign = 'right';
	
				// Is tooltip too wide and goes outside left edge of canvas?
				if (orf(model.x)) {
					xAlign = 'center';
					yAlign = yf(model.y);
				}
			}
	
			var opts = tooltip._options;
			return {
				xAlign: opts.xAlign ? opts.xAlign : xAlign,
				yAlign: opts.yAlign ? opts.yAlign : yAlign
			};
		}
	
		/**
		 * @Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
		 */
		function getBackgroundPoint(vm, size, alignment) {
			// Background Position
			var x = vm.x;
			var y = vm.y;
	
			var caretSize = vm.caretSize,
				caretPadding = vm.caretPadding,
				cornerRadius = vm.cornerRadius,
				xAlign = alignment.xAlign,
				yAlign = alignment.yAlign,
				paddingAndSize = caretSize + caretPadding,
				radiusAndPadding = cornerRadius + caretPadding;
	
			if (xAlign === 'right') {
				x -= size.width;
			} else if (xAlign === 'center') {
				x -= (size.width / 2);
			}
	
			if (yAlign === 'top') {
				y += paddingAndSize;
			} else if (yAlign === 'bottom') {
				y -= size.height + paddingAndSize;
			} else {
				y -= (size.height / 2);
			}
	
			if (yAlign === 'center') {
				if (xAlign === 'left') {
					x += paddingAndSize;
				} else if (xAlign === 'right') {
					x -= paddingAndSize;
				}
			} else if (xAlign === 'left') {
				x -= radiusAndPadding;
			} else if (xAlign === 'right') {
				x += radiusAndPadding;
			}
	
			return {
				x: x,
				y: y
			};
		}
	
		Chart.Tooltip = Chart.Element.extend({
			initialize: function() {
				this._model = getBaseModel(this._options);
			},
	
			// Get the title
			// Args are: (tooltipItem, data)
			getTitle: function() {
				var me = this;
				var opts = me._options;
				var callbacks = opts.callbacks;
	
				var beforeTitle = callbacks.beforeTitle.apply(me, arguments),
					title = callbacks.title.apply(me, arguments),
					afterTitle = callbacks.afterTitle.apply(me, arguments);
	
				var lines = [];
				lines = pushOrConcat(lines, beforeTitle);
				lines = pushOrConcat(lines, title);
				lines = pushOrConcat(lines, afterTitle);
	
				return lines;
			},
	
			// Args are: (tooltipItem, data)
			getBeforeBody: function() {
				var lines = this._options.callbacks.beforeBody.apply(this, arguments);
				return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
			},
	
			// Args are: (tooltipItem, data)
			getBody: function(tooltipItems, data) {
				var me = this;
				var callbacks = me._options.callbacks;
				var bodyItems = [];
	
				helpers.each(tooltipItems, function(tooltipItem) {
					var bodyItem = {
						before: [],
						lines: [],
						after: []
					};
					pushOrConcat(bodyItem.before, callbacks.beforeLabel.call(me, tooltipItem, data));
					pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
					pushOrConcat(bodyItem.after, callbacks.afterLabel.call(me, tooltipItem, data));
	
					bodyItems.push(bodyItem);
				});
	
				return bodyItems;
			},
	
			// Args are: (tooltipItem, data)
			getAfterBody: function() {
				var lines = this._options.callbacks.afterBody.apply(this, arguments);
				return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
			},
	
			// Get the footer and beforeFooter and afterFooter lines
			// Args are: (tooltipItem, data)
			getFooter: function() {
				var me = this;
				var callbacks = me._options.callbacks;
	
				var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
				var footer = callbacks.footer.apply(me, arguments);
				var afterFooter = callbacks.afterFooter.apply(me, arguments);
	
				var lines = [];
				lines = pushOrConcat(lines, beforeFooter);
				lines = pushOrConcat(lines, footer);
				lines = pushOrConcat(lines, afterFooter);
	
				return lines;
			},
	
			update: function(changed) {
				var me = this;
				var opts = me._options;
	
				// Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
				// that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
				// which breaks any animations.
				var existingModel = me._model;
				var model = me._model = getBaseModel(opts);
				var active = me._active;
	
				var data = me._data;
				var chartInstance = me._chartInstance;
	
				// In the case where active.length === 0 we need to keep these at existing values for good animations
				var alignment = {
					xAlign: existingModel.xAlign,
					yAlign: existingModel.yAlign
				};
				var backgroundPoint = {
					x: existingModel.x,
					y: existingModel.y
				};
				var tooltipSize = {
					width: existingModel.width,
					height: existingModel.height
				};
				var tooltipPosition = {
					x: existingModel.caretX,
					y: existingModel.caretY
				};
	
				var i, len;
	
				if (active.length) {
					model.opacity = 1;
	
					var labelColors = [];
					tooltipPosition = Chart.Tooltip.positioners[opts.position](active, me._eventPosition);
	
					var tooltipItems = [];
					for (i = 0, len = active.length; i < len; ++i) {
						tooltipItems.push(createTooltipItem(active[i]));
					}
	
					// If the user provided a filter function, use it to modify the tooltip items
					if (opts.filter) {
						tooltipItems = tooltipItems.filter(function(a) {
							return opts.filter(a, data);
						});
					}
	
					// If the user provided a sorting function, use it to modify the tooltip items
					if (opts.itemSort) {
						tooltipItems = tooltipItems.sort(function(a, b) {
							return opts.itemSort(a, b, data);
						});
					}
	
					// Determine colors for boxes
					helpers.each(tooltipItems, function(tooltipItem) {
						labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, chartInstance));
					});
	
					// Build the Text Lines
					model.title = me.getTitle(tooltipItems, data);
					model.beforeBody = me.getBeforeBody(tooltipItems, data);
					model.body = me.getBody(tooltipItems, data);
					model.afterBody = me.getAfterBody(tooltipItems, data);
					model.footer = me.getFooter(tooltipItems, data);
	
					// Initial positioning and colors
					model.x = Math.round(tooltipPosition.x);
					model.y = Math.round(tooltipPosition.y);
					model.caretPadding = helpers.getValueOrDefault(tooltipPosition.padding, 2);
					model.labelColors = labelColors;
	
					// data points
					model.dataPoints = tooltipItems;
	
					// We need to determine alignment of the tooltip
					tooltipSize = getTooltipSize(this, model);
					alignment = determineAlignment(this, tooltipSize);
					// Final Size and Position
					backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment);
				} else {
					model.opacity = 0;
				}
	
				model.xAlign = alignment.xAlign;
				model.yAlign = alignment.yAlign;
				model.x = backgroundPoint.x;
				model.y = backgroundPoint.y;
				model.width = tooltipSize.width;
				model.height = tooltipSize.height;
	
				// Point where the caret on the tooltip points to
				model.caretX = tooltipPosition.x;
				model.caretY = tooltipPosition.y;
	
				me._model = model;
	
				if (changed && opts.custom) {
					opts.custom.call(me, model);
				}
	
				return me;
			},
			drawCaret: function(tooltipPoint, size, opacity) {
				var vm = this._view;
				var ctx = this._chart.ctx;
				var x1, x2, x3;
				var y1, y2, y3;
				var caretSize = vm.caretSize;
				var cornerRadius = vm.cornerRadius;
				var xAlign = vm.xAlign,
					yAlign = vm.yAlign;
				var ptX = tooltipPoint.x,
					ptY = tooltipPoint.y;
				var width = size.width,
					height = size.height;
	
				if (yAlign === 'center') {
					// Left or right side
					if (xAlign === 'left') {
						x1 = ptX;
						x2 = x1 - caretSize;
						x3 = x1;
					} else {
						x1 = ptX + width;
						x2 = x1 + caretSize;
						x3 = x1;
					}
	
					y2 = ptY + (height / 2);
					y1 = y2 - caretSize;
					y3 = y2 + caretSize;
				} else {
					if (xAlign === 'left') {
						x1 = ptX + cornerRadius;
						x2 = x1 + caretSize;
						x3 = x2 + caretSize;
					} else if (xAlign === 'right') {
						x1 = ptX + width - cornerRadius;
						x2 = x1 - caretSize;
						x3 = x2 - caretSize;
					} else {
						x2 = ptX + (width / 2);
						x1 = x2 - caretSize;
						x3 = x2 + caretSize;
					}
	
					if (yAlign === 'top') {
						y1 = ptY;
						y2 = y1 - caretSize;
						y3 = y1;
					} else {
						y1 = ptY + height;
						y2 = y1 + caretSize;
						y3 = y1;
					}
				}
	
				ctx.fillStyle = mergeOpacity(vm.backgroundColor, opacity);
				ctx.beginPath();
				ctx.moveTo(x1, y1);
				ctx.lineTo(x2, y2);
				ctx.lineTo(x3, y3);
				ctx.closePath();
				ctx.fill();
			},
			drawTitle: function(pt, vm, ctx, opacity) {
				var title = vm.title;
	
				if (title.length) {
					ctx.textAlign = vm._titleAlign;
					ctx.textBaseline = 'top';
	
					var titleFontSize = vm.titleFontSize,
						titleSpacing = vm.titleSpacing;
	
					ctx.fillStyle = mergeOpacity(vm.titleFontColor, opacity);
					ctx.font = helpers.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);
	
					var i, len;
					for (i = 0, len = title.length; i < len; ++i) {
						ctx.fillText(title[i], pt.x, pt.y);
						pt.y += titleFontSize + titleSpacing; // Line Height and spacing
	
						if (i + 1 === title.length) {
							pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
						}
					}
				}
			},
			drawBody: function(pt, vm, ctx, opacity) {
				var bodyFontSize = vm.bodyFontSize;
				var bodySpacing = vm.bodySpacing;
				var body = vm.body;
	
				ctx.textAlign = vm._bodyAlign;
				ctx.textBaseline = 'top';
	
				var textColor = mergeOpacity(vm.bodyFontColor, opacity);
				ctx.fillStyle = textColor;
				ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
	
				// Before Body
				var xLinePadding = 0;
				var fillLineOfText = function(line) {
					ctx.fillText(line, pt.x + xLinePadding, pt.y);
					pt.y += bodyFontSize + bodySpacing;
				};
	
				// Before body lines
				helpers.each(vm.beforeBody, fillLineOfText);
	
				var drawColorBoxes = vm.displayColors;
				xLinePadding = drawColorBoxes ? (bodyFontSize + 2) : 0;
	
				// Draw body lines now
				helpers.each(body, function(bodyItem, i) {
					helpers.each(bodyItem.before, fillLineOfText);
	
					helpers.each(bodyItem.lines, function(line) {
						// Draw Legend-like boxes if needed
						if (drawColorBoxes) {
							// Fill a white rect so that colours merge nicely if the opacity is < 1
							ctx.fillStyle = mergeOpacity(vm.legendColorBackground, opacity);
							ctx.fillRect(pt.x, pt.y, bodyFontSize, bodyFontSize);
	
							// Border
							ctx.strokeStyle = mergeOpacity(vm.labelColors[i].borderColor, opacity);
							ctx.strokeRect(pt.x, pt.y, bodyFontSize, bodyFontSize);
	
							// Inner square
							ctx.fillStyle = mergeOpacity(vm.labelColors[i].backgroundColor, opacity);
							ctx.fillRect(pt.x + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
	
							ctx.fillStyle = textColor;
						}
	
						fillLineOfText(line);
					});
	
					helpers.each(bodyItem.after, fillLineOfText);
				});
	
				// Reset back to 0 for after body
				xLinePadding = 0;
	
				// After body lines
				helpers.each(vm.afterBody, fillLineOfText);
				pt.y -= bodySpacing; // Remove last body spacing
			},
			drawFooter: function(pt, vm, ctx, opacity) {
				var footer = vm.footer;
	
				if (footer.length) {
					pt.y += vm.footerMarginTop;
	
					ctx.textAlign = vm._footerAlign;
					ctx.textBaseline = 'top';
	
					ctx.fillStyle = mergeOpacity(vm.footerFontColor, opacity);
					ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);
	
					helpers.each(footer, function(line) {
						ctx.fillText(line, pt.x, pt.y);
						pt.y += vm.footerFontSize + vm.footerSpacing;
					});
				}
			},
			drawBackground: function(pt, vm, ctx, tooltipSize, opacity) {
				ctx.fillStyle = mergeOpacity(vm.backgroundColor, opacity);
				helpers.drawRoundedRectangle(ctx, pt.x, pt.y, tooltipSize.width, tooltipSize.height, vm.cornerRadius);
				ctx.fill();
			},
			draw: function() {
				var ctx = this._chart.ctx;
				var vm = this._view;
	
				if (vm.opacity === 0) {
					return;
				}
	
				var tooltipSize = {
					width: vm.width,
					height: vm.height
				};
				var pt = {
					x: vm.x,
					y: vm.y
				};
	
				// IE11/Edge does not like very small opacities, so snap to 0
				var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;
	
				if (this._options.enabled) {
					// Draw Background
					this.drawBackground(pt, vm, ctx, tooltipSize, opacity);
	
					// Draw Caret
					this.drawCaret(pt, tooltipSize, opacity);
	
					// Draw Title, Body, and Footer
					pt.x += vm.xPadding;
					pt.y += vm.yPadding;
	
					// Titles
					this.drawTitle(pt, vm, ctx, opacity);
	
					// Body
					this.drawBody(pt, vm, ctx, opacity);
	
					// Footer
					this.drawFooter(pt, vm, ctx, opacity);
				}
			},
	
			/**
			 * Handle an event
			 * @private
			 * @param {IEvent} event - The event to handle
			 * @returns {Boolean} true if the tooltip changed
			 */
			handleEvent: function(e) {
				var me = this;
				var options = me._options;
				var changed = false;
	
				me._lastActive = me._lastActive || [];
	
				// Find Active Elements for tooltips
				if (e.type === 'mouseout') {
					me._active = [];
				} else {
					me._active = me._chartInstance.getElementsAtEventForMode(e, options.mode, options);
				}
	
				// Remember Last Actives
				changed = !helpers.arrayEquals(me._active, me._lastActive);
				me._lastActive = me._active;
	
				if (options.enabled || options.custom) {
					me._eventPosition = {
						x: e.x,
						y: e.y
					};
	
					var model = me._model;
					me.update(true);
					me.pivot();
	
					// See if our tooltip position changed
					changed |= (model.x !== me._model.x) || (model.y !== me._model.y);
				}
	
				return changed;
			}
		});
	
		/**
		 * @namespace Chart.Tooltip.positioners
		 */
		Chart.Tooltip.positioners = {
			/**
			 * Average mode places the tooltip at the average position of the elements shown
			 * @function Chart.Tooltip.positioners.average
			 * @param elements {ChartElement[]} the elements being displayed in the tooltip
			 * @returns {Point} tooltip position
			 */
			average: function(elements) {
				if (!elements.length) {
					return false;
				}
	
				var i, len;
				var x = 0;
				var y = 0;
				var count = 0;
	
				for (i = 0, len = elements.length; i < len; ++i) {
					var el = elements[i];
					if (el && el.hasValue()) {
						var pos = el.tooltipPosition();
						x += pos.x;
						y += pos.y;
						++count;
					}
				}
	
				return {
					x: Math.round(x / count),
					y: Math.round(y / count)
				};
			},
	
			/**
			 * Gets the tooltip position nearest of the item nearest to the event position
			 * @function Chart.Tooltip.positioners.nearest
			 * @param elements {Chart.Element[]} the tooltip elements
			 * @param eventPosition {Point} the position of the event in canvas coordinates
			 * @returns {Point} the tooltip position
			 */
			nearest: function(elements, eventPosition) {
				var x = eventPosition.x;
				var y = eventPosition.y;
	
				var nearestElement;
				var minDistance = Number.POSITIVE_INFINITY;
				var i, len;
				for (i = 0, len = elements.length; i < len; ++i) {
					var el = elements[i];
					if (el && el.hasValue()) {
						var center = el.getCenterPoint();
						var d = helpers.distanceBetweenPoints(eventPosition, center);
	
						if (d < minDistance) {
							minDistance = d;
							nearestElement = el;
						}
					}
				}
	
				if (nearestElement) {
					var tp = nearestElement.tooltipPosition();
					x = tp.x;
					y = tp.y;
				}
	
				return {
					x: x,
					y: y
				};
			}
		};
	};


/***/ },

/***/ 433:
/*!************************************************!*\
  !*** ./~/chart.js/src/elements/element.arc.js ***!
  \************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers,
			globalOpts = Chart.defaults.global;
	
		globalOpts.elements.arc = {
			backgroundColor: globalOpts.defaultColor,
			borderColor: '#fff',
			borderWidth: 2
		};
	
		Chart.elements.Arc = Chart.Element.extend({
			inLabelRange: function(mouseX) {
				var vm = this._view;
	
				if (vm) {
					return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
				}
				return false;
			},
			inRange: function(chartX, chartY) {
				var vm = this._view;
	
				if (vm) {
					var pointRelativePosition = helpers.getAngleFromPoint(vm, {
							x: chartX,
							y: chartY
						}),
						angle = pointRelativePosition.angle,
						distance = pointRelativePosition.distance;
	
					// Sanitise angle range
					var startAngle = vm.startAngle;
					var endAngle = vm.endAngle;
					while (endAngle < startAngle) {
						endAngle += 2.0 * Math.PI;
					}
					while (angle > endAngle) {
						angle -= 2.0 * Math.PI;
					}
					while (angle < startAngle) {
						angle += 2.0 * Math.PI;
					}
	
					// Check if within the range of the open/close angle
					var betweenAngles = (angle >= startAngle && angle <= endAngle),
						withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);
	
					return (betweenAngles && withinRadius);
				}
				return false;
			},
			getCenterPoint: function() {
				var vm = this._view;
				var halfAngle = (vm.startAngle + vm.endAngle) / 2;
				var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
				return {
					x: vm.x + Math.cos(halfAngle) * halfRadius,
					y: vm.y + Math.sin(halfAngle) * halfRadius
				};
			},
			getArea: function() {
				var vm = this._view;
				return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
			},
			tooltipPosition: function() {
				var vm = this._view;
	
				var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2),
					rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
				return {
					x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
					y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
				};
			},
			draw: function() {
	
				var ctx = this._chart.ctx,
					vm = this._view,
					sA = vm.startAngle,
					eA = vm.endAngle;
	
				ctx.beginPath();
	
				ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
				ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);
	
				ctx.closePath();
				ctx.strokeStyle = vm.borderColor;
				ctx.lineWidth = vm.borderWidth;
	
				ctx.fillStyle = vm.backgroundColor;
	
				ctx.fill();
				ctx.lineJoin = 'bevel';
	
				if (vm.borderWidth) {
					ctx.stroke();
				}
			}
		});
	};


/***/ },

/***/ 434:
/*!*************************************************!*\
  !*** ./~/chart.js/src/elements/element.line.js ***!
  \*************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
		var globalDefaults = Chart.defaults.global;
	
		Chart.defaults.global.elements.line = {
			tension: 0.4,
			backgroundColor: globalDefaults.defaultColor,
			borderWidth: 3,
			borderColor: globalDefaults.defaultColor,
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			capBezierPoints: true,
			fill: true, // do we fill in the area between the line and its base axis
		};
	
		Chart.elements.Line = Chart.Element.extend({
			draw: function() {
				var me = this;
				var vm = me._view;
				var spanGaps = vm.spanGaps;
				var fillPoint = vm.scaleZero;
				var loop = me._loop;
	
				// Handle different fill modes for cartesian lines
				if (!loop) {
					if (vm.fill === 'top') {
						fillPoint = vm.scaleTop;
					} else if (vm.fill === 'bottom') {
						fillPoint = vm.scaleBottom;
					}
				}
	
				var ctx = me._chart.ctx;
				ctx.save();
	
				// Helper function to draw a line to a point
				function lineToPoint(previousPoint, point) {
					var pointVM = point._view;
					if (point._view.steppedLine === true) {
						ctx.lineTo(pointVM.x, previousPoint._view.y);
						ctx.lineTo(pointVM.x, pointVM.y);
					} else if (point._view.tension === 0) {
						ctx.lineTo(pointVM.x, pointVM.y);
					} else {
						ctx.bezierCurveTo(
							previousPoint._view.controlPointNextX,
							previousPoint._view.controlPointNextY,
							pointVM.controlPointPreviousX,
							pointVM.controlPointPreviousY,
							pointVM.x,
							pointVM.y
						);
					}
				}
	
				var points = me._children.slice(); // clone array
				var lastDrawnIndex = -1;
	
				// If we are looping, adding the first point again
				if (loop && points.length) {
					points.push(points[0]);
				}
	
				var index, current, previous, currentVM;
	
				// Fill Line
				if (points.length && vm.fill) {
					ctx.beginPath();
	
					for (index = 0; index < points.length; ++index) {
						current = points[index];
						previous = helpers.previousItem(points, index);
						currentVM = current._view;
	
						// First point moves to it's starting position no matter what
						if (index === 0) {
							if (loop) {
								ctx.moveTo(fillPoint.x, fillPoint.y);
							} else {
								ctx.moveTo(currentVM.x, fillPoint);
							}
	
							if (!currentVM.skip) {
								lastDrawnIndex = index;
								ctx.lineTo(currentVM.x, currentVM.y);
							}
						} else {
							previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];
	
							if (currentVM.skip) {
								// Only do this if this is the first point that is skipped
								if (!spanGaps && lastDrawnIndex === (index - 1)) {
									if (loop) {
										ctx.lineTo(fillPoint.x, fillPoint.y);
									} else {
										ctx.lineTo(previous._view.x, fillPoint);
									}
								}
							} else {
								if (lastDrawnIndex !== (index - 1)) {
									// There was a gap and this is the first point after the gap. If we've never drawn a point, this is a special case.
									// If the first data point is NaN, then there is no real gap to skip
									if (spanGaps && lastDrawnIndex !== -1) {
										// We are spanning the gap, so simple draw a line to this point
										lineToPoint(previous, current);
									} else if (loop) {
										ctx.lineTo(currentVM.x, currentVM.y);
									} else {
										ctx.lineTo(currentVM.x, fillPoint);
										ctx.lineTo(currentVM.x, currentVM.y);
									}
								} else {
									// Line to next point
									lineToPoint(previous, current);
								}
								lastDrawnIndex = index;
							}
						}
					}
	
					if (!loop && lastDrawnIndex !== -1) {
						ctx.lineTo(points[lastDrawnIndex]._view.x, fillPoint);
					}
	
					ctx.fillStyle = vm.backgroundColor || globalDefaults.defaultColor;
					ctx.closePath();
					ctx.fill();
				}
	
				// Stroke Line Options
				var globalOptionLineElements = globalDefaults.elements.line;
				ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;
	
				// IE 9 and 10 do not support line dash
				if (ctx.setLineDash) {
					ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
				}
	
				ctx.lineDashOffset = vm.borderDashOffset || globalOptionLineElements.borderDashOffset;
				ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
				ctx.lineWidth = vm.borderWidth || globalOptionLineElements.borderWidth;
				ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;
	
				// Stroke Line
				ctx.beginPath();
				lastDrawnIndex = -1;
	
				for (index = 0; index < points.length; ++index) {
					current = points[index];
					previous = helpers.previousItem(points, index);
					currentVM = current._view;
	
					// First point moves to it's starting position no matter what
					if (index === 0) {
						if (!currentVM.skip) {
							ctx.moveTo(currentVM.x, currentVM.y);
							lastDrawnIndex = index;
						}
					} else {
						previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];
	
						if (!currentVM.skip) {
							if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
								// There was a gap and this is the first point after the gap
								ctx.moveTo(currentVM.x, currentVM.y);
							} else {
								// Line to next point
								lineToPoint(previous, current);
							}
							lastDrawnIndex = index;
						}
					}
				}
	
				ctx.stroke();
				ctx.restore();
			}
		});
	};


/***/ },

/***/ 435:
/*!**************************************************!*\
  !*** ./~/chart.js/src/elements/element.point.js ***!
  \**************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers,
			globalOpts = Chart.defaults.global,
			defaultColor = globalOpts.defaultColor;
	
		globalOpts.elements.point = {
			radius: 3,
			pointStyle: 'circle',
			backgroundColor: defaultColor,
			borderWidth: 1,
			borderColor: defaultColor,
			// Hover
			hitRadius: 1,
			hoverRadius: 4,
			hoverBorderWidth: 1
		};
	
		function xRange(mouseX) {
			var vm = this._view;
			return vm ? (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
		}
	
		function yRange(mouseY) {
			var vm = this._view;
			return vm ? (Math.pow(mouseY - vm.y, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
		}
	
		Chart.elements.Point = Chart.Element.extend({
			inRange: function(mouseX, mouseY) {
				var vm = this._view;
				return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
			},
	
			inLabelRange: xRange,
			inXRange: xRange,
			inYRange: yRange,
	
			getCenterPoint: function() {
				var vm = this._view;
				return {
					x: vm.x,
					y: vm.y
				};
			},
			getArea: function() {
				return Math.PI * Math.pow(this._view.radius, 2);
			},
			tooltipPosition: function() {
				var vm = this._view;
				return {
					x: vm.x,
					y: vm.y,
					padding: vm.radius + vm.borderWidth
				};
			},
			draw: function(chartArea) {
				var vm = this._view;
				var model = this._model;
				var ctx = this._chart.ctx;
				var pointStyle = vm.pointStyle;
				var radius = vm.radius;
				var x = vm.x;
				var y = vm.y;
				var color = Chart.helpers.color;
				var errMargin = 1.01; // 1.01 is margin for Accumulated error. (Especially Edge, IE.)
				var ratio = 0;
	
				if (vm.skip) {
					return;
				}
	
				ctx.strokeStyle = vm.borderColor || defaultColor;
				ctx.lineWidth = helpers.getValueOrDefault(vm.borderWidth, globalOpts.elements.point.borderWidth);
				ctx.fillStyle = vm.backgroundColor || defaultColor;
	
				// Cliping for Points.
				// going out from inner charArea?
				if ((chartArea !== undefined) && ((model.x < chartArea.left) || (chartArea.right*errMargin < model.x) || (model.y < chartArea.top) || (chartArea.bottom*errMargin < model.y))) {
					// Point fade out
					if (model.x < chartArea.left) {
						ratio = (x - model.x) / (chartArea.left - model.x);
					} else if (chartArea.right*errMargin < model.x) {
						ratio = (model.x - x) / (model.x - chartArea.right);
					} else if (model.y < chartArea.top) {
						ratio = (y - model.y) / (chartArea.top - model.y);
					} else if (chartArea.bottom*errMargin < model.y) {
						ratio = (model.y - y) / (model.y - chartArea.bottom);
					}
					ratio = Math.round(ratio*100) / 100;
					ctx.strokeStyle = color(ctx.strokeStyle).alpha(ratio).rgbString();
					ctx.fillStyle = color(ctx.fillStyle).alpha(ratio).rgbString();
				}
	
				Chart.canvasHelpers.drawPoint(ctx, pointStyle, radius, x, y);
			}
		});
	};


/***/ },

/***/ 436:
/*!******************************************************!*\
  !*** ./~/chart.js/src/elements/element.rectangle.js ***!
  \******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var globalOpts = Chart.defaults.global;
	
		globalOpts.elements.rectangle = {
			backgroundColor: globalOpts.defaultColor,
			borderWidth: 0,
			borderColor: globalOpts.defaultColor,
			borderSkipped: 'bottom'
		};
	
		function isVertical(bar) {
			return bar._view.width !== undefined;
		}
	
		/**
		 * Helper function to get the bounds of the bar regardless of the orientation
		 * @private
		 * @param bar {Chart.Element.Rectangle} the bar
		 * @return {Bounds} bounds of the bar
		 */
		function getBarBounds(bar) {
			var vm = bar._view;
			var x1, x2, y1, y2;
	
			if (isVertical(bar)) {
				// vertical
				var halfWidth = vm.width / 2;
				x1 = vm.x - halfWidth;
				x2 = vm.x + halfWidth;
				y1 = Math.min(vm.y, vm.base);
				y2 = Math.max(vm.y, vm.base);
			} else {
				// horizontal bar
				var halfHeight = vm.height / 2;
				x1 = Math.min(vm.x, vm.base);
				x2 = Math.max(vm.x, vm.base);
				y1 = vm.y - halfHeight;
				y2 = vm.y + halfHeight;
			}
	
			return {
				left: x1,
				top: y1,
				right: x2,
				bottom: y2
			};
		}
	
		Chart.elements.Rectangle = Chart.Element.extend({
			draw: function() {
				var ctx = this._chart.ctx;
				var vm = this._view;
				var left, right, top, bottom, signX, signY, borderSkipped;
				var borderWidth = vm.borderWidth;
	
				if (!vm.horizontal) {
					// bar
					left = vm.x - vm.width / 2;
					right = vm.x + vm.width / 2;
					top = vm.y;
					bottom = vm.base;
					signX = 1;
					signY = bottom > top? 1: -1;
					borderSkipped = vm.borderSkipped || 'bottom';
				} else {
					// horizontal bar
					left = vm.base;
					right = vm.x;
					top = vm.y - vm.height / 2;
					bottom = vm.y + vm.height / 2;
					signX = right > left? 1: -1;
					signY = 1;
					borderSkipped = vm.borderSkipped || 'left';
				}
	
				// Canvas doesn't allow us to stroke inside the width so we can
				// adjust the sizes to fit if we're setting a stroke on the line
				if (borderWidth) {
					// borderWidth shold be less than bar width and bar height.
					var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
					borderWidth = borderWidth > barSize? barSize: borderWidth;
					var halfStroke = borderWidth / 2;
					// Adjust borderWidth when bar top position is near vm.base(zero).
					var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
					var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
					var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
					var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
					// not become a vertical line?
					if (borderLeft !== borderRight) {
						top = borderTop;
						bottom = borderBottom;
					}
					// not become a horizontal line?
					if (borderTop !== borderBottom) {
						left = borderLeft;
						right = borderRight;
					}
				}
	
				ctx.beginPath();
				ctx.fillStyle = vm.backgroundColor;
				ctx.strokeStyle = vm.borderColor;
				ctx.lineWidth = borderWidth;
	
				// Corner points, from bottom-left to bottom-right clockwise
				// | 1 2 |
				// | 0 3 |
				var corners = [
					[left, bottom],
					[left, top],
					[right, top],
					[right, bottom]
				];
	
				// Find first (starting) corner with fallback to 'bottom'
				var borders = ['bottom', 'left', 'top', 'right'];
				var startCorner = borders.indexOf(borderSkipped, 0);
				if (startCorner === -1) {
					startCorner = 0;
				}
	
				function cornerAt(index) {
					return corners[(startCorner + index) % 4];
				}
	
				// Draw rectangle from 'startCorner'
				var corner = cornerAt(0);
				ctx.moveTo(corner[0], corner[1]);
	
				for (var i = 1; i < 4; i++) {
					corner = cornerAt(i);
					ctx.lineTo(corner[0], corner[1]);
				}
	
				ctx.fill();
				if (borderWidth) {
					ctx.stroke();
				}
			},
			height: function() {
				var vm = this._view;
				return vm.base - vm.y;
			},
			inRange: function(mouseX, mouseY) {
				var inRange = false;
	
				if (this._view) {
					var bounds = getBarBounds(this);
					inRange = mouseX >= bounds.left && mouseX <= bounds.right && mouseY >= bounds.top && mouseY <= bounds.bottom;
				}
	
				return inRange;
			},
			inLabelRange: function(mouseX, mouseY) {
				var me = this;
				if (!me._view) {
					return false;
				}
	
				var inRange = false;
				var bounds = getBarBounds(me);
	
				if (isVertical(me)) {
					inRange = mouseX >= bounds.left && mouseX <= bounds.right;
				} else {
					inRange = mouseY >= bounds.top && mouseY <= bounds.bottom;
				}
	
				return inRange;
			},
			inXRange: function(mouseX) {
				var bounds = getBarBounds(this);
				return mouseX >= bounds.left && mouseX <= bounds.right;
			},
			inYRange: function(mouseY) {
				var bounds = getBarBounds(this);
				return mouseY >= bounds.top && mouseY <= bounds.bottom;
			},
			getCenterPoint: function() {
				var vm = this._view;
				var x, y;
				if (isVertical(this)) {
					x = vm.x;
					y = (vm.y + vm.base) / 2;
				} else {
					x = (vm.x + vm.base) / 2;
					y = vm.y;
				}
	
				return {x: x, y: y};
			},
			getArea: function() {
				var vm = this._view;
				return vm.width * Math.abs(vm.y - vm.base);
			},
			tooltipPosition: function() {
				var vm = this._view;
				return {
					x: vm.x,
					y: vm.y
				};
			}
		});
	
	};


/***/ },

/***/ 437:
/*!***************************************************!*\
  !*** ./~/chart.js/src/scales/scale.linearbase.js ***!
  \***************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers,
			noop = helpers.noop;
	
		Chart.LinearScaleBase = Chart.Scale.extend({
			handleTickRangeOptions: function() {
				var me = this;
				var opts = me.options;
				var tickOpts = opts.ticks;
	
				// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
				// do nothing since that would make the chart weird. If the user really wants a weird chart
				// axis, they can manually override it
				if (tickOpts.beginAtZero) {
					var minSign = helpers.sign(me.min);
					var maxSign = helpers.sign(me.max);
	
					if (minSign < 0 && maxSign < 0) {
						// move the top up to 0
						me.max = 0;
					} else if (minSign > 0 && maxSign > 0) {
						// move the bottom down to 0
						me.min = 0;
					}
				}
	
				if (tickOpts.min !== undefined) {
					me.min = tickOpts.min;
				} else if (tickOpts.suggestedMin !== undefined) {
					me.min = Math.min(me.min, tickOpts.suggestedMin);
				}
	
				if (tickOpts.max !== undefined) {
					me.max = tickOpts.max;
				} else if (tickOpts.suggestedMax !== undefined) {
					me.max = Math.max(me.max, tickOpts.suggestedMax);
				}
	
				if (me.min === me.max) {
					me.max++;
	
					if (!tickOpts.beginAtZero) {
						me.min--;
					}
				}
			},
			getTickLimit: noop,
			handleDirectionalChanges: noop,
	
			buildTicks: function() {
				var me = this;
				var opts = me.options;
				var tickOpts = opts.ticks;
	
				// Figure out what the max number of ticks we can support it is based on the size of
				// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
				// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
				// the graph. Make sure we always have at least 2 ticks
				var maxTicks = me.getTickLimit();
				maxTicks = Math.max(2, maxTicks);
	
				var numericGeneratorOptions = {
					maxTicks: maxTicks,
					min: tickOpts.min,
					max: tickOpts.max,
					stepSize: helpers.getValueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
				};
				var ticks = me.ticks = Chart.Ticks.generators.linear(numericGeneratorOptions, me);
	
				me.handleDirectionalChanges();
	
				// At this point, we need to update our max and min given the tick values since we have expanded the
				// range of the scale
				me.max = helpers.max(ticks);
				me.min = helpers.min(ticks);
	
				if (tickOpts.reverse) {
					ticks.reverse();
	
					me.start = me.max;
					me.end = me.min;
				} else {
					me.start = me.min;
					me.end = me.max;
				}
			},
			convertTicksToLabels: function() {
				var me = this;
				me.ticksAsNumbers = me.ticks.slice();
				me.zeroLineIndex = me.ticks.indexOf(0);
	
				Chart.Scale.prototype.convertTicksToLabels.call(me);
			}
		});
	};


/***/ },

/***/ 438:
/*!*************************************************!*\
  !*** ./~/chart.js/src/scales/scale.category.js ***!
  \*************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
		// Default config for a category scale
		var defaultConfig = {
			position: 'bottom'
		};
	
		var DatasetScale = Chart.Scale.extend({
			/**
			* Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
			* else fall back to data.labels
			* @private
			*/
			getLabels: function() {
				var data = this.chart.data;
				return (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels;
			},
			// Implement this so that
			determineDataLimits: function() {
				var me = this;
				var labels = me.getLabels();
				me.minIndex = 0;
				me.maxIndex = labels.length - 1;
				var findIndex;
	
				if (me.options.ticks.min !== undefined) {
					// user specified min value
					findIndex = helpers.indexOf(labels, me.options.ticks.min);
					me.minIndex = findIndex !== -1 ? findIndex : me.minIndex;
				}
	
				if (me.options.ticks.max !== undefined) {
					// user specified max value
					findIndex = helpers.indexOf(labels, me.options.ticks.max);
					me.maxIndex = findIndex !== -1 ? findIndex : me.maxIndex;
				}
	
				me.min = labels[me.minIndex];
				me.max = labels[me.maxIndex];
			},
	
			buildTicks: function() {
				var me = this;
				var labels = me.getLabels();
				// If we are viewing some subset of labels, slice the original array
				me.ticks = (me.minIndex === 0 && me.maxIndex === labels.length - 1) ? labels : labels.slice(me.minIndex, me.maxIndex + 1);
			},
	
			getLabelForIndex: function(index, datasetIndex) {
				var me = this;
				var data = me.chart.data;
				var isHorizontal = me.isHorizontal();
	
				if (data.yLabels && !isHorizontal) {
					return me.getRightValue(data.datasets[datasetIndex].data[index]);
				}
				return me.ticks[index - me.minIndex];
			},
	
			// Used to get data value locations.  Value can either be an index or a numerical value
			getPixelForValue: function(value, index, datasetIndex, includeOffset) {
				var me = this;
				// 1 is added because we need the length but we have the indexes
				var offsetAmt = Math.max((me.maxIndex + 1 - me.minIndex - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
	
				if (value !== undefined && isNaN(index)) {
					var labels = me.getLabels();
					var idx = labels.indexOf(value);
					index = idx !== -1 ? idx : index;
				}
	
				if (me.isHorizontal()) {
					var valueWidth = me.width / offsetAmt;
					var widthOffset = (valueWidth * (index - me.minIndex));
	
					if (me.options.gridLines.offsetGridLines && includeOffset || me.maxIndex === me.minIndex && includeOffset) {
						widthOffset += (valueWidth / 2);
					}
	
					return me.left + Math.round(widthOffset);
				}
				var valueHeight = me.height / offsetAmt;
				var heightOffset = (valueHeight * (index - me.minIndex));
	
				if (me.options.gridLines.offsetGridLines && includeOffset) {
					heightOffset += (valueHeight / 2);
				}
	
				return me.top + Math.round(heightOffset);
			},
			getPixelForTick: function(index, includeOffset) {
				return this.getPixelForValue(this.ticks[index], index + this.minIndex, null, includeOffset);
			},
			getValueForPixel: function(pixel) {
				var me = this;
				var value;
				var offsetAmt = Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
				var horz = me.isHorizontal();
				var valueDimension = (horz ? me.width : me.height) / offsetAmt;
	
				pixel -= horz ? me.left : me.top;
	
				if (me.options.gridLines.offsetGridLines) {
					pixel -= (valueDimension / 2);
				}
	
				if (pixel <= 0) {
					value = 0;
				} else {
					value = Math.round(pixel / valueDimension);
				}
	
				return value;
			},
			getBasePixel: function() {
				return this.bottom;
			}
		});
	
		Chart.scaleService.registerScaleType('category', DatasetScale, defaultConfig);
	
	};


/***/ },

/***/ 439:
/*!***********************************************!*\
  !*** ./~/chart.js/src/scales/scale.linear.js ***!
  \***********************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		var defaultConfig = {
			position: 'left',
			ticks: {
				callback: Chart.Ticks.formatters.linear
			}
		};
	
		var LinearScale = Chart.LinearScaleBase.extend({
			determineDataLimits: function() {
				var me = this;
				var opts = me.options;
				var chart = me.chart;
				var data = chart.data;
				var datasets = data.datasets;
				var isHorizontal = me.isHorizontal();
	
				function IDMatches(meta) {
					return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
				}
	
				// First Calculate the range
				me.min = null;
				me.max = null;
	
				var hasStacks = opts.stacked;
				if (hasStacks === undefined) {
					helpers.each(datasets, function(dataset, datasetIndex) {
						if (hasStacks) {
							return;
						}
	
						var meta = chart.getDatasetMeta(datasetIndex);
						if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
							meta.stack !== undefined) {
							hasStacks = true;
						}
					});
				}
	
				if (opts.stacked || hasStacks) {
					var valuesPerStack = {};
	
					helpers.each(datasets, function(dataset, datasetIndex) {
						var meta = chart.getDatasetMeta(datasetIndex);
						var key = [
							meta.type,
							// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
							((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
							meta.stack
						].join('.');
	
						if (valuesPerStack[key] === undefined) {
							valuesPerStack[key] = {
								positiveValues: [],
								negativeValues: []
							};
						}
	
						// Store these per type
						var positiveValues = valuesPerStack[key].positiveValues;
						var negativeValues = valuesPerStack[key].negativeValues;
	
						if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
							helpers.each(dataset.data, function(rawValue, index) {
								var value = +me.getRightValue(rawValue);
								if (isNaN(value) || meta.data[index].hidden) {
									return;
								}
	
								positiveValues[index] = positiveValues[index] || 0;
								negativeValues[index] = negativeValues[index] || 0;
	
								if (opts.relativePoints) {
									positiveValues[index] = 100;
								} else if (value < 0) {
									negativeValues[index] += value;
								} else {
									positiveValues[index] += value;
								}
							});
						}
					});
	
					helpers.each(valuesPerStack, function(valuesForType) {
						var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
						var minVal = helpers.min(values);
						var maxVal = helpers.max(values);
						me.min = me.min === null ? minVal : Math.min(me.min, minVal);
						me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
					});
	
				} else {
					helpers.each(datasets, function(dataset, datasetIndex) {
						var meta = chart.getDatasetMeta(datasetIndex);
						if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
							helpers.each(dataset.data, function(rawValue, index) {
								var value = +me.getRightValue(rawValue);
								if (isNaN(value) || meta.data[index].hidden) {
									return;
								}
	
								if (me.min === null) {
									me.min = value;
								} else if (value < me.min) {
									me.min = value;
								}
	
								if (me.max === null) {
									me.max = value;
								} else if (value > me.max) {
									me.max = value;
								}
							});
						}
					});
				}
	
				// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
				this.handleTickRangeOptions();
			},
			getTickLimit: function() {
				var maxTicks;
				var me = this;
				var tickOpts = me.options.ticks;
	
				if (me.isHorizontal()) {
					maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.width / 50));
				} else {
					// The factor of 2 used to scale the font size has been experimentally determined.
					var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, Chart.defaults.global.defaultFontSize);
					maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.height / (2 * tickFontSize)));
				}
	
				return maxTicks;
			},
			// Called after the ticks are built. We need
			handleDirectionalChanges: function() {
				if (!this.isHorizontal()) {
					// We are in a vertical orientation. The top value is the highest. So reverse the array
					this.ticks.reverse();
				}
			},
			getLabelForIndex: function(index, datasetIndex) {
				return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
			},
			// Utils
			getPixelForValue: function(value) {
				// This must be called after fit has been run so that
				// this.left, this.top, this.right, and this.bottom have been defined
				var me = this;
				var start = me.start;
	
				var rightValue = +me.getRightValue(value);
				var pixel;
				var range = me.end - start;
	
				if (me.isHorizontal()) {
					pixel = me.left + (me.width / range * (rightValue - start));
					return Math.round(pixel);
				}
	
				pixel = me.bottom - (me.height / range * (rightValue - start));
				return Math.round(pixel);
			},
			getValueForPixel: function(pixel) {
				var me = this;
				var isHorizontal = me.isHorizontal();
				var innerDimension = isHorizontal ? me.width : me.height;
				var offset = (isHorizontal ? pixel - me.left : me.bottom - pixel) / innerDimension;
				return me.start + ((me.end - me.start) * offset);
			},
			getPixelForTick: function(index) {
				return this.getPixelForValue(this.ticksAsNumbers[index]);
			}
		});
		Chart.scaleService.registerScaleType('linear', LinearScale, defaultConfig);
	
	};


/***/ },

/***/ 440:
/*!****************************************************!*\
  !*** ./~/chart.js/src/scales/scale.logarithmic.js ***!
  \****************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		var defaultConfig = {
			position: 'left',
	
			// label settings
			ticks: {
				callback: Chart.Ticks.formatters.logarithmic
			}
		};
	
		var LogarithmicScale = Chart.Scale.extend({
			determineDataLimits: function() {
				var me = this;
				var opts = me.options;
				var tickOpts = opts.ticks;
				var chart = me.chart;
				var data = chart.data;
				var datasets = data.datasets;
				var getValueOrDefault = helpers.getValueOrDefault;
				var isHorizontal = me.isHorizontal();
				function IDMatches(meta) {
					return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
				}
	
				// Calculate Range
				me.min = null;
				me.max = null;
				me.minNotZero = null;
	
				var hasStacks = opts.stacked;
				if (hasStacks === undefined) {
					helpers.each(datasets, function(dataset, datasetIndex) {
						if (hasStacks) {
							return;
						}
	
						var meta = chart.getDatasetMeta(datasetIndex);
						if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
							meta.stack !== undefined) {
							hasStacks = true;
						}
					});
				}
	
				if (opts.stacked || hasStacks) {
					var valuesPerStack = {};
	
					helpers.each(datasets, function(dataset, datasetIndex) {
						var meta = chart.getDatasetMeta(datasetIndex);
						var key = [
							meta.type,
							// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
							((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
							meta.stack
						].join('.');
	
						if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
							if (valuesPerStack[key] === undefined) {
								valuesPerStack[key] = [];
							}
	
							helpers.each(dataset.data, function(rawValue, index) {
								var values = valuesPerStack[key];
								var value = +me.getRightValue(rawValue);
								if (isNaN(value) || meta.data[index].hidden) {
									return;
								}
	
								values[index] = values[index] || 0;
	
								if (opts.relativePoints) {
									values[index] = 100;
								} else {
									// Don't need to split positive and negative since the log scale can't handle a 0 crossing
									values[index] += value;
								}
							});
						}
					});
	
					helpers.each(valuesPerStack, function(valuesForType) {
						var minVal = helpers.min(valuesForType);
						var maxVal = helpers.max(valuesForType);
						me.min = me.min === null ? minVal : Math.min(me.min, minVal);
						me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
					});
	
				} else {
					helpers.each(datasets, function(dataset, datasetIndex) {
						var meta = chart.getDatasetMeta(datasetIndex);
						if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
							helpers.each(dataset.data, function(rawValue, index) {
								var value = +me.getRightValue(rawValue);
								if (isNaN(value) || meta.data[index].hidden) {
									return;
								}
	
								if (me.min === null) {
									me.min = value;
								} else if (value < me.min) {
									me.min = value;
								}
	
								if (me.max === null) {
									me.max = value;
								} else if (value > me.max) {
									me.max = value;
								}
	
								if (value !== 0 && (me.minNotZero === null || value < me.minNotZero)) {
									me.minNotZero = value;
								}
							});
						}
					});
				}
	
				me.min = getValueOrDefault(tickOpts.min, me.min);
				me.max = getValueOrDefault(tickOpts.max, me.max);
	
				if (me.min === me.max) {
					if (me.min !== 0 && me.min !== null) {
						me.min = Math.pow(10, Math.floor(helpers.log10(me.min)) - 1);
						me.max = Math.pow(10, Math.floor(helpers.log10(me.max)) + 1);
					} else {
						me.min = 1;
						me.max = 10;
					}
				}
			},
			buildTicks: function() {
				var me = this;
				var opts = me.options;
				var tickOpts = opts.ticks;
	
				var generationOptions = {
					min: tickOpts.min,
					max: tickOpts.max
				};
				var ticks = me.ticks = Chart.Ticks.generators.logarithmic(generationOptions, me);
	
				if (!me.isHorizontal()) {
					// We are in a vertical orientation. The top value is the highest. So reverse the array
					ticks.reverse();
				}
	
				// At this point, we need to update our max and min given the tick values since we have expanded the
				// range of the scale
				me.max = helpers.max(ticks);
				me.min = helpers.min(ticks);
	
				if (tickOpts.reverse) {
					ticks.reverse();
	
					me.start = me.max;
					me.end = me.min;
				} else {
					me.start = me.min;
					me.end = me.max;
				}
			},
			convertTicksToLabels: function() {
				this.tickValues = this.ticks.slice();
	
				Chart.Scale.prototype.convertTicksToLabels.call(this);
			},
			// Get the correct tooltip label
			getLabelForIndex: function(index, datasetIndex) {
				return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
			},
			getPixelForTick: function(index) {
				return this.getPixelForValue(this.tickValues[index]);
			},
			getPixelForValue: function(value) {
				var me = this;
				var innerDimension;
				var pixel;
	
				var start = me.start;
				var newVal = +me.getRightValue(value);
				var range;
				var opts = me.options;
				var tickOpts = opts.ticks;
	
				if (me.isHorizontal()) {
					range = helpers.log10(me.end) - helpers.log10(start); // todo: if start === 0
					if (newVal === 0) {
						pixel = me.left;
					} else {
						innerDimension = me.width;
						pixel = me.left + (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
					}
				} else {
					// Bottom - top since pixels increase downward on a screen
					innerDimension = me.height;
					if (start === 0 && !tickOpts.reverse) {
						range = helpers.log10(me.end) - helpers.log10(me.minNotZero);
						if (newVal === start) {
							pixel = me.bottom;
						} else if (newVal === me.minNotZero) {
							pixel = me.bottom - innerDimension * 0.02;
						} else {
							pixel = me.bottom - innerDimension * 0.02 - (innerDimension * 0.98/ range * (helpers.log10(newVal)-helpers.log10(me.minNotZero)));
						}
					} else if (me.end === 0 && tickOpts.reverse) {
						range = helpers.log10(me.start) - helpers.log10(me.minNotZero);
						if (newVal === me.end) {
							pixel = me.top;
						} else if (newVal === me.minNotZero) {
							pixel = me.top + innerDimension * 0.02;
						} else {
							pixel = me.top + innerDimension * 0.02 + (innerDimension * 0.98/ range * (helpers.log10(newVal)-helpers.log10(me.minNotZero)));
						}
					} else {
						range = helpers.log10(me.end) - helpers.log10(start);
						innerDimension = me.height;
						pixel = me.bottom - (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
					}
				}
				return pixel;
			},
			getValueForPixel: function(pixel) {
				var me = this;
				var range = helpers.log10(me.end) - helpers.log10(me.start);
				var value, innerDimension;
	
				if (me.isHorizontal()) {
					innerDimension = me.width;
					value = me.start * Math.pow(10, (pixel - me.left) * range / innerDimension);
				} else {  // todo: if start === 0
					innerDimension = me.height;
					value = Math.pow(10, (me.bottom - pixel) * range / innerDimension) / me.start;
				}
				return value;
			}
		});
		Chart.scaleService.registerScaleType('logarithmic', LogarithmicScale, defaultConfig);
	
	};


/***/ },

/***/ 441:
/*!*****************************************************!*\
  !*** ./~/chart.js/src/scales/scale.radialLinear.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
		var globalDefaults = Chart.defaults.global;
	
		var defaultConfig = {
			display: true,
	
			// Boolean - Whether to animate scaling the chart from the centre
			animate: true,
			lineArc: false,
			position: 'chartArea',
	
			angleLines: {
				display: true,
				color: 'rgba(0, 0, 0, 0.1)',
				lineWidth: 1
			},
	
			// label settings
			ticks: {
				// Boolean - Show a backdrop to the scale label
				showLabelBackdrop: true,
	
				// String - The colour of the label backdrop
				backdropColor: 'rgba(255,255,255,0.75)',
	
				// Number - The backdrop padding above & below the label in pixels
				backdropPaddingY: 2,
	
				// Number - The backdrop padding to the side of the label in pixels
				backdropPaddingX: 2,
	
				callback: Chart.Ticks.formatters.linear
			},
	
			pointLabels: {
				// Number - Point label font size in pixels
				fontSize: 10,
	
				// Function - Used to convert point labels
				callback: function(label) {
					return label;
				}
			}
		};
	
		function getValueCount(scale) {
			return !scale.options.lineArc ? scale.chart.data.labels.length : 0;
		}
	
		function getPointLabelFontOptions(scale) {
			var pointLabelOptions = scale.options.pointLabels;
			var fontSize = helpers.getValueOrDefault(pointLabelOptions.fontSize, globalDefaults.defaultFontSize);
			var fontStyle = helpers.getValueOrDefault(pointLabelOptions.fontStyle, globalDefaults.defaultFontStyle);
			var fontFamily = helpers.getValueOrDefault(pointLabelOptions.fontFamily, globalDefaults.defaultFontFamily);
			var font = helpers.fontString(fontSize, fontStyle, fontFamily);
	
			return {
				size: fontSize,
				style: fontStyle,
				family: fontFamily,
				font: font
			};
		}
	
		function measureLabelSize(ctx, fontSize, label) {
			if (helpers.isArray(label)) {
				return {
					w: helpers.longestText(ctx, ctx.font, label),
					h: (label.length * fontSize) + ((label.length - 1) * 1.5 * fontSize)
				};
			}
	
			return {
				w: ctx.measureText(label).width,
				h: fontSize
			};
		}
	
		function determineLimits(angle, pos, size, min, max) {
			if (angle === min || angle === max) {
				return {
					start: pos - (size / 2),
					end: pos + (size / 2)
				};
			} else if (angle < min || angle > max) {
				return {
					start: pos - size - 5,
					end: pos
				};
			}
	
			return {
				start: pos,
				end: pos + size + 5
			};
		}
	
		/**
		 * Helper function to fit a radial linear scale with point labels
		 */
		function fitWithPointLabels(scale) {
			/*
			 * Right, this is really confusing and there is a lot of maths going on here
			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
			 *
			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
			 *
			 * Solution:
			 *
			 * We assume the radius of the polygon is half the size of the canvas at first
			 * at each index we check if the text overlaps.
			 *
			 * Where it does, we store that angle and that index.
			 *
			 * After finding the largest index and angle we calculate how much we need to remove
			 * from the shape radius to move the point inwards by that x.
			 *
			 * We average the left and right distances to get the maximum shape radius that can fit in the box
			 * along with labels.
			 *
			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
			 * on each side, removing that from the size, halving it and adding the left x protrusion width.
			 *
			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
			 * and position it in the most space efficient manner
			 *
			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
			 */
	
			var plFont = getPointLabelFontOptions(scale);
	
			// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
			// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
			var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
			var furthestLimits = {
				l: scale.width,
				r: 0,
				t: scale.height,
				b: 0
			};
			var furthestAngles = {};
			var i;
			var textSize;
			var pointPosition;
	
			scale.ctx.font = plFont.font;
			scale._pointLabelSizes = [];
	
			var valueCount = getValueCount(scale);
			for (i = 0; i < valueCount; i++) {
				pointPosition = scale.getPointPosition(i, largestPossibleRadius);
				textSize = measureLabelSize(scale.ctx, plFont.size, scale.pointLabels[i] || '');
				scale._pointLabelSizes[i] = textSize;
	
				// Add quarter circle to make degree 0 mean top of circle
				var angleRadians = scale.getIndexAngle(i);
				var angle = helpers.toDegrees(angleRadians) % 360;
				var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
				var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
	
				if (hLimits.start < furthestLimits.l) {
					furthestLimits.l = hLimits.start;
					furthestAngles.l = angleRadians;
				}
	
				if (hLimits.end > furthestLimits.r) {
					furthestLimits.r = hLimits.end;
					furthestAngles.r = angleRadians;
				}
	
				if (vLimits.start < furthestLimits.t) {
					furthestLimits.t = vLimits.start;
					furthestAngles.t = angleRadians;
				}
	
				if (vLimits.end > furthestLimits.b) {
					furthestLimits.b = vLimits.end;
					furthestAngles.b = angleRadians;
				}
			}
	
			scale.setReductions(largestPossibleRadius, furthestLimits, furthestAngles);
		}
	
		/**
		 * Helper function to fit a radial linear scale with no point labels
		 */
		function fit(scale) {
			var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
			scale.drawingArea = Math.round(largestPossibleRadius);
			scale.setCenterPoint(0, 0, 0, 0);
		}
	
		function getTextAlignForAngle(angle) {
			if (angle === 0 || angle === 180) {
				return 'center';
			} else if (angle < 180) {
				return 'left';
			}
	
			return 'right';
		}
	
		function fillText(ctx, text, position, fontSize) {
			if (helpers.isArray(text)) {
				var y = position.y;
				var spacing = 1.5 * fontSize;
	
				for (var i = 0; i < text.length; ++i) {
					ctx.fillText(text[i], position.x, y);
					y+= spacing;
				}
			} else {
				ctx.fillText(text, position.x, position.y);
			}
		}
	
		function adjustPointPositionForLabelHeight(angle, textSize, position) {
			if (angle === 90 || angle === 270) {
				position.y -= (textSize.h / 2);
			} else if (angle > 270 || angle < 90) {
				position.y -= textSize.h;
			}
		}
	
		function drawPointLabels(scale) {
			var ctx = scale.ctx;
			var getValueOrDefault = helpers.getValueOrDefault;
			var opts = scale.options;
			var angleLineOpts = opts.angleLines;
			var pointLabelOpts = opts.pointLabels;
	
			ctx.lineWidth = angleLineOpts.lineWidth;
			ctx.strokeStyle = angleLineOpts.color;
	
			var outerDistance = scale.getDistanceFromCenterForValue(opts.reverse ? scale.min : scale.max);
	
			// Point Label Font
			var plFont = getPointLabelFontOptions(scale);
	
			ctx.textBaseline = 'top';
	
			for (var i = getValueCount(scale) - 1; i >= 0; i--) {
				if (angleLineOpts.display) {
					var outerPosition = scale.getPointPosition(i, outerDistance);
					ctx.beginPath();
					ctx.moveTo(scale.xCenter, scale.yCenter);
					ctx.lineTo(outerPosition.x, outerPosition.y);
					ctx.stroke();
					ctx.closePath();
				}
				// Extra 3px out for some label spacing
				var pointLabelPosition = scale.getPointPosition(i, outerDistance + 5);
	
				// Keep this in loop since we may support array properties here
				var pointLabelFontColor = getValueOrDefault(pointLabelOpts.fontColor, globalDefaults.defaultFontColor);
				ctx.font = plFont.font;
				ctx.fillStyle = pointLabelFontColor;
	
				var angleRadians = scale.getIndexAngle(i);
				var angle = helpers.toDegrees(angleRadians);
				ctx.textAlign = getTextAlignForAngle(angle);
				adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
				fillText(ctx, scale.pointLabels[i] || '', pointLabelPosition, plFont.size);
			}
		}
	
		function drawRadiusLine(scale, gridLineOpts, radius, index) {
			var ctx = scale.ctx;
			ctx.strokeStyle = helpers.getValueAtIndexOrDefault(gridLineOpts.color, index - 1);
			ctx.lineWidth = helpers.getValueAtIndexOrDefault(gridLineOpts.lineWidth, index - 1);
	
			if (scale.options.lineArc) {
				// Draw circular arcs between the points
				ctx.beginPath();
				ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
				ctx.closePath();
				ctx.stroke();
			} else {
				// Draw straight lines connecting each index
				var valueCount = getValueCount(scale);
	
				if (valueCount === 0) {
					return;
				}
	
				ctx.beginPath();
				var pointPosition = scale.getPointPosition(0, radius);
				ctx.moveTo(pointPosition.x, pointPosition.y);
	
				for (var i = 1; i < valueCount; i++) {
					pointPosition = scale.getPointPosition(i, radius);
					ctx.lineTo(pointPosition.x, pointPosition.y);
				}
	
				ctx.closePath();
				ctx.stroke();
			}
		}
	
		function numberOrZero(param) {
			return helpers.isNumber(param) ? param : 0;
		}
	
		var LinearRadialScale = Chart.LinearScaleBase.extend({
			setDimensions: function() {
				var me = this;
				var opts = me.options;
				var tickOpts = opts.ticks;
				// Set the unconstrained dimension before label rotation
				me.width = me.maxWidth;
				me.height = me.maxHeight;
				me.xCenter = Math.round(me.width / 2);
				me.yCenter = Math.round(me.height / 2);
	
				var minSize = helpers.min([me.height, me.width]);
				var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
				me.drawingArea = opts.display ? (minSize / 2) - (tickFontSize / 2 + tickOpts.backdropPaddingY) : (minSize / 2);
			},
			determineDataLimits: function() {
				var me = this;
				var chart = me.chart;
				var min = Number.POSITIVE_INFINITY;
				var max = Number.NEGATIVE_INFINITY;
	
				helpers.each(chart.data.datasets, function(dataset, datasetIndex) {
					if (chart.isDatasetVisible(datasetIndex)) {
						var meta = chart.getDatasetMeta(datasetIndex);
	
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}
	
							min = Math.min(value, min);
							max = Math.max(value, max);
						});
					}
				});
	
				me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
				me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);
	
				// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
				me.handleTickRangeOptions();
			},
			getTickLimit: function() {
				var tickOpts = this.options.ticks;
				var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
				return Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * tickFontSize)));
			},
			convertTicksToLabels: function() {
				var me = this;
				Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);
	
				// Point labels
				me.pointLabels = me.chart.data.labels.map(me.options.pointLabels.callback, me);
			},
			getLabelForIndex: function(index, datasetIndex) {
				return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
			},
			fit: function() {
				if (this.options.lineArc) {
					fit(this);
				} else {
					fitWithPointLabels(this);
				}
			},
			/**
			 * Set radius reductions and determine new radius and center point
			 * @private
			 */
			setReductions: function(largestPossibleRadius, furthestLimits, furthestAngles) {
				var me = this;
				var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
				var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
				var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
				var radiusReductionBottom = -Math.max(furthestLimits.b - me.height, 0) / Math.cos(furthestAngles.b);
	
				radiusReductionLeft = numberOrZero(radiusReductionLeft);
				radiusReductionRight = numberOrZero(radiusReductionRight);
				radiusReductionTop = numberOrZero(radiusReductionTop);
				radiusReductionBottom = numberOrZero(radiusReductionBottom);
	
				me.drawingArea = Math.min(
					Math.round(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
					Math.round(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
				me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
			},
			setCenterPoint: function(leftMovement, rightMovement, topMovement, bottomMovement) {
				var me = this;
				var maxRight = me.width - rightMovement - me.drawingArea,
					maxLeft = leftMovement + me.drawingArea,
					maxTop = topMovement + me.drawingArea,
					maxBottom = me.height - bottomMovement - me.drawingArea;
	
				me.xCenter = Math.round(((maxLeft + maxRight) / 2) + me.left);
				me.yCenter = Math.round(((maxTop + maxBottom) / 2) + me.top);
			},
	
			getIndexAngle: function(index) {
				var angleMultiplier = (Math.PI * 2) / getValueCount(this);
				var startAngle = this.chart.options && this.chart.options.startAngle ?
					this.chart.options.startAngle :
					0;
	
				var startAngleRadians = startAngle * Math.PI * 2 / 360;
	
				// Start from the top instead of right, so remove a quarter of the circle
				return index * angleMultiplier + startAngleRadians;
			},
			getDistanceFromCenterForValue: function(value) {
				var me = this;
	
				if (value === null) {
					return 0; // null always in center
				}
	
				// Take into account half font size + the yPadding of the top value
				var scalingFactor = me.drawingArea / (me.max - me.min);
				if (me.options.reverse) {
					return (me.max - value) * scalingFactor;
				}
				return (value - me.min) * scalingFactor;
			},
			getPointPosition: function(index, distanceFromCenter) {
				var me = this;
				var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
				return {
					x: Math.round(Math.cos(thisAngle) * distanceFromCenter) + me.xCenter,
					y: Math.round(Math.sin(thisAngle) * distanceFromCenter) + me.yCenter
				};
			},
			getPointPositionForValue: function(index, value) {
				return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
			},
	
			getBasePosition: function() {
				var me = this;
				var min = me.min;
				var max = me.max;
	
				return me.getPointPositionForValue(0,
					me.beginAtZero? 0:
					min < 0 && max < 0? max :
					min > 0 && max > 0? min :
					0);
			},
	
			draw: function() {
				var me = this;
				var opts = me.options;
				var gridLineOpts = opts.gridLines;
				var tickOpts = opts.ticks;
				var getValueOrDefault = helpers.getValueOrDefault;
	
				if (opts.display) {
					var ctx = me.ctx;
	
					// Tick Font
					var tickFontSize = getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
					var tickFontStyle = getValueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
					var tickFontFamily = getValueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
					var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
	
					helpers.each(me.ticks, function(label, index) {
						// Don't draw a centre value (if it is minimum)
						if (index > 0 || opts.reverse) {
							var yCenterOffset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
							var yHeight = me.yCenter - yCenterOffset;
	
							// Draw circular lines around the scale
							if (gridLineOpts.display && index !== 0) {
								drawRadiusLine(me, gridLineOpts, yCenterOffset, index);
							}
	
							if (tickOpts.display) {
								var tickFontColor = getValueOrDefault(tickOpts.fontColor, globalDefaults.defaultFontColor);
								ctx.font = tickLabelFont;
	
								if (tickOpts.showLabelBackdrop) {
									var labelWidth = ctx.measureText(label).width;
									ctx.fillStyle = tickOpts.backdropColor;
									ctx.fillRect(
										me.xCenter - labelWidth / 2 - tickOpts.backdropPaddingX,
										yHeight - tickFontSize / 2 - tickOpts.backdropPaddingY,
										labelWidth + tickOpts.backdropPaddingX * 2,
										tickFontSize + tickOpts.backdropPaddingY * 2
									);
								}
	
								ctx.textAlign = 'center';
								ctx.textBaseline = 'middle';
								ctx.fillStyle = tickFontColor;
								ctx.fillText(label, me.xCenter, yHeight);
							}
						}
					});
	
					if (!opts.lineArc) {
						drawPointLabels(me);
					}
				}
			}
		});
		Chart.scaleService.registerScaleType('radialLinear', LinearRadialScale, defaultConfig);
	
	};


/***/ },

/***/ 442:
/*!*********************************************!*\
  !*** ./~/chart.js/src/scales/scale.time.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* global window: false */
	'use strict';
	
	var moment = __webpack_require__(/*! moment */ 271);
	moment = typeof(moment) === 'function' ? moment : window.moment;
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
		var time = {
			units: [{
				name: 'millisecond',
				steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
			}, {
				name: 'second',
				steps: [1, 2, 5, 10, 30]
			}, {
				name: 'minute',
				steps: [1, 2, 5, 10, 30]
			}, {
				name: 'hour',
				steps: [1, 2, 3, 6, 12]
			}, {
				name: 'day',
				steps: [1, 2, 5]
			}, {
				name: 'week',
				maxStep: 4
			}, {
				name: 'month',
				maxStep: 3
			}, {
				name: 'quarter',
				maxStep: 4
			}, {
				name: 'year',
				maxStep: false
			}]
		};
	
		var defaultConfig = {
			position: 'bottom',
	
			time: {
				parser: false, // false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
				format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
				unit: false, // false == automatic or override with week, month, year, etc.
				round: false, // none, or override with week, month, year, etc.
				displayFormat: false, // DEPRECATED
				isoWeekday: false, // override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/
				minUnit: 'millisecond',
	
				// defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
				displayFormats: {
					millisecond: 'h:mm:ss.SSS a', // 11:20:01.123 AM,
					second: 'h:mm:ss a', // 11:20:01 AM
					minute: 'h:mm:ss a', // 11:20:01 AM
					hour: 'MMM D, hA', // Sept 4, 5PM
					day: 'll', // Sep 4 2015
					week: 'll', // Week 46, or maybe "[W]WW - YYYY" ?
					month: 'MMM YYYY', // Sept 2015
					quarter: '[Q]Q - YYYY', // Q3
					year: 'YYYY' // 2015
				}
			},
			ticks: {
				autoSkip: false
			}
		};
	
		var TimeScale = Chart.Scale.extend({
			initialize: function() {
				if (!moment) {
					throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');
				}
	
				Chart.Scale.prototype.initialize.call(this);
			},
			getLabelMoment: function(datasetIndex, index) {
				if (datasetIndex === null || index === null) {
					return null;
				}
	
				if (typeof this.labelMoments[datasetIndex] !== 'undefined') {
					return this.labelMoments[datasetIndex][index];
				}
	
				return null;
			},
			getLabelDiff: function(datasetIndex, index) {
				var me = this;
				if (datasetIndex === null || index === null) {
					return null;
				}
	
				if (me.labelDiffs === undefined) {
					me.buildLabelDiffs();
				}
	
				if (typeof me.labelDiffs[datasetIndex] !== 'undefined') {
					return me.labelDiffs[datasetIndex][index];
				}
	
				return null;
			},
			getMomentStartOf: function(tick) {
				var me = this;
				if (me.options.time.unit === 'week' && me.options.time.isoWeekday !== false) {
					return tick.clone().startOf('isoWeek').isoWeekday(me.options.time.isoWeekday);
				}
				return tick.clone().startOf(me.tickUnit);
			},
			determineDataLimits: function() {
				var me = this;
				me.labelMoments = [];
	
				// Only parse these once. If the dataset does not have data as x,y pairs, we will use
				// these
				var scaleLabelMoments = [];
				if (me.chart.data.labels && me.chart.data.labels.length > 0) {
					helpers.each(me.chart.data.labels, function(label) {
						var labelMoment = me.parseTime(label);
	
						if (labelMoment.isValid()) {
							if (me.options.time.round) {
								labelMoment.startOf(me.options.time.round);
							}
							scaleLabelMoments.push(labelMoment);
						}
					}, me);
	
					me.firstTick = moment.min.call(me, scaleLabelMoments);
					me.lastTick = moment.max.call(me, scaleLabelMoments);
				} else {
					me.firstTick = null;
					me.lastTick = null;
				}
	
				helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
					var momentsForDataset = [];
					var datasetVisible = me.chart.isDatasetVisible(datasetIndex);
	
					if (typeof dataset.data[0] === 'object' && dataset.data[0] !== null) {
						helpers.each(dataset.data, function(value) {
							var labelMoment = me.parseTime(me.getRightValue(value));
	
							if (labelMoment.isValid()) {
								if (me.options.time.round) {
									labelMoment.startOf(me.options.time.round);
								}
								momentsForDataset.push(labelMoment);
	
								if (datasetVisible) {
									// May have gone outside the scale ranges, make sure we keep the first and last ticks updated
									me.firstTick = me.firstTick !== null ? moment.min(me.firstTick, labelMoment) : labelMoment;
									me.lastTick = me.lastTick !== null ? moment.max(me.lastTick, labelMoment) : labelMoment;
								}
							}
						}, me);
					} else {
						// We have no labels. Use the ones from the scale
						momentsForDataset = scaleLabelMoments;
					}
	
					me.labelMoments.push(momentsForDataset);
				}, me);
	
				// Set these after we've done all the data
				if (me.options.time.min) {
					me.firstTick = me.parseTime(me.options.time.min);
				}
	
				if (me.options.time.max) {
					me.lastTick = me.parseTime(me.options.time.max);
				}
	
				// We will modify these, so clone for later
				me.firstTick = (me.firstTick || moment()).clone();
				me.lastTick = (me.lastTick || moment()).clone();
			},
			buildLabelDiffs: function() {
				var me = this;
				me.labelDiffs = [];
				var scaleLabelDiffs = [];
				// Parse common labels once
				if (me.chart.data.labels && me.chart.data.labels.length > 0) {
					helpers.each(me.chart.data.labels, function(label) {
						var labelMoment = me.parseTime(label);
	
						if (labelMoment.isValid()) {
							if (me.options.time.round) {
								labelMoment.startOf(me.options.time.round);
							}
							scaleLabelDiffs.push(labelMoment.diff(me.firstTick, me.tickUnit, true));
						}
					}, me);
				}
	
				helpers.each(me.chart.data.datasets, function(dataset) {
					var diffsForDataset = [];
	
					if (typeof dataset.data[0] === 'object' && dataset.data[0] !== null) {
						helpers.each(dataset.data, function(value) {
							var labelMoment = me.parseTime(me.getRightValue(value));
	
							if (labelMoment.isValid()) {
								if (me.options.time.round) {
									labelMoment.startOf(me.options.time.round);
								}
								diffsForDataset.push(labelMoment.diff(me.firstTick, me.tickUnit, true));
							}
						}, me);
					} else {
						// We have no labels. Use common ones
						diffsForDataset = scaleLabelDiffs;
					}
	
					me.labelDiffs.push(diffsForDataset);
				}, me);
			},
			buildTicks: function() {
				var me = this;
	
				me.ctx.save();
				var tickFontSize = helpers.getValueOrDefault(me.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
				var tickFontStyle = helpers.getValueOrDefault(me.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
				var tickFontFamily = helpers.getValueOrDefault(me.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
				var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
				me.ctx.font = tickLabelFont;
	
				me.ticks = [];
				me.unitScale = 1; // How much we scale the unit by, ie 2 means 2x unit per step
				me.scaleSizeInUnits = 0; // How large the scale is in the base unit (seconds, minutes, etc)
	
				// Set unit override if applicable
				if (me.options.time.unit) {
					me.tickUnit = me.options.time.unit || 'day';
					me.displayFormat = me.options.time.displayFormats[me.tickUnit];
					me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
					me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, 1);
				} else {
					// Determine the smallest needed unit of the time
					var innerWidth = me.isHorizontal() ? me.width : me.height;
	
					// Crude approximation of what the label length might be
					var tempFirstLabel = me.tickFormatFunction(me.firstTick, 0, []);
					var tickLabelWidth = me.ctx.measureText(tempFirstLabel).width;
					var cosRotation = Math.cos(helpers.toRadians(me.options.ticks.maxRotation));
					var sinRotation = Math.sin(helpers.toRadians(me.options.ticks.maxRotation));
					tickLabelWidth = (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
					var labelCapacity = innerWidth / (tickLabelWidth);
	
					// Start as small as possible
					me.tickUnit = me.options.time.minUnit;
					me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
					me.displayFormat = me.options.time.displayFormats[me.tickUnit];
	
					var unitDefinitionIndex = 0;
					var unitDefinition = time.units[unitDefinitionIndex];
	
					// While we aren't ideal and we don't have units left
					while (unitDefinitionIndex < time.units.length) {
						// Can we scale this unit. If `false` we can scale infinitely
						me.unitScale = 1;
	
						if (helpers.isArray(unitDefinition.steps) && Math.ceil(me.scaleSizeInUnits / labelCapacity) < helpers.max(unitDefinition.steps)) {
							// Use one of the predefined steps
							for (var idx = 0; idx < unitDefinition.steps.length; ++idx) {
								if (unitDefinition.steps[idx] >= Math.ceil(me.scaleSizeInUnits / labelCapacity)) {
									me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, unitDefinition.steps[idx]);
									break;
								}
							}
	
							break;
						} else if ((unitDefinition.maxStep === false) || (Math.ceil(me.scaleSizeInUnits / labelCapacity) < unitDefinition.maxStep)) {
							// We have a max step. Scale this unit
							me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, Math.ceil(me.scaleSizeInUnits / labelCapacity));
							break;
						} else {
							// Move to the next unit up
							++unitDefinitionIndex;
							unitDefinition = time.units[unitDefinitionIndex];
	
							me.tickUnit = unitDefinition.name;
							var leadingUnitBuffer = me.firstTick.diff(me.getMomentStartOf(me.firstTick), me.tickUnit, true);
							var trailingUnitBuffer = me.getMomentStartOf(me.lastTick.clone().add(1, me.tickUnit)).diff(me.lastTick, me.tickUnit, true);
							me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true) + leadingUnitBuffer + trailingUnitBuffer;
							me.displayFormat = me.options.time.displayFormats[unitDefinition.name];
						}
					}
				}
	
				var roundedStart;
	
				// Only round the first tick if we have no hard minimum
				if (!me.options.time.min) {
					me.firstTick = me.getMomentStartOf(me.firstTick);
					roundedStart = me.firstTick;
				} else {
					roundedStart = me.getMomentStartOf(me.firstTick);
				}
	
				// Only round the last tick if we have no hard maximum
				if (!me.options.time.max) {
					var roundedEnd = me.getMomentStartOf(me.lastTick);
					var delta = roundedEnd.diff(me.lastTick, me.tickUnit, true);
					if (delta < 0) {
						// Do not use end of because we need me to be in the next time unit
						me.lastTick = me.getMomentStartOf(me.lastTick.add(1, me.tickUnit));
					} else if (delta >= 0) {
						me.lastTick = roundedEnd;
					}
	
					me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
				}
	
				// Tick displayFormat override
				if (me.options.time.displayFormat) {
					me.displayFormat = me.options.time.displayFormat;
				}
	
				// first tick. will have been rounded correctly if options.time.min is not specified
				me.ticks.push(me.firstTick.clone());
	
				// For every unit in between the first and last moment, create a moment and add it to the ticks tick
				for (var i = me.unitScale; i <= me.scaleSizeInUnits; i += me.unitScale) {
					var newTick = roundedStart.clone().add(i, me.tickUnit);
	
					// Are we greater than the max time
					if (me.options.time.max && newTick.diff(me.lastTick, me.tickUnit, true) >= 0) {
						break;
					}
	
					me.ticks.push(newTick);
				}
	
				// Always show the right tick
				var diff = me.ticks[me.ticks.length - 1].diff(me.lastTick, me.tickUnit);
				if (diff !== 0 || me.scaleSizeInUnits === 0) {
					// this is a weird case. If the <max> option is the same as the end option, we can't just diff the times because the tick was created from the roundedStart
					// but the last tick was not rounded.
					if (me.options.time.max) {
						me.ticks.push(me.lastTick.clone());
						me.scaleSizeInUnits = me.lastTick.diff(me.ticks[0], me.tickUnit, true);
					} else {
						me.ticks.push(me.lastTick.clone());
						me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
					}
				}
	
				me.ctx.restore();
	
				// Invalidate label diffs cache
				me.labelDiffs = undefined;
			},
			// Get tooltip label
			getLabelForIndex: function(index, datasetIndex) {
				var me = this;
				var label = me.chart.data.labels && index < me.chart.data.labels.length ? me.chart.data.labels[index] : '';
				var value = me.chart.data.datasets[datasetIndex].data[index];
	
				if (value !== null && typeof value === 'object') {
					label = me.getRightValue(value);
				}
	
				// Format nicely
				if (me.options.time.tooltipFormat) {
					label = me.parseTime(label).format(me.options.time.tooltipFormat);
				}
	
				return label;
			},
			// Function to format an individual tick mark
			tickFormatFunction: function(tick, index, ticks) {
				var formattedTick = tick.format(this.displayFormat);
				var tickOpts = this.options.ticks;
				var callback = helpers.getValueOrDefault(tickOpts.callback, tickOpts.userCallback);
	
				if (callback) {
					return callback(formattedTick, index, ticks);
				}
				return formattedTick;
			},
			convertTicksToLabels: function() {
				var me = this;
				me.tickMoments = me.ticks;
				me.ticks = me.ticks.map(me.tickFormatFunction, me);
			},
			getPixelForValue: function(value, index, datasetIndex) {
				var me = this;
				var offset = null;
				if (index !== undefined && datasetIndex !== undefined) {
					offset = me.getLabelDiff(datasetIndex, index);
				}
	
				if (offset === null) {
					if (!value || !value.isValid) {
						// not already a moment object
						value = me.parseTime(me.getRightValue(value));
					}
					if (value && value.isValid && value.isValid()) {
						offset = value.diff(me.firstTick, me.tickUnit, true);
					}
				}
	
				if (offset !== null) {
					var decimal = offset !== 0 ? offset / me.scaleSizeInUnits : offset;
	
					if (me.isHorizontal()) {
						var valueOffset = (me.width * decimal);
						return me.left + Math.round(valueOffset);
					}
	
					var heightOffset = (me.height * decimal);
					return me.top + Math.round(heightOffset);
				}
			},
			getPixelForTick: function(index) {
				return this.getPixelForValue(this.tickMoments[index], null, null);
			},
			getValueForPixel: function(pixel) {
				var me = this;
				var innerDimension = me.isHorizontal() ? me.width : me.height;
				var offset = (pixel - (me.isHorizontal() ? me.left : me.top)) / innerDimension;
				offset *= me.scaleSizeInUnits;
				return me.firstTick.clone().add(moment.duration(offset, me.tickUnit).asSeconds(), 'seconds');
			},
			parseTime: function(label) {
				var me = this;
				if (typeof me.options.time.parser === 'string') {
					return moment(label, me.options.time.parser);
				}
				if (typeof me.options.time.parser === 'function') {
					return me.options.time.parser(label);
				}
				// Date objects
				if (typeof label.getMonth === 'function' || typeof label === 'number') {
					return moment(label);
				}
				// Moment support
				if (label.isValid && label.isValid()) {
					return label;
				}
				// Custom parsing (return an instance of moment)
				if (typeof me.options.time.format !== 'string' && me.options.time.format.call) {
					console.warn('options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale');
					return me.options.time.format(label);
				}
				// Moment format parsing
				return moment(label, me.options.time.format);
			}
		});
		Chart.scaleService.registerScaleType('time', TimeScale, defaultConfig);
	
	};


/***/ },

/***/ 443:
/*!******************************************************!*\
  !*** ./~/chart.js/src/controllers/controller.bar.js ***!
  \******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.bar = {
			hover: {
				mode: 'label'
			},
	
			scales: {
				xAxes: [{
					type: 'category',
	
					// Specific to Bar Controller
					categoryPercentage: 0.8,
					barPercentage: 0.9,
	
					// grid line settings
					gridLines: {
						offsetGridLines: true
					}
				}],
				yAxes: [{
					type: 'linear'
				}]
			}
		};
	
		Chart.controllers.bar = Chart.DatasetController.extend({
	
			dataElementType: Chart.elements.Rectangle,
	
			initialize: function(chart, datasetIndex) {
				Chart.DatasetController.prototype.initialize.call(this, chart, datasetIndex);
	
				var me = this;
				var meta = me.getMeta();
				var dataset = me.getDataset();
	
				meta.stack = dataset.stack;
				// Use this to indicate that this is a bar dataset.
				meta.bar = true;
			},
	
			// Correctly calculate the bar width accounting for stacks and the fact that not all bars are visible
			getStackCount: function() {
				var me = this;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
	
				var stacks = [];
				helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
					var dsMeta = me.chart.getDatasetMeta(datasetIndex);
					if (dsMeta.bar && me.chart.isDatasetVisible(datasetIndex) &&
						(yScale.options.stacked === false ||
						(yScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
						(yScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
						stacks.push(dsMeta.stack);
					}
				}, me);
	
				return stacks.length;
			},
	
			update: function(reset) {
				var me = this;
				helpers.each(me.getMeta().data, function(rectangle, index) {
					me.updateElement(rectangle, index, reset);
				}, me);
			},
	
			updateElement: function(rectangle, index, reset) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var yScale = me.getScaleForId(meta.yAxisID);
				var scaleBase = yScale.getBasePixel();
				var rectangleElementOptions = me.chart.options.elements.rectangle;
				var custom = rectangle.custom || {};
				var dataset = me.getDataset();
	
				rectangle._xScale = xScale;
				rectangle._yScale = yScale;
				rectangle._datasetIndex = me.index;
				rectangle._index = index;
	
				var ruler = me.getRuler(index); // The index argument for compatible
				rectangle._model = {
					x: me.calculateBarX(index, me.index, ruler),
					y: reset ? scaleBase : me.calculateBarY(index, me.index),
	
					// Tooltip
					label: me.chart.data.labels[index],
					datasetLabel: dataset.label,
	
					// Appearance
					horizontal: false,
					base: reset ? scaleBase : me.calculateBarBase(me.index, index),
					width: me.calculateBarWidth(ruler),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
					borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
					borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
				};
	
				rectangle.pivot();
			},
	
			calculateBarBase: function(datasetIndex, index) {
				var me = this;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
				var base = yScale.getBaseValue();
				var original = base;
	
				if ((yScale.options.stacked === true) ||
					(yScale.options.stacked === undefined && meta.stack !== undefined)) {
					var chart = me.chart;
					var datasets = chart.data.datasets;
					var value = Number(datasets[datasetIndex].data[index]);
	
					for (var i = 0; i < datasetIndex; i++) {
						var currentDs = datasets[i];
						var currentDsMeta = chart.getDatasetMeta(i);
						if (currentDsMeta.bar && currentDsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i) &&
							meta.stack === currentDsMeta.stack) {
							var currentVal = Number(currentDs.data[index]);
							base += value < 0 ? Math.min(currentVal, original) : Math.max(currentVal, original);
						}
					}
	
					return yScale.getPixelForValue(base);
				}
	
				return yScale.getBasePixel();
			},
	
			getRuler: function() {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var stackCount = me.getStackCount();
	
				var tickWidth = xScale.width / xScale.ticks.length;
				var categoryWidth = tickWidth * xScale.options.categoryPercentage;
				var categorySpacing = (tickWidth - (tickWidth * xScale.options.categoryPercentage)) / 2;
				var fullBarWidth = categoryWidth / stackCount;
	
				var barWidth = fullBarWidth * xScale.options.barPercentage;
				var barSpacing = fullBarWidth - (fullBarWidth * xScale.options.barPercentage);
	
				return {
					stackCount: stackCount,
					tickWidth: tickWidth,
					categoryWidth: categoryWidth,
					categorySpacing: categorySpacing,
					fullBarWidth: fullBarWidth,
					barWidth: barWidth,
					barSpacing: barSpacing
				};
			},
	
			calculateBarWidth: function(ruler) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				if (xScale.options.barThickness) {
					return xScale.options.barThickness;
				}
				return ruler.barWidth;
			},
	
			// Get stack index from the given dataset index accounting for stacks and the fact that not all bars are visible
			getStackIndex: function(datasetIndex) {
				var me = this;
				var meta = me.chart.getDatasetMeta(datasetIndex);
				var yScale = me.getScaleForId(meta.yAxisID);
				var dsMeta, j;
				var stacks = [meta.stack];
	
				for (j = 0; j < datasetIndex; ++j) {
					dsMeta = this.chart.getDatasetMeta(j);
					if (dsMeta.bar && this.chart.isDatasetVisible(j) &&
						(yScale.options.stacked === false ||
						(yScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
						(yScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
						stacks.push(dsMeta.stack);
					}
				}
	
				return stacks.length - 1;
			},
	
			calculateBarX: function(index, datasetIndex, ruler) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var stackIndex = me.getStackIndex(datasetIndex);
				var leftTick = xScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
				leftTick -= me.chart.isCombo ? (ruler.tickWidth / 2) : 0;
	
				return leftTick +
					(ruler.barWidth / 2) +
					ruler.categorySpacing +
					(ruler.barWidth * stackIndex) +
					(ruler.barSpacing / 2) +
					(ruler.barSpacing * stackIndex);
			},
	
			calculateBarY: function(index, datasetIndex) {
				var me = this;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
				var value = Number(me.getDataset().data[index]);
	
				if (yScale.options.stacked ||
					(yScale.options.stacked === undefined && meta.stack !== undefined)) {
					var base = yScale.getBaseValue();
					var sumPos = base,
						sumNeg = base;
	
					for (var i = 0; i < datasetIndex; i++) {
						var ds = me.chart.data.datasets[i];
						var dsMeta = me.chart.getDatasetMeta(i);
						if (dsMeta.bar && dsMeta.yAxisID === yScale.id && me.chart.isDatasetVisible(i) &&
							meta.stack === dsMeta.stack) {
							var stackedVal = Number(ds.data[index]);
							if (stackedVal < 0) {
								sumNeg += stackedVal || 0;
							} else {
								sumPos += stackedVal || 0;
							}
						}
					}
	
					if (value < 0) {
						return yScale.getPixelForValue(sumNeg + value);
					}
					return yScale.getPixelForValue(sumPos + value);
				}
	
				return yScale.getPixelForValue(value);
			},
	
			draw: function(ease) {
				var me = this;
				var easingDecimal = ease || 1;
				var metaData = me.getMeta().data;
				var dataset = me.getDataset();
				var i, len;
	
				Chart.canvasHelpers.clipArea(me.chart.chart.ctx, me.chart.chartArea);
				for (i = 0, len = metaData.length; i < len; ++i) {
					var d = dataset.data[i];
					if (d !== null && d !== undefined && !isNaN(d)) {
						metaData[i].transition(easingDecimal).draw();
					}
				}
				Chart.canvasHelpers.unclipArea(me.chart.chart.ctx);
			},
	
			setHoverStyle: function(rectangle) {
				var dataset = this.chart.data.datasets[rectangle._datasetIndex];
				var index = rectangle._index;
	
				var custom = rectangle.custom || {};
				var model = rectangle._model;
				model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
				model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.getHoverColor(model.borderColor));
				model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
			},
	
			removeHoverStyle: function(rectangle) {
				var dataset = this.chart.data.datasets[rectangle._datasetIndex];
				var index = rectangle._index;
				var custom = rectangle.custom || {};
				var model = rectangle._model;
				var rectangleElementOptions = this.chart.options.elements.rectangle;
	
				model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor);
				model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor);
				model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth);
			}
	
		});
	
	
		// including horizontalBar in the bar file, instead of a file of its own
		// it extends bar (like pie extends doughnut)
		Chart.defaults.horizontalBar = {
			hover: {
				mode: 'label'
			},
	
			scales: {
				xAxes: [{
					type: 'linear',
					position: 'bottom'
				}],
				yAxes: [{
					position: 'left',
					type: 'category',
	
					// Specific to Horizontal Bar Controller
					categoryPercentage: 0.8,
					barPercentage: 0.9,
	
					// grid line settings
					gridLines: {
						offsetGridLines: true
					}
				}]
			},
			elements: {
				rectangle: {
					borderSkipped: 'left'
				}
			},
			tooltips: {
				callbacks: {
					title: function(tooltipItems, data) {
						// Pick first xLabel for now
						var title = '';
	
						if (tooltipItems.length > 0) {
							if (tooltipItems[0].yLabel) {
								title = tooltipItems[0].yLabel;
							} else if (data.labels.length > 0 && tooltipItems[0].index < data.labels.length) {
								title = data.labels[tooltipItems[0].index];
							}
						}
	
						return title;
					},
					label: function(tooltipItem, data) {
						var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
						return datasetLabel + ': ' + tooltipItem.xLabel;
					}
				}
			}
		};
	
		Chart.controllers.horizontalBar = Chart.controllers.bar.extend({
	
			// Correctly calculate the bar width accounting for stacks and the fact that not all bars are visible
			getStackCount: function() {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
	
				var stacks = [];
				helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
					var dsMeta = me.chart.getDatasetMeta(datasetIndex);
					if (dsMeta.bar && me.chart.isDatasetVisible(datasetIndex) &&
						(xScale.options.stacked === false ||
						(xScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
						(xScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
						stacks.push(dsMeta.stack);
					}
				}, me);
	
				return stacks.length;
			},
	
			updateElement: function(rectangle, index, reset) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var yScale = me.getScaleForId(meta.yAxisID);
				var scaleBase = xScale.getBasePixel();
				var custom = rectangle.custom || {};
				var dataset = me.getDataset();
				var rectangleElementOptions = me.chart.options.elements.rectangle;
	
				rectangle._xScale = xScale;
				rectangle._yScale = yScale;
				rectangle._datasetIndex = me.index;
				rectangle._index = index;
	
				var ruler = me.getRuler(index); // The index argument for compatible
				rectangle._model = {
					x: reset ? scaleBase : me.calculateBarX(index, me.index),
					y: me.calculateBarY(index, me.index, ruler),
	
					// Tooltip
					label: me.chart.data.labels[index],
					datasetLabel: dataset.label,
	
					// Appearance
					horizontal: true,
					base: reset ? scaleBase : me.calculateBarBase(me.index, index),
					height: me.calculateBarHeight(ruler),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
					borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
					borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
				};
	
				rectangle.pivot();
			},
	
			calculateBarBase: function(datasetIndex, index) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var base = xScale.getBaseValue();
				var originalBase = base;
	
				if (xScale.options.stacked ||
					(xScale.options.stacked === undefined && meta.stack !== undefined)) {
					var chart = me.chart;
					var datasets = chart.data.datasets;
					var value = Number(datasets[datasetIndex].data[index]);
	
					for (var i = 0; i < datasetIndex; i++) {
						var currentDs = datasets[i];
						var currentDsMeta = chart.getDatasetMeta(i);
						if (currentDsMeta.bar && currentDsMeta.xAxisID === xScale.id && chart.isDatasetVisible(i) &&
							meta.stack === currentDsMeta.stack) {
							var currentVal = Number(currentDs.data[index]);
							base += value < 0 ? Math.min(currentVal, originalBase) : Math.max(currentVal, originalBase);
						}
					}
	
					return xScale.getPixelForValue(base);
				}
	
				return xScale.getBasePixel();
			},
	
			getRuler: function() {
				var me = this;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
				var stackCount = me.getStackCount();
	
				var tickHeight = yScale.height / yScale.ticks.length;
				var categoryHeight = tickHeight * yScale.options.categoryPercentage;
				var categorySpacing = (tickHeight - (tickHeight * yScale.options.categoryPercentage)) / 2;
				var fullBarHeight = categoryHeight / stackCount;
	
				var barHeight = fullBarHeight * yScale.options.barPercentage;
				var barSpacing = fullBarHeight - (fullBarHeight * yScale.options.barPercentage);
	
				return {
					stackCount: stackCount,
					tickHeight: tickHeight,
					categoryHeight: categoryHeight,
					categorySpacing: categorySpacing,
					fullBarHeight: fullBarHeight,
					barHeight: barHeight,
					barSpacing: barSpacing
				};
			},
	
			calculateBarHeight: function(ruler) {
				var me = this;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
				if (yScale.options.barThickness) {
					return yScale.options.barThickness;
				}
				return ruler.barHeight;
			},
	
			// Get stack index from the given dataset index accounting for stacks and the fact that not all bars are visible
			getStackIndex: function(datasetIndex) {
				var me = this;
				var meta = me.chart.getDatasetMeta(datasetIndex);
				var xScale = me.getScaleForId(meta.xAxisID);
				var dsMeta, j;
				var stacks = [meta.stack];
	
				for (j = 0; j < datasetIndex; ++j) {
					dsMeta = this.chart.getDatasetMeta(j);
					if (dsMeta.bar && this.chart.isDatasetVisible(j) &&
						(xScale.options.stacked === false ||
						(xScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
						(xScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
						stacks.push(dsMeta.stack);
					}
				}
	
				return stacks.length - 1;
			},
	
			calculateBarX: function(index, datasetIndex) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var value = Number(me.getDataset().data[index]);
	
				if (xScale.options.stacked ||
					(xScale.options.stacked === undefined && meta.stack !== undefined)) {
					var base = xScale.getBaseValue();
					var sumPos = base,
						sumNeg = base;
	
					for (var i = 0; i < datasetIndex; i++) {
						var ds = me.chart.data.datasets[i];
						var dsMeta = me.chart.getDatasetMeta(i);
						if (dsMeta.bar && dsMeta.xAxisID === xScale.id && me.chart.isDatasetVisible(i) &&
							meta.stack === dsMeta.stack) {
							var stackedVal = Number(ds.data[index]);
							if (stackedVal < 0) {
								sumNeg += stackedVal || 0;
							} else {
								sumPos += stackedVal || 0;
							}
						}
					}
	
					if (value < 0) {
						return xScale.getPixelForValue(sumNeg + value);
					}
					return xScale.getPixelForValue(sumPos + value);
				}
	
				return xScale.getPixelForValue(value);
			},
	
			calculateBarY: function(index, datasetIndex, ruler) {
				var me = this;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
				var stackIndex = me.getStackIndex(datasetIndex);
				var topTick = yScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
				topTick -= me.chart.isCombo ? (ruler.tickHeight / 2) : 0;
	
				return topTick +
					(ruler.barHeight / 2) +
					ruler.categorySpacing +
					(ruler.barHeight * stackIndex) +
					(ruler.barSpacing / 2) +
					(ruler.barSpacing * stackIndex);
			}
		});
	};


/***/ },

/***/ 444:
/*!*********************************************************!*\
  !*** ./~/chart.js/src/controllers/controller.bubble.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.bubble = {
			hover: {
				mode: 'single'
			},
	
			scales: {
				xAxes: [{
					type: 'linear', // bubble should probably use a linear scale by default
					position: 'bottom',
					id: 'x-axis-0' // need an ID so datasets can reference the scale
				}],
				yAxes: [{
					type: 'linear',
					position: 'left',
					id: 'y-axis-0'
				}]
			},
	
			tooltips: {
				callbacks: {
					title: function() {
						// Title doesn't make sense for scatter since we format the data as a point
						return '';
					},
					label: function(tooltipItem, data) {
						var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
						var dataPoint = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
						return datasetLabel + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ', ' + dataPoint.r + ')';
					}
				}
			}
		};
	
		Chart.controllers.bubble = Chart.DatasetController.extend({
	
			dataElementType: Chart.elements.Point,
	
			update: function(reset) {
				var me = this;
				var meta = me.getMeta();
				var points = meta.data;
	
				// Update Points
				helpers.each(points, function(point, index) {
					me.updateElement(point, index, reset);
				});
			},
	
			updateElement: function(point, index, reset) {
				var me = this;
				var meta = me.getMeta();
				var xScale = me.getScaleForId(meta.xAxisID);
				var yScale = me.getScaleForId(meta.yAxisID);
	
				var custom = point.custom || {};
				var dataset = me.getDataset();
				var data = dataset.data[index];
				var pointElementOptions = me.chart.options.elements.point;
				var dsIndex = me.index;
	
				helpers.extend(point, {
					// Utility
					_xScale: xScale,
					_yScale: yScale,
					_datasetIndex: dsIndex,
					_index: index,
	
					// Desired view properties
					_model: {
						x: reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex, me.chart.isCombo),
						y: reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex),
						// Appearance
						radius: reset ? 0 : custom.radius ? custom.radius : me.getRadius(data),
	
						// Tooltip
						hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
					}
				});
	
				// Trick to reset the styles of the point
				Chart.DatasetController.prototype.removeHoverStyle.call(me, point, pointElementOptions);
	
				var model = point._model;
				model.skip = custom.skip ? custom.skip : (isNaN(model.x) || isNaN(model.y));
	
				point.pivot();
			},
	
			getRadius: function(value) {
				return value.r || this.chart.options.elements.point.radius;
			},
	
			setHoverStyle: function(point) {
				var me = this;
				Chart.DatasetController.prototype.setHoverStyle.call(me, point);
	
				// Radius
				var dataset = me.chart.data.datasets[point._datasetIndex];
				var index = point._index;
				var custom = point.custom || {};
				var model = point._model;
				model.radius = custom.hoverRadius ? custom.hoverRadius : (helpers.getValueAtIndexOrDefault(dataset.hoverRadius, index, me.chart.options.elements.point.hoverRadius)) + me.getRadius(dataset.data[index]);
			},
	
			removeHoverStyle: function(point) {
				var me = this;
				Chart.DatasetController.prototype.removeHoverStyle.call(me, point, me.chart.options.elements.point);
	
				var dataVal = me.chart.data.datasets[point._datasetIndex].data[point._index];
				var custom = point.custom || {};
				var model = point._model;
	
				model.radius = custom.radius ? custom.radius : me.getRadius(dataVal);
			}
		});
	};


/***/ },

/***/ 445:
/*!***********************************************************!*\
  !*** ./~/chart.js/src/controllers/controller.doughnut.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers,
			defaults = Chart.defaults;
	
		defaults.doughnut = {
			animation: {
				// Boolean - Whether we animate the rotation of the Doughnut
				animateRotate: true,
				// Boolean - Whether we animate scaling the Doughnut from the centre
				animateScale: false
			},
			aspectRatio: 1,
			hover: {
				mode: 'single'
			},
			legendCallback: function(chart) {
				var text = [];
				text.push('<ul class="' + chart.id + '-legend">');
	
				var data = chart.data;
				var datasets = data.datasets;
				var labels = data.labels;
	
				if (datasets.length) {
					for (var i = 0; i < datasets[0].data.length; ++i) {
						text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
						if (labels[i]) {
							text.push(labels[i]);
						}
						text.push('</li>');
					}
				}
	
				text.push('</ul>');
				return text.join('');
			},
			legend: {
				labels: {
					generateLabels: function(chart) {
						var data = chart.data;
						if (data.labels.length && data.datasets.length) {
							return data.labels.map(function(label, i) {
								var meta = chart.getDatasetMeta(0);
								var ds = data.datasets[0];
								var arc = meta.data[i];
								var custom = arc && arc.custom || {};
								var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
								var arcOpts = chart.options.elements.arc;
								var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
								var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
								var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
	
								return {
									text: label,
									fillStyle: fill,
									strokeStyle: stroke,
									lineWidth: bw,
									hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
	
									// Extra data used for toggling the correct item
									index: i
								};
							});
						}
						return [];
					}
				},
	
				onClick: function(e, legendItem) {
					var index = legendItem.index;
					var chart = this.chart;
					var i, ilen, meta;
	
					for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
						meta = chart.getDatasetMeta(i);
						// toggle visibility of index if exists
						if (meta.data[index]) {
							meta.data[index].hidden = !meta.data[index].hidden;
						}
					}
	
					chart.update();
				}
			},
	
			// The percentage of the chart that we cut out of the middle.
			cutoutPercentage: 50,
	
			// The rotation of the chart, where the first data arc begins.
			rotation: Math.PI * -0.5,
	
			// The total circumference of the chart.
			circumference: Math.PI * 2.0,
	
			// Need to override these to give a nice default
			tooltips: {
				callbacks: {
					title: function() {
						return '';
					},
					label: function(tooltipItem, data) {
						var dataLabel = data.labels[tooltipItem.index];
						var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
	
						if (helpers.isArray(dataLabel)) {
							// show value on first line of multiline label
							// need to clone because we are changing the value
							dataLabel = dataLabel.slice();
							dataLabel[0] += value;
						} else {
							dataLabel += value;
						}
	
						return dataLabel;
					}
				}
			}
		};
	
		defaults.pie = helpers.clone(defaults.doughnut);
		helpers.extend(defaults.pie, {
			cutoutPercentage: 0
		});
	
	
		Chart.controllers.doughnut = Chart.controllers.pie = Chart.DatasetController.extend({
	
			dataElementType: Chart.elements.Arc,
	
			linkScales: helpers.noop,
	
			// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
			getRingIndex: function(datasetIndex) {
				var ringIndex = 0;
	
				for (var j = 0; j < datasetIndex; ++j) {
					if (this.chart.isDatasetVisible(j)) {
						++ringIndex;
					}
				}
	
				return ringIndex;
			},
	
			update: function(reset) {
				var me = this;
				var chart = me.chart,
					chartArea = chart.chartArea,
					opts = chart.options,
					arcOpts = opts.elements.arc,
					availableWidth = chartArea.right - chartArea.left - arcOpts.borderWidth,
					availableHeight = chartArea.bottom - chartArea.top - arcOpts.borderWidth,
					minSize = Math.min(availableWidth, availableHeight),
					offset = {
						x: 0,
						y: 0
					},
					meta = me.getMeta(),
					cutoutPercentage = opts.cutoutPercentage,
					circumference = opts.circumference;
	
				// If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
				if (circumference < Math.PI * 2.0) {
					var startAngle = opts.rotation % (Math.PI * 2.0);
					startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
					var endAngle = startAngle + circumference;
					var start = {x: Math.cos(startAngle), y: Math.sin(startAngle)};
					var end = {x: Math.cos(endAngle), y: Math.sin(endAngle)};
					var contains0 = (startAngle <= 0 && 0 <= endAngle) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
					var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
					var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
					var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
					var cutout = cutoutPercentage / 100.0;
					var min = {x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))};
					var max = {x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)), y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))};
					var size = {width: (max.x - min.x) * 0.5, height: (max.y - min.y) * 0.5};
					minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
					offset = {x: (max.x + min.x) * -0.5, y: (max.y + min.y) * -0.5};
				}
	
				chart.borderWidth = me.getMaxBorderWidth(meta.data);
				chart.outerRadius = Math.max((minSize - chart.borderWidth) / 2, 0);
				chart.innerRadius = Math.max(cutoutPercentage ? (chart.outerRadius / 100) * (cutoutPercentage) : 0, 0);
				chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
				chart.offsetX = offset.x * chart.outerRadius;
				chart.offsetY = offset.y * chart.outerRadius;
	
				meta.total = me.calculateTotal();
	
				me.outerRadius = chart.outerRadius - (chart.radiusLength * me.getRingIndex(me.index));
				me.innerRadius = Math.max(me.outerRadius - chart.radiusLength, 0);
	
				helpers.each(meta.data, function(arc, index) {
					me.updateElement(arc, index, reset);
				});
			},
	
			updateElement: function(arc, index, reset) {
				var me = this;
				var chart = me.chart,
					chartArea = chart.chartArea,
					opts = chart.options,
					animationOpts = opts.animation,
					centerX = (chartArea.left + chartArea.right) / 2,
					centerY = (chartArea.top + chartArea.bottom) / 2,
					startAngle = opts.rotation, // non reset case handled later
					endAngle = opts.rotation, // non reset case handled later
					dataset = me.getDataset(),
					circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / (2.0 * Math.PI)),
					innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius,
					outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius,
					valueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
	
				helpers.extend(arc, {
					// Utility
					_datasetIndex: me.index,
					_index: index,
	
					// Desired view properties
					_model: {
						x: centerX + chart.offsetX,
						y: centerY + chart.offsetY,
						startAngle: startAngle,
						endAngle: endAngle,
						circumference: circumference,
						outerRadius: outerRadius,
						innerRadius: innerRadius,
						label: valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
					}
				});
	
				var model = arc._model;
				// Resets the visual styles
				this.removeHoverStyle(arc);
	
				// Set correct angles if not resetting
				if (!reset || !animationOpts.animateRotate) {
					if (index === 0) {
						model.startAngle = opts.rotation;
					} else {
						model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
					}
	
					model.endAngle = model.startAngle + model.circumference;
				}
	
				arc.pivot();
			},
	
			removeHoverStyle: function(arc) {
				Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
			},
	
			calculateTotal: function() {
				var dataset = this.getDataset();
				var meta = this.getMeta();
				var total = 0;
				var value;
	
				helpers.each(meta.data, function(element, index) {
					value = dataset.data[index];
					if (!isNaN(value) && !element.hidden) {
						total += Math.abs(value);
					}
				});
	
				/* if (total === 0) {
					total = NaN;
				}*/
	
				return total;
			},
	
			calculateCircumference: function(value) {
				var total = this.getMeta().total;
				if (total > 0 && !isNaN(value)) {
					return (Math.PI * 2.0) * (value / total);
				}
				return 0;
			},
	
			// gets the max border or hover width to properly scale pie charts
			getMaxBorderWidth: function(elements) {
				var max = 0,
					index = this.index,
					length = elements.length,
					borderWidth,
					hoverWidth;
	
				for (var i = 0; i < length; i++) {
					borderWidth = elements[i]._model ? elements[i]._model.borderWidth : 0;
					hoverWidth = elements[i]._chart ? elements[i]._chart.config.data.datasets[index].hoverBorderWidth : 0;
	
					max = borderWidth > max ? borderWidth : max;
					max = hoverWidth > max ? hoverWidth : max;
				}
				return max;
			}
		});
	};


/***/ },

/***/ 446:
/*!*******************************************************!*\
  !*** ./~/chart.js/src/controllers/controller.line.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.line = {
			showLines: true,
			spanGaps: false,
	
			hover: {
				mode: 'label'
			},
	
			scales: {
				xAxes: [{
					type: 'category',
					id: 'x-axis-0'
				}],
				yAxes: [{
					type: 'linear',
					id: 'y-axis-0'
				}]
			}
		};
	
		function lineEnabled(dataset, options) {
			return helpers.getValueOrDefault(dataset.showLine, options.showLines);
		}
	
		Chart.controllers.line = Chart.DatasetController.extend({
	
			datasetElementType: Chart.elements.Line,
	
			dataElementType: Chart.elements.Point,
	
			update: function(reset) {
				var me = this;
				var meta = me.getMeta();
				var line = meta.dataset;
				var points = meta.data || [];
				var options = me.chart.options;
				var lineElementOptions = options.elements.line;
				var scale = me.getScaleForId(meta.yAxisID);
				var i, ilen, custom;
				var dataset = me.getDataset();
				var showLine = lineEnabled(dataset, options);
	
				// Update Line
				if (showLine) {
					custom = line.custom || {};
	
					// Compatibility: If the properties are defined with only the old name, use those values
					if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
						dataset.lineTension = dataset.tension;
					}
	
					// Utility
					line._scale = scale;
					line._datasetIndex = me.index;
					// Data
					line._children = points;
					// Model
					line._model = {
						// Appearance
						// The default behavior of lines is to break at null values, according
						// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
						// This option gives lines the ability to span gaps
						spanGaps: dataset.spanGaps ? dataset.spanGaps : options.spanGaps,
						tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
						backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
						borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
						borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
						borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
						borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
						borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
						borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
						fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
						steppedLine: custom.steppedLine ? custom.steppedLine : helpers.getValueOrDefault(dataset.steppedLine, lineElementOptions.stepped),
						cubicInterpolationMode: custom.cubicInterpolationMode ? custom.cubicInterpolationMode : helpers.getValueOrDefault(dataset.cubicInterpolationMode, lineElementOptions.cubicInterpolationMode),
						// Scale
						scaleTop: scale.top,
						scaleBottom: scale.bottom,
						scaleZero: scale.getBasePixel()
					};
	
					line.pivot();
				}
	
				// Update Points
				for (i=0, ilen=points.length; i<ilen; ++i) {
					me.updateElement(points[i], i, reset);
				}
	
				if (showLine && line._model.tension !== 0) {
					me.updateBezierControlPoints();
				}
	
				// Now pivot the point for animation
				for (i=0, ilen=points.length; i<ilen; ++i) {
					points[i].pivot();
				}
			},
	
			getPointBackgroundColor: function(point, index) {
				var backgroundColor = this.chart.options.elements.point.backgroundColor;
				var dataset = this.getDataset();
				var custom = point.custom || {};
	
				if (custom.backgroundColor) {
					backgroundColor = custom.backgroundColor;
				} else if (dataset.pointBackgroundColor) {
					backgroundColor = helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, backgroundColor);
				} else if (dataset.backgroundColor) {
					backgroundColor = dataset.backgroundColor;
				}
	
				return backgroundColor;
			},
	
			getPointBorderColor: function(point, index) {
				var borderColor = this.chart.options.elements.point.borderColor;
				var dataset = this.getDataset();
				var custom = point.custom || {};
	
				if (custom.borderColor) {
					borderColor = custom.borderColor;
				} else if (dataset.pointBorderColor) {
					borderColor = helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, borderColor);
				} else if (dataset.borderColor) {
					borderColor = dataset.borderColor;
				}
	
				return borderColor;
			},
	
			getPointBorderWidth: function(point, index) {
				var borderWidth = this.chart.options.elements.point.borderWidth;
				var dataset = this.getDataset();
				var custom = point.custom || {};
	
				if (!isNaN(custom.borderWidth)) {
					borderWidth = custom.borderWidth;
				} else if (!isNaN(dataset.pointBorderWidth)) {
					borderWidth = helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, borderWidth);
				} else if (!isNaN(dataset.borderWidth)) {
					borderWidth = dataset.borderWidth;
				}
	
				return borderWidth;
			},
	
			updateElement: function(point, index, reset) {
				var me = this;
				var meta = me.getMeta();
				var custom = point.custom || {};
				var dataset = me.getDataset();
				var datasetIndex = me.index;
				var value = dataset.data[index];
				var yScale = me.getScaleForId(meta.yAxisID);
				var xScale = me.getScaleForId(meta.xAxisID);
				var pointOptions = me.chart.options.elements.point;
				var x, y;
				var labels = me.chart.data.labels || [];
				var includeOffset = (labels.length === 1 || dataset.data.length === 1) || me.chart.isCombo;
	
				// Compatibility: If the properties are defined with only the old name, use those values
				if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
					dataset.pointRadius = dataset.radius;
				}
				if ((dataset.hitRadius !== undefined) && (dataset.pointHitRadius === undefined)) {
					dataset.pointHitRadius = dataset.hitRadius;
				}
	
				x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex, includeOffset);
				y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);
	
				// Utility
				point._xScale = xScale;
				point._yScale = yScale;
				point._datasetIndex = datasetIndex;
				point._index = index;
	
				// Desired view properties
				point._model = {
					x: x,
					y: y,
					skip: custom.skip || isNaN(x) || isNaN(y),
					// Appearance
					radius: custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointOptions.radius),
					pointStyle: custom.pointStyle || helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointOptions.pointStyle),
					backgroundColor: me.getPointBackgroundColor(point, index),
					borderColor: me.getPointBorderColor(point, index),
					borderWidth: me.getPointBorderWidth(point, index),
					tension: meta.dataset._model ? meta.dataset._model.tension : 0,
					steppedLine: meta.dataset._model ? meta.dataset._model.steppedLine : false,
					// Tooltip
					hitRadius: custom.hitRadius || helpers.getValueAtIndexOrDefault(dataset.pointHitRadius, index, pointOptions.hitRadius)
				};
			},
	
			calculatePointY: function(value, index, datasetIndex) {
				var me = this;
				var chart = me.chart;
				var meta = me.getMeta();
				var yScale = me.getScaleForId(meta.yAxisID);
				var sumPos = 0;
				var sumNeg = 0;
				var i, ds, dsMeta;
	
				if (yScale.options.stacked) {
					for (i = 0; i < datasetIndex; i++) {
						ds = chart.data.datasets[i];
						dsMeta = chart.getDatasetMeta(i);
						if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
							var stackedRightValue = Number(yScale.getRightValue(ds.data[index]));
							if (stackedRightValue < 0) {
								sumNeg += stackedRightValue || 0;
							} else {
								sumPos += stackedRightValue || 0;
							}
						}
					}
	
					var rightValue = Number(yScale.getRightValue(value));
					if (rightValue < 0) {
						return yScale.getPixelForValue(sumNeg + rightValue);
					}
					return yScale.getPixelForValue(sumPos + rightValue);
				}
	
				return yScale.getPixelForValue(value);
			},
	
			updateBezierControlPoints: function() {
				var me = this;
				var meta = me.getMeta();
				var area = me.chart.chartArea;
				var points = (meta.data || []);
				var i, ilen, point, model, controlPoints;
	
				// Only consider points that are drawn in case the spanGaps option is used
				if (meta.dataset._model.spanGaps) {
					points = points.filter(function(pt) {
						return !pt._model.skip;
					});
				}
	
				function capControlPoint(pt, min, max) {
					return Math.max(Math.min(pt, max), min);
				}
	
				if (meta.dataset._model.cubicInterpolationMode === 'monotone') {
					helpers.splineCurveMonotone(points);
				} else {
					for (i = 0, ilen = points.length; i < ilen; ++i) {
						point = points[i];
						model = point._model;
						controlPoints = helpers.splineCurve(
							helpers.previousItem(points, i)._model,
							model,
							helpers.nextItem(points, i)._model,
							meta.dataset._model.tension
						);
						model.controlPointPreviousX = controlPoints.previous.x;
						model.controlPointPreviousY = controlPoints.previous.y;
						model.controlPointNextX = controlPoints.next.x;
						model.controlPointNextY = controlPoints.next.y;
					}
				}
	
				if (me.chart.options.elements.line.capBezierPoints) {
					for (i = 0, ilen = points.length; i < ilen; ++i) {
						model = points[i]._model;
						model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
						model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
						model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
						model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
					}
				}
			},
	
			draw: function(ease) {
				var me = this;
				var meta = me.getMeta();
				var points = meta.data || [];
				var easingDecimal = ease || 1;
				var i, ilen;
	
				// Transition Point Locations
				for (i=0, ilen=points.length; i<ilen; ++i) {
					points[i].transition(easingDecimal);
				}
	
				Chart.canvasHelpers.clipArea(me.chart.chart.ctx, me.chart.chartArea);
				// Transition and Draw the line
				if (lineEnabled(me.getDataset(), me.chart.options)) {
					meta.dataset.transition(easingDecimal).draw();
				}
				Chart.canvasHelpers.unclipArea(me.chart.chart.ctx);
	
				// Draw the points
				for (i=0, ilen=points.length; i<ilen; ++i) {
					points[i].draw(me.chart.chartArea);
				}
			},
	
			setHoverStyle: function(point) {
				// Point
				var dataset = this.chart.data.datasets[point._datasetIndex];
				var index = point._index;
				var custom = point.custom || {};
				var model = point._model;
	
				model.radius = custom.hoverRadius || helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
				model.backgroundColor = custom.hoverBackgroundColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
				model.borderColor = custom.hoverBorderColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
				model.borderWidth = custom.hoverBorderWidth || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
			},
	
			removeHoverStyle: function(point) {
				var me = this;
				var dataset = me.chart.data.datasets[point._datasetIndex];
				var index = point._index;
				var custom = point.custom || {};
				var model = point._model;
	
				// Compatibility: If the properties are defined with only the old name, use those values
				if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
					dataset.pointRadius = dataset.radius;
				}
	
				model.radius = custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, me.chart.options.elements.point.radius);
				model.backgroundColor = me.getPointBackgroundColor(point, index);
				model.borderColor = me.getPointBorderColor(point, index);
				model.borderWidth = me.getPointBorderWidth(point, index);
			}
		});
	};


/***/ },

/***/ 447:
/*!************************************************************!*\
  !*** ./~/chart.js/src/controllers/controller.polarArea.js ***!
  \************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.polarArea = {
	
			scale: {
				type: 'radialLinear',
				lineArc: true, // so that lines are circular
				ticks: {
					beginAtZero: true
				}
			},
	
			// Boolean - Whether to animate the rotation of the chart
			animation: {
				animateRotate: true,
				animateScale: true
			},
	
			startAngle: -0.5 * Math.PI,
			aspectRatio: 1,
			legendCallback: function(chart) {
				var text = [];
				text.push('<ul class="' + chart.id + '-legend">');
	
				var data = chart.data;
				var datasets = data.datasets;
				var labels = data.labels;
	
				if (datasets.length) {
					for (var i = 0; i < datasets[0].data.length; ++i) {
						text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
						if (labels[i]) {
							text.push(labels[i]);
						}
						text.push('</li>');
					}
				}
	
				text.push('</ul>');
				return text.join('');
			},
			legend: {
				labels: {
					generateLabels: function(chart) {
						var data = chart.data;
						if (data.labels.length && data.datasets.length) {
							return data.labels.map(function(label, i) {
								var meta = chart.getDatasetMeta(0);
								var ds = data.datasets[0];
								var arc = meta.data[i];
								var custom = arc.custom || {};
								var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
								var arcOpts = chart.options.elements.arc;
								var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
								var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
								var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
	
								return {
									text: label,
									fillStyle: fill,
									strokeStyle: stroke,
									lineWidth: bw,
									hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
	
									// Extra data used for toggling the correct item
									index: i
								};
							});
						}
						return [];
					}
				},
	
				onClick: function(e, legendItem) {
					var index = legendItem.index;
					var chart = this.chart;
					var i, ilen, meta;
	
					for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
						meta = chart.getDatasetMeta(i);
						meta.data[index].hidden = !meta.data[index].hidden;
					}
	
					chart.update();
				}
			},
	
			// Need to override these to give a nice default
			tooltips: {
				callbacks: {
					title: function() {
						return '';
					},
					label: function(tooltipItem, data) {
						return data.labels[tooltipItem.index] + ': ' + tooltipItem.yLabel;
					}
				}
			}
		};
	
		Chart.controllers.polarArea = Chart.DatasetController.extend({
	
			dataElementType: Chart.elements.Arc,
	
			linkScales: helpers.noop,
	
			update: function(reset) {
				var me = this;
				var chart = me.chart;
				var chartArea = chart.chartArea;
				var meta = me.getMeta();
				var opts = chart.options;
				var arcOpts = opts.elements.arc;
				var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
				chart.outerRadius = Math.max((minSize - arcOpts.borderWidth / 2) / 2, 0);
				chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
				chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
	
				me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
				me.innerRadius = me.outerRadius - chart.radiusLength;
	
				meta.count = me.countVisibleElements();
	
				helpers.each(meta.data, function(arc, index) {
					me.updateElement(arc, index, reset);
				});
			},
	
			updateElement: function(arc, index, reset) {
				var me = this;
				var chart = me.chart;
				var dataset = me.getDataset();
				var opts = chart.options;
				var animationOpts = opts.animation;
				var scale = chart.scale;
				var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
				var labels = chart.data.labels;
	
				var circumference = me.calculateCircumference(dataset.data[index]);
				var centerX = scale.xCenter;
				var centerY = scale.yCenter;
	
				// If there is NaN data before us, we need to calculate the starting angle correctly.
				// We could be way more efficient here, but its unlikely that the polar area chart will have a lot of data
				var visibleCount = 0;
				var meta = me.getMeta();
				for (var i = 0; i < index; ++i) {
					if (!isNaN(dataset.data[i]) && !meta.data[i].hidden) {
						++visibleCount;
					}
				}
	
				// var negHalfPI = -0.5 * Math.PI;
				var datasetStartAngle = opts.startAngle;
				var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
				var startAngle = datasetStartAngle + (circumference * visibleCount);
				var endAngle = startAngle + (arc.hidden ? 0 : circumference);
	
				var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
	
				helpers.extend(arc, {
					// Utility
					_datasetIndex: me.index,
					_index: index,
					_scale: scale,
	
					// Desired view properties
					_model: {
						x: centerX,
						y: centerY,
						innerRadius: 0,
						outerRadius: reset ? resetRadius : distance,
						startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
						endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
						label: getValueAtIndexOrDefault(labels, index, labels[index])
					}
				});
	
				// Apply border and fill style
				me.removeHoverStyle(arc);
	
				arc.pivot();
			},
	
			removeHoverStyle: function(arc) {
				Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
			},
	
			countVisibleElements: function() {
				var dataset = this.getDataset();
				var meta = this.getMeta();
				var count = 0;
	
				helpers.each(meta.data, function(element, index) {
					if (!isNaN(dataset.data[index]) && !element.hidden) {
						count++;
					}
				});
	
				return count;
			},
	
			calculateCircumference: function(value) {
				var count = this.getMeta().count;
				if (count > 0 && !isNaN(value)) {
					return (2 * Math.PI) / count;
				}
				return 0;
			}
		});
	};


/***/ },

/***/ 448:
/*!********************************************************!*\
  !*** ./~/chart.js/src/controllers/controller.radar.js ***!
  \********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var helpers = Chart.helpers;
	
		Chart.defaults.radar = {
			aspectRatio: 1,
			scale: {
				type: 'radialLinear'
			},
			elements: {
				line: {
					tension: 0 // no bezier in radar
				}
			}
		};
	
		Chart.controllers.radar = Chart.DatasetController.extend({
	
			datasetElementType: Chart.elements.Line,
	
			dataElementType: Chart.elements.Point,
	
			linkScales: helpers.noop,
	
			update: function(reset) {
				var me = this;
				var meta = me.getMeta();
				var line = meta.dataset;
				var points = meta.data;
				var custom = line.custom || {};
				var dataset = me.getDataset();
				var lineElementOptions = me.chart.options.elements.line;
				var scale = me.chart.scale;
	
				// Compatibility: If the properties are defined with only the old name, use those values
				if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
					dataset.lineTension = dataset.tension;
				}
	
				helpers.extend(meta.dataset, {
					// Utility
					_datasetIndex: me.index,
					// Data
					_children: points,
					_loop: true,
					// Model
					_model: {
						// Appearance
						tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
						backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
						borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
						borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
						fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
						borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
						borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
						borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
						borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
	
						// Scale
						scaleTop: scale.top,
						scaleBottom: scale.bottom,
						scaleZero: scale.getBasePosition()
					}
				});
	
				meta.dataset.pivot();
	
				// Update Points
				helpers.each(points, function(point, index) {
					me.updateElement(point, index, reset);
				}, me);
	
				// Update bezier control points
				me.updateBezierControlPoints();
			},
			updateElement: function(point, index, reset) {
				var me = this;
				var custom = point.custom || {};
				var dataset = me.getDataset();
				var scale = me.chart.scale;
				var pointElementOptions = me.chart.options.elements.point;
				var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);
	
				helpers.extend(point, {
					// Utility
					_datasetIndex: me.index,
					_index: index,
					_scale: scale,
	
					// Desired view properties
					_model: {
						x: reset ? scale.xCenter : pointPosition.x, // value not used in dataset scale, but we want a consistent API between scales
						y: reset ? scale.yCenter : pointPosition.y,
	
						// Appearance
						tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, me.chart.options.elements.line.tension),
						radius: custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointElementOptions.radius),
						backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor),
						borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor),
						borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth),
						pointStyle: custom.pointStyle ? custom.pointStyle : helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointElementOptions.pointStyle),
	
						// Tooltip
						hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
					}
				});
	
				point._model.skip = custom.skip ? custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
			},
			updateBezierControlPoints: function() {
				var chartArea = this.chart.chartArea;
				var meta = this.getMeta();
	
				helpers.each(meta.data, function(point, index) {
					var model = point._model;
					var controlPoints = helpers.splineCurve(
						helpers.previousItem(meta.data, index, true)._model,
						model,
						helpers.nextItem(meta.data, index, true)._model,
						model.tension
					);
	
					// Prevent the bezier going outside of the bounds of the graph
					model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, chartArea.right), chartArea.left);
					model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, chartArea.bottom), chartArea.top);
	
					model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, chartArea.right), chartArea.left);
					model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, chartArea.bottom), chartArea.top);
	
					// Now pivot the point for animation
					point.pivot();
				});
			},
	
			draw: function(ease) {
				var meta = this.getMeta();
				var easingDecimal = ease || 1;
	
				// Transition Point Locations
				helpers.each(meta.data, function(point) {
					point.transition(easingDecimal);
				});
	
				// Transition and Draw the line
				meta.dataset.transition(easingDecimal).draw();
	
				// Draw the points
				helpers.each(meta.data, function(point) {
					point.draw();
				});
			},
	
			setHoverStyle: function(point) {
				// Point
				var dataset = this.chart.data.datasets[point._datasetIndex];
				var custom = point.custom || {};
				var index = point._index;
				var model = point._model;
	
				model.radius = custom.hoverRadius ? custom.hoverRadius : helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
				model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
				model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
				model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
			},
	
			removeHoverStyle: function(point) {
				var dataset = this.chart.data.datasets[point._datasetIndex];
				var custom = point.custom || {};
				var index = point._index;
				var model = point._model;
				var pointElementOptions = this.chart.options.elements.point;
	
				model.radius = custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.radius, index, pointElementOptions.radius);
				model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor);
				model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor);
				model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth);
			}
		});
	};


/***/ },

/***/ 449:
/*!********************************************!*\
  !*** ./~/chart.js/src/charts/Chart.Bar.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		Chart.Bar = function(context, config) {
			config.type = 'bar';
	
			return new Chart(context, config);
		};
	
	};


/***/ },

/***/ 450:
/*!***********************************************!*\
  !*** ./~/chart.js/src/charts/Chart.Bubble.js ***!
  \***********************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		Chart.Bubble = function(context, config) {
			config.type = 'bubble';
			return new Chart(context, config);
		};
	
	};


/***/ },

/***/ 451:
/*!*************************************************!*\
  !*** ./~/chart.js/src/charts/Chart.Doughnut.js ***!
  \*************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		Chart.Doughnut = function(context, config) {
			config.type = 'doughnut';
	
			return new Chart(context, config);
		};
	
	};


/***/ },

/***/ 452:
/*!*********************************************!*\
  !*** ./~/chart.js/src/charts/Chart.Line.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		Chart.Line = function(context, config) {
			config.type = 'line';
	
			return new Chart(context, config);
		};
	
	};


/***/ },

/***/ 453:
/*!**************************************************!*\
  !*** ./~/chart.js/src/charts/Chart.PolarArea.js ***!
  \**************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		Chart.PolarArea = function(context, config) {
			config.type = 'polarArea';
	
			return new Chart(context, config);
		};
	
	};


/***/ },

/***/ 454:
/*!**********************************************!*\
  !*** ./~/chart.js/src/charts/Chart.Radar.js ***!
  \**********************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		Chart.Radar = function(context, config) {
			config.type = 'radar';
	
			return new Chart(context, config);
		};
	
	};


/***/ },

/***/ 455:
/*!************************************************!*\
  !*** ./~/chart.js/src/charts/Chart.Scatter.js ***!
  \************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(Chart) {
	
		var defaultConfig = {
			hover: {
				mode: 'single'
			},
	
			scales: {
				xAxes: [{
					type: 'linear', // scatter should not use a category axis
					position: 'bottom',
					id: 'x-axis-1' // need an ID so datasets can reference the scale
				}],
				yAxes: [{
					type: 'linear',
					position: 'left',
					id: 'y-axis-1'
				}]
			},
	
			tooltips: {
				callbacks: {
					title: function() {
						// Title doesn't make sense for scatter since we format the data as a point
						return '';
					},
					label: function(tooltipItem) {
						return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
					}
				}
			}
		};
	
		// Register the default config for this type
		Chart.defaults.scatter = defaultConfig;
	
		// Scatter charts use line controllers
		Chart.controllers.scatter = Chart.controllers.line;
	
		Chart.Scatter = function(context, config) {
			config.type = 'scatter';
			return new Chart(context, config);
		};
	
	};


/***/ }

});
//# sourceMappingURL=3.js.map