"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Eatin = /** @class */ (function () {
    function Eatin() {
    }
    return Eatin;
}());
var Menu = /** @class */ (function () {
    function Menu(name, comment, delivery, pickup, eatin, products_id, business_id, enabled) {
        this.name = name;
        this.comment = comment;
        this.delivery = delivery;
        this.pickup = pickup;
        this.eatin = eatin;
        this.products_id = products_id;
        this.business_id = business_id;
        this.enabled = enabled;
    }
    return Menu;
}());
exports.default = Menu;
//# sourceMappingURL=Menu.js.map