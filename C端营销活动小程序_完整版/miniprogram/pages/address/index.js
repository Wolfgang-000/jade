Page({
 data:{addresses:[
  {id:'ad1',name:'林女士',phone:'138****6688',detail:'广东省广州市天河区 · 示例收货地址 88 号',default:true},
  {id:'ad2',name:'林女士',phone:'138****6688',detail:'广东省广州市越秀区 · 示例地址 16 号',default:false}
 ]},
 choose(e){if(getCurrentPages().length>1)wx.navigateBack()},
 add(){wx.showToast({title:'生产版接入微信地址 / 地址表单',icon:'none'})}
});
