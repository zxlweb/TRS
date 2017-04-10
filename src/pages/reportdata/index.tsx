/**
 * @fileOVerview trs reportdata page
 * @author zxl
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector, BaseComponent, HTMLManager } from 'razy/dist/lib';
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
        if(dataAll.knowledge_point_info) {
            this.PaintPieRadarcontainer(dataAll.knowledge_point_info.overall, dataAll.knowledge_point_info.personal, Highcharts, 'kpcontainer', Chart, this.refs.kRadarChart);
        }
        this.PaintPieRadarcontainer(dataAll.question_type_info.overall, dataAll.question_type_info.personal, Highcharts, 'spcontainer', Chart, this.refs.SocreRadarChart);
    }
    PaintContainer(dataAll: any, Highcharts: any) {
        var xData = dataAll.overall_info;
        var xArr: any = [], yArr: any = [], zArr: any = [], myscore = dataAll.basic_info.user_total_score;
        xData.score_segments.forEach(function (score: any) {
            xArr.push(score.start_point + '-' + score.end_point)
            if ((myscore * 1 <= score.end_point * 1) && (myscore * 1 > score.start_point * 1)) {
                yArr.push({ y: score.count, color: '#FF6384' })
                zArr.push({ y: score.count + 20 })
            } else {
                yArr.push(score.count)
                zArr.push(score.count + 20)
            }
        })

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
            yAxis: [{ // Primary yAxis
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
            }, { // Primary yAxis
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
                        return x + this.series.name + ":" + (this.y - 20)
                    }
                }
            },

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
        if (Highcharts && container == 'kpcontainer') {
            Highcharts.chart(container, {
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
            })

        } else if (Highcharts && container == 'spcontainer') {
            Highcharts.chart(container, {
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
            })

        }
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
                <Header></Header>
                <div className="report-container">
                    {/*basic_info*/}
                    <div className="basic-info-sec">
                        <div className="usr-info">你好，{dataAll.basic_info.user_name}!欢迎来到TRS!</div>
                        <div className="info-sec">
                            <div className="title">考试名称：</div>
                            <div className="detail">{dataAll.basic_info.exam_title}</div>
                        </div>
                        <div className="info-sec">
                            <div className="title">考试时间：</div>
                            <div className="detail">{fullYear}</div>
                        </div>
                        <div className="info-sec">
                            <div className="title">个人分数：</div>
                            <div className="detail">{`${dataAll.basic_info.user_total_score}/${dataAll.basic_info.exam_total_score}`}</div>
                        </div>
                        <div className="info-sec">
                            <div className="title">个人排名：</div>
                            <div className="detail">{dataAll.basic_info.user_rank}</div>
                        </div>
                        <div className="info-sec">
                            <div className="title">个人奖项：</div>
                            <div className="detail">{dataAll.basic_info.user_prize}</div>
                        </div>
                    </div>
                    {/*个人能力分布*/}
                    <div className="overall-report report-sec">
                        <div className="r-title">试卷说明</div>
                        <div className="description">
                            <div className="des-detail">
                                {dataAll.overall_info.statement}
                            </div>
                        </div>
                        <div className="r-title">年级总体情况</div>
                        <div className="xcontainer">
                            <div><i className="demo"></i>你所在的分数段</div>
                            <div id="container"></div>
                        </div>
                        <div className="rcontainer">
                            <div className="score-des">
                                <div className="average-score score-des-detail"><div className="scroe-title">本次考试平均分</div><div className="score-sub">{dataAll.overall_info.mean_score}</div></div>
                                <div className="highest-score score-des-detail"><div className="scroe-title">本次考试最高分</div><div className="score-sub">{dataAll.overall_info.highest_score}</div></div>
                                <RankChart title="总体排名分布" msg={dataAll.overall_info}></RankChart>
                                {
                                    dataAll.teacher_oriented_info.flag === false ? '' :
                                        <RankChart title="同门排名分布" msg={dataAll.teacher_oriented_info}></RankChart>
                                }
                            </div>
                        </div >
                        <Summarize item={dataAll.overall_info.conclusion}></Summarize>
                    </div >
                    {/*个人知识点掌握情况*/}
                    {
                        dataAll.knowledge_point_info ?
                            <div className="knowledge-report report-sec" >
                                <div className="rtitle">个人知识点掌握情况</div>

                                <div className="xcontainer">
                                    <div id="kpcontainer" ></div>
                                </div>
                                <div className="xcontainer">个人能力分布
                             <canvas id="kRadarChart" width="300" ref="kRadarChart" height="300"></canvas>
                                </div>
                                <div className="xcontainer">
                                    <div className="table-title">知识点详情:</div>
                                    <Xtable p={dataAll.knowledge_point_info.personal} o={dataAll.knowledge_point_info.overall} title='知识点'></Xtable>
                                </div>
                                <Summarize item={dataAll.knowledge_point_info.conclusion}></Summarize>

                            </div> : ''
                    }
                    {/*个人题型得分情况*/}
                    < div className="score-report report-sec" >
                        <div className="r-title">题型分数比重分布</div>

                        <div className="xcontainer">
                            <div id="spcontainer" ></div>
                        </div>
                        <div className="xcontainer">题型得分分布
                             <canvas id="SocreRadarChart" width="706" height="706" ref="SocreRadarChart"></canvas>
                        </div>
                        <div className="xcontainer">
                            <div className="table-title">题型详情:</div>
                            <Xtable p={dataAll.question_type_info.personal} o={dataAll.question_type_info.overall} title='题型'></Xtable>
                        </div>
                        <Summarize item={dataAll.question_type_info.conclusion}></Summarize>

                    </div >
                    {/*个人小分分析*/}
                    {
                        dataAll.question_detail_info.length !== 0 ?
                            <div>
                                <div className="rtitle">个人小分分析</div>
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
                            </div> : ''
                    }
                    {/*教师点评*/}
                    < div className="t-comment" >
                        <div className="t-title">教师点评</div>
                        <div className="comment-wrapper">
                            <div className="teacher">
                                <div className="teacher-avatar"><img src={dataAll.teacher_review.teacher_head_icon} alt="" /> </div>
                                <div className="teacher-name">{dataAll.teacher_review.teacher_name}</div>
                            </div>
                            <div className="comment">
                                <i className="quot">
                                    <img src={`${__IMAGE_STATIC_PATH__}/quot.png`} />
                                </i>
                                <i className="quot2">
                                    <img src={`${__IMAGE_STATIC_PATH__}/quot2.png`} />
                                </i>
                                <div>
                                    <div>{dataAll.teacher_review.review_overall}</div>
                                    <div>{dataAll.teacher_review.review_knowledge}</div>
                                    <div>{dataAll.teacher_review.review_question_type}</div>
                                </div>
                            </div>
                        </div>
                    </div >
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
