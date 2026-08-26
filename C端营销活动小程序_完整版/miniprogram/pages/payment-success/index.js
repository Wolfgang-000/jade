Page({
 data:{amount:'0.00'},
 onLoad(o){this.setData({amount:o.amount||'0.00'})},
 orders(){wx.redirectTo({url:'/pages/orders/index'})},
 home(){wx.switchTab({url:'/pages/home/index'})}
});
