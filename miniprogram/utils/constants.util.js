"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = require("../env");
var BASE_URL = 'https://waniangt:8000/api';
exports.BASE_URL = BASE_URL;
if (env_1.default === 'dev') {
    exports.BASE_URL = BASE_URL = 'http://127.0.0.1:8000/api';
}
else if (env_1.default === 'pre-test') {
    exports.BASE_URL = BASE_URL = 'https://waniangt:8999/api';
}
var TEST_API_BASE_URL = '/test';
exports.TEST_API_BASE_URL = TEST_API_BASE_URL;
var AUTH_API_BASE_URL = '/auth';
exports.AUTH_API_BASE_URL = AUTH_API_BASE_URL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25zdGFudHMudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhCQUF5QjtBQUV6QixJQUFJLFFBQVEsR0FBRywyQkFBMkIsQ0FBQztBQWF6Qyw0QkFBUTtBQVhWLElBQUksYUFBRyxLQUFLLEtBQUssRUFBRTtJQUNqQixtQkFBQSxRQUFRLEdBQUcsMkJBQTJCLENBQUM7Q0FDeEM7S0FDSSxJQUFJLGFBQUcsS0FBSyxVQUFVLEVBQUU7SUFDM0IsbUJBQUEsUUFBUSxHQUFHLDJCQUEyQixDQUFDO0NBQ3hDO0FBRUQsSUFBTSxpQkFBaUIsR0FBVyxPQUFPLENBQUM7QUFLeEMsOENBQWlCO0FBSm5CLElBQU0saUJBQWlCLEdBQVcsT0FBTyxDQUFDO0FBS3hDLDhDQUFpQiJ9