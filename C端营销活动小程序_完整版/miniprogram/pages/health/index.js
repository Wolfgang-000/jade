const {articles,scenes}=require('../../data/mock');
Page({
 data:{articles,scenes},
 pharmacist(){wx.navigateTo({url:'/pages/pharmacist/index'})},
 product(){wx.navigateTo({url:'/pages/product-list/index?category='+encodeURIComponent('健康场景')})}
});
