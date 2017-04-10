/**
 * @fileOverview login actions
 * @author zxl
 */
import { createAction } from 'razy/dist/lib/action-utils';
import ACTION_TYPE from '../const/action-type';
import REQUEST from '../const/request';
export const getLogin = createAction(ACTION_TYPE.GET_LOGIN, null, null, (id) => _http.post(REQUEST.SUBMIT, { id }));