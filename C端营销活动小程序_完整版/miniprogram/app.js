App({
  globalData: {
    brandName: '澄和健康',
    member: { loggedIn: true, name: '林女士', level: '金卡会员', points: 2860 }
  },
  onLaunch() {
    if (!wx.getStorageSync('cart')) wx.setStorageSync('cart', []);
    if (!wx.getStorageSync('favorites')) wx.setStorageSync('favorites', []);
    if (!wx.getStorageSync('history')) wx.setStorageSync('history', []);
  }
});
