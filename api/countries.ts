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
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object) {
        return this.api.get(`/countries/search?query=${JSON.stringify(query)}`)
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