import ApiClient from '.'
import Subproduct from '../models/Subproduct'

export default class ApiSubproducts {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/subproducts?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/subproducts/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/subproducts/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Subproduct) {
        return this.api.post(`/subproducts`, data)
    }
    update(id: string, data: Subproduct) {
        return this.api.put(`/subproducts/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/subproducts/${id}`)
    }
}