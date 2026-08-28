const {orders,products}=require('../../data/mock');
const store=require('../../utils/store');

Page({
 data:{tabs:['全部','待付款','待审核','待发货','待收货','已完成','售后'],active:'全部',orders:[]},
 onLoad(){this.refresh()},
 refresh(){this.setData({orders:orders.map(o=>({...o,product:products.find(p=>p.id===o.productId)}))})},
 tab(e){this.setData({active:e.currentTarget.dataset.t})},
 detail(e){wx.navigateTo({url:'/pages/order-detail/index?id='+e.currentTarget.dataset.id})},
 rebuy(e){
   const order=this.data.orders.find(x=>x.id===e.currentTarget.dataset.id);
   if(!order)return;

   const sourceLines=Array.isArray(order.items)&&order.items.length
     ?order.items
     :[{productId:order.productId,qty:order.qty}];
   const lines=sourceLines.map(line=>({
     ...line,
     product:products.find(p=>p.id===line.productId)
   })).filter(line=>line.product);

   if(!lines.length){
     wx.showToast({title:'原订单商品已不可用',icon:'none'});
     return;
   }

   const customer=getApp().globalData.customer||{};
   const blocked=lines.find(line=>line.product.regulatoryMode==='rx'&&!customer.qualified);
   if(blocked){
     wx.showModal({
       title:'需要采购资质',
       content:'原订单包含当前账号暂无采购权限的商品，请先联系客服确认。',
       confirmText:'联系客服',
       success:r=>{if(r.confirm)wx.navigateTo({url:'/pages/service/index'})}
     });
     return;
   }

   const insufficient=lines.find(line=>{
     const qty=Math.max(line.product.moq||1,line.qty||line.product.moq||1);
     return line.product.stock<qty;
   });
   if(insufficient){
     wx.showToast({title:'原订单部分商品库存不足',icon:'none'});
     return;
   }

   lines.forEach(line=>{
     const qty=Math.max(line.product.moq||1,line.qty||line.product.moq||1);
     store.addCart(line.product,qty,line.spec||line.product.spec);
   });
   wx.showToast({title:'已加入采购单',icon:'success'});
 }
});
