import ApiClient from '.'
import Suboption from '../models/Suboption'

export default class ApiSuboptions {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(business: string, page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/suboptions/${business}?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/suboptions/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/suboptions/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Suboption) {
        return this.api.post(`/claptable/suboptions`, data)
    }
    update(id: string, data: Suboption) {
        return this.api.put(`/claptable/suboptions/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/suboptions/${id}`)
    }
}