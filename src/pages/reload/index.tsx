import React, { useState, useEffect } from 'react';
import { Carousel, Toast } from 'antd-mobile';
import { connect } from 'dva';
import { ConnectState } from '@/models/connect';
import router from 'umi/router';
import styles from './index.less';
import { getByTemplateCode, getByCode, selectByPage, getWxData, getOpenidAndUserInfo } from '../../service/index';


function App(props: any) {
  const { dispatch, userInfo, openid, code } = props;
  let { merchantCode } = props.location.query;

  if (!merchantCode) {
    merchantCode = userInfo.merchantCode;
  }
  useEffect(() => {
    const wxData: any = {
      WX_APPID: '',
      WX_APPSECRET: ''
    };
    getByCode(merchantCode).then(async (res) => {
      if (res.code != 1200) {
        return Toast.info(res.msg);
      }
      sessionStorage.setItem('mallCode', res.data.mallCode);
      
      if (!openid) {
        await getWxData(merchantCode).then(res => {
          if (res.code != 1200) {
            return Toast.info('数据异常，请稍后重试！');
          }
          res.data.forEach((item: any) => {
            wxData[item.key] = item.value;
          });
        });
        if (code) {
          getOpenidAndUserInfo({
            code,
            merchantCode
          }).then(res => {
            if (res.code != 1200) {
              return Toast.info('数据异常，请稍后重试！');
            }
            dispatch({
              type: 'user/fetchOpenId',
              payload: res.data.openId,
            });
          });
        } else {
          const redirectUrl = `http://mall.hualta.com/?merchantCode=${merchantCode}`;
          window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxData.WX_APPID}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
        }
      }
    });
  }, []);


  return (
    <div className={styles.normal} />
  );
}
export default connect(({ user }: ConnectState) => ({
  userInfo: user.currentUser,
  openid: user.openid
}))(App);