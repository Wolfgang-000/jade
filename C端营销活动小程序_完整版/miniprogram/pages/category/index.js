const {categories}=require('../../data/mock');
Page({
 data:{categories,active:0},
 choose(e){this.setData({active:Number(e.currentTarget.dataset.i)})},
 goSearch(){wx.navigateTo({url:'/pages/search/index'})},
 goList(e){wx.navigateTo({url:'/pages/product-list/index?category='+encodeURIComponent(e.currentTarget.dataset.name)})}
});
