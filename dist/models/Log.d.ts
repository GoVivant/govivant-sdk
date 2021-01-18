export default class Log {
    route: string;
    host: string;
    method: string;
    type: string;
    headers: Object;
    data: Object;
    business_id: string;
    user_id: string;
    app_id: string;
    constructor(route: string, host: string, method: string, type: string, headers: Object, data: Object, business_id: string, user_id: string, app_id: string);
}
