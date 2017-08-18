/**
 * @fileOVerview trs reportdata page
 * @author zxl
 */
import * as React from 'react';
import { connect } from 'react-redux';
import BaseComponent from 'razy/dist/lib/base-component';
import HTMLManager from 'razy/dist/lib/html-manager';
import createSelector from 'razy/dist/lib/immu-reselect';
import * as _expressStatic from 'express-serve-static-core';
import * as Immutable from 'immutable';
import { browserHistory } from 'react-router';
import { ROUTE_PATH } from '../../routes';
import REQUEST from '../../const/request';
import Xtable from './xtable';
import Summarize from './summarize';
import RankChart from './rankchart';
import { getData } from '../../a-action/reportdata';
import * as moment from 'moment';
import findIndex = require('lodash.findindex');
const style = _importLess('./index', __dirname);
class Reportdata extends BaseComponent<{
    dataAll: any
}, {

    }>{
    async interceptor(req: _expressStatic.Request, res: _expressStatic.Response, next: _expressStatic.NextFunction): Promise<any> { }
    setUpPage(manager: HTMLManager, datas: any) {
        if (datas[0].teacher_oriented_info.flag === false) {
            manager.setTag('title', `${datas[0].basic_info.user_name}的${datas[0].basic_info.exam_title}中的表现报告`);
        } else {
            manager.setTag('title', `${datas[0].basic_info.user_name}在${datas[0].basic_info.exam_title}中战胜了${(datas[0].teacher_oriented_info.user_percent).toFixed(2) * 100}%的同学`);
        }
    }
    getInitDataActionImp(props: any): void | any[] {
        return [
            getData(props.params.sid, props.params.eid)
        ]
    }
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        super.componentDidMount();
        const { dispatch, dataAll } = this.props;
        const Highcharts = require('highcharts');
        this.PaintContainer(dataAll, Highcharts);
        const Chart = require('chart.js');
        let { question_type_info } = this.props.dataAll;
        question_type_info.map((item: any) => {
            this.PaintPieRadarcontainer(item.overall, item.personal, Highcharts, item.name, item.uuid, Chart, item.uuid)
        })

    }
    PaintContainer(dataAll: any, Highcharts: any) {
        var xData = dataAll.overall_info;
        var xArr: any = [], yArr: any = [], zArr: any = [], myscore = dataAll.basic_info.user_total_score;
        var deviation = 40;
        xData.score_segments.forEach(function (score: any) {
            let start_point = score.start_point.toFixed(2);
            let end_point = score.end_point.toFixed(2);
            xArr.push(start_point + '-' + end_point);
            if (score.end_point == dataAll.basic_info.exam_total_score ? (myscore * 1 <= score.end_point * 1) && (myscore * 1 >= score.start_point * 1) : (myscore * 1 < score.end_point * 1) && (myscore * 1 >= score.start_point * 1)) {
                yArr.push({ y: score.count, color: '#f6bc5d' })
                zArr.push({ y: score.count + deviation })
            } else {
                yArr.push(score.count)
                zArr.push(score.count + deviation)
            }
        })
        Highcharts.chart('container', {
            chart: {
                height: 280,
                type: 'spline'
            },

            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: xArr
            },
            yAxis: [
                { // Primary yAxis
                    labels: {
                        format: '{value}',
                        style: {
                            color: '#6a7381'
                        },
                        align: 'center'
                    },
                    title: {
                        text: ''
                    }
                }
            ],

            series: [
                {
                    type: 'column',
                    name: '各分数段人数',
                    data: yArr,
                    color: '#53a8e2',
                    groupPadding: 0.05

                },
                {
                    type: 'spline',
                    name: '分数段人数',
                    data: zArr,
                    color: '#5e8ca8',
                    marker: {
                        lineWidth: 1,
                        lineColor: '#f5a623',
                        fillColor: '#f8e71c'
                    },
                    lineWidth: 1.5,
                    tooltip: {
                        valueSuffix: '人',
                        pointFormatter: function (point: any) {
                            let y = Number(this.y) - 40;
                            return `${this.series.name}: <b>${y}</b><br/>`
                        }
                    }
                }
            ]
        });

    }
    PaintPieRadarcontainer(overall: any, personal: any, Highcharts: any, name: string, container: string, Chart: any, ctx: any) {
        let kpData: any = [];
        let temArr: any = [];
        let radarLable: any = [];
        let radarValuemy: any = [];
        let radarValueall: any = [];
        overall.forEach((ele: any, index: any) => {
            let idx = findIndex(personal, (item: any) => item.tag_name == ele.tag_name)
            temArr = []
            temArr.push(ele.tag_name)
            temArr.push(ele.total_value)
            kpData.push(temArr)
            radarLable.push(ele.tag_name)
            radarValueall.push(ele.mean_sr / ele.total_value)
            radarValuemy.push(personal[index].score_rate)
        })
        let title = name;


        Highcharts.chart(container, {
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: 20,
                        style: {
                            fontWeight: 'bold',
                            color: '#666',
                            fontSize: '10px'
                        }
                    },
                    startAngle: -90,
                    endAngle: 270,
                    colors: ['#9eb5d1', '#d8d8d8', '#074977', '#2270a7', '#51aae4', '#76ddfb', '#dbecf8', '#9eb5d1']
                }
            },
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
                type: 'pie'
            },
            credits: {
                enabled: false
            },
            title: {
                text: title,
                style: {
                    color: '#333',
                    fontSize: '12px'
                }
            },
            series: [{
                type: 'pie',
                innerSize: '60%',
                name: title,
                data: kpData
            }],
            tooltip: {
                backgroundColor: 'rgba(90,101,116,0.8)',
                borderColor: 'rgba(90,101,116,0.8)',
                style: {
                    color: 'white'
                },
                padding: 10,
                headerFormat: '',
                pointFormat: '<span style="color:{point.color}">\u25CF</span> <span style="color:{point.color}">{point.name}:</span> <b style="color:white">{point.y}</b><br/>',
            }
        })
        // 绘制个人能力分布图
        let myRadarChart = new Chart(ctx, {
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
            },

            options: {
                scale: {
                    ticks: {
                        beginAtZero: true,
                        max: 1,
                        min: 0,
                        stepSize: 0.2
                    }
                }
            }

        }

        )
    }


    render() {

        const { dispatch, dataAll } = this.props;
        let { exam_title } = dataAll.basic_info;
        let arr = ['一年级', '二年级', '三年级', '四年级', '五年级'];
        let imgSrc = '';
        let idx = findIndex(arr, (i) => exam_title.indexOf(i) != -1);
        if (idx != -1 && exam_title.indexOf('英语') != -1) {
            imgSrc = `${__IMAGE_STATIC_PATH__}/lele.png`
        } else {
            imgSrc = dataAll.teacher_review.teacher_head_icon
        }
        let exam_date = moment(dataAll.basic_info.exam_date);
        let fullYear = exam_date.format('YYYY-MM-DD');
        let cupType = '';
        let { user_prize, user_prize_idx } = dataAll.basic_info;
        if (user_prize) {
            switch (user_prize_idx) {
                case '一等奖': case 'S':
                    cupType = 'gold-cup@2x.png'; break;
                case '二等奖': case 'A+':
                    cupType = 'silver-cup@2x.png'; break;
                case '三等奖': case 'A':
                    cupType = 'copper-cup@2x.png'; break;
                default: cupType = 'defaultCup.png';
            }
        } else {
            user_prize = "—"; cupType = 'defaultCup.png'
        }
        // 标签类别
        let { question_type_info } = this.props.dataAll;


        return (
            <div id="app-report">
                <style dangerouslySetInnerHTML={{ __html: style }}></style>
                <div className="report-container">
                    <div className="top-title">{dataAll.basic_info.exam_title}</div>
                    {/*basic_info*/}
                    <div className="basic-info-sec">
                        <div className="info-sec">
                            <div className="title" style={{ backgroundColor: '#dbecf8' }}>学员名称</div>
                            <div className="detail">{dataAll.basic_info.user_name}</div>
                        </div>
                        <div className="info-sec">
                            <div className="title" style={{ backgroundColor: '#c1e5f3' }}>考试时间</div>
                            <div className="detail">{fullYear}</div>
                        </div>
                        <div className="info-sec">
                            <div className="title" style={{ backgroundColor: '#51aae4', color: '#fff' }}>个人分数</div>
                            <div className="detail">{`${dataAll.basic_info.user_total_score}/${dataAll.basic_info.exam_total_score}`}</div>
                        </div>
                        {/*<div className="info-sec">
                            <div className="title" style={{ backgroundColor: '#2270a7', color: '#fff' }}>个人排名</div>
                            <div className="detail">{dataAll.basic_info.user_rank}</div>
                        </div>*/}
                        <div className="info-sec" style={{ marginBottom: '0px' }}>
                            <div className="title" style={{ backgroundColor: '#074977', color: '#fff' }}>个人奖项</div>
                            <div className="detail">{user_prize}</div>
                        </div>
                        <div className="cup">
                            <img src={`${__IMAGE_STATIC_PATH__}/${cupType}`} alt="" />
                        </div>
                    </div>
                    {/*试卷说明*/}
                    <div className="overall-report report-sec">
                        <div className="r-title">
                            <span className="r-title-sub"> <i className="r-title-badge before"></i>试卷说明<i className="r-title-badge after"></i></span>
                        </div>
                        <div className="description">
                            <div className="des-detail">
                                {dataAll.overall_info.statement}
                            </div>
                        </div>
                    </div>
                    {/*年级总体情况*/}
                    <div className="overall-report overall-sec">
                        <div className="r-title">
                            <span className="r-title-sub"> <i className="r-title-badge before"></i>年级总体情况<i className="r-title-badge after"></i></span>
                        </div>
                        <div className="xcontainer">
                            <div className="pull-right demo-wrap"><i className="demo"></i>你所在的分数段</div>
                            <div id="container"></div>
                        </div>
                        <div className="rcontainer">
                            <div className="score-des">
                                <div className="average-score score-des-detail"><div className="score-title" style={{ backgroundColor: '#a8cdf7' }}>本次考试平均分</div><div className="score-sub" style={{ backgroundColor: '#d9e6f5' }}>{dataAll.overall_info.mean_score}</div></div>
                                <div className="highest-score score-des-detail"><div className="score-title" style={{ backgroundColor: '#a8e0f7' }}>本次考试最高分</div><div className="score-sub" style={{ backgroundColor: '#d4ddf5' }}>{dataAll.overall_info.highest_score}</div></div>
                                <RankChart title="总体排名分布" msg={dataAll.overall_info} key="1"></RankChart>
                                {
                                    dataAll.teacher_oriented_info.flag === false ? '' :
                                        <RankChart title="同门排名分布" msg={dataAll.teacher_oriented_info} key="2"></RankChart>
                                }
                            </div>
                        </div >
                        <Summarize item={dataAll.overall_info.conclusion}></Summarize>
                    </div>

                    {
                        question_type_info.map((item: any) => {
                            return (
                                <div className="report-sec" >

                                    <div className="r-title">
                                        <span className="r-title-sub"> <i className="r-title-badge before"></i>{item.name}<i className="r-title-badge after"></i></span>
                                    </div>

                                    <div className="xcontainer">
                                        <div id="pcontainer" ></div>
                                    </div>
                                    <div className="xcontainer">
                                        <div className="radar-title">{item.name}分布</div>
                                        <canvas id={item.uuid} width="300" ref={item.uuid} height="250"></canvas>
                                    </div>
                                    <div className="xcontainer" style={{ marginTop: '40px' }}>
                                        <div className="table-title">{item.name}</div>
                                        <Xtable p={item.personal} o={item.overall} title={item.name}></Xtable>
                                    </div>
                                    <Summarize item={item.conclusion}></Summarize>

                                </div>
                            )
                        })
                    }
                    {
                        dataAll.question_detail_info.length !== 0 ?
                            <div className="personal-report">
                                <div className="r-title">
                                    <span className="r-title-sub"> <i className="r-title-badge before"></i>个人小分分析<i className="r-title-badge after"></i></span>
                                </div>
                                <div className="table-wrap">
                                    <table className="rd-table">
                                        <thead className="rd-table-thead">
                                            <tr className="rd-table-th">
                                                <td className="rd-table-td">题号</td>
                                                <td className="rd-table-td">分值</td>
                                                <td className="rd-table-td">你的得分</td>
                                                <td className="rd-table-td">平均得分</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                (() => {
                                                    let trs = [];
                                                    let question = dataAll.question_detail_info;
                                                    question.sort((a: any, b: any) => {
                                                        return b.seq_index - a.seq_index
                                                    })
                                                    for (var i = 0; i < question.length; i++) {
                                                        trs.push(
                                                            <tr className="rd-table-tr" key={i}>
                                                                <td className="rd-table-td">{question[i].index}</td>
                                                                <td className="rd-table-td">{question[i].value}</td>
                                                                <td className={`${(question[i].user_score > question[i].mean_score) ? 'positive' : ' '} rd-table-td`}>{question[i].user_score}</td>
                                                                <td className="rd-table-td">{question[i].mean_score.toFixed(2)}</td>
                                                            </tr>
                                                        )
                                                    }
                                                    return trs;
                                                })()
                                            }
                                        </tbody>
                                    </table>
                                </div>

                                {/*教师点评*/}
                                < div className="t-comment" >
                                    <div className="t-title">教师点评</div>
                                    <div className="comment-wrapper">
                                        <div className="teacher">
                                            <div className="teacher-avatar"><img src={imgSrc} alt="" /> </div>
                                        </div>
                                        <div className="comment">
                                            <i className="quot">
                                                <img src={`${__IMAGE_STATIC_PATH__}/quot@3x.png`} />
                                            </i>
                                            <i className="quot2">
                                                <img src={`${__IMAGE_STATIC_PATH__}/quot2@3x.png`} />
                                            </i>
                                            <div>
                                                <div>{dataAll.teacher_review.review_overall}</div>
                                                <div>{dataAll.teacher_review.review_knowledge}</div>
                                                <div>{dataAll.teacher_review.review_question_type}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div >

                            </div> : ''
                    }
                    {/*ad*/}
                    <div className="ad">
                        <a href={dataAll.ad.redirect_url}>
                            <img src={dataAll.ad.img} alt="" />
                        </a>
                    </div>
                </div >
                <footer>Copyright © 2017 南京学而思市场部</footer>
            </div>
        )
    }
}
const selector = createSelector(
    (state: any) => state.reportdata.get('dataAll'),
    (reportdata: Immutable.List<any>) => ({
        dataAll: reportdata.toJS()
    })
)
export = connect(selector)(Reportdata);
