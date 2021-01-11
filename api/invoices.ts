import ApiClient from '.'
import Invoice from '../models/Invoice'

export default class ApiInvoices {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/invoices?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/invoices/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/invoices/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Invoice) {
        return this.api.post(`/invoices`, data)
    }
    update(id: string, data: Invoice) {
        return this.api.put(`/invoices/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/invoices/${id}`)
    }
}