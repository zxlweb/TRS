import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector, BaseComponent, HTMLManager } from 'razy/dist/lib';
import * as _expressStatic from 'express-serve-static-core';
import * as Immutable from 'immutable';
import { browserHistory } from 'react-router';
import { ROUTE_PATH } from '../../routes';
import REQUEST from '../../const/request';
class Summarize extends React.Component<{
    item: any
}, {}>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="summarize">
                <div className="des-title">总结：</div>
                <div className="summarize-wrapper">
                    {
                        (() => {
                            let trs = [], _item = this.props.item;
                            if (_item instanceof Array) {
                                for (let i = 0; i < _item.length; i++) {
                                    trs.push(
                                        <div className="sm-item" key={i}>
                                            <span className="sm-title">{_item[i].key}:</span>{_item[i].content}
                                        </div>
                                    )
                                }
                                return trs;
                            } else {
                                return (
                                    <div className="sm-item">
                                        {_item}
                                    </div>
                                )
                            }
                        })()
                    }
                </div>
            </div>
        )
    }
}
export default Summarize;