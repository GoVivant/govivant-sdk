export default class Integration {
    name: string;
    api_keys_id: Array<string>;
    apps_connected_id: string;
    enabled: boolean;
    constructor(name: string, api_keys_id: Array<string>, apps_connected_id: string, enabled: boolean);
}
