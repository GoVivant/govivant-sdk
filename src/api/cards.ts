import ApiClient from '.'
import Card from '../models/Card'

export default class ApiCards {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(customer_id: string, page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/tokens/cards/${customer_id}?page=${page}&limit=${limit}`)
    }
    create(customer_id: string, data: Card) {
        return this.api.post(`/claptable/tokens/cards/${customer_id}`, data)
    }
    update(id: string, data: Card) {
        return this.api.put(`/claptable/tokens/cards/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/tokens/cards/${id}`)
    }
}