"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OneSignal = /** @class */ (function () {
    function OneSignal() {
    }
    return OneSignal;
}());
var Whitelabel = /** @class */ (function () {
    function Whitelabel(businesses, business_name, business_id_android, business_id_ios, slug, logo_white, logo_dark, accent_color, support_email, support_url, instagram, live_queue_menu, rewards_menu, split_recipient, onesignal, enabled) {
        this.businesses = businesses;
        this.business_name = business_name;
        this.business_id_android = business_id_android;
        this.business_id_ios = business_id_ios;
        this.slug = slug;
        this.logo_white = logo_white;
        this.logo_dark = logo_dark;
        this.accent_color = accent_color;
        this.support_email = support_email;
        this.support_url = support_url;
        this.instagram = instagram;
        this.live_queue_menu = live_queue_menu;
        this.rewards_menu = rewards_menu;
        this.split_recipient = split_recipient;
        this.onesignal = onesignal;
        this.enabled = enabled;
    }
    return Whitelabel;
}());
exports.default = Whitelabel;
//# sourceMappingURL=Whitelabel.js.map