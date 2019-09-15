"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var login_api_1 = require("../api/login.api");
function commonLoginService() {
    wx.login({
        success: function (loginResult) {
            wx.getUserInfo({
                withCredentials: true,
                success: function (getUserInfoResult) {
                    login_api_1.loginApi({
                        code: loginResult.code,
                        encryptedData: getUserInfoResult.encryptedData,
                        userInfo: getUserInfoResult.userInfo,
                        signature: getUserInfoResult.signature,
                        iv: getUserInfoResult.iv,
                        locationInfo: app.globalData.locationInfo
                    }).then(function (data) {
                        wx.setStorage({
                            key: 'token',
                            data: data,
                            fail: function (err) {
                                console.debug('[srj][login.service.ts][wx.setStorage]fail: ', err);
                            }
                        });
                    });
                },
                fail: function (err) {
                    console.debug('[srj][login.service.ts][wx.getUserInfo]fail: ', err);
                }
            });
        },
        fail: function (err) {
            console.debug('[srj][login.service.ts][wx.login]fail: ', err);
        }
    });
}
exports.commonLoginService = commonLoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWdCLENBQUM7QUFFbkMsOENBQTRDO0FBRTVDLFNBQWdCLGtCQUFrQjtJQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ1AsT0FBTyxZQUFDLFdBQVc7WUFDakIsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixlQUFlLEVBQUUsSUFBSTtnQkFDckIsT0FBTyxZQUFDLGlCQUFpQjtvQkFDdkIsb0JBQVEsQ0FBQzt3QkFDUCxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7d0JBQ3RCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxhQUFhO3dCQUM5QyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsUUFBUTt3QkFDcEMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLFNBQVM7d0JBQ3RDLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFO3dCQUN4QixZQUFZLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxZQUFZO3FCQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTt3QkFDWCxFQUFFLENBQUMsVUFBVSxDQUFDOzRCQUNaLEdBQUcsRUFBRSxPQUFPOzRCQUNaLElBQUksTUFBQTs0QkFDSixJQUFJLFlBQUMsR0FBRztnQ0FDTixPQUFPLENBQUMsS0FBSyxDQUFDLDhDQUE4QyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUNyRSxDQUFDO3lCQUNGLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUNELElBQUksWUFBQyxHQUFHO29CQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0NBQStDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3RFLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxZQUFDLEdBQUc7WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDO0FBaENELGdEQWdDQyJ9