import ApiClient from '.'
import City from '../models/City'

export default class ApiCities {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/cities?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/cities/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/cities/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: City) {
        return this.api.post(`/cities`, data)
    }
    update(id: string, data: City) {
        return this.api.put(`/cities/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/cities/${id}`)
    }
}