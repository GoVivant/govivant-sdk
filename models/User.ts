export default class User {
    name: string
    email: string
    password: string
    apps_connected: Array<string>
    businesses_connected: Array<string>
    type: string
    level: number

    constructor(
        name: string,
        email: string,
        password: string,
        apps_connected: Array<string>,
        businesses_connected: Array<string>,
        type: string,
        level: number
    ) {
        this.name = name
        this.email = email
        this.password = password
        this.apps_connected = apps_connected
        this.businesses_connected = businesses_connected
        this.type = type
        this.level = level
    }
}