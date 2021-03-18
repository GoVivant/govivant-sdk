import ApiClient from '.'
import Diet from '../models/Diet'

export default class ApiDiets {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/diets?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/diets/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/diets/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Diet) {
        return this.api.post(`/claptable/diets`, data)
    }
    update(id: string, data: Diet) {
        return this.api.put(`/claptable/diets/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/diets/${id}`)
    }
}