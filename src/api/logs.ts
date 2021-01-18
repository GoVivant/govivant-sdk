import ApiClient from '.'
import Log from '../models/Log'

export default class ApiLogs {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/logs?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/logs/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/logs/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Log) {
        return this.api.post(`/logs`, data)
    }
    update(id: string, data: Log) {
        return this.api.put(`/logs/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/logs/${id}`)
    }
}