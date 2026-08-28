const {products}=require('../../data/mock');
const store=require('../../utils/store');
Page({
 data:{list:[]},
 onShow(){const ids=store.getFavorites();this.setData({list:ids.map(id=>products.find(p=>p.id===id)).filter(Boolean)})},
 go(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})},
 cart(e){
   const p=products.find(x=>x.id===e.currentTarget.dataset.id);
   if(!p)return;
   store.addCart(p,p.moq||1,p.spec);
   wx.showToast({title:'已加入采购车'});
 }
});
