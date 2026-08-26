const {products}=require('../../data/mock');
const store=require('../../utils/store');
Page({
 data:{items:[],amount:0,discount:0,freight:0,total:0,coupon:'会员满59减5',points:200},
 onShow(){
  const items=store.getCart().filter(x=>x.checked).map(c=>({...c,product:products.find(p=>p.id===c.productId)})).filter(x=>x.product);
  const amount=items.reduce((s,x)=>s+x.product.price*x.qty,0);
  const member=items.reduce((s,x)=>s+(x.product.price-x.product.memberPrice)*x.qty,0);
  const coupon=amount>=59?5:0;const points=Math.min(2,amount*.02);
  this.setData({items,amount:amount.toFixed(2),discount:(member+coupon+points).toFixed(2),total:(amount-member-coupon-points).toFixed(2)})
 },
 address(){wx.navigateTo({url:'/pages/address/index?select=1'})},
 submit(){
   if(!this.data.items.length){wx.showToast({title:'没有可结算商品',icon:'none'});return}
   wx.navigateTo({url:'/pages/payment/index?amount='+this.data.total})
 }
});
