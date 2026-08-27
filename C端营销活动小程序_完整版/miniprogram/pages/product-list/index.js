const {products}=require('../../data/mock');
Page({
 data:{category:'采购商品',list:products,sort:'综合'},
 onLoad(o){const c=decodeURIComponent(o.category||'采购商品');this.setData({category:c,list:products})},
 goProduct(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})},
 setSort(e){this.setData({sort:e.currentTarget.dataset.sort})}
});
