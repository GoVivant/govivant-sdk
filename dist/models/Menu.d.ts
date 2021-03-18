declare class Eatin {
    booking: boolean;
    table: boolean;
}
export default class Menu {
    name: string;
    comment: string;
    delivery: boolean;
    pickup: boolean;
    eatin: Eatin;
    products_id: Array<String>;
    business_id: string;
    enabled: boolean;
    constructor(name: string, comment: string, delivery: boolean, pickup: boolean, eatin: Eatin, products_id: Array<String>, business_id: string, enabled: boolean);
}
export {};
