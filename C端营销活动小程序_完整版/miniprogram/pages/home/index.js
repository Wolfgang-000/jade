const {products,categories,scenes,brands,activities,articles}=require('../../data/mock');
const store=require('../../utils/store');

Page({
  data:{
    products:products.slice(0,6),
    categories:categories.map(x=>({...x,short:x.name.slice(0,2)})),
    scenes,
    brands,
    activities,
    articles,
    cartCount:0,
    member:{name:'林女士',level:'金卡会员',points:2860,coupons:2}
  },
  onShow(){
    this.setData({cartCount:store.getCartCount()});
  },
  goSearch(){wx.navigateTo({url:'/pages/search/index'})},
  goMember(){wx.navigateTo({url:'/pages/member/index'})},
  goService(){wx.navigateTo({url:'/pages/service/index'})},
  goPharmacist(){wx.navigateTo({url:'/pages/pharmacist/index'})},
  goActivity(e){
    const id=e?.currentTarget?.dataset?.id||'a1';
    wx.navigateTo({url:'/pages/activity/detail/index?id='+id});
  },
  goActivityList(){wx.navigateTo({url:'/pages/activity/list/index'})},
  goCategory(){wx.switchTab({url:'/pages/category/index'})},
  goProduct(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})},
  goBrand(e){wx.navigateTo({url:'/pages/brand/index?id='+e.currentTarget.dataset.id})},
  goHealth(){wx.switchTab({url:'/pages/health/index'})},
  goCart(){wx.switchTab({url:'/pages/cart/index'})},
  quickAdd(e){
    const id=e.currentTarget.dataset.id;
    const p=products.find(x=>x.id===id);
    if(!p)return;
    if(p.regulatoryMode==='rx'){
      wx.navigateTo({url:'/pages/pharmacist/index?productId='+p.id});
      return;
    }
    if(p.stock<=0){
      wx.showToast({title:'当前库存需确认',icon:'none'});
      return;
    }
    store.addCart(p,1,p.spec);
    this.setData({cartCount:store.getCartCount()});
    wx.showToast({title:'已加入购物袋',icon:'success'});
  }
});
