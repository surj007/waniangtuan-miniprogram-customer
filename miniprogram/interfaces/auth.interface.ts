export interface LoginRequsetDataInterface {
  readonly loginCode: string;
  readonly encryptedData: string;
  readonly locationInfo: wx.GetLocationSuccessCallbackResult;
  readonly userInfo: wx.UserInfo;
  readonly signature: string;
  readonly iv: string;
  readonly rawData: string;
}