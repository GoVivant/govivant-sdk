export default class User {
    name: string;
    email: string;
    password: string;
    apps_connected: Array<string>;
    businesses_connected: Array<string>;
    type: string;
    level: number;
    constructor(name: string, email: string, password: string, apps_connected: Array<string>, businesses_connected: Array<string>, type: string, level: number);
}
