import ApiClient from '.'
import Store from '../models/Store'

export default class ApiStores {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/stores`)
    }
    view(id: string) {
        return this.api.get(`/stores/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object) {
        return this.api.get(`/stores/search?query=${encodeURIComponent(JSON.stringify(query))}`)
    }
    create(data: Store) {
        return this.api.post(`/stores`, data)
    }
    update(id: string, data: Store) {
        return this.api.put(`/stores/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/stores/${id}`)
    }
}