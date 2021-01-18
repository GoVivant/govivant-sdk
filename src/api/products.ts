import ApiClient from '.'
import Product from '../models/Product'

export default class ApiProducts {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/products?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/products/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/products/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
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