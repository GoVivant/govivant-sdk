import ApiClient from '.'
import Offer from '../models/Offer'

export default class ApiOffers {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(business_id: string, page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/offers/${business_id}?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/offers/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/offers/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Offer) {
        return this.api.post(`/claptable/offers`, data)
    }
    update(id: string, data: Offer) {
        return this.api.put(`/claptable/offers/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/offers/${id}`)
    }
}