import ApiClient from '.'
import Country from '../models/Country'

export default class ApiCountries {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/countries`)
    }
    view(id: string) {
        return this.api.get(`/countries/${id}`)
    }
    create(data: Country) {
        return this.api.post(`/countries`, data)
    }
    update(id: string, data: Country) {
        return this.api.put(`/countries/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/countries/${id}`)
    }
}