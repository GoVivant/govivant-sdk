export default class Store {
    name: string;
    categories_id: Array<string>;
    products_id: Array<string>;
    apps_connected_id: Array<string>;
    country_id: string;
    enabled: boolean;
    constructor(name: string, categories_id: Array<string>, products_id: Array<string>, apps_connected_id: Array<string>, country_id: string, enabled: boolean);
}
