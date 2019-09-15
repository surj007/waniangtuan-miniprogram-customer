import { AppInterface } from '../interfaces/app.interface';

const app = getApp<AppInterface>();

import { loginApi } from '../api/login.api';

export function commonLoginService() {
  wx.login({
    success(loginResult) {
      wx.getUserInfo({
        withCredentials: true,
        success(getUserInfoResult) {
          loginApi({
            code: loginResult.code,
            encryptedData: getUserInfoResult.encryptedData,
            userInfo: getUserInfoResult.userInfo,
            signature: getUserInfoResult.signature,
            iv: getUserInfoResult.iv,
            locationInfo: app.globalData.locationInfo
          }).then((data) => {
            wx.setStorage({
              key: 'token',
              data,
              fail(err) {
                console.debug('[srj][login.service.ts][wx.setStorage]fail: ', err);
              }
            });
          });
        },
        fail(err) {
          console.debug('[srj][login.service.ts][wx.getUserInfo]fail: ', err);
        }
      });
    },
    fail(err) {
      console.debug('[srj][login.service.ts][wx.login]fail: ', err);
    }
  });
}