
const products = [
  {id:'p1', name:'商品A / 复方草珊瑚含片', spec:'0.44g×48片', dailyPrice:29.9, activityPrice:19.9, tag:'本期主推', sell:'会员精选商品，点击进入现有商城完成购买。', image:'', mallPath:'/pages/product/detail?id=p1', h5Url:'https://mall.example.com/product/p1'},
  {id:'p2', name:'商品B / 清咽滴丸', spec:'20mg×30丸', dailyPrice:39.9, activityPrice:29.9, tag:'会员价', image:'', mallPath:'/pages/product/detail?id=p2', h5Url:'https://mall.example.com/product/p2'},
  {id:'p3', name:'商品C / 金喉健喷雾', spec:'20ml', dailyPrice:49.9, activityPrice:39.9, tag:'热销', image:'', mallPath:'/pages/product/detail?id=p3', h5Url:'https://mall.example.com/product/p3'},
  {id:'p4', name:'商品D / 秋冬常备', spec:'标准规格', dailyPrice:59.9, activityPrice:49.9, tag:'推荐', image:'', mallPath:'/pages/product/detail?id=p4', h5Url:'https://mall.example.com/product/p4'},
  {id:'p5', name:'商品E / 会员优选', spec:'标准规格', dailyPrice:69.9, activityPrice:59.9, tag:'会员优选', image:'', mallPath:'/pages/product/detail?id=p5', h5Url:'https://mall.example.com/product/p5'},
  {id:'p6', name:'商品F / 新品推荐', spec:'标准规格', dailyPrice:79.9, activityPrice:69.9, tag:'新品', image:'', mallPath:'/pages/product/detail?id=p6', h5Url:'https://mall.example.com/product/p6'}
]
const activities = [
  {id:'a1', name:'9月会员福利日', subtitle:'会员专享 · 精选健康好物', status:'live', start:'2026.09.01', end:'2026.09.07', eyebrow:'MEMBER EVENT', benefit:'最高立减 ¥20', products},
  {id:'a2', name:'秋冬健康季', subtitle:'季节主题 · 家庭常备优选', status:'upcoming', start:'2026.09.15', end:'2026.11.30', eyebrow:'SEASONAL EDIT', benefit:'精选专题组合', products:products.slice(0,4)},
  {id:'a3', name:'新品体验专题', subtitle:'新品首发 · 品质与体验并重', status:'upcoming', start:'2026.09.10', end:'2026.09.20', eyebrow:'NEW ARRIVAL', benefit:'新品尝鲜', products:[products[5],products[2],products[3]]}
]
module.exports = {products, activities}
