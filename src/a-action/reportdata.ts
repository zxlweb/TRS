/**
 * @fileOverview reportdata actions
 * @author zxl
 */
import { createAction } from 'razy/dist/lib/action-utils';
import ACTION_TYPE from '../const/action-type';
import REQUEST from '../const/request';
export const getData = createAction(ACTION_TYPE.GET_DATA, null, null, (sid, eid) => _http.get(`${REQUEST.REPORTDATA}?sid=${sid}&eid=${eid}`));