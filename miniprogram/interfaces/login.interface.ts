export interface LoginRequsetDataInterface {
  readonly code: string;
  readonly encryptedData: string;
  readonly locationInfo: wx.GetLocationSuccessCallbackResult;
  readonly userInfo: wx.UserInfo;
  readonly signature: string;
  readonly iv: string;
}