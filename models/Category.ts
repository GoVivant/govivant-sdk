export default class Catefory {
    name: string
    type: Array<string>
    image: string

    constructor(name: string, type: Array<string>, image: string) {
        this.name = name
        this.type = type
        this.image = image
    }
}