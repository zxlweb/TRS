/**
 * @fileOverview uni-exam reducers
 * @author zxl
 */

import { createReducer } from 'razy/dist/lib';
import ACTION_TYPE from '../const/action-type';
import * as Immutable from 'immutable';

/**
 * data structure
 * dataUniExam:[]
 */

const uniExamData = createReducer(Immutable.fromJS({
    dataUniExam: []
}), {
        [ACTION_TYPE.GET_UNIEXAM]: (state: Immutable.Map<string, any>, action: any) => {
            return state.set('dataUniExam', Immutable.fromJS(action.payload));
        }
    });

export default uniExamData;