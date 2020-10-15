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
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object) {
        return this.api.get(`/transactions/search?query=${encodeURIComponent(JSON.stringify(query))}`)
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