export default class Log {
    route: string
    host: string
    method: string
    type: string
    headers: Object
    data: Object
    business_id: string
    user_id: string
    app_id: string

    constructor(
        route: string,
        host: string,
        method: string,
        type: string,
        headers: Object,
        data: Object,
        business_id: string,
        user_id: string,
        app_id: string,
    ) {
        this.route = route
        this.host = host
        this.method = method
        this.type = type
        this.headers = headers
        this.data = data
        this.business_id = business_id
        this.user_id = user_id
        this.app_id = app_id
    }
}