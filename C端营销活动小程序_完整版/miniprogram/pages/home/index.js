const {products,categories,scenes,brands,activities,articles}=require('../../data/mock');
Page({
  data:{products:products.slice(0,6),categories:categories.map(x=>({...x,short:x.name.slice(0,2)})),scenes,brands,activities,articles,hero:activities[0]},
  goSearch(){wx.navigateTo({url:'/pages/search/index'})},
  goMember(){wx.navigateTo({url:'/pages/member/index'})},
  goActivity(){wx.navigateTo({url:'/pages/activity/detail/index?id=a1'})},
  goActivityList(){wx.navigateTo({url:'/pages/activity/list/index'})},
  goCategory(){wx.switchTab({url:'/pages/category/index'})},
  goProduct(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})},
  goBrand(e){wx.navigateTo({url:'/pages/brand/index?id='+e.currentTarget.dataset.id})},
  goHealth(){wx.switchTab({url:'/pages/health/index'})}
});
