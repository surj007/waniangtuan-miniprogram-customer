"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_util_1 = require("../utils/request.util");
var constants_util_1 = require("../utils/constants.util");
function loginApi(data) {
    return request_util_1.commonHttp({
        url: constants_util_1.AUTH_API_BASE_URL + '/login',
        method: 'POST',
        data: data
    });
}
exports.loginApi = loginApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNEQUFtRDtBQUNuRCwwREFBNEQ7QUFFNUQsU0FBZ0IsUUFBUSxDQUFDLElBQStCO0lBQ3RELE9BQU8seUJBQVUsQ0FBb0M7UUFDbkQsR0FBRyxFQUFFLGtDQUFpQixHQUFHLFFBQVE7UUFDakMsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLE1BQUE7S0FDTCxDQUFDLENBQUM7QUFDTCxDQUFDO0FBTkQsNEJBTUMifQ==