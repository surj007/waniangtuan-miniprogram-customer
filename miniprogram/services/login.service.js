"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_api_1 = require("../api/auth.api");
var app = getApp();
function commonLoginService() {
    wx.login({
        success: function (loginResult) {
            wx.getUserInfo({
                withCredentials: true,
                success: function (getUserInfoResult) {
                    auth_api_1.loginApi({
                        loginCode: loginResult.code,
                        encryptedData: getUserInfoResult.encryptedData,
                        userInfo: getUserInfoResult.userInfo,
                        signature: getUserInfoResult.signature,
                        iv: getUserInfoResult.iv,
                        rawData: getUserInfoResult.rawData,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw0Q0FBMkM7QUFFM0MsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFnQixDQUFDO0FBRW5DLFNBQWdCLGtCQUFrQjtJQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ1AsT0FBTyxZQUFDLFdBQVc7WUFDakIsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixlQUFlLEVBQUUsSUFBSTtnQkFDckIsT0FBTyxZQUFDLGlCQUFpQjtvQkFDdkIsbUJBQVEsQ0FBQzt3QkFDUCxTQUFTLEVBQUUsV0FBVyxDQUFDLElBQUk7d0JBQzNCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxhQUFhO3dCQUM5QyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsUUFBUTt3QkFDcEMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLFNBQVM7d0JBQ3RDLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFO3dCQUN4QixPQUFPLEVBQUUsaUJBQWlCLENBQUMsT0FBTzt3QkFDbEMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWTtxQkFDMUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7d0JBQ1gsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDWixHQUFHLEVBQUUsT0FBTzs0QkFDWixJQUFJLE1BQUE7NEJBQ0osSUFBSSxZQUFDLEdBQUc7Z0NBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDckUsQ0FBQzt5QkFDRixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxJQUFJLFlBQUMsR0FBRztvQkFDTixPQUFPLENBQUMsS0FBSyxDQUFDLCtDQUErQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN0RSxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksWUFBQyxHQUFHO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRSxDQUFDO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQWpDRCxnREFpQ0MifQ==