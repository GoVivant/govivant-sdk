import ApiClient from '.'

export default class ApiReceipts {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    create_transaction(data: Object) {
        return this.api.post(`/receipts/create_transaction`, data)
    }
    upload(data: Object) {
        return this.api.post(`/receipts/upload`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
    }
}