import ApiClient from '.'
import Card from '../models/Card'

export default class ApiCards {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/cards?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/cards/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/cards/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Card) {
        return this.api.post(`/claptable/cards`, data)
    }
    update(id: string, data: Card) {
        return this.api.put(`/claptable/cards/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/cards/${id}`)
    }
}