export default class Offer {
    name: string;
    type: string;
    minimum: Number;
    rate_type: Number;
    rate: Number;
    start: Date;
    end: Date;
    limit: number;
    coupon: string;
    enabled: boolean;
    constructor(name: string, type: string, minimum: Number, rate_type: Number, rate: Number, start: Date, end: Date, limit: number, coupon: string, enabled: boolean);
}
