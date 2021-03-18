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
export default class Extra {
    name: string;
    description: string;
    ingredients_id: Array<string>;
    options_id: Array<string>;
    business_id: string;
    rank: number;
    schedule: Array<Schedule>;
    enabled: boolean;
    constructor(name: string, description: string, ingredients_id: Array<string>, options_id: Array<string>, business_id: string, rank: number, schedule: Array<Schedule>, enabled: boolean);
}
export {};
