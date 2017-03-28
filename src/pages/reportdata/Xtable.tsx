import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector, BaseComponent, HTMLManager } from 'razy/dist/lib';
import * as _expressStatic from 'express-serve-static-core';
import * as Immutable from 'immutable';
import { browserHistory } from 'react-router';
import { ROUTE_PATH } from '../../routes';
import REQUEST from '../../const/request';
class Xtable extends React.Component<{
    p: any,
    o: any
}, {
    }>{
    render() {
        let temArr: any = [];
        let title = '';
        if (this.props.p.length) {
            this.props.p.forEach((ele: any, index: any) => {
                let value = this.props.o[index].total_value;
                let myScore: any = (ele.score_rate * value).toFixed(0);
                let meanScore: any = (this.props.o[index].mean_sr * value).toFixed(2);
                let obj={
                     score_rate: myScore,
                     mean_sr: meanScore,
                     score_vary: (myScore - meanScore) > 0 ? "高" + (myScore - meanScore).toFixed(2) + "分" : "低" + (meanScore - myScore).toFixed(2) + "分",
                     score_vary_positive: (myScore - meanScore) > 0
                }
                if (!!ele.tyid) {
                    Object.assign(obj,{ tyid: ele.tyid,});
                    temArr.push(obj);
                    title = '题型'
                } else {
                     Object.assign(obj,{ tyid: ele.kpid,});
                     temArr.push(obj);
                     title = '知识点'
                }
            }
            )
        }

        return (
            <table className="rd-table">
                <thead className="rd-table-thead">
                    <tr className="rd-table-th">
                        <td className="rd-table-td">{title}</td>
                        <td className="rd-table-td">得分</td>
                        <td className="rd-table-td">平均得分</td>
                        <td className="rd-table-td">分差</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        (() => {
                            let trs = [];
                           for (let i = 0; i < temArr.length; i++) {
                                trs.push(
                                    <tr className="rd-table-tr" key={i}>
                                        <td className="rd-table-td">{temArr[i].tyid}</td>
                                        <td className="rd-table-td">{temArr[i].score_rate}</td>
                                        <td className="rd-table-td">{temArr[i].mean_sr}</td>
                                        <td className={`${(temArr[i].score_vary.indexOf("高")) != -1? "positive":" "}  rd-table-td`}>{temArr[i].score_vary}</td>
                                    </tr>
                                )
                            }
                          return trs;
                        })()
                    }
                </tbody>
            </table>
        )
    }

}

export default Xtable;