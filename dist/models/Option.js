"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Option = /** @class */ (function () {
    function Option(name, suboptions_id, extra_id, description, allow_suboption_quantity, limit_suboption_by_max, conditioned, with_half_options, image, max, min, rank, respect_to, enabled) {
        this.name = name;
        this.suboptions_id = suboptions_id;
        this.extra_id = extra_id;
        this.description = description;
        this.allow_suboption_quantity = allow_suboption_quantity;
        this.limit_suboption_by_max = limit_suboption_by_max;
        this.conditioned = conditioned;
        this.with_half_options = with_half_options;
        this.image = image;
        this.max = max;
        this.min = min;
        this.rank = rank;
        this.respect_to = respect_to;
        this.enabled = enabled;
    }
    return Option;
}());
exports.default = Option;
//# sourceMappingURL=Option.js.map