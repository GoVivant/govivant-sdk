import ApiClient from '.'
import Address from '../models/Address'

export default class ApiAddresses {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(customer_id: string, page: number = 1, limit: number = 15) {
        return this.api.get(`/addresses/${customer_id}?page=${page}&limit=${limit}`)
    }
    create(data: Address) {
        return this.api.post(`/addresses`, data)
    }
    update(id: string, data: Address) {
        return this.api.put(`/addresses/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/addresses/${id}`)
    }
}