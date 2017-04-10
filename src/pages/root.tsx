/**
 * @fileOverview Root组件
 * @author Max
 **/

import * as _expressStatic from 'express-serve-static-core';
import * as React from 'react';
import { connect } from 'react-redux';
import BaseComponent from 'razy/dist/lib/base-component';
import HTMLManager from 'razy/dist/lib/html-manager';
import createSelector from 'razy/dist/lib/immu-reselect';
import * as moment from 'moment';
// set up moment
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const style = _importLess('./index', __dirname);
class Root extends BaseComponent<any, any> {
    async interceptor(req: _expressStatic.Request, res: _expressStatic.Response, next: _expressStatic.NextFunction): Promise<any> { }
    setUpPage(manager: HTMLManager) {
        manager.setTag('title', '南京学而思考情报告系统');
        manager.prependTagBefore('headTagClose', 'resetStyle', { href: __STYLE_STATIC_PATH__ + '/reset.css' }, manager.TAG_TYPE.STYLE);
    }
    getInitDataActionImp(props: any) { }
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        super.componentDidMount();
        console.log('root did mount');
        const fastclick = require('fastclick');
        fastclick.attach(document.body);
    }
    render() {
        let debugPanel: any;
        if (this.state.client) {
            if (this.props.devTools) {
                let DevTools = this.props.devTools;
                debugPanel =
                    <div>
                        <DevTools />
                    </div>;
            }
        }

        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: style }}></style>
                {this.props.children}
                {debugPanel}
            </div>
        );
    }
}

const selector = () => ({});

export = connect(selector)(Root);