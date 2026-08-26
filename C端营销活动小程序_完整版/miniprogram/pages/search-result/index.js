const {products}=require('../../data/mock');
Page({
 goSearch(){wx.navigateTo({url:'/pages/search/index'})},
 data:{q:'',list:products,sort:'综合'},
 onLoad(o){const q=decodeURIComponent(o.q||'');const list=q?products.filter(p=>(p.name+p.generic+p.brand+p.category+p.tags.join('')).includes(q)):products;this.setData({q,list})},
 setSort(e){this.setData({sort:e.currentTarget.dataset.sort})},
 goProduct(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})},
 openFilter(){wx.showToast({title:'筛选面板：品牌/规格/价格/属性',icon:'none'})}
});
