App({
  globalData: {
    brandName: '澄和健康',
    customer: {
      loggedIn: true,
      companyName: '广州市示例药房有限公司',
      contactName: '林经理',
      level: '已认证采购客户',
      qualification: '资质已认证',
      qualified: true,
      pendingShip: 1,
      pendingReceive: 2,
      frequentSku: 12
    }
  },
  onLaunch() {
    if (!wx.getStorageSync('cart')) wx.setStorageSync('cart', []);
    if (!wx.getStorageSync('favorites')) wx.setStorageSync('favorites', []);
    if (!wx.getStorageSync('history')) wx.setStorageSync('history', []);
  }
});
