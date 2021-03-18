import ApiClient from '.'
import Option from '../models/Option'
import Suboption from '../models/Suboption'

export default class ApiOptions {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(business: string, page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/options/${business}?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/options/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/options/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    add_suboption(id: string, data: Suboption) {
        return this.api.post(`/claptable/options/add_suboption/${id}`, data)
    }
    create(data: Option) {
        return this.api.post(`/claptable/options`, data)
    }
    update(id: string, data: Option) {
        return this.api.put(`/claptable/options/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/options/${id}`)
    }
}