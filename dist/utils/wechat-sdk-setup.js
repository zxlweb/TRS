"use strict";
exports.__esModule = true;
var const_1 = require("../const");
var WECHAT_SERVICE_URL = 'http://wechat.njpeiyou.com/wechat-service/wechat';
var API_LIST = [
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'chooseImage',
    'hideOptionMenu',
    'showOptionMenu',
    'hideMenuItems',
    'showMenuItems',
    'hideAllNonBaseMenuItem',
    'showAllNonBaseMenuItem'
];
exports.HIDE_MENU_LIST = [
    'menuItem:share:qq',
    'menuItem:share:weiboApp',
    'menuItem:share:facebook',
    'menuItem:share:QZone',
    'menuItem:copyUrl',
    'menuItem:openWithQQBrowser',
    'menuItem:openWithSafari',
    'menuItem:share:email',
    'menuItem:share:brand'
];
exports.init = function () {
    _http.get(WECHAT_SERVICE_URL + "/wechatJSAPI?url=" + encodeURIComponent(location.href.split('#')[0]))
        .then(function (data) {
        wx.config({
            debug: false,
            appId: data.appID,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: API_LIST
        });
    });
};
exports.pageSettings = function (shareSuccessCallback) {
    wx.ready(function () {
        wx.onMenuShareTimeline({
            title: const_1.WECHAT_SHARE_OPTIONS.title,
            link: const_1.WECHAT_SHARE_OPTIONS.link,
            imgUrl: const_1.WECHAT_SHARE_OPTIONS.imgUrl,
            success: function () {
                shareSuccessCallback && shareSuccessCallback();
            },
            cancel: function () {
            }
        });
        wx.onMenuShareAppMessage({
            title: const_1.WECHAT_SHARE_OPTIONS.title,
            link: const_1.WECHAT_SHARE_OPTIONS.link,
            imgUrl: const_1.WECHAT_SHARE_OPTIONS.imgUrl,
            desc: '',
            success: function () {
                shareSuccessCallback && shareSuccessCallback();
            },
            cancel: function () {
            }
        });
        wx.hideMenuItems({
            menuList: exports.HIDE_MENU_LIST
        });
        wx.checkJsApi({
            jsApiList: ['getLocalImgData'],
            success: function (res) {
                if (!res.checkResult.getLocalImgData) {
                    alert('您的微信版本太低，请升级到最新版微信再进行游戏！');
                }
            }
        });
    });
};
