import ApiClient from '.'
import DeliveryZone from '../models/DeliveryZone'

export default class ApiDeliveryZones {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(business_id: string, page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/delivery_zones/${business_id}?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/delivery_zones/${id}`)
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