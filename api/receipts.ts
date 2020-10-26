import ApiClient from '.'

export default class ApiReceipts {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    create(data: Object) {
        return this.api.post(`/receipts`, data)
    }
}