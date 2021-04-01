"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());
var Address = /** @class */ (function () {
    function Address(customer_id, name, zipcode, address, address_notes, _default, location) {
        this.customer_id = customer_id;
        this.name = name;
        this.zipcode = zipcode;
        this.address = address;
        this.address_notes = address_notes;
        this.default = _default;
        this.location = location;
    }
    return Address;
}());
exports.default = Address;
//# sourceMappingURL=Address.js.map