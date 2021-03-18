export default class Integration {
    name: string
    url: string
    support_email: string
    type: string
    country: string
    rank: number
    enabled: boolean

    constructor(
        name: string,
        url: string,
        support_email: string,
        type: string,
        country: string,
        rank: number,
        enabled: boolean
    ) {
        this.name = name
        this.url = url
        this.support_email = support_email
        this.type = type
        this.country = country
        this.rank = rank
        this.enabled = enabled
    }
}