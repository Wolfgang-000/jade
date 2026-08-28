const {products}=require('../../data/mock');
const store=require('../../utils/store');

function buildDemoCart(){
  const demo=[
    {productId:'p1',qty:20,checked:true},
    {productId:'p2',qty:10,checked:true},
    {productId:'p4',qty:10,checked:false}
  ];
  return demo.map(x=>{
    const product=products.find(p=>p.id===x.productId);
    return {
      key:`demo|${x.productId}|${product?.spec||''}`,
      productId:x.productId,
      qty:x.qty,
      spec:product?.spec||'',
      checked:x.checked,
      product
    };
  }).filter(x=>x.product);
}

Page({
  data:{
    items:[],
    amount:'0.00',
    total:'0.00',
    allChecked:false,
    selectedCount:0,
    selectedSkuCount:0,
    isPreview:false,
    customer:getApp().globalData.customer
  },
  onShow(){
    this.setData({customer:getApp().globalData.customer});
    this.refresh();
  },
  enrichItems(items){
    return items.map(x=>({...x,lineTotal:(x.product.price*x.qty).toFixed(2)}));
  },
  applyItems(items,isPreview){
    const enriched=this.enrichItems(items);
    const selected=enriched.filter(x=>x.checked);
    const amount=selected.reduce((s,x)=>s+x.product.price*x.qty,0);
    this.setData({
      items:enriched,
      amount:amount.toFixed(2),
      total:amount.toFixed(2),
      allChecked:enriched.length>0&&enriched.every(x=>x.checked),
      selectedCount:selected.reduce((s,x)=>s+x.qty,0),
      selectedSkuCount:selected.length,
      isPreview:!!isPreview
    });
  },
  refresh(){
    const cart=store.getCart();
    if(cart.length){
      const items=cart.map(c=>({...c,product:products.find(p=>p.id===c.productId)})).filter(x=>x.product);
      this.applyItems(items,false);
      return;
    }
    if(!this.demoInitialized){
      this.demoCart=buildDemoCart();
      this.demoInitialized=true;
    }
    this.applyItems(this.demoCart||[],true);
  },
  toggle(e){
    const key=e.currentTarget.dataset.key;
    if(this.data.isPreview){
      const item=this.demoCart.find(x=>x.key===key);
      if(item)item.checked=!item.checked;
      this.applyItems(this.demoCart,true);
      return;
    }
    store.toggleCart(key);this.refresh();
  },
  toggleAll(){
    if(this.data.isPreview){
      const next=!this.data.allChecked;
      this.demoCart=this.demoCart.map(x=>({...x,checked:next}));
      this.applyItems(this.demoCart,true);
      return;
    }
    store.setAllChecked(!this.data.allChecked);this.refresh();
  },
  plus(e){
    const key=e.currentTarget.dataset.key;
    if(this.data.isPreview){
      const item=this.demoCart.find(x=>x.key===key);
      if(item)item.qty+=1;
      this.applyItems(this.demoCart,true);
      return;
    }
    store.updateQty(key,1);this.refresh();
  },
  minus(e){
    const key=e.currentTarget.dataset.key;
    const item=this.data.items.find(x=>x.key===key);
    if(!item)return;
    const min=item.product.moq||1;
    if(item.qty<=min){
      wx.showToast({title:`该商品${min}${item.product.unit||'件'}起订`,icon:'none'});
      return;
    }
    if(this.data.isPreview){
      const demoItem=this.demoCart.find(x=>x.key===key);
      if(demoItem)demoItem.qty-=1;
      this.applyItems(this.demoCart,true);
      return;
    }
    store.updateQty(key,-1);this.refresh();
  },
  remove(e){
    const key=e.currentTarget.dataset.key;
    wx.showModal({
      title:'移出采购单？',
      content:'移除后仍可在商品页重新加入。',
      confirmText:'移除',
      success:r=>{
        if(!r.confirm)return;
        if(this.data.isPreview){
          this.demoCart=this.demoCart.filter(x=>x.key!==key);
          this.applyItems(this.demoCart,true);
          return;
        }
        store.removeCart(key);this.refresh();
      }
    });
  },
  checkout(){
    if(this.data.selectedCount===0){wx.showToast({title:'请选择采购商品',icon:'none'});return}
    const invalid=this.data.items.filter(x=>x.checked).find(x=>x.qty<(x.product.moq||1));
    if(invalid){wx.showToast({title:'部分商品未达到起订量',icon:'none'});return}
    if(this.data.isPreview){
      wx.showModal({
        title:'采购单界面预览',
        content:'当前商品为原型演示数据。正式采购时，请从首页、分类或搜索将实际商品加入采购单。',
        showCancel:false,
        confirmText:'知道了'
      });
      return;
    }
    wx.navigateTo({url:'/pages/checkout/index'});
  },
  goHome(){wx.switchTab({url:'/pages/home/index'})},
  goProduct(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})},
  goService(){wx.navigateTo({url:'/pages/service/index'})},
  goProfile(){wx.switchTab({url:'/pages/profile/index'})}
});
