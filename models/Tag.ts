export default class Tag {
    name: string
    description: string
    businesses_id: Array<string>
    images: string
    enabled: boolean

    constructor(name: string, description: string, images: string, enabled: boolean, businesses_id: Array<string>) {
        this.name = name
        this.description = description
        this.businesses_id = businesses_id
        this.images = images
        this.enabled = enabled
    }
}