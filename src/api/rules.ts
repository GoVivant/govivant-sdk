import ApiClient from '.'
import Rule from '../models/Rule'

export default class ApiRules {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/rules?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/rules/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/rules/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Rule) {
        return this.api.post(`/rules`, data)
    }
    update(id: string, data: Rule) {
        return this.api.put(`/rules/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/rules/${id}`)
    }
}