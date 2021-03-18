"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lapse = /** @class */ (function () {
    function Lapse() {
    }
    return Lapse;
}());
var Schedule = /** @class */ (function () {
    function Schedule() {
    }
    return Schedule;
}());
var ClaptableProduct = /** @class */ (function () {
    function ClaptableProduct(name, images, price, quantity, for_how_many, calories, description, rank, featured, ingredients, schedule, extras_id, business_id, category_id, menu_id, root_id, diets_id, allergies_id, food_categories_id, enabled) {
        this.name = name;
        this.images = images;
        this.price = price;
        this.quantity = quantity;
        this.for_how_many = for_how_many;
        this.calories = calories;
        this.description = description;
        this.rank = rank;
        this.featured = featured;
        this.ingredients = ingredients;
        this.schedule = schedule;
        this.extras_id = extras_id;
        this.business_id = business_id;
        this.category_id = category_id;
        this.menu_id = menu_id;
        this.root_id = root_id;
        this.diets_id = diets_id;
        this.allergies_id = allergies_id;
        this.food_categories_id = food_categories_id;
        this.enabled = enabled;
    }
    return ClaptableProduct;
}());
exports.default = ClaptableProduct;
//# sourceMappingURL=ClaptableProduct.js.map