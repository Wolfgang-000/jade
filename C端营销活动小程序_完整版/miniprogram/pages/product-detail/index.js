const {products}=require('../../data/mock');
const store=require('../../utils/store');
Page({
 data:{product:null,isFav:false},
 onLoad(o){
   const p=products.find(x=>x.id===(o.id||'p1'))||products[0];
   this.setData({product:p,isFav:store.getFavorites().includes(p.id)});
   store.addHistory(p.id);
 },
 toggleFav(){const yes=store.toggleFavorite(this.data.product.id);this.setData({isFav:yes});wx.showToast({title:yes?'已收藏':'已取消',icon:'none'})},
 selectSpec(){wx.navigateTo({url:'/pages/spec-selector/index?id='+this.data.product.id})},
 addCart(){
   const p=this.data.product;
   if(p.regulatoryMode==='rx'){wx.navigateTo({url:'/pages/pharmacist/index?productId='+p.id});return}
   store.addCart(p,1,p.spec);wx.showToast({title:'已加入购物袋',icon:'success'})
 },
 buyNow(){
   const p=this.data.product;
   if(p.regulatoryMode==='rx'){wx.navigateTo({url:'/pages/pharmacist/index?productId='+p.id});return}
   store.addCart(p,1,p.spec);wx.switchTab({url:'/pages/cart/index'})
 },
 pharmacist(){wx.navigateTo({url:'/pages/pharmacist/index?productId='+this.data.product.id})},
 instructions(){wx.navigateTo({url:'/pages/instructions/index?id='+this.data.product.id})},
 service(){wx.navigateTo({url:'/pages/service/index'})},
 share(){wx.showShareMenu({withShareTicket:true,menus:['shareAppMessage','shareTimeline']})}
});
