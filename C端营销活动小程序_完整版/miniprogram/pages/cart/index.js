const {products}=require('../../data/mock');
const store=require('../../utils/store');

Page({
  data:{
    items:[],
    amount:'0.00',
    discount:'0.00',
    total:'0.00',
    allChecked:false,
    selectedCount:0
  },
  onShow(){this.refresh()},
  refresh(){
    const cart=store.getCart();
    const items=cart.map(c=>({...c,product:products.find(p=>p.id===c.productId)})).filter(x=>x.product);
    const selected=items.filter(x=>x.checked);
    const amount=selected.reduce((s,x)=>s+x.product.price*x.qty,0);
    const discount=selected.reduce((s,x)=>s+Math.max(0,(x.product.price-x.product.memberPrice))*x.qty,0);
    this.setData({
      items,
      amount:amount.toFixed(2),
      discount:discount.toFixed(2),
      total:(amount-discount).toFixed(2),
      allChecked:items.length>0&&items.every(x=>x.checked),
      selectedCount:selected.reduce((s,x)=>s+x.qty,0)
    });
  },
  toggle(e){store.toggleCart(e.currentTarget.dataset.key);this.refresh()},
  toggleAll(){store.setAllChecked(!this.data.allChecked);this.refresh()},
  plus(e){store.updateQty(e.currentTarget.dataset.key,1);this.refresh()},
  minus(e){store.updateQty(e.currentTarget.dataset.key,-1);this.refresh()},
  remove(e){
    wx.showModal({
      title:'移出购物袋？',
      content:'移除后仍可在商品页重新加入。',
      confirmText:'移除',
      success:r=>{if(r.confirm){store.removeCart(e.currentTarget.dataset.key);this.refresh()}}
    });
  },
  checkout(){
    if(this.data.selectedCount===0){wx.showToast({title:'请选择商品',icon:'none'});return}
    wx.navigateTo({url:'/pages/checkout/index'});
  },
  goHome(){wx.switchTab({url:'/pages/home/index'})},
  goProduct(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})}
});
