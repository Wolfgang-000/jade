const {activities}=require('../../../data/mock');
Page({
 data:{activities},
 detail(e){wx.navigateTo({url:'/pages/activity/detail/index?id='+e.currentTarget.dataset.id})}
});
