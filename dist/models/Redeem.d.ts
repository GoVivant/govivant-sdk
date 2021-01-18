declare class Sender {
    emailSubject: string;
    message: string;
    recipent: {
        email: string;
        first_name: string;
        last_name: string;
    };
}
export default class Redeem {
    enabled: boolean;
    description: boolean;
    app_id: number;
    customer_id: number;
    product_id: string;
    products: Object;
    subproduct_id: string;
    subproducts: Object;
    user_update_id: string;
    redeem_date: Date;
    pay_data: Object;
    sender_instructions: Sender;
    tango_card: Object;
    transaction_type: string;
    secret_text: Object;
    rescued_at: Date;
    update_at: Date;
    constructor(enabled: boolean, description: boolean, app_id: number, customer_id: number, product_id: string, products: Object, subproduct_id: string, subproducts: Object, user_update_id: string, redeem_date: Date, pay_data: Object, sender_instructions: Sender, tango_card: Object, transaction_type: string, secret_text: Object, rescued_at: Date, update_at: Date);
}
export {};
