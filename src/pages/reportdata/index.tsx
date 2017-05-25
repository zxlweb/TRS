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
import Header from '../header';
import { getData } from '../../a-action/reportdata';
import * as moment from 'moment';
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
        if (dataAll.knowledge_point_info) {
            this.PaintPieRadarcontainer(dataAll.knowledge_point_info.overall, dataAll.knowledge_point_info.personal, Highcharts, 'kpcontainer', Chart, this.refs.kRadarChart);
        }
        this.PaintPieRadarcontainer(dataAll.question_type_info.overall, dataAll.question_type_info.personal, Highcharts, 'spcontainer', Chart, this.refs.SocreRadarChart);
    }
    PaintContainer(dataAll: any, Highcharts: any) {
        var xData = dataAll.overall_info;
        var xArr: any = [], yArr: any = [], zArr: any = [], myscore = dataAll.basic_info.user_total_score;
        var deviation = 40;
        xData.score_segments.forEach(function (score: any) {
            xArr.push(score.start_point + '-' + score.end_point)
            if ((myscore * 1 <= score.end_point * 1) && (myscore * 1 > score.start_point * 1)) {
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
                        pointFormat: ' {series.name}: <b>{point.y}</b><br/>'
                    }
                }
            ]
        });

    }
    PaintPieRadarcontainer(overall: any, personal: any, Highcharts: any, container: string, Chart: any, ctx: any) {
        let kpData: any = [];
        let temArr: any = [];
        let radarLable: any = [];
        let radarValuemy: any = [];
        let radarValueall: any = [];
        overall.forEach((ele: any, index: any) => {
            temArr = []
            temArr.push(ele.kpid || ele.tyid)
            temArr.push(ele.total_value)
            kpData.push(temArr)
            radarLable.push(ele.kpid || ele.kpid || ele.tyid)
            radarValueall.push(ele.mean_sr)
            radarValuemy.push(personal[index].score_rate)
        })
        let title;
        if (Highcharts && container == 'kpcontainer') {
            title = "知识点分数比重分布";
        } else if (Highcharts && container == 'spcontainer') {
            title = "题型分数比重分布";
        }
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
            }
        })
    }

    render() {

        const { dispatch, dataAll } = this.props;
        let exam_date = moment(dataAll.basic_info.exam_date);
        let fullYear = exam_date.format('YYYY-MM-DD');
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
                        <div className="info-sec">
                            <div className="title" style={{ backgroundColor: '#2270a7', color: '#fff' }}>个人排名</div>
                            <div className="detail">{dataAll.basic_info.user_rank}</div>
                        </div>
                        <div className="info-sec" style={{ marginBottom: '0px' }}>
                            <div className="title" style={{ backgroundColor: '#074977', color: '#fff' }}>个人奖项</div>
                            <div className="detail">{dataAll.basic_info.user_prize}</div>
                        </div>
                        <div className="cup">
                            <img src={`${__IMAGE_STATIC_PATH__}/gold-cup@2x.png`} alt="" />
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


                    {/*个人知识点掌握情况*/}
                    {
                        dataAll.knowledge_point_info ?
                            <div className="knowledge-report report-sec" >

                                <div className="r-title">
                                    <span className="r-title-sub"> <i className="r-title-badge before"></i>个人知识点掌握情况<i className="r-title-badge after"></i></span>
                                </div>

                                <div className="xcontainer">
                                    <div id="kpcontainer" ></div>
                                </div>
                                <div className="xcontainer">
                                    <div className="radar-title">个人能力分布</div>
                                    <canvas id="kRadarChart" width="300" ref="kRadarChart" height="250"></canvas>
                                </div>
                                <div className="xcontainer" style={{ marginTop: '40px' }}>
                                    <div className="table-title">知识点详情:</div>
                                    <Xtable p={dataAll.knowledge_point_info.personal} o={dataAll.knowledge_point_info.overall} title='知识点'></Xtable>
                                </div>
                                <Summarize item={dataAll.knowledge_point_info.conclusion}></Summarize>

                            </div> : ''
                    }
                    {/*个人题型得分情况*/}
                    < div className="score-report report-sec" >
                        <div className="r-title">
                            <span className="r-title-sub"> <i className="r-title-badge before"></i> 题型分数比重分布<i className="r-title-badge after"></i></span>
                        </div>

                        <div className="xcontainer">
                            <div id="spcontainer" ></div>
                        </div>
                        <div className="xcontainer">
                            <div className="radar-title">题型得分分布</div>
                            <canvas id="SocreRadarChart" width="300" height="250" ref="SocreRadarChart"></canvas>
                        </div>
                        <div className="xcontainer" style={{ marginTop: '30px' }}>
                            <div className="table-title">题型详情:</div>
                            <Xtable p={dataAll.question_type_info.personal} o={dataAll.question_type_info.overall} title='题型'></Xtable>
                        </div>
                        <Summarize item={dataAll.question_type_info.conclusion}></Summarize>

                    </div >
                    {/*个人小分分析*/}
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
                                            <div className="teacher-avatar"><img src={dataAll.teacher_review.teacher_head_icon} alt="" /> </div>
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
