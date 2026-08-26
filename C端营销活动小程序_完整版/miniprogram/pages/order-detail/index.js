const {orders,products}=require('../../data/mock');
Page({
 data:{order:null},
 onLoad(o){const x=orders.find(z=>z.id===(o.id||'o1001'))||orders[0];this.setData({order:{...x,product:products.find(p=>p.id===x.productId)}})},
 logistics(){wx.navigateTo({url:'/pages/logistics/index'})},
 service(){wx.navigateTo({url:'/pages/service/index'})},
 afterSales(){wx.navigateTo({url:'/pages/after-sales/index'})}
});
