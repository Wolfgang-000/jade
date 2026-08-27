
const products = [
  {
    id:'p1', name:'复方草珊瑚含片', generic:'复方草珊瑚含片', brand:'江中', maker:'示例生产企业',
    spec:'0.44g×48片', category:'咽喉健康', otc:'OTC', regulatoryMode:'otc',
    price:29.8, memberPrice:25.8, oldPrice:32.0, stock:128, sales:862,
    image:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80',
    gallery:[
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'
    ],
    approval:'国药准字示例', storage:'密封，置阴凉干燥处', expiry:'以实物包装标示为准',
    sell:'清晰呈现规格、说明书与药师服务，减少购买判断成本。',
    tags:['家庭常备','会员专享'],
    specs:['0.44g×48片','0.44g×24片']
  },
  {
    id:'p2', name:'清咽滴丸', generic:'清咽滴丸', brand:'达仁堂', maker:'示例生产企业',
    spec:'20mg×30丸', category:'咽喉健康', otc:'OTC', regulatoryMode:'otc',
    price:32.0, memberPrice:29.9, oldPrice:36.0, stock:76, sales:540,
    image:'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=900&q=80',
    gallery:['https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80'],
    approval:'国药准字示例', storage:'密封保存', expiry:'以实物包装标示为准',
    sell:'适合作为咽喉健康场景中的专业信息型商品展示。',
    tags:['OTC','精选'], specs:['20mg×30丸']
  },
  {
    id:'p3', name:'金喉健喷雾剂', generic:'金喉健喷雾剂', brand:'宏宇', maker:'示例生产企业',
    spec:'20ml', category:'咽喉健康', otc:'OTC', regulatoryMode:'otc',
    price:39.9, memberPrice:36.9, oldPrice:42.0, stock:52, sales:316,
    image:'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=80',
    gallery:['https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200&q=80'],
    approval:'国药准字示例', storage:'阴凉处保存', expiry:'以实物包装标示为准',
    sell:'喷雾剂型信息清晰，适合场景化陈列。', tags:['随身健康'], specs:['20ml']
  },
  {
    id:'p5', name:'维生素C营养补充片', generic:'维生素C', brand:'Wellness Lab', maker:'示例营养企业',
    spec:'60片', category:'营养健康', otc:'营养', regulatoryMode:'wellness',
    price:88.0, memberPrice:79.0, oldPrice:99.0, stock:210, sales:735,
    image:'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=900&q=80',
    gallery:['https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=1200&q=80'],
    approval:'营养健康商品示例', storage:'阴凉干燥处', expiry:'见包装',
    sell:'低噪音视觉表达会员价值与日常健康管理。', tags:['会员热选'], specs:['60片','120片']
  },
  {
    id:'p6', name:'家庭急救护理包', generic:'护理组合', brand:'Care Studio', maker:'示例健康用品企业',
    spec:'家庭版', category:'健康用品', otc:'用品', regulatoryMode:'general',
    price:129.0, memberPrice:116.0, oldPrice:139.0, stock:32, sales:146,
    image:'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=900&q=80',
    gallery:['https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1200&q=80'],
    approval:'健康用品', storage:'干燥保存', expiry:'按单品标识',
    sell:'以家庭场景组织护理用品，而非单纯按SKU堆叠。', tags:['场景组合'], specs:['家庭版']
  },
  {
    id:'p7', name:'处方药购买流程示例', generic:'受监管商品示意', brand:'专业药事服务', maker:'示例企业',
    spec:'请遵医嘱', category:'处方服务', otc:'Rx', regulatoryMode:'rx',
    price:0, memberPrice:0, oldPrice:0, stock:0, sales:0,
    image:'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=900&q=80',
    gallery:['https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1200&q=80'],
    approval:'演示：需按实际资质与法规配置', storage:'按说明书', expiry:'按实物',
    sell:'处方类商品不使用普通“立即购买”逻辑，进入药师/处方审核流程。', tags:['流程示意'], specs:['按处方']
  }
];

const categories = [
  {id:'c1', name:'家庭常备', desc:'日常健康管理', subs:['感冒发热','咽喉用药','肠胃健康','创伤护理']},
  {id:'c2', name:'儿童健康', desc:'家庭儿童照护', subs:['儿童感冒','儿童退热','儿童肠胃','护理用品']},
  {id:'c3', name:'女性健康', desc:'日常与周期关怀', subs:['营养补充','个人护理','女性专区','日常护理']},
  {id:'c4', name:'慢病管理', desc:'长期健康管理', subs:['血压管理','血糖管理','心脑血管','用药服务']},
  {id:'c5', name:'营养健康', desc:'日常营养支持', subs:['维生素矿物质','蛋白营养','中老年营养','运动营养']},
  {id:'c7', name:'个人护理', desc:'温和日常护理', subs:['口腔护理','皮肤护理','女性护理','消毒护理']},
  {id:'c8', name:'季节健康', desc:'随季节变化管理', subs:['秋冬防护','换季咽喉','春季过敏','夏季肠胃']}
];

const scenes = [
  {id:'s1',title:'家庭常备',desc:'把高频健康需求一次整理好'},
  {id:'s2',title:'换季健康',desc:'应对温差、咽喉与鼻部不适'},
  {id:'s3',title:'出差旅行',desc:'轻量、便携、场景明确'},
  {id:'s4',title:'中老年健康',desc:'长期健康管理与日常补充'}
];

const brands = [
  {id:'b1',name:'Care Studio',desc:'家庭护理与日常健康用品',hero:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80'},
  {id:'b2',name:'Wellness Lab',desc:'营养健康与生活方式',hero:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'},
  {id:'b3',name:'Pharma Select',desc:'专业药品精选与药师服务',hero:'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80'}
];

const activities = [
  {id:'a1',title:'秋冬健康守护计划',subtitle:'从家庭常备到季节护理，建立更从容的健康准备',cta:'查看专区',image:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80',status:'live'},
  {id:'a2',title:'会员健康日',subtitle:'会员专享价与健康服务权益',cta:'会员专享',image:'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=80',status:'live'},
  {id:'a3',title:'家庭健康焕新',subtitle:'家庭常备、日常护理与营养健康精选',cta:'立即探索',image:'https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=1400&q=80',status:'upcoming'}
];

const articles = [
  {id:'h1',title:'换季时，家庭常备健康用品如何整理？',meta:'药师审核 · 6分钟阅读',category:'季节健康'},
  {id:'h2',title:'OTC与处方药：购买前先看懂这些标识',meta:'用药知识 · 8分钟阅读',category:'用药知识'},
  {id:'h3',title:'慢病日常管理：如何建立稳定的用药与记录习惯',meta:'健康管理 · 5分钟阅读',category:'慢病管理'}
];

const orders = [
  {id:'o1001',status:'待收货',amount:55.7,created:'2026-08-24 18:32',productId:'p1',qty:1,logistics:'运输中'},
  {id:'o1002',status:'已完成',amount:116.0,created:'2026-08-13 10:20',productId:'p6',qty:1,logistics:'已签收'}
];

module.exports={products,categories,scenes,brands,activities,articles,orders};
