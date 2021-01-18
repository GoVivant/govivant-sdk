declare class Lapse {
    open: {
        hour: number;
        close: number;
    };
    close: {
        hour: number;
        close: number;
    };
}
declare class Schedule {
    enabled: boolean;
    lapses: Array<Lapse>;
}
declare class Prize_Rule {
    type: Object;
    value: Number;
    spent_turns: Number;
    start: Date;
    end: Date;
}
export default class Rule {
    name: string;
    app_id: string;
    enabled: boolean;
    schedule: Array<Schedule>;
    businesses_id: Array<string>;
    products_id: Array<string>;
    currency: string;
    type: string;
    periods: string;
    description: string;
    min_spend: number;
    govivant_points_fee: number;
    reward_rule_invoices: string;
    prize_rules: Prize_Rule;
    constructor(name: string, app_id: string, enabled: boolean, schedule: Array<Schedule>, businesses_id: Array<string>, products_id: Array<string>, currency: string, type: string, periods: string, description: string, min_spend: number, govivant_points_fee: number, reward_rule_invoices: string, prize_rules: Prize_Rule);
}
export {};
