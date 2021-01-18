"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());
var Lapse = /** @class */ (function () {
    function Lapse() {
    }
    return Lapse;
}());
var Gallery = /** @class */ (function () {
    function Gallery() {
    }
    return Gallery;
}());
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var Links = /** @class */ (function () {
    function Links() {
    }
    return Links;
}());
var Paymethod = /** @class */ (function () {
    function Paymethod() {
    }
    return Paymethod;
}());
var Schedule = /** @class */ (function () {
    function Schedule() {
    }
    return Schedule;
}());
var Business = /** @class */ (function () {
    function Business(name, status, currency, logo, gallery, enabled, email, slug, schedule, address, address_notes, zipcode, location, customer_id, business_links, paymethod, city_id, plan_id, tags_id, ein, minimum, place_id, phone, types) {
        this.name = name;
        this.status = status;
        this.currency = currency;
        this.logo = logo;
        this.gallery = gallery;
        this.enabled = enabled;
        this.email = email;
        this.slug = slug;
        this.schedule = schedule;
        this.address = address;
        this.address_notes = address_notes;
        this.zipcode = zipcode;
        this.location = location;
        this.customer_id = customer_id;
        this.business_links = business_links;
        this.paymethod = paymethod;
        this.city_id = city_id;
        this.plan_id = plan_id;
        this.tags_id = tags_id;
        this.ein = ein;
        this.minimum = minimum;
        this.place_id = place_id;
        this.phone = phone;
        this.types = types;
    }
    return Business;
}());
exports.default = Business;
//# sourceMappingURL=Business.js.map