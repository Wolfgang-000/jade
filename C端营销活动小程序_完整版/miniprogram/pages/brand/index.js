const {brands,products}=require('../../data/mock');
Page({
 data:{brand:null,products:products.slice(0,4)},
 onLoad(o){this.setData({brand:brands.find(x=>x.id===(o.id||'b1'))||brands[0]})},
 product(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})}
});
