const {products}=require('../../data/mock');
Page({
 data:{category:'精选商品',list:products,sort:'综合'},
 onLoad(o){const c=decodeURIComponent(o.category||'精选商品');this.setData({category:c,list:products})},
 goProduct(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})},
 setSort(e){this.setData({sort:e.currentTarget.dataset.sort})},
 filter(){wx.showToast({title:'筛选：品牌/价格/剂型/规格/人群/OTC',icon:'none'})}
});
