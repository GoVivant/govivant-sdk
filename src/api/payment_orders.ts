import ApiClient from '.'
import PaymentOrder from '../models/PaymentOrder'

export default class ApiPaymentOrders {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/payment_orders?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/payment_orders/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/payment_orders/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: PaymentOrder) {
        return this.api.post(`/claptable/payment_orders`, data)
    }
    update(id: string, data: PaymentOrder) {
        return this.api.put(`/claptable/payment_orders/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/payment_orders/${id}`)
    }
}