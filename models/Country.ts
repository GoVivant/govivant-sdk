export default class Country {
    name: string
    code: string
    enabled: boolean

    constructor(name: string, code: string, enabled: boolean) {
        this.name = name
        this.code = code
        this.enabled = enabled
    }
}