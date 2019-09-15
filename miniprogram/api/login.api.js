"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_util_1 = require("../utils/request.util");
function loginApi(data) {
    return request_util_1.commonHttp({
        url: '/login',
        method: 'POST',
        data: data
    }, Array);
}
exports.loginApi = loginApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0RBQW1EO0FBRW5ELFNBQWdCLFFBQVEsQ0FBQyxJQUErQjtJQUN0RCxPQUFPLHlCQUFVLENBQWdDO1FBQy9DLEdBQUcsRUFBRSxRQUFRO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLE1BQUE7S0FDTCxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ1osQ0FBQztBQU5ELDRCQU1DIn0=