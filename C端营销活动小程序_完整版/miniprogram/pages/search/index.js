const {products}=require('../../data/mock');
Page({
 data:{keyword:'',history:['复方草珊瑚含片','清咽滴丸','秋冬备货'],hot:['感冒呼吸','咽喉清热','儿童用药','常购补货'],suggestions:[]},
 onInput(e){
   const v=e.detail.value;
   this.setData({keyword:v,suggestions:v?products.filter(p=>(p.name+p.generic+p.brand+p.maker+p.approval+p.category).includes(v)).slice(0,5):[]})
 },
 search(e){const q=e.currentTarget.dataset.q||this.data.keyword;if(!q)return;wx.navigateTo({url:'/pages/search-result/index?q='+encodeURIComponent(q)})},
 clearHistory(){this.setData({history:[]})}
});
