import ApiClient from '.';
import User from '../models/User';
export default class ApiAuth {
    private api;
    constructor(api: ApiClient);
    login(email: string, password: string): any;
    register(data: User): any;
    generate_app_token(app_id: string): any;
}
