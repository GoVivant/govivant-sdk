import ApiClient from '.'
import Allergy from '../models/Allergy'

export default class ApiAllergies {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/allergies?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/allergies/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/allergies/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Allergy) {
        return this.api.post(`/claptable/allergies`, data)
    }
    update(id: string, data: Allergy) {
        return this.api.put(`/claptable/allergies/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/allergies/${id}`)
    }
}