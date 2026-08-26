
const config = require('../config/index')
const mock = require('../data/mock')
function request(path, data={}){return new Promise((resolve,reject)=>{wx.request({url:config.API_BASE_URL+path,data,header:{'content-type':'application/json'},success:r=>resolve(r.data),fail:reject})})}
module.exports = {
  async getHome(){if(config.DATA_MODE==='mock') return {mainActivity:mock.activities[0], activities:mock.activities, products:mock.products.slice(0,4)}; return request('/api/public/home')},
  async getActivities(){if(config.DATA_MODE==='mock') return mock.activities; return request('/api/public/activities')},
  async getActivity(id){if(config.DATA_MODE==='mock') return mock.activities.find(x=>x.id===id)||mock.activities[0]; return request('/api/public/activities/'+id)},
  async track(event){if(config.DATA_MODE==='mock') return true; return request('/api/track/events',event)}
}
