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
import { getLogin } from '../../a-action/login';
import * as moment from 'moment';

const style = _importLess('./index', __dirname);
class Reportlist extends BaseComponent<{
    list: any[]
}, {

    }>{
    async interceptor(req: _expressStatic.Request, res: _expressStatic.Response, next: _expressStatic.NextFunction): Promise<any> {}
    setUpPage(manager: HTMLManager) {  }
    getInitDataActionImp(props: any): void | any[] {
        return [
            getLogin(props.params.id)
        ]
    }
    constructor(props: any) {
        super(props);

    }
    render() {

        const { list } = this.props;

        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: style }}></style>
                <Header></Header>
                <div className="list-container">
                    <div className="usr-info">你好，{list[0].user_name}！欢迎来到TRS！</div>
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
                    </div>
                    <div className="share-info">
                        <img src={`${__IMAGE_STATIC_PATH__}/wechatshare.png`} />
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
