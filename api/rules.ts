import ApiClient from '.'
import Rule from '../models/Rule'

export default class ApiRules {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/rules`)
    }
    view(id: string) {
        return this.api.get(`/rules/${id}`)
    }
    create(data: Rule) {
        return this.api.post(`/rules`, data)
    }
    update(id: string, data: Rule) {
        return this.api.put(`/rules/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/rules/${id}`)
    }
}