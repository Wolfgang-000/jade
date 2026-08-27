function getCart(){ return wx.getStorageSync('cart') || []; }
function setCart(cart){ wx.setStorageSync('cart', cart); return cart; }
function addCart(product, qty=1, spec=''){
  const cart=getCart();
  const key=product.id+'|'+(spec||product.spec||'');
  const hit=cart.find(x=>x.key===key);
  if(hit) hit.qty += qty;
  else cart.push({key,productId:product.id,qty,spec:spec||product.spec,checked:true});
  return setCart(cart);
}
function updateQty(key,delta){
  const cart=getCart();
  const hit=cart.find(x=>x.key===key);
  if(hit) hit.qty=Math.max(1,hit.qty+delta);
  return setCart(cart);
}
function toggleCart(key){
  const cart=getCart();
  const hit=cart.find(x=>x.key===key);
  if(hit) hit.checked=!hit.checked;
  return setCart(cart);
}
function setAllChecked(checked){
  return setCart(getCart().map(x=>({...x,checked:!!checked})));
}
function removeCart(key){ return setCart(getCart().filter(x=>x.key!==key)); }
function clearChecked(){ return setCart(getCart().filter(x=>!x.checked)); }
function getCartCount(){ return getCart().reduce((sum,x)=>sum+(x.qty||0),0); }
function getFavorites(){return wx.getStorageSync('favorites')||[]}
function toggleFavorite(id){
  const list=getFavorites(); const i=list.indexOf(id);
  if(i>=0) list.splice(i,1); else list.unshift(id);
  wx.setStorageSync('favorites',list); return i<0;
}
function addHistory(id){
  let list=wx.getStorageSync('history')||[];
  list=[id,...list.filter(x=>x!==id)].slice(0,30);
  wx.setStorageSync('history',list);
}
module.exports={getCart,addCart,updateQty,toggleCart,setAllChecked,removeCart,clearChecked,getCartCount,getFavorites,toggleFavorite,addHistory};
