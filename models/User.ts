export default class User {
    name: string
    email: string
    password: string
    apps_connected: Array<string>
    type: string
    level: number

    constructor(name: string, email: string, password: string, apps: Array<string>, type: string, level: number) {
        this.name = name
        this.email = email
        this.password = password
        this.apps_connected = apps
        this.type = type
        this.level = level
    }
}