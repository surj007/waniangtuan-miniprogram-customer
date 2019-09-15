//app.ts
import { AppInterface } from './interfaces/app.interface';

// 小程序用户不能主动销毁，按右上角只是让小程序进入后台
App<AppInterface>({
  // 第一次进入小程序时触发，一般不用此钩子
  onLaunch() {},
  // 小程序进入前台时触发
  onShow() {
    let self: App.AppInstance<AppInterface> & AppInterface = this;

    wx.getLocation({
      success(locationInfo) {
        self.globalData.locationInfo = locationInfo;
      },
      fail(err) {
        console.debug('[srj][app.ts][wx.getLocation]fail: ', err);
      }
    });

    wx.getStorage({
      key: 'token',
      success() {

      },
      fail() {
        
      }
    });
  },
  // 小程序进入后台时触发 
  onHide() {},
  onError(err) {
    console.error('[srj][app.ts][onError]app error: ', err);
  },
  globalData: {
    token: '',
    locationInfo: <wx.GetLocationSuccessCallbackResult>{}
  }
})