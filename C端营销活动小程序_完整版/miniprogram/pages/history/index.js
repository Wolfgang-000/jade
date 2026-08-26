const {products}=require('../../data/mock');
Page({
 data:{list:[]},
 onShow(){const ids=wx.getStorageSync('history')||[];this.setData({list:ids.map(id=>products.find(p=>p.id===id)).filter(Boolean)})},
 go(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})},
 clear(){wx.setStorageSync('history',[]);this.setData({list:[]})}
});
