const {products}=require('../../data/mock');
const store=require('../../utils/store');
Page({
 data:{items:[],amount:0,discount:0,total:0,allChecked:false},
 onShow(){this.refresh()},
 refresh(){
   const cart=store.getCart();const items=cart.map(c=>({...c,product:products.find(p=>p.id===c.productId)})).filter(x=>x.product);
   const amount=items.filter(x=>x.checked).reduce((s,x)=>s+x.product.price*x.qty,0);
   const discount=items.filter(x=>x.checked).reduce((s,x)=>s+Math.max(0,(x.product.price-x.product.memberPrice))*x.qty,0);
   this.setData({items,amount:amount.toFixed(2),discount:discount.toFixed(2),total:(amount-discount).toFixed(2),allChecked:items.length>0&&items.every(x=>x.checked)});
 },
 toggle(e){store.toggleCart(e.currentTarget.dataset.key);this.refresh()},
 plus(e){store.updateQty(e.currentTarget.dataset.key,1);this.refresh()},
 minus(e){store.updateQty(e.currentTarget.dataset.key,-1);this.refresh()},
 remove(e){store.removeCart(e.currentTarget.dataset.key);this.refresh()},
 checkout(){if(!this.data.items.some(x=>x.checked)){wx.showToast({title:'请选择商品',icon:'none'});return}wx.navigateTo({url:'/pages/checkout/index'})},
 goHome(){wx.switchTab({url:'/pages/home/index'})}
});
