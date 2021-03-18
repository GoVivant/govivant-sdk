export default class Option {
    name: string
    suboptions_id: Array<string>
    extra_id: string
    description: string
    allow_suboption_quantity: boolean
    limit_suboption_by_max: boolean
    conditioned: boolean
    with_half_options: boolean
    image: boolean
    max: number
    min: number
    rank: number
    respect_to: string
    enabled: boolean

    constructor(
        name: string,
        suboptions_id: Array<string>,
        extra_id: string,
        description: string,
        allow_suboption_quantity: boolean,
        limit_suboption_by_max: boolean,
        conditioned: boolean,
        with_half_options: boolean,
        image: boolean,
        max: number,
        min: number,
        rank: number,
        respect_to: string,
        enabled: boolean,
    ) {
        this.name = name
        this.suboptions_id = suboptions_id
        this.extra_id = extra_id
        this.description = description
        this.allow_suboption_quantity = allow_suboption_quantity
        this.limit_suboption_by_max = limit_suboption_by_max
        this.conditioned = conditioned
        this.with_half_options = with_half_options
        this.image = image
        this.max = max
        this.min = min
        this.rank = rank
        this.respect_to = respect_to
        this.enabled = enabled
    }
}