const {products}=require('../../data/mock');
const store=require('../../utils/store');
Page({
 data:{product:null,selected:0,qty:1},
 onLoad(o){this.setData({product:products.find(x=>x.id===(o.id||'p1'))||products[0]})},
 choose(e){this.setData({selected:Number(e.currentTarget.dataset.i)})},
 plus(){this.setData({qty:this.data.qty+1})},
 minus(){this.setData({qty:Math.max(1,this.data.qty-1)})},
 add(){const p=this.data.product;store.addCart(p,this.data.qty,p.specs[this.data.selected]);wx.showToast({title:'已加入采购车'});setTimeout(()=>wx.navigateBack(),500)}
});
