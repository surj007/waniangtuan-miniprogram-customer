export interface AppInterface {
  globalData: {
    token: string;
    locationInfo: wx.GetLocationSuccessCallbackResult;
  }
}