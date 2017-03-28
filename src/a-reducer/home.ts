/**
 * @fileOverview home reducers
 * @author Max
 */

import { createReducer } from 'razy/dist/lib';
import ACTION_TYPE from '../const/action-type';
import * as Immutable from 'immutable';

/**
 * data structure
 * home: {
 *     myCardsIndex: [index],
 *     currentCollectedCount: int,
 *     dataInited: boolean
 * }
 */

const home = createReducer(Immutable.fromJS({
    myCardsIndex: [],
    currentCollectedCount: 0
}), {
        [ACTION_TYPE.CREDIT_GET_MY_CARDS]: (state: Immutable.Map<string, any>, action: any) => {
            return state.set('myCardsIndex', Immutable.fromJS(action.payload.myCards))
                .set('dataInited', true);
        },
        [ACTION_TYPE.CREDIT_GET_NEW_CARD]: (state: Immutable.Map<string, any>, action: any) => {
            return state.update('myCardsIndex', (List: Immutable.List<any>) => List.push(action.payload.index));
        },
        [ACTION_TYPE.CREDIT_GET_CURRENT_COLLECTED_UP_COUNT]: (state: Immutable.Map<string, any>, action: any) => {
            return state.set('currentCollectedCount', action.payload.collectedUpTotal);
        }
    });

export default home;