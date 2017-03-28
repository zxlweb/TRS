/**
 * @fileOverview request urls
 * @author Max
 */

const PREFIX = '/trs;
// const PREFIX = '';

const REQEUST = {
    IS_USER: `${PREFIX}/user/isUser`,
    CREATE_USER: `${PREFIX}/user/create`,
    CREDIT_GET_MY_CARDS: `${PREFIX}/credit/myCards`,
    UPLOAD: `${PREFIX}/credit/upload`,
    GET_CURRENT_COLLECTED_UP_COUNT: `${PREFIX}/credit/getTotalCollectedUp`,
    WHERE_SHOULD_I_GO: `${PREFIX}/user/locationCurrentState`,
    CREATE_COUPON: `${PREFIX}/coupon/create`,
    GET_COUPOM: `${PREFIX}/coupon/get`,
    CONSUME_COUPON: `${PREFIX}/coupon/useCoupon`,
    ROLL: `${PREFIX}/creditCode/roll`,
    GET_ROLL: `${PREFIX}/creditCode/get`,
    SHARE_CARD: `${PREFIX}/credit/shareForCreditCard`,
    GET_GIFT_LEFT_COUNTS: `${PREFIX}/coupon/getTotalGiftInfo`
};

export default REQEUST;