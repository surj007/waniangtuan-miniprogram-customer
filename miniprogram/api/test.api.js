"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_util_1 = require("../utils/request.util");
var constants_util_1 = require("../utils/constants.util");
function testApi() {
    return request_util_1.commonHttp({
        url: constants_util_1.TEST_API_BASE_URL + '/getUserInfoByUsername',
        method: 'GET',
        data: {
            name: 'srj'
        }
    });
}
exports.testApi = testApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0LmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNEQUFtRDtBQUNuRCwwREFBNEQ7QUFFNUQsU0FBZ0IsT0FBTztJQUNyQixPQUFPLHlCQUFVLENBQXNEO1FBQ3JFLEdBQUcsRUFBRSxrQ0FBaUIsR0FBRyx3QkFBd0I7UUFDakQsTUFBTSxFQUFFLEtBQUs7UUFDYixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsS0FBSztTQUNaO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQVJELDBCQVFDIn0=