const {products}=require('../../data/mock');
const store=require('../../utils/store');

Page({
  data:{
    items:[],
    amount:'0.00',
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
    this.setData({
      items,
      amount:amount.toFixed(2),
      total:amount.toFixed(2),
      allChecked:items.length>0&&items.every(x=>x.checked),
      selectedCount:selected.reduce((s,x)=>s+x.qty,0)
    });
  },
  toggle(e){store.toggleCart(e.currentTarget.dataset.key);this.refresh()},
  toggleAll(){store.setAllChecked(!this.data.allChecked);this.refresh()},
  plus(e){store.updateQty(e.currentTarget.dataset.key,1);this.refresh()},
  minus(e){
    const key=e.currentTarget.dataset.key;
    const item=this.data.items.find(x=>x.key===key);
    if(!item)return;
    const min=item.product.moq||1;
    if(item.qty<=min){
      wx.showToast({title:`该商品${min}${item.product.unit||'件'}起订`,icon:'none'});
      return;
    }
    store.updateQty(key,-1);
    this.refresh();
  },
  remove(e){
    wx.showModal({
      title:'移出采购单？',
      content:'移除后仍可在商品页重新加入。',
      confirmText:'移除',
      success:r=>{if(r.confirm){store.removeCart(e.currentTarget.dataset.key);this.refresh()}}
    });
  },
  checkout(){
    if(this.data.selectedCount===0){wx.showToast({title:'请选择采购商品',icon:'none'});return}
    const invalid=this.data.items.filter(x=>x.checked).find(x=>x.qty<(x.product.moq||1));
    if(invalid){wx.showToast({title:'部分商品未达到起订量',icon:'none'});return}
    wx.navigateTo({url:'/pages/checkout/index'});
  },
  goHome(){wx.switchTab({url:'/pages/home/index'})},
  goProduct(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})}
});
