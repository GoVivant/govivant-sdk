declare enum type_options {
    rpas = "rpas",
    stores_only = "stores_only",
    crypto = "crypto"
}
declare enum transaction_types_options {
    manual = "manual",
    api_connected = "api_connected",
    plaid = "plaid",
    saltedge = "saltedge"
}
export default class App {
    name: string;
    enabled: boolean;
    transaction_types: Array<transaction_types_options>;
    type: type_options;
    logo_white: string;
    logo_dark: string;
    primary_color: string;
    secondary_color: string;
    disabled: boolean;
    token: string;
    disabled_at: Date;
    constructor(name: string, enabled: boolean, transaction_types: Array<transaction_types_options>, type: type_options, logo_white: string, logo_dark: string, primary_color: string, secondary_color: string, disabled: boolean, token: string, disabled_at: Date);
}
export {};
