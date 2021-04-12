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
    create(data: PaymentOrder) {
        return this.api.post(`/claptable/payment_orders`, data)
    }
    create_zoop(data: PaymentOrder) {
        return this.api.post(`/claptable/payment_orders/zoop`, data)
    }
    create_stripe(data: PaymentOrder) {
        return this.api.post(`/claptable/payment_orders/stripe`, data)
    }
    update(id: string, data: PaymentOrder) {
        return this.api.put(`/claptable/payment_orders/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/payment_orders/${id}`)
    }
}