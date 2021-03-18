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
export default class DeliveryZone {
    business_id: string;
    type: Number;
    name: string;
    address: Number;
    data: Object;
    price: Number;
    minimum: Number;
    schedule: Array<Schedule>;
    enabled: boolean;
    constructor(business_id: string, type: Number, name: string, address: Number, data: Object, price: Number, minimum: Number, schedule: Array<Schedule>, enabled: boolean);
}
export {};
