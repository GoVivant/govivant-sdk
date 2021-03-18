import ApiClient from '.'
import ClaptableCategory from '../models/ClaptableCategory'

export default class ApiClaptableCategories {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(business: string, page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/categories/${business}?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/categories/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/categories/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: ClaptableCategory) {
        return this.api.post(`/claptable/categories`, data)
    }
    update(id: string, data: ClaptableCategory) {
        return this.api.put(`/claptable/categories/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/categories/${id}`)
    }
}