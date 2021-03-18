export default class Card {
    holder_name: string;
    last4_digits: string;
    card_brand: string;
    card_id: string;
    customer_id: string;
    default: boolean;
    constructor(holder_name: string, last4_digits: string, card_brand: string, card_id: string, customer_id: string);
}
