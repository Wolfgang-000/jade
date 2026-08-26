
const config = require('../config/index')
function openMallProduct(product){
  if(config.MALL_MODE==='miniProgram'){
    wx.navigateToMiniProgram({appId:config.MALL_APP_ID,path:product.mallPath||config.MALL_HOME_PATH,extraData:{source:'marketing-miniapp'},fail(){wx.showToast({title:'请先配置商城小程序AppID',icon:'none'})}})
  }else{
    const url=encodeURIComponent(product.h5Url||config.MALL_H5_DOMAIN)
    wx.navigateTo({url:'/pages/webview/index?url='+url})
  }
}
function openMallHome(){
  if(config.MALL_MODE==='miniProgram') wx.navigateToMiniProgram({appId:config.MALL_APP_ID,path:config.MALL_HOME_PATH,fail(){wx.showToast({title:'请先配置商城小程序AppID',icon:'none'})}})
  else wx.navigateTo({url:'/pages/webview/index?url='+encodeURIComponent(config.MALL_H5_DOMAIN)})
}
module.exports={openMallProduct,openMallHome}
