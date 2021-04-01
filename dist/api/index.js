"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
function getClient(api_key, dev, error_handler, clap) {
    if (error_handler === void 0) { error_handler = function () { }; }
    var client = axios_1.default.create({
        baseURL: "https://govivant-api" + (dev ? clap ? '-dev-clap' : '-dev' : '') + ".herokuapp.com",
        headers: {
            'Authorization': "Bearer " + api_key,
        }
    });
    client.interceptors.response.use(function (res) { return res; }, error_handler);
    return client;
}
var ApiGvv = /** @class */ (function () {
    function ApiGvv(api_key, dev, error_handler, clap) {
        this.client = getClient(api_key, dev, error_handler, clap);
    }
    ApiGvv.prototype.get = function (url, conf) {
        if (conf === void 0) { conf = {}; }
        return this.client.get(url, conf)
            .then(function (response) { return Promise.resolve(response); })
            .catch(function (error) { return Promise.reject(error.response); });
    };
    ApiGvv.prototype.delete = function (url, conf) {
        if (conf === void 0) { conf = {}; }
        return this.client.delete(url, conf)
            .then(function (response) { return Promise.resolve(response); })
            .catch(function (error) { return Promise.reject(error.response); });
    };
    ApiGvv.prototype.post = function (url, data, conf) {
        if (data === void 0) { data = {}; }
        if (conf === void 0) { conf = {}; }
        return this.client.post(url, data, conf)
            .then(function (response) { return Promise.resolve(response); })
            .catch(function (error) { return Promise.reject(error.response); });
    };
    ApiGvv.prototype.put = function (url, data, conf) {
        if (data === void 0) { data = {}; }
        if (conf === void 0) { conf = {}; }
        return this.client.put(url, data, conf)
            .then(function (response) { return Promise.resolve(response); })
            .catch(function (error) { return Promise.reject(error.response); });
    };
    return ApiGvv;
}());
exports.default = ApiGvv;
//# sourceMappingURL=index.js.map