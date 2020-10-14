import ApiClient from '.'
import User from '../models/User'

export default class ApiUsers {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/users`)
    }
    view(id: string) {
        return this.api.get(`/users/${id}`)
    }
    create(data: User) {
        return this.api.post(`/users`, data)
    }
    update(id: string, data: User) {
        return this.api.put(`/users/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/users/${id}`)
    }
}