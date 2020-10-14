export default class App {
    name: string
    enabled: boolean
    type: string
    disabled_at: Date

    constructor(name: string, enabled: boolean, type: string, disabled_at: Date) {
        this.name = name
        this.enabled = enabled
        this.type = type
        this.disabled_at = disabled_at
    }
}