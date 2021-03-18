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
export default class ClaptableProduct {
    name: string;
    images: Array<string>;
    price: number;
    quantity: number;
    for_how_many: number;
    calories: number;
    description: string;
    rank: number;
    featured: boolean;
    ingredients: Array<string>;
    schedule: Array<Schedule>;
    extras_id: Array<string>;
    business_id: string;
    category_id: string;
    menu_id: Array<string>;
    root_id: string;
    diets_id: Array<string>;
    allergies_id: Array<string>;
    food_categories_id: Array<string>;
    enabled: boolean;
    constructor(name: string, images: Array<string>, price: number, quantity: number, for_how_many: number, calories: number, description: string, rank: number, featured: boolean, ingredients: Array<string>, schedule: Array<Schedule>, extras_id: Array<string>, business_id: string, category_id: string, menu_id: Array<string>, root_id: string, diets_id: Array<string>, allergies_id: Array<string>, food_categories_id: Array<string>, enabled: boolean);
}
export {};
