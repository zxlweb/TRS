/**
 * @fileOverview reportdata reducers
 * @author zxl
 */

import { createReducer } from 'razy/dist/lib/reducer-utils';
import ACTION_TYPE from '../const/action-type';
import * as Immutable from 'immutable';

/**
 * data structure
 * dataAll:[]
 */

const reportdata = createReducer(Immutable.fromJS({
    dataAll: []
}), {
        [ACTION_TYPE.GET_DATA]: (state: Immutable.Map<string, any>, action: any) => {
            return state.set('dataAll', Immutable.fromJS(action.payload));
        }
    });

export default reportdata;