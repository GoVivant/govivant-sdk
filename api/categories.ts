import ApiClient from '.'
import Category from '../models/Category'

export default class ApiCategories {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/categories`)
    }
    view(id: string) {
        return this.api.get(`/categories/${id}`)
    }
    create(data: Category) {
        return this.api.post(`/categories`, data)
    }
    update(id: string, data: Category) {
        return this.api.put(`/categories/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/categories/${id}`)
    }
}