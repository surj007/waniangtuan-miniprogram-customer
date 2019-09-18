"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_util_1 = require("../utils/request.util");
function loginApi(data) {
    return request_util_1.commonHttp({
        url: '/auth/login',
        method: 'POST',
        data: data
    });
}
exports.loginApi = loginApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNEQUFtRDtBQUVuRCxTQUFnQixRQUFRLENBQUMsSUFBK0I7SUFDdEQsT0FBTyx5QkFBVSxDQUFvQztRQUNuRCxHQUFHLEVBQUUsYUFBYTtRQUNsQixNQUFNLEVBQUUsTUFBTTtRQUNkLElBQUksTUFBQTtLQUNMLENBQUMsQ0FBQztBQUNMLENBQUM7QUFORCw0QkFNQyJ9