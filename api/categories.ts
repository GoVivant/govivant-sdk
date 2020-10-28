import ApiClient from '.'
import Category from '../models/Category'

export default class ApiCategories {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/categories?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/categories/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15) {
        return this.api.get(`/categories/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}`)
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