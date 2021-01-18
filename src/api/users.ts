import ApiClient from '.'
import User from '../models/User'

export default class ApiUsers {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/users?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/users/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/users/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: User) {
        return this.api.post(`/users`, data)
    }
    update(id: string, data: User) {
        return this.api.put(`/users/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/users/${id}`)
    }
}