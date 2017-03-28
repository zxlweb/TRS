import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector, BaseComponent, HTMLManager } from 'razy/dist/lib';
import * as _expressStatic from 'express-serve-static-core';
import * as Immutable from 'immutable';
import { browserHistory } from 'react-router';
import { ROUTE_PATH } from '../../routes';
import REQUEST from '../../const/request';
const style = _importLess('./index', __dirname);
class Header extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: style }}></style>
                <div className="s-header" >
                    <div className="ex-header-logo">
                        <span className="ex-header-logo-text">学而思TRS</span>
                    </div>
                </div>
            </div>

        )
    }

}
export default Header;