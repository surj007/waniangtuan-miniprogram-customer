import { AppInterface } from '../interfaces/app.interface';

import { loginApi } from '../api/auth.api';

const app = getApp<AppInterface>();

export function commonLoginService() {
  wx.login({
    success(loginResult) {
      wx.getUserInfo({
        withCredentials: true,
        success(getUserInfoResult) {
          loginApi({
            loginCode: loginResult.code,
            encryptedData: getUserInfoResult.encryptedData,
            userInfo: getUserInfoResult.userInfo,
            signature: getUserInfoResult.signature,
            iv: getUserInfoResult.iv,
            rawData: getUserInfoResult.rawData,
            locationInfo: app.globalData.locationInfo
          }).then((data) => {
            wx.setStorage({
              key: 'token',
              data,
              success() {
                wx.navigateBack({ delta: 1 });
              },
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