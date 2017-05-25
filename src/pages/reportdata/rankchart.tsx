import * as React from 'react';
import { connect } from 'react-redux';
import * as _expressStatic from 'express-serve-static-core';
import * as Immutable from 'immutable';
import { browserHistory } from 'react-router';
import { ROUTE_PATH } from '../../routes';
import REQUEST from '../../const/request';
import ReactDOM = require('react-dom');
class RankChart extends React.Component<{
    msg: any
    title: string,
    key: string
}, {
    }>{
    componentDidMount() {
        this.positionCompute();
    }
    positionCompute() {
        let disLeft: number, disRight: number, width: number;
        let rankChartWidth, rcYourWidth, rcYourContent: any, rcYourContenWidth: number;
        rankChartWidth = ReactDOM.findDOMNode(this.refs.rankchart).clientWidth;
        rcYourWidth = ReactDOM.findDOMNode(this.refs.rcYour).clientWidth;
        disLeft = rcYourWidth;
        disRight = rankChartWidth - rcYourWidth;
        rcYourContent = ReactDOM.findDOMNode(this.refs.rcYourContent);
        rcYourContenWidth = rcYourContent.clientWidth;
        width = parseInt(rcYourContenWidth / 2);
        let pos;
        if (disLeft > disRight) {
            //   在右边
            if (width <= disRight) {
                // 可以放在中间
                pos = (disRight - width);
            } else {
                (rcYourWidth / rankChartWidth >= 0.9) ? pos = -10 : 0;
            }
            rcYourContent.style.left = '';
            rcYourContent.style.right = pos + 'px';
        } else {


            //   在左边
            if (width <= disLeft) {
                // 可以放在中间
                pos = (disLeft - width);

            } else {
                (rcYourWidth / rankChartWidth <= 0.1) ? pos = -12 : 0;
            }
            rcYourContent.style.right = '';
            rcYourContent.style.left = pos + 'px';
        }
    }
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
                <div className="rankchart" ref="rankchart">
                    <div className="rc fair" style={{ width: fairrank() }}>
                        <div className="subrc">
                            <span className="round round-gray">

                            </span>
                        </div>
                    </div>
                    <div className="rc good" style={{ width: goodrank() }} >
                        <div className="subrc">
                            <span className="round round-blue">

                            </span>
                        </div>

                    </div>
                    <div className="rc your" style={{ width: myrank() }} ref="rcYour">
                        {/*写一个三角 position:absloute ;right:0;*/}
                        <span className="sanjiaoxin-out">
                            <span className="sanjiaoxin"></span>
                            <span className="sanjiaoxin-border"></span>
                        </span>
                    </div>
                    {
                        !_msg.teacher_name ? (
                            <div className="rc-your__content" ref="rcYourContent" style={{ width: 160 }}>
                                <span className="myrank">你战胜了<span className="red">{myrank()}</span>的同学</span>
                            </div>
                        ) : (
                                <div className="rc-your__content" ref="rcYourContent" style={{ width: 200 }}>
                                    <span className="myrank">你在{_msg.teacher_name}老师名下，排名第<span className="blue">{_msg.user_rank}</span><br />
                                        战胜了 <span className="blue">{myrank()}的同学</span>！
                                    </span>
                             </div>

                         )
                }
                </div>
            </div>
        )
    }
}



export default RankChart;