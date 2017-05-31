/**
 * @fileOverview student bind test page
 * @author Max
 */

import * as React from 'react';
import { connect } from 'react-redux';
import BaseComponent from 'razy/dist/lib/base-component';
import HTMLManager from 'razy/dist/lib/html-manager';
import createSelector from 'razy/dist/lib/immu-reselect';
import * as _expressStatic from 'express-serve-static-core';

class StudentBindTestPage extends BaseComponent<{}, {}> {
    async interceptor(req: _expressStatic.Request, res: _expressStatic.Response, next: _expressStatic.NextFunction): Promise<any> { }
    setUpPage(manager: HTMLManager, datas: any[]) { }
    getInitDataActionImp(props: any) { }
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div id="page-student-bind">
                    student bind test page
                </div>
            </div>
        );
    }
}

const selector = () => ({});

export = connect(selector)(StudentBindTestPage);