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
var Xtable_1 = require("./Xtable");
var Summarize_1 = require("./Summarize");
var RankChart_1 = require("./RankChart");
var header_1 = require("../header");
var style = _importLess('./index', __dirname);
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
                        Highcharts = require('highcharts');
                        this.PaintContainer(Highcharts);
                        Chart = require('chart.js');
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
