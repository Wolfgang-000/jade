const {products,cartRecommendMap}=require('../../data/mock');
const store=require('../../utils/store');

function intersectionCount(a=[],b=[]){
  const set=new Set(a);
  return b.filter(x=>set.has(x)).length;
}

function scoreRecommendation(candidate,cartProducts){
  const frequent=(candidate.tags||[]).some(x=>x.includes('常购'))?20:0;
  const popularity=Math.min(10,Math.floor((candidate.sales||0)/100));
  if(!cartProducts.length){
    return {score:frequent+popularity,reason:'高频采购'};
  }

  let totalScore=frequent+popularity;
  let bestPriority=5;
  let reason='高频采购';

  cartProducts.forEach(source=>{
    if(source.id===candidate.id)return;
    const sharedScene=intersectionCount(source.sceneTags,candidate.sceneTags);
    const explicit=(cartRecommendMap[source.id]||[]).includes(candidate.id);
    const sameGeneric=source.generic&&candidate.generic&&source.generic===candidate.generic;
    const sameCategory=source.category&&candidate.category&&source.category===candidate.category;
    const sameBrand=source.brand&&candidate.brand&&source.brand===candidate.brand;
    const sharedTags=intersectionCount(source.tags,candidate.tags);

    if(sharedScene){
      totalScore+=sharedScene*120;
      if(bestPriority>1){bestPriority=1;reason='同场景关联'}
    }
    if(explicit){
      totalScore+=90;
      if(bestPriority>2){bestPriority=2;reason='搭配采购'}
    }
    if(sameGeneric){
      totalScore+=75;
      if(bestPriority>3){bestPriority=3;reason='同通用名'}
    }
    if(sameCategory){
      totalScore+=65;
      if(bestPriority>3){bestPriority=3;reason='同品类'}
    }
    if(sameBrand){
      totalScore+=35;
      if(bestPriority>4){bestPriority=4;reason='同品牌'}
    }
    totalScore+=sharedTags*20;
  });

  return {score:totalScore,reason};
}

function buildRecommendations(cartItems){
  const cartIds=new Set(cartItems.map(x=>x.productId));
  const cartProducts=cartItems.map(x=>x.product).filter(Boolean);
  return products
    .filter(p=>!cartIds.has(p.id))
    .map(product=>{
      const meta=scoreRecommendation(product,cartProducts);
      return {...product,recommendScore:meta.score,recommendReason:meta.reason};
    })
    .sort((a,b)=>b.recommendScore-a.recommendScore||(b.sales||0)-(a.sales||0))
    .slice(0,4);
}

Page({
  data:{
    items:[],
    recommendations:[],
    amount:'0.00',
    total:'0.00',
    allChecked:false,
    selectedCount:0,
    selectedSkuCount:0
  },
  onShow(){this.refresh()},
  enrichItems(items){
    return items.map(x=>({...x,lineTotal:(x.product.price*x.qty).toFixed(2)}));
  },
  refresh(){
    const cart=store.getCart();
    const items=this.enrichItems(
      cart.map(c=>({...c,product:products.find(p=>p.id===c.productId)})).filter(x=>x.product)
    );
    const selected=items.filter(x=>x.checked);
    const amount=selected.reduce((s,x)=>s+x.product.price*x.qty,0);
    this.setData({
      items,
      recommendations:buildRecommendations(items),
      amount:amount.toFixed(2),
      total:amount.toFixed(2),
      allChecked:items.length>0&&items.every(x=>x.checked),
      selectedCount:selected.reduce((s,x)=>s+x.qty,0),
      selectedSkuCount:selected.length
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
    store.updateQty(key,-1);this.refresh();
  },
  remove(e){
    const key=e.currentTarget.dataset.key;
    wx.showModal({
      title:'移出购物车？',
      content:'移除后仍可在商品页重新加入购物车。',
      confirmText:'移除',
      success:r=>{if(r.confirm){store.removeCart(key);this.refresh()}}
    });
  },
  addRecommended(e){
    const id=e.currentTarget.dataset.id;
    const product=products.find(p=>p.id===id);
    if(!product)return;
    const customer=getApp().globalData.customer||{};
    if(product.regulatoryMode==='rx'&&!customer.qualified){
      wx.showToast({title:'当前账号暂无该商品采购权限',icon:'none'});
      return;
    }
    if(product.stock<=0){
      wx.showToast({title:'当前库存需确认',icon:'none'});
      return;
    }
    const existing=store.getCart().find(x=>x.productId===id&&(x.spec||'')===(product.spec||''));
    if(existing){
      store.updateQty(existing.key,1);
      wx.showToast({title:'购物车数量已更新',icon:'success'});
    }else{
      store.addCart(product,product.moq||1,product.spec);
      wx.showToast({title:'已加入购物车',icon:'success'});
    }
    this.refresh();
  },
  checkout(){
    if(this.data.selectedCount===0){wx.showToast({title:'请选择购物车商品',icon:'none'});return}
    const invalid=this.data.items.filter(x=>x.checked).find(x=>x.qty<(x.product.moq||1));
    if(invalid){wx.showToast({title:'部分商品未达到起订量',icon:'none'});return}
    wx.navigateTo({url:'/pages/checkout/index'});
  },
  goHome(){wx.switchTab({url:'/pages/home/index'})},
  goCategory(){wx.switchTab({url:'/pages/category/index'})},
  goProduct(e){wx.navigateTo({url:'/pages/product-detail/index?id='+e.currentTarget.dataset.id})}
});
