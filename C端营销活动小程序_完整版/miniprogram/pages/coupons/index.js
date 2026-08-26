Page({data:{tabs:['可使用','已使用','已失效'],active:'可使用',list:[
 {value:10,condition:'满99可用',title:'会员健康日专享券',time:'有效期至 2026-09-07'},
 {value:5,condition:'满59可用',title:'家庭常备专区券',time:'有效期至 2026-09-30'}
]},tab(e){this.setData({active:e.currentTarget.dataset.t})}})
