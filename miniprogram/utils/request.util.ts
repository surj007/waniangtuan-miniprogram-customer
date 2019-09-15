import { 
  RequestConfigInterface, 
  RequestHeaderInterface,
  ResponseDataInterface,
  LoginResponeHeaderInterface
} from '../interfaces/request.interface';
import { BASE_URL } from '../utils/constants.util';

// T为req data类型
// E为res data类型
export function commonHttp<
  T extends string | object | ArrayBuffer | undefined,
  U
>(
  requestConfig: RequestConfigInterface<T>,
  responseDataClass: any,
  needCheckRespone?: boolean
): Promise<U> {
  requestConfig.data === undefined && (requestConfig.data = <T>{});
  requestConfig.header === undefined && (requestConfig.header = {});

  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: 'token',
      success(result) {
        (<RequestHeaderInterface>(requestConfig.header)).cookie = <string>result.data;
      },
      fail(err) {
        console.debug('[srj][request.util.ts][wx.getStorage]fail: ', err);
      },
      complete() {
        wx.request({
          ...requestConfig,
          url: BASE_URL + requestConfig.url,
          success(res) {
            if (
              needCheckRespone &&
              !((<ResponseDataInterface<U>>(res.data)).data instanceof responseDataClass)
            ) {
              console.warn(`[srj][request.util.ts][wx.request][${requestConfig.url}]respone invalidate: `, res);

              reject(res);
            }

            if (res.statusCode === 200 && (<ResponseDataInterface<U>>(res.data)).code === 0) {
              if (requestConfig.url === '/login') {
                resolve((<LoginResponeHeaderInterface<U>>(res.header))["set-cookie"]);
              }
              else {
                resolve((<ResponseDataInterface<U>>(res.data)).data);
              }
            }
            else if (res.statusCode === 401) {
              wx.navigateTo({
                url: '/pages/login/login'
              });
            }
            else {
              console.warn(`[srj][request.util.ts][wx.request][${requestConfig.url}]not success: `, res);

              reject(res);
            }
          },
          fail(err) {
            console.debug(`[srj][request.util.ts][wx.request][${requestConfig.url}]fail: `, err);
    
            reject(err);
          }
        });
      }
    });
  });
}