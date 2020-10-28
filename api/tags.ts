import ApiClient from '.'
import Tag from '../models/Tag'

export default class ApiTags {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/tags?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/tags/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15) {
        return this.api.get(`/tags/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}`)
    }
    create(data: Tag) {
        return this.api.post(`/tags`, data)
    }
    update(id: string, data: Tag) {
        return this.api.put(`/tags/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/tags/${id}`)
    }
}