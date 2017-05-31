/**
 * @fileOverview consts
 * @author Max
 */

import { ROUTE_PATH } from '../routes';

export const WECHAT_AUTH_PLATFORM_ID = 'trsc';
export const TEST_UIS_AGENT_OPTIONS = {
    uisDomain: 'localhost',
    createStudentRedirectURL: `/${ROUTE_PATH.STUDENT_BIND_TEST}`,
    requestPrefix: `http://uis-test.c498f6d25c583494e9bf9c01d6a6cd567.cn-shanghai.alicontainer.com`,
    test: true
};