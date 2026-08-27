const {products}=require('../../data/mock');
const store=require('../../utils/store');

Page({
  data:{
    product:null,
    isFav:false,
    currentSpec:'',
    galleryIndex:0,
    cartCount:0
  },
  onLoad(o){
    const p=products.find(x=>x.id===(o.id||'p1'))||products[0];
    this.setData({
      product:p,
      currentSpec:p.spec,
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
    wx.showToast({title:yes?'已收藏':'已取消收藏',icon:'none'});
  },
  selectSpec(){
    const p=this.data.product;
    const list=(p.specs&&p.specs.length?p.specs:[p.spec]);
    wx.showActionSheet({
      itemList:list,
      success:r=>this.setData({currentSpec:list[r.tapIndex]})
    });
  },
  addCart(){
    const p=this.data.product;
    if(p.regulatoryMode==='rx'){
      wx.navigateTo({url:'/pages/pharmacist/index?productId='+p.id});
      return;
    }
    if(p.stock<=0){wx.showToast({title:'当前库存需确认',icon:'none'});return}
    store.addCart(p,1,this.data.currentSpec||p.spec);
    this.setData({cartCount:store.getCartCount()});
    wx.showToast({title:'已加入购物袋',icon:'success'});
  },
  buyNow(){
    const p=this.data.product;
    if(p.regulatoryMode==='rx'){
      wx.navigateTo({url:'/pages/pharmacist/index?productId='+p.id});
      return;
    }
    if(p.stock<=0){wx.showToast({title:'当前库存需确认',icon:'none'});return}
    store.addCart(p,1,this.data.currentSpec||p.spec);
    wx.switchTab({url:'/pages/cart/index'});
  },
  goCart(){wx.switchTab({url:'/pages/cart/index'})},
  pharmacist(){wx.navigateTo({url:'/pages/pharmacist/index?productId='+this.data.product.id})},
  instructions(){wx.navigateTo({url:'/pages/instructions/index?id='+this.data.product.id})},
  service(){wx.navigateTo({url:'/pages/service/index'})},
  onShareAppMessage(){
    const p=this.data.product||{};
    return {title:p.name||'澄和健康',path:'/pages/product-detail/index?id='+(p.id||'p1'),imageUrl:p.image||''};
  },
  onShareTimeline(){
    const p=this.data.product||{};
    return {title:p.name||'澄和健康',query:'id='+(p.id||'p1'),imageUrl:p.image||''};
  }
});
