Page({
 data:{member:getApp().globalData.member},
 nav(e){wx.navigateTo({url:e.currentTarget.dataset.url})},
 orders(){wx.navigateTo({url:'/pages/orders/index'})},
 member(){wx.navigateTo({url:'/pages/member/index'})}
});
