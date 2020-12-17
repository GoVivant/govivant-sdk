import ApiClient from '.'
import Business from '../models/Business'

export default class ApiBusinesses {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/businesses?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/businesses/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/businesses/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Business) {
        return this.api.post(`/businesses`, data)
    }
    update(id: string, data: Business) {
        return this.api.put(`/businesses/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/businesses/${id}`)
    }
}