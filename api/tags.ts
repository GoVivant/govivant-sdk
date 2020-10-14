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