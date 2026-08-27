Page({
 afterSales(){wx.navigateTo({url:'/pages/after-sales/index'})},
 contact(){wx.showToast({title:'生产版接入微信客服/企微客服',icon:'none'})},
 quote(){wx.showToast({title:'生产版接入业务询价工单',icon:'none'})},
 qualification(){wx.showToast({title:'生产版接入客户资质协助',icon:'none'})}
});
