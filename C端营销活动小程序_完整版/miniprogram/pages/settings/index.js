Page({
 nav(e){wx.navigateTo({url:e.currentTarget.dataset.url})},
 clear(){wx.removeStorageSync('history');wx.showToast({title:'已清理浏览记录',icon:'none'})}
});
