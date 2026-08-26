Page({
 data:{member:getApp().globalData.member},
 coupons(){wx.navigateTo({url:'/pages/coupons/index'})},
 points(){wx.navigateTo({url:'/pages/points/index'})},
 activity(){wx.navigateTo({url:'/pages/activity/list/index'})},
 service(){wx.navigateTo({url:'/pages/service/index'})}
});
