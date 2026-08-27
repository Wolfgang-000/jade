const {products}=require('../../data/mock');
Page({
 data:{keyword:'',history:['咽喉','维生素C','家庭常备'],hot:['家庭常备','换季健康','儿童健康','营养健康'],suggestions:[]},
 onInput(e){const v=e.detail.value;this.setData({keyword:v,suggestions:v?products.filter(p=>(p.name+p.generic+p.brand+p.category).includes(v)).slice(0,5):[]})},
 search(e){const q=e.currentTarget.dataset.q||this.data.keyword;if(!q)return;wx.navigateTo({url:'/pages/search-result/index?q='+encodeURIComponent(q)})},
 clearHistory(){this.setData({history:[]})}
});
