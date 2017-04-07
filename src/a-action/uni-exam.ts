/**
 * @fileOverview uni-exam actions
 * @author zxl
 */
import { createAction } from 'razy/dist/lib';
import ACTION_TYPE from '../const/action-type';
import REQUEST from '../const/request';
export const getUniExam = createAction(ACTION_TYPE.GET_UNIEXAM, null, null, (cid, sid) => _http.post(REQUEST.UNIEXAM, {cid,sid}));