/**
 * @fileOverview app's reducer 
 * @author Max
 **/

import {combineReducers} from 'redux';
import home from './home';

const app = combineReducers({
    home
});

export default app;