import ApiClient from '.'
import Country from '../models/Country'

export default class ApiCountries {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/countries?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/countries/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/countries/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
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