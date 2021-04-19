import ApiClient from '.'
import Order from '../models/Order'

export default class ApiOrders {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(business: string, page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/orders/${business}?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/orders/view/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/orders/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Order) {
        return this.api.post(`/claptable/orders`, data)
    }
    update(id: string, data: Order) {
        return this.api.put(`/claptable/orders/${id}`, data)
    }
    refund(id: string) {
        return this.api.delete(`/claptable/orders/refund/${id}`)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/orders/${id}`)
    }
}