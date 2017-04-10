/**
 * @fileOVerview trs UniExam page
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
import Header from '../header';
import RankChart from '../reportdata/rankchart';
import Summarize from '../reportdata/summarize';
import Xtable from '../reportdata/xtable';
import { getUniExam } from '../../a-action/uni-exam';
import * as moment from 'moment';
const style = _importLess('../reportdata/index', __dirname);
class UniExam extends BaseComponent<{
    dataUniExam: any
}, {}>
{
    async interceptor(req: _expressStatic.Request, res: _expressStatic.Response, next: _expressStatic.NextFunction): Promise<any> { }

    setUpPage(manager: HTMLManager, data: any) {
    }
    getInitDataActionImp(props: any): void | any[] {
        console.log(props.params);
        return [
            getUniExam(props.params.cid, props.params.sid)
        ]
    }
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        const { dataUniExam } = this.props;
        const Chart = require('chart.js');
        const Highcharts = require('highcharts');
        this.PaintContainer(dataUniExam, Highcharts);
        this.PaintPieRadarcontainer(dataUniExam.single_exam_statistics.statistics, null, '', Chart, this.refs.SubjectRadarChart)

    }
    PaintContainer(dataAll: any, Highcharts: any) {
        var xData = dataAll.overall_info;
        var xArr: any = [], yArr: any = [], zArr: any = [], myscore = dataAll.basic_info.user_total_score;
        xData.score_segments.forEach(function (score: any) {
            xArr.push(score.start_point + '-' + score.end_point)
            if ((myscore * 1 <= score.end_point * 1) && (myscore * 1 > score.start_point * 1)) {
                yArr.push({ y: score.count, color: '#FF6384' })
                zArr.push({ y: score.count + 200 })
            } else {
                yArr.push(score.count)
                zArr.push(score.count + 200)
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
                        return x + this.series.name + ":" + (this.y - 200)
                    }
                }
            },

        });

    }
    PaintPieRadarcontainer(statics: any, Highcharts: any, container: string, Chart: any, ctx: any) {
        let radarLable: any = [];
        let radarValuemy: any = [];
        let radarValueall: any = [];
        statics.forEach((ele: any, index: any) => {
            radarLable.push(ele.title)
            radarValueall.push(ele.mean_rate)
            radarValuemy.push(ele.score_rate)
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
        const { dataUniExam } = this.props;
        let exam_date = moment(dataUniExam.basic_info.exam_date);
        let fullYear = exam_date.format('YYYY-MM-DD');
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: style }}></style>
                <Header></Header>
                <div className="UniExam-container container" >
                    {/*basic_info*/}
                    <div className="basic-info-sec">
                        <div className="usr-info">你好，{dataUniExam.basic_info.user_name}，欢迎来到TRS</div>
                        <div className="info-sec">
                            <div className="title">统考名称：</div>
                            <div className="detail">{dataUniExam.basic_info.exam_title}</div>
                        </div>
                        <div className="info-sec">
                            <div className="title">考试时间：</div>
                            <div className="detail">{fullYear}</div>
                        </div>
                        <div className="info-sec">
                            <div className="title">个人分数：</div>
                            <div className="detail">{`${dataUniExam.basic_info.user_total_score}/${dataUniExam.basic_info.exam_total_score}`}</div>
                        </div>
                        <div className="info-sec">
                            <div className="title">个人排名：</div>
                            <div className="detail">{dataUniExam.basic_info.user_rank}</div>
                        </div>
                    </div>

                    {/*rank */}
                    <div className="overall-report report-sec">
                        <div className="r-title">年级总体情况</div>
                        <div className="xcontainer">
                            <div><i className="demo"></i>你所在的分数段</div>
                            <div id="container"></div>
                        </div>
                        <div className="rcontainer">
                            <div className="score-des">
                                <div className="average-score score-des-detail"><div className="scroe-title">本次考试平均分</div><div className="score-sub">{dataUniExam.overall_info.mean_score}</div></div>
                                <div className="highest-score score-des-detail"><div className="scroe-title">本次考试最高分</div><div className="score-sub">{dataUniExam.overall_info.highest_score}</div></div>
                                <RankChart title="总体排名分布" msg={dataUniExam.overall_info}> </RankChart>
                                {
                                    dataUniExam.single_exam_rank.map((item: any, index: number) => {
                                        return <RankChart msg={item} title={item.title} key={index}></RankChart>
                                    })
                                }
                            </div>
                        </div >
                    </div >

                    {/*学科分布雷达图*/}
                    < div className="score-report report-sec" >
                        <div className="r-title">各学科得分分布</div>

                        <div className="xcontainer">各学科得分分布
                             <canvas id="SubjectRadarChart" width="706" height="706" ref="SubjectRadarChart"></canvas>
                        </div>
                    </div >

                    {/*ad*/}
                    <div className="ad">
                        <a href={dataUniExam.ad.redirect_url}>
                            <img alt="" src={dataUniExam.ad.img} />
                        </a>
                    </div>
                </div>
                <footer>Copyright © 2017 南京学而思市场部</footer>
            </div>
        )
    }
}

const selector = createSelector(
    (state: any) => state.uniExamData.get('dataUniExam'),
    (dataUniExam: Immutable.List<any>) => ({
        dataUniExam: dataUniExam.toJS()
    })
)


export = connect(selector)(UniExam);




