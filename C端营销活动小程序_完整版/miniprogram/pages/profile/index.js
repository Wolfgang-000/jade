Page({
 data:{customer:getApp().globalData.customer},
 onShow(){this.setData({customer:getApp().globalData.customer})},
 nav(e){wx.navigateTo({url:e.currentTarget.dataset.url})},
 orders(){wx.switchTab({url:'/pages/orders/index'})}
});
