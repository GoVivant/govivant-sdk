import ApiClient from '.'
import User from '../models/User'

export default class ApiAuth {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    login(email: string, password: string) {
        return this.api.post(`/authentication/login`, { email, password })
    }
    register(data: User) {
        return this.api.post(`/authentication/register`, data)
    }
    generate_app_token(app_id: string) {
        return this.api.post(`/authentication/generate-app-token`, { app_id })
    }
}