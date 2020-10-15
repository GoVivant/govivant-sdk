import ApiClient from '.'
import Business from '../models/Business'

export default class ApiBusinesses {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/businesses`)
    }
    view(id: string) {
        return this.api.get(`/businesses/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object) {
        return this.api.get(`/businesses/search?query=${JSON.stringify(query)}`)
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