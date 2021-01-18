class Integration {
    tangocard: string
}

enum language_options {
    en = 'en',
    pt = 'pt',
    es = 'es',
    fr = 'fr'
}

export default class Customer {
    name: string
    enabled: boolean
    email: string
    phone: string
    doc: string
    points_brl: number
    points_usd: number
    points_eur: number
    points_gbp: number
    firebase_id: string
    onesignal_player_id: string
    country_id: string
    integration: Integration
    language: language_options
    integration_id: string

    constructor(
        name: string,
        enabled: boolean,
        email: string,
        phone: string,
        doc: string,
        points_brl: number,
        points_usd: number,
        points_eur: number,
        points_gbp: number,
        firebase_id: string,
        onesignal_player_id: string,
        country_id: string,
        integration: Integration,
        language: language_options,
        integration_id: string
    ) {
        this.name = name
        this.enabled = enabled
        this.email = email
        this.phone = phone
        this.doc = doc
        this.points_brl = points_brl
        this.points_usd = points_usd
        this.points_eur = points_eur
        this.points_gbp = points_gbp
        this.firebase_id = firebase_id
        this.onesignal_player_id = onesignal_player_id
        this.country_id = country_id
        this.integration = integration
        this.language = language
        this.integration_id = integration_id
    }
}