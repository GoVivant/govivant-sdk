import ApiClient from '.'
import FoodCategory from '../models/FoodCategory'

export default class ApiFoodCategories {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/food_categories?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/food_categories/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/food_categories/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: FoodCategory) {
        return this.api.post(`/claptable/food_categories`, data)
    }
    update(id: string, data: FoodCategory) {
        return this.api.put(`/claptable/food_categories/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/food_categories/${id}`)
    }
}