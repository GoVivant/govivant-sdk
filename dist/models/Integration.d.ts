export default class Integration {
    name: string;
    url: string;
    support_email: string;
    type: string;
    country: string;
    rank: number;
    enabled: boolean;
    constructor(name: string, url: string, support_email: string, type: string, country: string, rank: number, enabled: boolean);
}
