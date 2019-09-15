"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_util_1 = require("../utils/constants.util");
function commonHttp(requestConfig, responseDataClass, needCheckRespone) {
    requestConfig.data === undefined && (requestConfig.data = {});
    requestConfig.header === undefined && (requestConfig.header = {});
    return new Promise(function (resolve, reject) {
        wx.getStorage({
            key: 'token',
            success: function (result) {
                (requestConfig.header).cookie = result.data;
            },
            fail: function (err) {
                console.debug('[srj][request.util.ts][wx.getStorage]fail: ', err);
            },
            complete: function () {
                wx.request(__assign(__assign({}, requestConfig), { url: constants_util_1.BASE_URL + requestConfig.url, success: function (res) {
                        if (needCheckRespone &&
                            !((res.data).data instanceof responseDataClass)) {
                            console.warn("[srj][request.util.ts][wx.request][" + requestConfig.url + "]respone invalidate: ", res);
                            reject(res);
                        }
                        if (res.statusCode === 200 && (res.data).code === 0) {
                            if (requestConfig.url === '/login') {
                                resolve((res.header)["set-cookie"]);
                            }
                            else {
                                resolve((res.data).data);
                            }
                        }
                        else if (res.statusCode === 401) {
                            wx.navigateTo({
                                url: '/pages/login/login'
                            });
                        }
                        else {
                            console.warn("[srj][request.util.ts][wx.request][" + requestConfig.url + "]not success: ", res);
                            reject(res);
                        }
                    },
                    fail: function (err) {
                        console.debug("[srj][request.util.ts][wx.request][" + requestConfig.url + "]fail: ", err);
                        reject(err);
                    } }));
            }
        });
    });
}
exports.commonHttp = commonHttp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdC51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNQSwwREFBbUQ7QUFJbkQsU0FBZ0IsVUFBVSxDQUl4QixhQUF3QyxFQUN4QyxpQkFBc0IsRUFDdEIsZ0JBQTBCO0lBRTFCLGFBQWEsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBTSxFQUFFLENBQUMsQ0FBQztJQUNqRSxhQUFhLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFFbEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsT0FBTztZQUNaLE9BQU8sRUFBUCxVQUFRLE1BQU07Z0JBQ2EsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFFLENBQUMsTUFBTSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEYsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkNBQTZDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEUsQ0FBQztZQUNELFFBQVEsRUFBUjtnQkFDRSxFQUFFLENBQUMsT0FBTyx1QkFDTCxhQUFhLEtBQ2hCLEdBQUcsRUFBRSx5QkFBUSxHQUFHLGFBQWEsQ0FBQyxHQUFHLEVBQ2pDLE9BQU8sRUFBUCxVQUFRLEdBQUc7d0JBQ1QsSUFDRSxnQkFBZ0I7NEJBQ2hCLENBQUMsQ0FBNEIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFFLENBQUMsSUFBSSxZQUFZLGlCQUFpQixDQUFDLEVBQzNFOzRCQUNBLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0NBQXNDLGFBQWEsQ0FBQyxHQUFHLDBCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUVsRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2I7d0JBRUQsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsSUFBK0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTs0QkFDL0UsSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtnQ0FDbEMsT0FBTyxDQUFrQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzZCQUN2RTtpQ0FDSTtnQ0FDSCxPQUFPLENBQTRCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUN0RDt5QkFDRjs2QkFDSSxJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFOzRCQUMvQixFQUFFLENBQUMsVUFBVSxDQUFDO2dDQUNaLEdBQUcsRUFBRSxvQkFBb0I7NkJBQzFCLENBQUMsQ0FBQzt5QkFDSjs2QkFDSTs0QkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLHdDQUFzQyxhQUFhLENBQUMsR0FBRyxtQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFFM0YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNiO29CQUNILENBQUM7b0JBQ0QsSUFBSSxZQUFDLEdBQUc7d0JBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyx3Q0FBc0MsYUFBYSxDQUFDLEdBQUcsWUFBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUVyRixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2QsQ0FBQyxJQUNELENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBOURELGdDQThEQyJ9