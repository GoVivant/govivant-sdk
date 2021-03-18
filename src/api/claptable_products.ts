import ApiClient from '.'
import ClaptableProduct from '../models/ClaptableProduct'

export default class ApiClaptableProducts {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(business: string, page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/products/${business}?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/products/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/products/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: ClaptableProduct) {
        return this.api.post(`/claptable/products`, data)
    }
    update(id: string, data: ClaptableProduct) {
        return this.api.put(`/claptable/products/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/products/${id}`)
    }
}