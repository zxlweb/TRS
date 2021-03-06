/**
 * @fileOVerview trs reportlist page
 */
import * as React from 'react';
import { connect } from 'react-redux';
import BaseComponent from 'razy/dist/lib/base-component';
import HTMLManager from 'razy/dist/lib/html-manager';
import createSelector from 'razy/dist/lib/immu-reselect';
import Storage from 'razy/dist/lib/storage';
import * as _expressStatic from 'express-serve-static-core';
import * as Immutable from 'immutable';
import { browserHistory } from 'react-router';
import { ROUTE_PATH } from '../../routes';
import REQUEST from '../../const/request';
import { getLogin } from '../../a-action/login';
import * as moment from 'moment';

const style = _importLess('./index', __dirname);
class Reportlist extends BaseComponent<{
    list: any[]
}, {

    }>{
    async interceptor(req: _expressStatic.Request, res: _expressStatic.Response, next: _expressStatic.NextFunction): Promise<any> { }
    setUpPage(manager: HTMLManager) { }
    getInitDataActionImp(props: any): void | any[] {
        return [
            getLogin(props.params.id)
        ]
    }
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        const { list } = this.props;
    }
    handleReBind() {
        location.href = `http://uisc.njpeiyou.com/`;
    }
    render() {
        const { list } = this.props;
        list.sort((a: any, b: any) => {
            let aDate = Number(a.exam_date.split(' ')[0].split('-').join(''));
            let bDate = Number(b.exam_date.split(' ')[0].split('-').join(''));
            return bDate - aDate
        })
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: style }}></style>
                <div className="list-container">
                    {
                        list.length === 0 ?
                            <div className="usr-info">很抱歉，没有您的报告 <a onClick={this.handleReBind.bind(this)}>点此重新绑定</a></div> :
                            <div className="usr-info">你好，{list[0].user_name}！欢迎来到TRS！</div>
                    }
                    <a href="http://uisc.njpeiyou.com" className="udash-entry">账号中心</a>
                    <div id="report-list">
                        <h3 className="report-title">报告列表</h3>
                        {
                            (() => {
                                let content = [];
                                for (let i = 0; i < list.length; i++) {
                                    let item = list[i]
                                    let d = moment(item.exam_date);
                                    let fullYear = d.format('YYYY-MM-DD');
                                    let linkHref: string = '';
                                    if (item.eid) {
                                        linkHref = `/${ROUTE_PATH.REPORTDATA}/${this.props.params.id}/${item.eid}`

                                    } else {
                                        linkHref = `/${ROUTE_PATH.SUBJECT_REPORT}/${item.cid}/${this.props.params.id}`
                                    }
                                    content.push(
                                        <a href={linkHref} className="link active" key={i}>
                                            <div className="report-sec">
                                                <h3 className="r-name">{item.exam_title}</h3>
                                                <div className="r-time">{fullYear}</div>
                                                <div className="report-bottom">
                                                    <div className="r-score">得分 <span>{item.total_score}</span></div>
                                                    <div className="r-todetail">点击查看详细报告</div>
                                                </div>
                                            </div>
                                        </a>
                                    )

                                }
                                return content;

                            })()

                        }
                        <div className="share-info">
                            <img src={`${__IMAGE_STATIC_PATH__}/wechatshare.png`} />
                        </div>
                    </div>

                </div>
                <footer>Copyright © 2017 南京学而思市场部</footer>
            </div>
        )
    }
}

const selector = createSelector(
    (state: any) => state.login.get('list'),
    (list: Immutable.List<any>) => ({
        list: list.toJS()
    })
);


export = connect(selector)(Reportlist);
