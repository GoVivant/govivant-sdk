declare class Integration {
    tangocard: string;
}
declare enum language_options {
    en = "en",
    pt = "pt",
    es = "es",
    fr = "fr"
}
export default class Customer {
    name: string;
    enabled: boolean;
    email: string;
    phone: string;
    doc: string;
    points_brl: number;
    points_usd: number;
    points_eur: number;
    points_gbp: number;
    firebase_id: string;
    onesignal_player_id: string;
    country_id: string;
    integration: Integration;
    language: language_options;
    integration_id: string;
    constructor(name: string, enabled: boolean, email: string, phone: string, doc: string, points_brl: number, points_usd: number, points_eur: number, points_gbp: number, firebase_id: string, onesignal_player_id: string, country_id: string, integration: Integration, language: language_options, integration_id: string);
}
export {};
