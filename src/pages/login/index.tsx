/**
 * @fileOVerview trs login page
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector, BaseComponent, HTMLManager } from 'razy/dist/lib';
import * as _expressStatic from 'express-serve-static-core';
import * as Immutable from 'immutable';
import { browserHistory } from 'react-router';
import { ROUTE_PATH } from '../../routes';
import REQUEST from '../../const/request';
const style = _importLess('./index', __dirname);
class Login extends BaseComponent<{
}, {
        id: string,
        exist: boolean,
        error: boolean
    }>{
    async interceptor(req: _expressStatic.Request, res: _expressStatic.Response, next: _expressStatic.NextFunction): Promise<any> { }
    setUpPage(manager: HTMLManager) { }
    getInitDataActionImp(props: any): void | any[] { }
    constructor(props: any) {
        super(props);
        this.state = {
            id: '',
            exist: false,
            error: false
        }
    }
    async handelSubmit(e: any) {
        //    发送请求
        try {
            let response = await _http.post(REQUEST.SUBMIT, { id: this.state.id });
            this.setState({
                error: false,
                exist: false
            });
            browserHistory.push('reportlist/' + this.state.id);
        } catch (error) {
            this.setState({
                error: true,
                exist: true
            });
        }
    }
    handleChange(event: any) {
        this.setState({
            id: event.target.value,
            error: false,
            exist: false
        });
    }
    render() {
        return (
            <div id='xsrMain'>
                <style dangerouslySetInnerHTML={{ __html: style }}></style>
                <div className='login-pagewrap'>
                    <h3>学而思 Test Report System</h3>
                    <img src={ret(`${__IMAGE_STATIC_PATH__}/logo.png`)} className="img" />
                    {/* TO DO 2 */}
                    <div className="login-page" style={{ backgroundImage: `url("${ret(__IMAGE_STATIC_PATH__ + '/bg.png')}")` }}></div>
                    <div className='login'>
                        <div data-show={this.state.exist} className='err-msg'>账户不存在</div>
                        <form >
                            <input type="text" placeholder="输入学员编号" className={`${this.state.error ? "err" : ""} login-field`} value={this.state.id} onChange={this.handleChange.bind(this)} />
                            <button className="login-btn" onClick={this.handelSubmit.bind(this)} type="button">查询</button>
                        </form>
                    </div>
                </div>
                <footer>Copyright © 2017 南京学而思市场部</footer>
            </div>
        )
    }
}
const selector = () => ({});
export = connect(selector)(Login);
