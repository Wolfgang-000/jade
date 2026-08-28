const {categories}=require('../../data/mock');
Page({
  data:{categories,active:0},
  onShow(){
    const targetId=wx.getStorageSync('targetCategoryId');
    if(!targetId)return;
    const index=categories.findIndex(item=>item.id===targetId);
    if(index>=0)this.setData({active:index});
    wx.removeStorageSync('targetCategoryId');
  },
  choose(e){this.setData({active:Number(e.currentTarget.dataset.i)})},
  goSearch(){wx.navigateTo({url:'/pages/search/index'})},
  goList(e){wx.navigateTo({url:'/pages/product-list/index?category='+encodeURIComponent(e.currentTarget.dataset.name)})}
});
