import ApiClient from '.'
import DeliveryZone from '../models/DeliveryZone'

export default class ApiDeliveryZones {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/delivery_zones?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/delivery_zones/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/delivery_zones/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: DeliveryZone) {
        return this.api.post(`/claptable/delivery_zones`, data)
    }
    update(id: string, data: DeliveryZone) {
        return this.api.put(`/claptable/delivery_zones/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/delivery_zones/${id}`)
    }
}