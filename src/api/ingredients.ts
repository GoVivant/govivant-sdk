import ApiClient from '.'
import Ingredient from '../models/Ingredient'

export default class ApiIngredients {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/ingredients?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/ingredients/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/ingredients/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Ingredient) {
        return this.api.post(`/claptable/ingredients`, data)
    }
    update(id: string, data: Ingredient) {
        return this.api.put(`/claptable/ingredients/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/ingredients/${id}`)
    }
}