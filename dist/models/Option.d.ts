export default class Option {
    name: string;
    suboptions_id: Array<string>;
    extra_id: string;
    description: string;
    allow_suboption_quantity: boolean;
    limit_suboption_by_max: boolean;
    conditioned: boolean;
    with_half_options: boolean;
    image: boolean;
    max: number;
    min: number;
    rank: number;
    respect_to: string;
    enabled: boolean;
    constructor(name: string, suboptions_id: Array<string>, extra_id: string, description: string, allow_suboption_quantity: boolean, limit_suboption_by_max: boolean, conditioned: boolean, with_half_options: boolean, image: boolean, max: number, min: number, rank: number, respect_to: string, enabled: boolean);
}
