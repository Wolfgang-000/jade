const {products}=require('../../data/mock');
const store=require('../../utils/store');

Page({
  data:{
    items:[],amount:'0.00',freight:'0.00',total:'0.00',
    address:{name:'林经理',phone:'138****6688',detail:'广东省广州市天河区 · 示例药房收货地址 88 号'},
    settlement:'在线支付（原型）'
  },
  onShow(){this.refresh()},
  refresh(){
    const items=store.getCart().filter(x=>x.checked).map(c=>({...c,product:products.find(p=>p.id===c.productId)})).filter(x=>x.product);
    const amount=items.reduce((s,x)=>s+x.product.price*x.qty,0);
    this.setData({
      items,
      amount:amount.toFixed(2),
      total:amount.toFixed(2)
    });
  },
  address(){wx.navigateTo({url:'/pages/address/index?select=1'})},
  submit(){
    if(!this.data.items.length){wx.showToast({title:'采购车中没有可提交商品',icon:'none'});return}
    const customer=getApp().globalData.customer||{};
    const invalid=this.data.items.find(x=>x.product.stock<x.qty||x.qty<(x.product.moq||1)||(x.product.regulatoryMode==='rx'&&!customer.qualified));
    if(invalid){
      wx.showModal({
        title:'订单需要调整',
        content:'部分商品库存、起订量或采购资质未通过校验，请返回采购车处理或联系客服。',
        showCancel:false
      });
      return;
    }
    wx.showLoading({title:'校验订单'});
    setTimeout(()=>{
      wx.hideLoading();
      wx.navigateTo({url:'/pages/payment/index?amount='+this.data.total});
    },350);
  }
});
