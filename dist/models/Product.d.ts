export default class Product {
    name: string;
    description: string;
    type: string;
    city: string;
    country: string;
    max_per_user: string;
    total_quantity: string;
    secret_url: string;
    secret_text: string;
    brandKey: string;
    quantity_left: string;
    rule_id: string;
    country_id: string;
    category_id: string;
    business_id: string;
    subproducts_id: Array<string>;
    apps_id: Array<string>;
    image: string;
    image_gift_cards: string;
    terms: string;
    periods: string;
    points_value: string;
    enabled: Boolean;
    constructor(name: string, description: string, type: string, city: string, country: string, max_per_user: string, total_quantity: string, secret_url: string, secret_text: string, brandKey: string, quantity_left: string, rule_id: string, country_id: string, category_id: string, business_id: string, subproducts_id: Array<string>, apps_id: Array<string>, image: string, image_gift_cards: string, terms: string, periods: string, points_value: string, enabled: Boolean);
}
