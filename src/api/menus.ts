import ApiClient from '.'
import Menu from '../models/Menu'

export default class ApiMenus {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    list(business_id: string, page: number = 1, limit: number = 15) {
        return this.api.get(`/claptable/menus/${business_id}?page=${page}&limit=${limit}`)
    }
    view(id: string) {
        return this.api.get(`/claptable/menus/view/${id}`)
    }
    /**
    * Filter results by any property, through a query.
    * Ex: { foo: 'bar' }
    */
    search(query: object, page: number = 1, limit: number = 15, populate: Array<string> = [], select: Array<string> = []) {
        return this.api.get(`/claptable/menus/search?query=${encodeURIComponent(JSON.stringify(query))}&page=${page}&limit=${limit}&populate=${populate.join(',')}&select=${select.join(',')}`)
    }
    create(data: Menu) {
        return this.api.post(`/claptable/menus`, data)
    }
    update(id: string, data: Menu) {
        return this.api.put(`/claptable/menus/${id}`, data)
    }
    remove(id: string) {
        return this.api.delete(`/claptable/menus/${id}`)
    }
}