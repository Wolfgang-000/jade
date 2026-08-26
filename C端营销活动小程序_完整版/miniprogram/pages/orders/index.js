const {orders,products}=require('../../data/mock');
Page({
 data:{tabs:['全部','待付款','待审核','待发货','待收货','已完成','售后'],active:'全部',orders:[]},
 onLoad(){this.refresh()},
 refresh(){this.setData({orders:orders.map(o=>({...o,product:products.find(p=>p.id===o.productId)}))})},
 tab(e){this.setData({active:e.currentTarget.dataset.t})},
 detail(e){wx.navigateTo({url:'/pages/order-detail/index?id='+e.currentTarget.dataset.id})},
 rebuy(e){const o=this.data.orders.find(x=>x.id===e.currentTarget.dataset.id);wx.navigateTo({url:'/pages/product-detail/index?id='+o.productId})}
});
