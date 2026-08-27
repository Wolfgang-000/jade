const {products,categories,scenes,activities}=require('../../data/mock');
const store=require('../../utils/store');

Page({
  data:{
    products:products.slice(0,6),
    categories:categories.map(x=>({...x,short:x.name.slice(0,2)})),
    scenes,
    activities,
    cartCount:0,
    customer:getApp().globalData.customer
  },
  onShow(){
    this.setData({cartCount:store.getCartCount(),customer:getApp().globalData.customer});
  },
  goSearch(){wx.navigateTo({url:'/pages/search/index'})},
  goService(){wx.navigateTo({url:'/pages/service/index'})},
  goProfile(){wx.switchTab({url:'/pages/profile/index'})},
  goActivity(e){
    const id=e?.currentTarget?.dataset?.id||'a1';
    wx.navigateTo({url:'/pages/activity/detail/index?id='+id});
  },
  goCategory(){wx.switchTab({url:'/pages/category/index'})},
  goProduct(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})},
  goCart(){wx.switchTab({url:'/pages/cart/index'})},
  goZone(e){
    const id=e.currentTarget.dataset.id;
    if(id==='s4') return this.goService();
    if(id==='s2'||id==='s3') return wx.navigateTo({url:'/pages/activity/list/index'});
    this.goCategory();
  },
  quickAdd(e){
    const id=e.currentTarget.dataset.id;
    const p=products.find(x=>x.id===id);
    if(!p)return;
    const customer=getApp().globalData.customer||{};
    if(p.regulatoryMode==='rx'&&!customer.qualified){
      wx.showModal({
        title:'需要采购资质',
        content:'当前账号未通过对应经营资质校验，请先联系客服处理。',
        confirmText:'联系客服',
        success:r=>{if(r.confirm)this.goService()}
      });
      return;
    }
    if(p.stock<=0){
      wx.showToast({title:'当前库存需确认',icon:'none'});
      return;
    }
    store.addCart(p,p.moq||1,p.spec);
    this.setData({cartCount:store.getCartCount()});
    wx.showToast({title:'已加入采购单',icon:'success'});
  }
});
