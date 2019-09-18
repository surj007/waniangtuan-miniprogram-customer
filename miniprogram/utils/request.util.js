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
function commonHttp(requestConfig) {
    requestConfig.data === undefined && (requestConfig.data = {});
    requestConfig.header === undefined && (requestConfig.header = {});
    return new Promise(function (resolve, reject) {
        wx.getStorage({
            key: 'token',
            success: function (result) {
                (requestConfig.header).Cookie = result.data;
            },
            fail: function (err) {
                console.debug('[srj][request.util.ts][wx.getStorage]fail: ', err);
            },
            complete: function () {
                wx.request(__assign(__assign({}, requestConfig), { url: constants_util_1.BASE_URL + requestConfig.url, success: function (res) {
                        if (res.statusCode === 200 && (res.data).code === 0) {
                            if (requestConfig.url === '/auth/login') {
                                resolve((res.header)['set-cookie']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdC51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNQSwwREFBbUQ7QUFJbkQsU0FBZ0IsVUFBVSxDQUl4QixhQUF3QztJQUV4QyxhQUFhLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQU0sRUFBRSxDQUFDLENBQUM7SUFDakUsYUFBYSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBRWxFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE9BQU87WUFDWixPQUFPLEVBQVAsVUFBUSxNQUFNO2dCQUNhLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBRSxDQUFDLE1BQU0sR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hGLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3BFLENBQUM7WUFDRCxRQUFRLEVBQVI7Z0JBQ0UsRUFBRSxDQUFDLE9BQU8sdUJBQ0wsYUFBYSxLQUNoQixHQUFHLEVBQUUseUJBQVEsR0FBRyxhQUFhLENBQUMsR0FBRyxFQUNqQyxPQUFPLEVBQVAsVUFBUSxHQUFHO3dCQUNULElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLElBQStCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7NEJBQy9FLElBQUksYUFBYSxDQUFDLEdBQUcsS0FBSyxhQUFhLEVBQUU7Z0NBQ3ZDLE9BQU8sQ0FBa0MsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs2QkFDdkU7aUNBQ0k7Z0NBQ0gsT0FBTyxDQUE0QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDdEQ7eUJBQ0Y7NkJBQ0ksSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTs0QkFDL0IsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsb0JBQW9COzZCQUMxQixDQUFDLENBQUM7eUJBQ0o7NkJBQ0k7NEJBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyx3Q0FBc0MsYUFBYSxDQUFDLEdBQUcsbUJBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBRTNGLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDYjtvQkFDSCxDQUFDO29CQUNELElBQUksWUFBQyxHQUFHO3dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXNDLGFBQWEsQ0FBQyxHQUFHLFlBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFFckYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNkLENBQUMsSUFDRCxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQW5ERCxnQ0FtREMifQ==