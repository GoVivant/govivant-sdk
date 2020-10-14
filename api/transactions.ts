import ApiClient from '.'
import Transaction from '../models/Transaction'

export default class ApiTransactions {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/transactions`)
    }
    view(id: string) {
        return this.api.get(`/transactions/${id}`)
    }
    create(data: Transaction) {
        return this.api.post(`/transactions`, data)
    }
    update(id: string, data: Transaction) {
        return this.api.put(`/transactions/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/transactions/${id}`)
    }
}