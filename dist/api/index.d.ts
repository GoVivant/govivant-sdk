export default class ApiGvv {
    private client;
    constructor(api_key: string, dev: boolean);
    get(url: string, conf?: {}): any;
    delete(url: string, conf?: {}): any;
    post(url: string, data?: {}, conf?: {}): any;
    put(url: string, data?: {}, conf?: {}): any;
}
