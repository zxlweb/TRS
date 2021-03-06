/**
 * @fileOVerview trs login page
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
import APP from '../../a-reducer/app';
import { getLogin } from '../../a-action/login';
import { getStudentSerial, expressInit, clientInit } from 'uis-agent';
import { WECHAT_AUTH_PLATFORM_ID, TEST_UIS_AGENT_OPTIONS } from '../../const';
import * as querystring from 'query-string';
import { envDetect } from 'razy/dist/lib/env-detect';
import Container from './container';
// import HTML5Backend from 'react-dnd-html5-backend'
// import Dustbin from './Dustbin'
// import Box from './Box'
// import { DragDropContext } from 'react-dnd';
const style = _importLess('./index', __dirname);
class Login extends BaseComponent<{
}, {
        id: string,
        exist: boolean
    }>{
    async interceptor(req: _expressStatic.Request, res: _expressStatic.Response, next: _expressStatic.NextFunction): Promise<any> {
        // expressInit(req, res, parseInt(__PORT__), WECHAT_AUTH_PLATFORM_ID, envDetect.dev() ? TEST_UIS_AGENT_OPTIONS : { internal: true });

        // try {
        //     const serial = await getStudentSerial();
        //     res.redirect(`${ROUTE_PATH.REPORTLIST}/${serial}`);
        // } catch (error) {
        //     if (error.message !== 'redirected') {
        //         res.end(error.message);
        //     }
        // }

        // throw new Error('redirected');
    }
    setUpPage(manager: HTMLManager) { }
    getInitDataActionImp(props: any): void | any[] { }
    constructor(props: any) {
        super(props);
        this.state = {
            id: '',
            exist: false
        }
    }
    componentDidMount() {
        super.componentDidMount();
    }
    async handelSubmit(e: any) {
        const { dispatch } = this.props;
        try {
            var response = await _http.get(`${REQUEST.SUBMIT}?id=${this.state.id}`);
            this.setState({
                exist: false
            });
            dispatch(getLogin(this.state.id));

            location.href = `${ROUTE_PATH.REPORTLIST}/${this.state.id}`;

        } catch (error) {
            this.setState({
                exist: true
            });

        }

    }
    handleChange(event: any) {
        this.setState({
            id: event.target.value,
            exist: false
        });
    }
    render() {
        return (

            <div>
                <style dangerouslySetInnerHTML={{ __html: style }}></style>

                <div className='login-pagewrap'>
                    <h3>学而思 Test Report System</h3>
                    <img src={`${__IMAGE_STATIC_PATH__}/logo.png`} className="img" />
                    {/* TO DO 2 */}
                    <div className="login-page" style={{ backgroundImage: `url("${__IMAGE_STATIC_PATH__ + '/bg.png'}")` }}></div>
                    <div className='login'>
                        <div data-show={this.state.exist} className='err-msg'>账户不存在</div>
                        <form >
                            <input type="text" placeholder="输入学员编号" className={`${this.state.exist ? "err" : ""} login-field`} value={this.state.id} onChange={this.handleChange.bind(this)} />
                            <button className="login-btn" onClick={this.handelSubmit.bind(this)} type="button">查询</button>
                        </form>
                    </div>
                    <Container />

                </div>

                <footer>Copyright © 2017 南京学而思市场部</footer>
            </div>

        )
    }
}

const selector = () => ({})
export = connect(selector)(Login);
