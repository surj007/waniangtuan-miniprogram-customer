"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_util_1 = require("../utils/request.util");
function testApi() {
    return request_util_1.commonHttp({
        url: '/test',
        method: 'GET',
        data: {
            name: 'srj'
        }
    });
}
exports.testApi = testApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0LmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNEQUFtRDtBQUVuRCxTQUFnQixPQUFPO0lBQ3JCLE9BQU8seUJBQVUsQ0FBc0Q7UUFDckUsR0FBRyxFQUFFLE9BQU87UUFDWixNQUFNLEVBQUUsS0FBSztRQUNiLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxLQUFLO1NBQ1o7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDO0FBUkQsMEJBUUMifQ==