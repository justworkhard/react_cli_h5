import axios from 'axios';
import request from '@/utils/request';

if (sessionStorage.getItem('mallCode')) {
   request.extendOptions({
      headers: {
         'mallCode': sessionStorage.getItem('mallCode'),
      },
   });
}

// 然后可以直接获取
request.extendOptions({
   headers: {
      'Content-Type': 'application/json;charset=UTF-8;text/html'
   },
});

const api = 'https://kt-mall.gateway.hualta.com';

// 设置header

export async function getByCode(params: String) {
   return request.get(`${api}/m-appshow/mall-template-header/getByCode?merchantCode=${params}`);
}

export async function getByTemplateCode(params: String, mallCode: string) {
   request.extendOptions({
      headers: {
         'mallCode': mallCode,
      },
   });
   return request.get(`${api}/m-appshow/mall-template-detail/getByTemplateCode?templateCode=${params}`);
}

export async function commonGetByTemplateCode(params: any) {
   return axios.post(`${api}/m-appshow/common/getByTemplateCode`, params, {

   });
}
// 获取首页商品
export async function selectByPage(params: any) {
   return request.post(`${api}/m-feign-api/mall/production/selectByPage`, { data: params });
}
// 获取分类下商品
export async function cateryProduct(params: any) {
   return request.post(`${api}/m-feign-api/mall/template/getTemplateDate/${params.templateCode}`, { data: params });
}

// 美食分类
export async function selectFoodType() {
   return request.get(`${api}/m-appshow/dic/selectFoodType`);
}

// 商品详情
export async function mallUnionOrder() {
   return request.get(`${api}/m-feign-api/mall/order/mallUnionOrder`);
}

// 获取微信openid
export async function getOpenidAndUserInfo(params: any) {
   return request.get(`${api}/m-feign-api/mall/user/getOpenidAndUserInfo?merchantCode=${params.merchantCode}&code=${params.code}`);
}

// 获取微信参数
export async function getWxData(merchantCode: any) {
   return request.get(`${api}/m-feign-api/tonglian/merchantsConfig/getWxData/${merchantCode}`);
}

// 获取微信数据m-feign-api/mall/user/getUserInfo
export async function getUserInfo(params: any) {
   return request.get(`${api}/m-feign-api/mall/user/getUserInfo?openid=${params.openid}&merchantCode=${params.merchantCode}`);
}

// 添加购物车 /m-feign-api/mall/shoppingCart/addShoppingCart
export async function addShoppingCart(params: any) {
   return request.post(`${api}/m-feign-api/mall/shoppingCart/addShoppingCart`, { data: params });
}

// 商品详情 /m-feign-api/mall/shoppingCart/addShoppingCart
export async function mallProduct(params: any) {
   return request.get(`${api}/m-feign-api/mall/production/${params}`);
}

// 店铺详情
export async function mallShops(params: any) {
   return request.get(`${api}/m-appshow/mall-shops/getMallshop/${params}`);
}
// 购物车 m-feign-api/mall/shoppingCart/showShoppingCart
export async function showShoppingCart(params: any) {
   return request.post(`${api}/m-feign-api/mall/shoppingCart/showShoppingCart`, { data: params });
}
// 购物车修改数量 m-feign-api/mall/shoppingCart/showShoppingCart
export async function updateQuantityById(params: any) {
   return request.post(`${api}/m-feign-api/mall/shoppingCart/updateQuantityById`, { data: params });
}
// 删除购物车 m-feign-api/mall/shoppingCart/showShoppingCart
export async function delShoppi(params: any) {
   return request.delete(`${api}/m-feign-api/mall/shoppingCart/delShoppingCart?orderCode=${params}`, { data: params });
}
// 修改选中状态/m-feign-api/mall/shoppingCart/recordSelected
export async function recordSelected(params: any) {
   return request.post(`${api}/m-feign-api/mall/shoppingCart/recordSelected`, { data: params });
}
// /m-feign-api/mall/order/shoppingCartUnio
export async function shoppingCartUnionOrder(params: any) {
   return request.post(`${api}/m-feign-api/mall/order/shoppingCartUnionOrder`, { data: params });
}
// m-feign-api/mall/pay/mallUnionOrderBuy
export async function mallUnionOrderBuy(params: any) {
   return request.post(`${api}/m-feign-api/mall/pay/mallUnionOrderBuy`, { data: params });
}
// https://test.allinpaygd.com/apiweb/h5unionpay/unionorder
export async function unionorder(params: any) {
   // return request.post(`/allin/apiweb/h5unionpay/unionorder`, { data: params })
   return fetch('/allin/apiweb/h5unionpay/unionorder', {
      method: 'POST',
      headers: {
         // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
   }).then(function (response) {
      return response;
   }, function (error) {

   });
}
// m-feign-api/mall/pay/mallUnionOrderBuy
export async function showMyOrderMaster(params: any) {
   return request.post(`${api}/m-feign-api/mall/order/showMyOrderMaster`, { data: params });
}
// m-feign-api/mall/pay/mallUnionOrderBuy
export async function showMyOrderMasterUnuser(params: any) {
   return request.post(`${api}/m-feign-api/mall/order/showMyBuyCard`, { data: params });
}
// m-feign-api/mall/order/mallUnionOrder
export async function detailMallUnionOrder(params: any) {
   return request.post(`${api}/m-feign-api/mall/order/mallUnionOrder`, { data: params });
}
// m-feign-api/mall/order/mallUnionOrder
export async function orderQrCodeDetail(params: any) {
   return request.get(`${api}/m-feign-api/mall/order/buyCardQrCodeDetail?id=${params.id}&orderCode=${params.orderCode}&mapUserCardNo=${params.mapUserCardNo}`);
}
// m-feign-api/mall/order/mallUnionOrder
export async function bindTel(params: any) {
   return request.post(`${api}/m-feign-api/mall/user/bindTel`, {
      data: params
   });
}
// m-feign-api/mall/order/mallUnionOrder
export async function sendCode(params: any) {
   return request.get(`${api}/m-feign-api/mall/user/sendCode?phoneNum=${params.phoneNum}`);
}
// m-feign-api/mall/order/mallUnionOrder
export async function checkUserBindTel(params: any) {
   return request.get(`${api}/m-feign-api/mall/user/checkUserBindTel?openId=${params.openId}`);
}
// /m-feign-api/mall/orderWayBillMapUser
export async function orderWayBillMapUserList(params: string) {
   return request.get(`${api}/m-feign-api/mall/orderWayBillMapUser/list?openId=${params}`);
}
// /m-feign-api/mall/orderWayBillMapUser/delById
export async function orderWayBillMapUser(params: string) {
   return request.delete(`${api}/m-feign-api/mall/orderWayBillMapUser/delById?id=${params}`);
}
/// m-feign-api/mall/orderWayBillMapUser/save
export async function orderWayBillMapUserSave(params: any) {
   return request.post(`${api}/m-feign-api/mall/orderWayBillMapUser/save`, {
      data: params
   });
}
// m-feign-api/mall/orderWayBillMapUser/getOneById
export async function orderWayBillMapUserGetById(params: any) {
   return request.get(`${api}/m-feign-api/mall/orderWayBillMapUser/getOneById?id=${params}`);
}
// /m-feign-api/mall/orderWayBillMapUser/update
export async function orderWayBillMapUserUpdate(params: any) {
   return request.post(`${api}/m-feign-api/mall/orderWayBillMapUser/update`, {
      data: params
   });
}
// /m-feign-api/mall/orderWayBills/checkIfIntoWay
export async function checkIfIntoWay(params: any) {
   return request.post(`${api}/m-feign-api/mall/orderWayBills/checkIfIntoWay`, {
      data: params
   });
}
// /m-feign-api/mall/orderWayBills/checkIfIntoWay
export async function selectConponType() {
   return request.get(`${api}/m-appshow/dic/selectConponType`);
}
// /m-feign-api/mall/orderWayBills/checkIfIntoWay
export async function coupons(params: any) {
   return request.get(`${api}/m-feign-api/appshow/coupons/${params.mallCode}/${params.merchantCode}/${params.couponType}?pageNo=${params.pageNo}&pageSize=${params.pageSize}`);
}
// /m-feign-api/mall/orderWayBills/checkIfIntoWay
export async function userMallFreeCards(params: any) {
   return request.post(`${api}/m-feign-api/mall/user/userMallFreeCards`, {
      data: params
   });
}
// /m-feign-api/mall/orderWayBills/checkIfIntoWay
export async function showMyOrderWayBills(params: any) {
   return request.post(`${api}/m-feign-api/mall/orderWayBills/showMyOrderWayBills`, {
      data: params
   });
}
/// m-feign-api/mall/production/queryInventory
export async function queryInventory(params: any) {
   return request.get(`${api}/m-feign-api/mall/production/queryInventory?productionCode=${params.productionCode}&storeMerchantCode=${params.storeMerchantCode}`);
}
// m-feign-api/mall/orderWayBills/queryWayBillsProduction
export async function queryWayBillsProduction(params: any) {
   return request.get(`${api}/m-feign-api/mall/orderWayBills/queryWayBillsProduction?id=${params.id}&wayBillCode=${params.wayBillCode}`);
}
/// m-feign-api/tonglian/userCard/userGetCard
export async function userGetCard(params: any) {
   return request.post(`${api}/m-feign-api/mall/user/userGetCard`, {
      data: params
   });
}
/// 支付页展示 商品积分明细
export async function queryPointDetail(params: any) {
   return request.post(`${api}/m-feign-api/mall/production/queryPointDetail`, {
      data: params
   });
}
/// 支付页展示 商品积分明细
export async function merchantsInfo(params: any) {
   return request.get(`${api}/m-merchant/merchants/${params.merchantCode}`);
}

// 商家版接口

// /m-feign-api/tonglian/adminLogin/login
export async function login(params: any) {
   return request.post(`${api}/m-feign-api/tonglian/adminLogin/login`, {
      data: params
   });
}
// 商户端获取用券流水
export async function cardTraceList(params: any) {
   return request.post(`${api}/m-feign-api/tonglian/cardTrace/cardTraceList`, {
      data: params
   });
}
// 商户端获取用券流水
export async function wxOfficial(params: any) {
   return request.post(`${api}/m-feign-api/wxOfficial/${params.merchantCode}`, {
      data: params
   });
}
// 二维码扫码验卡接口
export async function checkQrCard(params: any) {
   return request.post(`${api}/m-feign-api/admin/merchantCard/checkQrCard/${params.merchantCode}/${params.cardNo}`, {
      data: params
   });
}
// 二维码扫码验卡接口
export async function candidates(params: any) {
   return request.post(`${api}/m-merchant/merchant/candidates`, {
      data: params
   });
}
