export default class ClaptableCategory {
    name: string
    image: string
    rank: number
    business_id: string
    enabled: boolean

    constructor(
        name: string,
        image: string,
        rank: number,
        business_id: string,
    ) {
        this.name = name
        this.image = image
        this.rank = rank
        this.business_id = business_id
    }
}