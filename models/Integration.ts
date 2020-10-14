export default class Integration {
    name: string
    api_keys_id: Array<string>
    apps_connected_id: string
    enabled: boolean

    constructor(name: string, api_keys_id: Array<string>, apps_connected_id: string, enabled: boolean) {
        this.name = name
        this.api_keys_id = api_keys_id
        this.apps_connected_id = apps_connected_id
        this.enabled = enabled
    }
}