import ApiClient from '.'
import Whitelabel from '../models/Whitelabel'

export default class ApiWhitelabels {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/whitelabels?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/whitelabels/${id}`)
    }
    by_bundle_id(bundle_id: string) {
        return this.api.get(`/whitelabels/by_bundle_id/${bundle_id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/whitelabels/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Whitelabel) {
        return this.api.post(`/whitelabels`, data)
    }
    update(id: string, data: Whitelabel) {
        return this.api.put(`/whitelabels/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/whitelabels/${id}`)
    }
}