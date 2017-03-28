import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector, BaseComponent, HTMLManager } from 'razy/dist/lib';
import * as _expressStatic from 'express-serve-static-core';
import * as Immutable from 'immutable';
import { browserHistory } from 'react-router';
import { ROUTE_PATH } from '../../routes';
import REQUEST from '../../const/request';
class RankChart extends React.Component<{
    msg: any
    title: string
}, {}>{
    render() {
        let title = this.props.title;
        let _msg = this.props.msg || {};
        let myrank = function () {
            if (_msg.user_percent) {
                let pct = _msg.user_percent * 1
                return (pct * 100).toFixed(2) + '%'
            }
        };
        let goodrank = function () {
            if (_msg.high_percent) {
                let pct = 1 - _msg.high_percent * 1
                return (pct * 100).toFixed(2) + '%'
            }

        };
        let fairrank = function () {
            if (_msg.mean_percent) {
                let pct = _msg.mean_percent * 1
                return (pct * 100).toFixed(2) + '%'
            }

        };
        return (
            <div className="rank-container">
                <h3>{this.props.title}</h3>
                <div className="rankchart">
                    <div className="rc fair" style={{ width: fairrank() }}>
                        <div className="subrc"></div>
                        <span className="av">平均线</span>
                    </div>
                    <div className="rc good" style={{ width: goodrank() }} >
                        <div className="subrc"></div>
                        <span className="gd">优秀线</span>
                    </div>
                    <div className="rc your" style={{ width: myrank() }}>
                        <span className="yr">你在这</span>
                    </div>
                </div>
                <div className="subranktitle">
                    {
                        !_msg.teacher_name ?
                            (`你战胜了${myrank()}的同学!`) :
                            (`你在 ${_msg.teacher_name}老师名下，排名第
                              战胜了${myrank()}的同学！`)
                    }
                </div>
            </div>
        )
    }
}



export default RankChart;