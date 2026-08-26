
# 小程序与CMS API契约（建议）

## GET /api/public/home
返回：主活动、热门活动、精选商品。

## GET /api/public/activities
返回可公开展示的活动列表。服务端必须过滤草稿、下线和合规不通过的内容。

## GET /api/public/activities/:id
返回：活动基本信息、页面模块、活动商品、活动价、购买跳转参数、活动规则。

## POST /api/track/events
请求示例：
```json
{"name":"product_click","source":"group","payload":{"activityId":"a1","productId":"p1"},"ts":1787730000000}
```

## CMS发布原则
运营后台发布 → 后端写数据库 → 清缓存 → 小程序立即读取新内容。
只有“新增小程序功能/新组件”才需要重新提交微信审核；单纯换商品、价格、Banner、文案不需要重新发版。
