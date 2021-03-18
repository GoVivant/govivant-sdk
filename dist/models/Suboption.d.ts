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
declare class IntegrationItem {
    sku: number;
}
declare class Integrations {
    linx: IntegrationItem;
    ifood: IntegrationItem;
}
export default class Suboption {
    name: string;
    description: string;
    extra_option_id: string;
    half_price: string;
    image: string;
    price: number;
    rank: number;
    calories: number;
    integrations: Integrations;
    schedule: Array<Schedule>;
    enabled: boolean;
    constructor(name: string, description: string, extra_option_id: string, half_price: string, image: string, price: number, rank: number, calories: number, integrations: Integrations, schedule: Array<Schedule>, enabled: boolean);
}
export {};
