import ApiClient from '.'
import Transaction from '../models/Transaction'

export default class ApiTransactions {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/transactions?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/transactions/view/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/transactions/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
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