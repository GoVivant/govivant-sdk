export default class Invoice {
    stripe: Object;
    customer_id: string;
    constructor(stripe: Object, customer_id: string);
}
