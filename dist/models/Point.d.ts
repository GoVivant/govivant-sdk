export default class Point {
    transaction_date: Date;
    value: number;
    transaction_points: number;
    previous_points: number;
    business_id: string;
    transaction_id: string;
    rule_id: string;
    customer_id: string;
    redeem_id: string;
    comments: string;
    currency: string;
    type: string;
    constructor(transaction_date: Date, value: number, transaction_points: number, previous_points: number, business_id: string, transaction_id: string, rule_id: string, customer_id: string, redeem_id: string, comments: string, currency: string, type: string);
}
