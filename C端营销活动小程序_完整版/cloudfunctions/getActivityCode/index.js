
const cloud=require('wx-server-sdk');cloud.init({env:cloud.DYNAMIC_CURRENT_ENV})
exports.main=async(event)=>{
  const {activityId,source='poster'}=event
  const scene=`id=${activityId}&s=${source}`.slice(0,32)
  return await cloud.openapi.wxacode.getUnlimited({scene,page:'pages/activity/detail/index',checkPath:false,envVersion:'release'})
}
