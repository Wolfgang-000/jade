const products = [
  {
    id:'p1', name:'复方草珊瑚含片', generic:'复方草珊瑚含片', brand:'江中', maker:'示例生产企业',
    spec:'0.44g×48片', category:'咽喉清热', otc:'OTC', regulatoryMode:'otc',
    price:25.8, memberPrice:25.8, oldPrice:29.8, stock:128, sales:862, moq:10, unit:'盒', taxInclusive:true,
    batch:'示例批号 A01', expiry:'2027-12', sceneTags:['咽喉不适','秋冬常备','含片'],
    image:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80',
    gallery:[
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'
    ],
    approval:'国药准字示例', storage:'密封，置阴凉干燥处',
    sell:'用于B端采购展示：规格、起订量、库存、批号效期与资质信息优先呈现。',
    tags:['OTC','常购品种'], specs:['0.44g×48片','0.44g×24片']
  },
  {
    id:'p2', name:'清咽滴丸', generic:'清咽滴丸', brand:'达仁堂', maker:'示例生产企业',
    spec:'20mg×30丸', category:'咽喉清热', otc:'OTC', regulatoryMode:'otc',
    price:29.9, memberPrice:29.9, oldPrice:32.0, stock:76, sales:540, moq:10, unit:'盒', taxInclusive:true,
    batch:'示例批号 B02', expiry:'2027-10', sceneTags:['咽喉不适','秋冬常备','清咽'],
    image:'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=900&q=80',
    gallery:['https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80'],
    approval:'国药准字示例', storage:'密封保存',
    sell:'适合作为咽喉类重点采购品种展示，突出供货条件与履约信息。',
    tags:['OTC','重点品种'], specs:['20mg×30丸']
  },
  {
    id:'p3', name:'金喉健喷雾剂', generic:'金喉健喷雾剂', brand:'宏宇', maker:'示例生产企业',
    spec:'20ml', category:'咽喉清热', otc:'OTC', regulatoryMode:'otc',
    price:36.9, memberPrice:36.9, oldPrice:39.9, stock:52, sales:316, moq:5, unit:'盒', taxInclusive:true,
    batch:'示例批号 C03', expiry:'2027-09', sceneTags:['咽喉不适','秋冬常备','喷雾'],
    image:'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=80',
    gallery:['https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200&q=80'],
    approval:'国药准字示例', storage:'阴凉处保存',
    sell:'采购端优先说明库存、起订量、批号与效期，减少询价往返。', tags:['OTC','现货'], specs:['20ml']
  },
  {
    id:'p4', name:'小儿柴桂退热颗粒', generic:'小儿柴桂退热颗粒', brand:'示例品牌', maker:'示例生产企业',
    spec:'5g×10袋', category:'儿童用药', otc:'OTC', regulatoryMode:'otc',
    price:22.8, memberPrice:22.8, oldPrice:25.0, stock:96, sales:621, moq:10, unit:'盒', taxInclusive:true,
    batch:'示例批号 D04', expiry:'2027-11', sceneTags:['儿童发热','秋冬常备','儿童常用'],
    image:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    gallery:['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'],
    approval:'国药准字示例', storage:'密封保存',
    sell:'用于儿童用药采购场景的示例商品，正式上线以真实资质和库存为准。',
    tags:['OTC','秋冬采购'], specs:['5g×10袋']
  },
  {
    id:'p5', name:'维生素C营养补充片', generic:'维生素C', brand:'Wellness Lab', maker:'示例营养企业',
    spec:'60片', category:'营养健康', otc:'营养', regulatoryMode:'wellness',
    price:79.0, memberPrice:79.0, oldPrice:88.0, stock:210, sales:735, moq:6, unit:'瓶', taxInclusive:true,
    batch:'示例批号 E05', expiry:'2028-03', sceneTags:['营养补充','维生素','常购'],
    image:'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=900&q=80',
    gallery:['https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=1200&q=80'],
    approval:'营养健康商品示例', storage:'阴凉干燥处',
    sell:'营养健康品按采购价、库存与起订量展示，减少面向消费者的促销噪音。', tags:['营养','常购'], specs:['60片','120片']
  },
  {
    id:'p6', name:'家庭急救护理包', generic:'护理组合', brand:'Care Studio', maker:'示例健康用品企业',
    spec:'家庭版', category:'外用护理', otc:'用品', regulatoryMode:'general',
    price:116.0, memberPrice:116.0, oldPrice:129.0, stock:32, sales:146, moq:3, unit:'套', taxInclusive:true,
    batch:'示例批号 F06', expiry:'按单品标识', sceneTags:['外用护理','家庭常备','护理'],
    image:'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=900&q=80',
    gallery:['https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1200&q=80'],
    approval:'健康用品示例', storage:'干燥保存',
    sell:'适合门店日常护理采购，正式供货条件以业务后台为准。', tags:['护理','组合装'], specs:['家庭版']
  },
  {
    id:'p7', name:'处方药采购示例', generic:'受监管药品示意', brand:'示例药品', maker:'示例生产企业',
    spec:'示例规格', category:'处方专区', otc:'Rx', regulatoryMode:'rx',
    price:18.6, memberPrice:18.6, oldPrice:20.0, stock:88, sales:0, moq:20, unit:'盒', taxInclusive:true,
    batch:'示例批号 G07', expiry:'2027-08', sceneTags:['处方专区','资质采购'],
    image:'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=900&q=80',
    gallery:['https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1200&q=80'],
    approval:'演示：按实际批准文号配置', storage:'按说明书',
    sell:'仅用于B端资质采购流程演示；正式业务需校验客户经营资质、经营范围及平台规则。', tags:['Rx','资质采购'], specs:['示例规格']
  }
];

const categories = [
  {id:'c1', name:'感冒呼吸', desc:'季节高频采购', subs:['感冒用药','止咳化痰','退热用药','抗病毒类']},
  {id:'c2', name:'咽喉清热', desc:'门店常购品类', subs:['咽喉用药','清热解毒','口腔咽喉','喷雾含片']},
  {id:'c3', name:'胃肠用药', desc:'日常采购品类', subs:['胃部不适','肠道用药','消化用药','止泻用药']},
  {id:'c4', name:'儿童用药', desc:'儿童常用品类', subs:['儿童感冒','儿童退热','儿童咳嗽','儿童肠胃']},
  {id:'c5', name:'慢病用药', desc:'稳定复购品类', subs:['血压相关','血糖相关','心脑血管','长期用药']},
  {id:'c6', name:'外用护理', desc:'门店护理采购', subs:['皮肤外用','创伤护理','消毒护理','个人护理']},
  {id:'c7', name:'营养健康', desc:'营养补充品类', subs:['维生素矿物质','蛋白营养','中老年营养','日常营养']},
  {id:'c8', name:'处方专区', desc:'资质客户可见', subs:['处方药品','抗感染类','慢病处方','其他处方']}
];

const scenes = [
  {id:'s1',title:'常购商品',desc:'快速回到高频采购品种'},
  {id:'s2',title:'新品到货',desc:'查看近期新到与可采购商品'},
  {id:'s3',title:'活动专区',desc:'集中查看阶段性采购政策'},
  {id:'s4',title:'大单询价',desc:'批量采购、缺货找货与专项报价'}
];

const activities = [
  {
    id:'a1', themeKey:'autumn', title:'秋冬采购季',
    subtitle:'围绕感冒呼吸、咽喉与儿童用药组织季节采购', cta:'下方查看主题商品',
    recommendationTitle:'秋冬重点采购', recommendationSubtitle:'优先呈现秋冬高频、现货与常购品种',
    image:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80', status:'live'
  },
  {
    id:'a2', themeKey:'new', title:'新品到货专区',
    subtitle:'集中查看近期新到商品、起订量与供应状态', cta:'下方查看主题商品',
    recommendationTitle:'新品到货', recommendationSubtitle:'查看近期新增并可直接采购的商品',
    image:'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=80', status:'live'
  },
  {
    id:'a3', themeKey:'supply', title:'优势供应专区',
    subtitle:'聚焦现货、常购与阶段性优势供应品种，快速确认价格、库存与起订条件', cta:'下方查看主题商品',
    recommendationTitle:'优势供应品种', recommendationSubtitle:'聚焦现货、常购与当前供应条件清晰的品种',
    image:'https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=1400&q=80', status:'live'
  }
];

// 首页 Banner 与商品池显式绑定，后续可直接由运营后台配置 activityId -> productIds。
const activityProductMap = {
  a1:['p1','p2','p3','p4'],
  a2:['p3','p5','p6'],
  a3:['p1','p3','p5','p6']
};

// 购物车推荐中的“搭配采购”关系。其余关联由 sceneTags / category / generic / brand / 常购权重计算。
const cartRecommendMap = {
  p1:['p2','p3','p4'],
  p2:['p1','p3','p4'],
  p3:['p1','p2','p4'],
  p4:['p1','p2','p3'],
  p5:['p1','p6'],
  p6:['p5','p1'],
  p7:[]
};

const orders = [
  {id:'o1001',status:'待收货',amount:258.0,created:'2026-08-24 18:32',productId:'p1',qty:10,logistics:'运输中'},
  {id:'o1002',status:'已完成',amount:348.0,created:'2026-08-13 10:20',productId:'p6',qty:3,logistics:'已签收'}
];

module.exports={products,categories,scenes,activities,activityProductMap,cartRecommendMap,orders};
