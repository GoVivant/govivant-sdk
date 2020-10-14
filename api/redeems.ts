import ApiClient from '.'
import Redeem from '../models/Redeem'

export default class ApiRedeems {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/redeems`)
    }
    view(id: string) {
        return this.api.get(`/redeems/${id}`)
    }
    create(data: Redeem) {
        return this.api.post(`/redeems`, data)
    }
    update(id: string, data: Redeem) {
        return this.api.put(`/redeems/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/redeems/${id}`)
    }
}