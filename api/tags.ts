import ApiClient from '.'
import Tag from '../models/Tag'

export default class ApiTags {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/tags`)
    }
    view(id: string) {
        return this.api.get(`/tags/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object) {
        return this.api.get(`/tags/search?query=${JSON.stringify(query)}`)
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