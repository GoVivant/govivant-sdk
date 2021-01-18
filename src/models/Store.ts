export default class Store {
    name: string
    categories_id: Array<string>
    products_id: Array<string>
    apps_connected_id: Array<string>
    country_id: string
    enabled: boolean

    constructor(
        name: string,
        categories_id: Array<string>,
        products_id: Array<string>,
        apps_connected_id: Array<string>,
        country_id: string,
        enabled: boolean
    ) {
        this.name = name
        this.categories_id = categories_id
        this.products_id = products_id
        this.apps_connected_id = apps_connected_id
        this.country_id = country_id
        this.enabled = enabled
    }
}