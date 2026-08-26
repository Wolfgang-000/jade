
const api=require('../services/api')
function source(){const app=getApp();return (app&&app.globalData&&app.globalData.source)||'direct'}
function track(name,payload={}){api.track({name,source:source(),payload,ts:Date.now()}).catch(()=>{})}
module.exports={track}
