import ApiClient from '.'
import Product from '../models/Product'

export default class ApiProducts {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/products`)
    }
    view(id: string) {
        return this.api.get(`/products/${id}`)
    }
    create(data: Product) {
        return this.api.post(`/products`, data)
    }
    update(id: string, data: Product) {
        return this.api.put(`/products/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/products/${id}`)
    }
}