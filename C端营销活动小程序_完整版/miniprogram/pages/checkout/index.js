const {products}=require('../../data/mock');
const store=require('../../utils/store');

Page({
  data:{
    items:[],amount:'0.00',memberDiscount:'0.00',couponDiscount:'0.00',pointsDiscount:'0.00',discount:'0.00',freight:'0.00',total:'0.00',
    useCoupon:true,usePoints:true,
    address:{name:'林女士',phone:'138****6688',detail:'广东省广州市天河区 · 示例收货地址 88 号'}
  },
  onShow(){this.refresh()},
  refresh(){
    const items=store.getCart().filter(x=>x.checked).map(c=>({...c,product:products.find(p=>p.id===c.productId)})).filter(x=>x.product);
    const amount=items.reduce((s,x)=>s+x.product.price*x.qty,0);
    const member=items.reduce((s,x)=>s+Math.max(0,x.product.price-x.product.memberPrice)*x.qty,0);
    const coupon=this.data.useCoupon&&amount>=59?5:0;
    const points=this.data.usePoints?Math.min(2,amount*.02):0;
    const discount=member+coupon+points;
    this.setData({
      items,
      amount:amount.toFixed(2),
      memberDiscount:member.toFixed(2),
      couponDiscount:coupon.toFixed(2),
      pointsDiscount:points.toFixed(2),
      discount:discount.toFixed(2),
      total:Math.max(0,amount-discount).toFixed(2)
    });
  },
  address(){wx.navigateTo({url:'/pages/address/index?select=1'})},
  toggleCoupon(){this.setData({useCoupon:!this.data.useCoupon},()=>this.refresh())},
  togglePoints(){this.setData({usePoints:!this.data.usePoints},()=>this.refresh())},
  submit(){
    if(!this.data.items.length){wx.showToast({title:'没有可结算商品',icon:'none'});return}
    const invalid=this.data.items.find(x=>x.product.stock<x.qty||x.product.regulatoryMode==='rx');
    if(invalid){wx.showModal({title:'订单需要调整',content:'部分商品库存或购买资格需要重新确认，请返回购物袋处理。',showCancel:false});return}
    wx.showLoading({title:'校验订单'});
    setTimeout(()=>{
      wx.hideLoading();
      wx.navigateTo({url:'/pages/payment/index?amount='+this.data.total});
    },350);
  }
});
