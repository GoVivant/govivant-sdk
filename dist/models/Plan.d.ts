declare class Paymethod {
    type: Object;
    product_id: string;
    price_points_id: string;
    price_prize_id: string;
    price_transactions_id: string;
    paymethod_type: string;
}
export default class Plan {
    name: string;
    enabled: boolean;
    currency: string;
    billing_cycle: string;
    fixed: boolean;
    points_price: number;
    prizes_price: number;
    transactions_price: number;
    paymethod_id: Paymethod;
    country_id: string;
    constructor(name: string, enabled: boolean, currency: string, billing_cycle: string, fixed: boolean, points_price: number, prizes_price: number, transactions_price: number, paymethod_id: Paymethod, country_id: string);
}
export {};
