const {products}=require('../../data/mock');
const store=require('../../utils/store');

Page({
  data:{
    product:null,
    otherVariants:[],
    instructionTitle:'药品说明书',
    isFav:false,
    galleryIndex:0,
    cartCount:0
  },
  onLoad(o){
    const p=products.find(x=>x.id===(o.id||'p1'))||products[0];
    const otherVariants=p.skuGroup
      ?products.filter(x=>x.skuGroup===p.skuGroup&&x.id!==p.id)
      :[];
    const isDrug=p.regulatoryMode==='otc'||p.regulatoryMode==='rx';
    this.setData({
      product:p,
      otherVariants,
      instructionTitle:isDrug?'药品说明书':'产品说明',
      isFav:store.getFavorites().includes(p.id),
      cartCount:store.getCartCount()
    });
    store.addHistory(p.id);
    wx.showShareMenu({withShareTicket:true,menus:['shareAppMessage','shareTimeline']});
  },
  onShow(){this.setData({cartCount:store.getCartCount()})},
  galleryChange(e){this.setData({galleryIndex:e.detail.current||0})},
  toggleFav(){
    const yes=store.toggleFavorite(this.data.product.id);
    this.setData({isFav:yes});
    wx.showToast({title:yes?'已加入常购':'已移出常购',icon:'none'});
  },
  goVariant(e){
    const id=e.currentTarget.dataset.id;
    if(!id||id===this.data.product.id)return;
    wx.redirectTo({url:'/pages/product-detail/index?id='+id});
  },
  canPurchase(){
    const p=this.data.product;
    const customer=getApp().globalData.customer||{};
    if(p.regulatoryMode==='rx'&&!customer.qualified){
      wx.showModal({
        title:'需要采购资质',
        content:'当前账号未通过对应经营资质校验，请联系客服处理后再采购。',
        confirmText:'联系客服',
        success:r=>{if(r.confirm)this.service()}
      });
      return false;
    }
    if(p.stock<=0){
      wx.showToast({title:'当前库存需确认',icon:'none'});
      return false;
    }
    return true;
  },
  addCart(){
    const p=this.data.product;
    if(!this.canPurchase())return;
    store.addCart(p,p.moq||1,p.spec);
    this.setData({cartCount:store.getCartCount()});
    wx.showToast({title:'已加入购物车',icon:'success'});
  },
  buyNow(){
    const p=this.data.product;
    if(!this.canPurchase())return;
    store.addCart(p,p.moq||1,p.spec);
    wx.switchTab({url:'/pages/cart/index'});
  },
  goCart(){wx.switchTab({url:'/pages/cart/index'})},
  instructions(){wx.navigateTo({url:'/pages/instructions/index?id='+this.data.product.id})},
  service(){wx.navigateTo({url:'/pages/service/index'})},
  onShareAppMessage(){
    const p=this.data.product||{};
    return {title:(p.name||'澄和健康')+' · B端采购',path:'/pages/product-detail/index?id='+(p.id||'p1'),imageUrl:p.image||''};
  },
  onShareTimeline(){
    const p=this.data.product||{};
    return {title:(p.name||'澄和健康')+' · B端采购',query:'id='+(p.id||'p1'),imageUrl:p.image||''};
  }
});
