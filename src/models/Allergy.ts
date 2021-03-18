export default class Allergy {
    name: string
    enabled: boolean
    image: string

    constructor(name: string, enabled: boolean, image: string) {
        this.name = name
        this.enabled = enabled
        this.image = image
    }
}