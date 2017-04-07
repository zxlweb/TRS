/**
 * @fileOverview app's reducer 
 * @author zxl
 **/

import { combineReducers } from 'redux';
import login from './login';
import reportdata from './reportdata';
import uniExamData from './uni-exam';

const APP = combineReducers({
    login,
    reportdata,
    uniExamData

});

export default APP;