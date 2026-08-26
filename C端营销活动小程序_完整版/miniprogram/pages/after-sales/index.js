Page({
 data:{reasons:['商品破损 / 包装异常','配送异常','商品错发 / 漏发','质量问题反馈','其他问题'],selected:-1},
 choose(e){this.setData({selected:Number(e.currentTarget.dataset.i)})},
 submit(){if(this.data.selected<0){wx.showToast({title:'请选择问题类型',icon:'none'});return}wx.showToast({title:'售后申请已模拟提交',icon:'none'})}
});
