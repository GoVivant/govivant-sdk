import ApiClient from '.'
import Extra from '../models/Extra'
import Option from '../models/Option'

export default class ApiExtras {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(business: string, page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/extras/${business}?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/extras/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/extras/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    add_option(id: string, data: Option) {
        return this.api.post(`/claptable/extras/add_option/${id}`, data)
    }
    create(data: Extra) {
        return this.api.post(`/claptable/extras`, data)
    }
    update(id: string, data: Extra) {
        return this.api.put(`/claptable/extras/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/extras/${id}`)
    }
}