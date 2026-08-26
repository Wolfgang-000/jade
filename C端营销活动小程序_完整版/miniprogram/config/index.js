
module.exports = {
  // mock | api。正式上线改成 api，并配置 request 合法域名
  DATA_MODE: 'mock',
  API_BASE_URL: 'https://api.example.com',

  // miniProgram：跳转已有商城小程序；webview：打开已有H5商城
  MALL_MODE: 'miniProgram',
  MALL_APP_ID: 'wx_your_existing_mall_appid',
  MALL_HOME_PATH: '/pages/index/index',
  MALL_H5_DOMAIN: 'https://mall.example.com',

  BRAND_NAME: '天仁健康会员活动中心'
}
