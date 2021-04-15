class OneSignal {
    app_id: string
    api_key: string
}

export default class Whitelabel {
    businesses: Array<string>
    business_name: string
    business_id_android: string
    business_id_ios: string
    slug: string
    logo_white: string
    logo_dark: string
    accent_color: string
    support_email: string
    support_url: string
    instagram: string
    live_queue_menu: boolean
    rewards_menu: boolean
    split_recipient: string
    onesignal: OneSignal
    enabled: boolean

    constructor(
        businesses: Array<string>,
        business_name: string,
        business_id_android: string,
        business_id_ios: string,
        slug: string,
        logo_white: string,
        logo_dark: string,
        accent_color: string,
        support_email: string,
        support_url: string,
        instagram: string,
        live_queue_menu: boolean,
        rewards_menu: boolean,
        split_recipient: string,
        onesignal: OneSignal,
        enabled: boolean
    ) {
        this.businesses = businesses
        this.business_name = business_name
        this.business_id_android = business_id_android
        this.business_id_ios = business_id_ios
        this.slug = slug
        this.logo_white = logo_white
        this.logo_dark = logo_dark
        this.accent_color = accent_color
        this.support_email = support_email
        this.support_url = support_url
        this.instagram = instagram
        this.live_queue_menu = live_queue_menu
        this.rewards_menu = rewards_menu
        this.split_recipient = split_recipient
        this.onesignal = onesignal
        this.enabled = enabled
    }
}