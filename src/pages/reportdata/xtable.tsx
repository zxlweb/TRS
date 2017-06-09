import * as React from 'react';
import { connect } from 'react-redux';
import * as _expressStatic from 'express-serve-static-core';
import * as Immutable from 'immutable';
import { browserHistory } from 'react-router';
import { ROUTE_PATH } from '../../routes';
import REQUEST from '../../const/request';
import findIndex = require('lodash.findindex');
class Xtable extends React.Component<{
    p: any,
    o: any,
    title: string
}, {
    }>{
    render() {
        let temArr: any = [];
        let title = '';
        if (this.props.p.length) {
            this.props.p.forEach((ele: any, index: any) => {
                let idx = findIndex(this.props.o, (item: any) => item.tyid == ele.tyid);
                let value = this.props.o[idx].total_value;
                let myScore: any = (ele.score_rate * value).toFixed(0);
                let meanScore: any = (this.props.o[idx].mean_sr * value).toFixed(2);
                let obj = {
                    score_rate: myScore,
                    mean_sr: meanScore,
                    score_vary: (myScore - meanScore) > 0 ? "高" + (myScore - meanScore).toFixed(2) + "分" : "低" + (meanScore - myScore).toFixed(2) + "分",
                    score_vary_positive: (myScore - meanScore) > 0
                }
                if (!!ele.tyid) {
                    Object.assign(obj, { tyid: ele.tyid, });
                } else {
                    Object.assign(obj, { tyid: ele.kpid, });
                }
                temArr.push(obj);
            }

            )
        }

        return (
            <div className="table-warp">
                <table className="rd-table">
                    <thead className="rd-table-thead">
                        <tr className="rd-table-th">
                            <td className="rd-table-td">{this.props.title}</td>
                            <td className="rd-table-td">得分</td>
                            <td className="rd-table-td">平均得分</td>
                            <td className="rd-table-td">分差</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            temArr.map((item: any, index: number) => (
                                <tr className="rd-table-tr" key={index}>
                                    <td className="rd-table-td">{item.tyid}</td>
                                    <td className="rd-table-td">{item.score_rate}</td>
                                    <td className="rd-table-td">{item.mean_sr}</td>
                                    <td className={`${item.score_vary_positive ? "positive" : " "}  rd-table-td`}>{item.score_vary}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>



        )
    }

}

export default Xtable;