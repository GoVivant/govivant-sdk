export default class Country {
    name: string
    code: string
    currency: string
    enabled: boolean

    constructor(name: string, code: string, currency: string, enabled: boolean) {
        this.name = name
        this.code = code
        this.currency = currency
        this.enabled = enabled
    }
}