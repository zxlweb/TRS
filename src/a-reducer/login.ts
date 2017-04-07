/**
 * @fileOverview login reducers
 * @author zxl
 */

import { createReducer } from 'razy/dist/lib';
import ACTION_TYPE from '../const/action-type';
import * as Immutable from 'immutable';

/**
 * data structure
 * login: {
 *     list: [{
 *             eid: int
 *              exam_date: timestamp
 *              exam_title: string
 *              prid: int
 *              total_score: int
 *              user_name: string
 *              viewed:boolean
 *     }]
 * }
 */

const login = createReducer(Immutable.fromJS({
    list:[]
}), {
        [ACTION_TYPE.GET_LOGIN]: (state: Immutable.Map<string, any>, action: any) => {
            console.log(action.payload);
           return state.set('list', Immutable.fromJS(action.payload))
       }
    });

export default login;