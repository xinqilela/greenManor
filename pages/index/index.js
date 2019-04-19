//index.js
//获取应用实例
const app = getApp()

var staticData = require('../../mock/index.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    time:new Date().toString(),
    swipers: staticData.index_swipers
  },
  onLoad: function () {
   
  }
})
