Page({
 data:{messages:[
  {me:false,text:'您好，我是执业药师服务示意。可以围绕商品说明、用药注意事项和购买流程提供信息支持。'},
  {me:false,text:'这里不会提供疾病诊断，也不会让AI直接给出医疗诊断结论。'}
 ],input:''},
 input(e){this.setData({input:e.detail.value})},
 send(){const t=this.data.input.trim();if(!t)return;this.setData({messages:[...this.data.messages,{me:true,text:t},{me:false,text:'已收到。生产版可接入真实药师工作台，并保留咨询记录、商品引用和风险提示。'}],input:''})}
});
