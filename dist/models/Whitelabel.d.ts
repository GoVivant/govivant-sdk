declare class OneSignal {
    app_id: string;
    api_key: string;
}
export default class Whitelabel {
    businesses: Array<string>;
    business_name: string;
    business_id_android: string;
    business_id_ios: string;
    slug: string;
    logo_white: string;
    logo_dark: string;
    accent_color: string;
    support_email: string;
    support_url: string;
    instagram: string;
    live_queue_menu: boolean;
    rewards_menu: boolean;
    split_recipient: string;
    onesignal: OneSignal;
    enabled: boolean;
    constructor(businesses: Array<string>, business_name: string, business_id_android: string, business_id_ios: string, slug: string, logo_white: string, logo_dark: string, accent_color: string, support_email: string, support_url: string, instagram: string, live_queue_menu: boolean, rewards_menu: boolean, split_recipient: string, onesignal: OneSignal, enabled: boolean);
}
export {};
