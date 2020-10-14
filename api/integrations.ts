import ApiClient from '.'
import Integration from '../models/Integration'

export default class ApiIntegrations {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/integrations`)
    }
    view(id: string) {
        return this.api.get(`/integrations/${id}`)
    }
    create(data: Integration) {
        return this.api.post(`/integrations`, data)
    }
    update(id: string, data: Integration) {
        return this.api.put(`/integrations/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/integrations/${id}`)
    }
}