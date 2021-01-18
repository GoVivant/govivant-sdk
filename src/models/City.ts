export default class City {
    name: string
    code: string
    country_id: string
    enabled: boolean

    constructor(name: string, code: string, country_id: string, enabled: boolean) {
        this.name = name
        this.code = code
        this.country_id = country_id
        this.enabled = enabled
    }
}