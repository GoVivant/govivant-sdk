import ApiClient from '.'
import Point from '../models/Point'

export default class ApiPoints {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list() {
        return this.api.get(`/points`)
    }
    view(id: string) {
        return this.api.get(`/points/${id}`)
    }
    create(data: Point) {
        return this.api.post(`/points`, data)
    }
    update(id: string, data: Point) {
        return this.api.put(`/points/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/points/${id}`)
    }
}