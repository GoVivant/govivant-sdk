import ApiClient from '.'
import Redeem from '../models/Redeem'

export default class ApiRedeems {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/redeems?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/redeems/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15) {
        return this.api.get(`/redeems/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}`)
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