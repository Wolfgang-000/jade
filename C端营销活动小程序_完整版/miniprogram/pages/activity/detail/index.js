const {activities,products}=require('../../../data/mock');
Page({
 data:{activity:null,products:products.slice(0,5)},
 onLoad(o){this.setData({activity:activities.find(x=>x.id===(o.id||'a1'))||activities[0]})},
 product(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})}
});
