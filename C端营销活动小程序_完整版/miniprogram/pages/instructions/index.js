const {products}=require('../../data/mock');
Page({data:{product:null},onLoad(o){this.setData({product:products.find(x=>x.id===(o.id||'p1'))||products[0]})}})
