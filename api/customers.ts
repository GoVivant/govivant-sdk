import ApiClient from '.'
import Customer from '../models/Customer'

export default class ApiCustomers {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/customers`)
    }
    view(id: string) {
        return this.api.get(`/customers/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object) {
        return this.api.get(`/customers/search?query=${encodeURIComponent(JSON.stringify(query))}`)
    }
    create(data: Customer) {
        return this.api.post(`/customers`, data)
    }
    update(id: string, data: Customer) {
        return this.api.put(`/customers/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/customers/${id}`)
    }
}