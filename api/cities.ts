import ApiClient from '.'
import City from '../models/City'

export default class ApiCities {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/cities`)
    }
    view(id: string) {
        return this.api.get(`/cities/${id}`)
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