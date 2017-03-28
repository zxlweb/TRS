/**
 * @fileOVerview trs reportlist page
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector, BaseComponent, HTMLManager } from 'razy/dist/lib';
import * as _expressStatic from 'express-serve-static-core';
import * as Immutable from 'immutable';
import { browserHistory } from 'react-router';
import { ROUTE_PATH } from '../../routes';
import REQUEST from '../../const/request';
import Header from '../header';
const style = _importLess('./index', __dirname);
class Reportlist extends BaseComponent<{}, {
    content: Array<any>
}>{
    async interceptor(req: _expressStatic.Request, res: _expressStatic.Response, next: _expressStatic.NextFunction): Promise<any> { }
    setUpPage(manager: HTMLManager) { }
    getInitDataActionImp(props: any): void | any[] { }
     constructor(props: any) {
        super(props);
        this.state = {
            content: []
        }
    }
    async componentDidMount() {
        super.componentDidMount();
        const { dispatch } = this.props;
        //    发送请求
        try {
            let response = await _http.post(REQUEST.SUBMIT, { id: this.props.params.id });
            this.setState({
                content: response
            });
        } catch (error) {
        }
    }
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: style }}></style>
                <Header></Header>
                <div className="list-container">
                    <div className="usr-info">你好，{this.state.content.length == 0 ? '' : this.state.content[0].user_name}！欢迎来到TRS！</div>
                    <div id="report-list">
                        <h3 className="report-title">报告列表</h3>
                        {
                            (() => {
                                let content = [];
                                for (let i = 0; i < this.state.content.length; i++) {
                                    let d = new Date(this.state.content[i].exam_date);
                                    let day = d.getDate();
                                    let month = d.getMonth() + 1;
                                    let year = d.getFullYear();
                                    let fullYear = year + '-' + month + '-' + day;

                                    content.push(
                                        <a href={"/report/" + this.props.params.id + "/" + this.state.content[i].eid + "/overall"} className="link active" key={i}>
                                            <div className="report-sec">
                                                <h3 className="r-name">{this.state.content[i].exam_title}</h3>
                                                <div className="r-time">{fullYear}</div>
                                                <div className="report-bottom">
                                                    <div className="r-score">得分 <span>{this.state.content[i].total_score}</span></div>
                                                    <div className="r-todetail">点击查看详细报告</div>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                }
                                return content;

                            })()

                        }
                    </div>
                    <div className="share-info">
                        <img src={ret(`${__IMAGE_STATIC_PATH__}/Wechatshare.png`)} />
                    </div>
                </div>
                <footer>Copyright © 2017 南京学而思市场部</footer>
            </div>
        )
    }
}

const selector = () => ({});

export = connect(selector)(Reportlist);
