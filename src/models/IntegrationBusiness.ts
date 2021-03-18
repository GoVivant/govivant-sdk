export default class Integration {
    companyId: string
    integrationsId: string
    businessId: string
    linked: boolean
    enabled: boolean

    constructor(
        companyId: string,
        integrationsId: string,
        businessId: string,
        linked: boolean,
        enabled: boolean
    ) {
        this.companyId = companyId
        this.integrationsId = integrationsId
        this.businessId = businessId
        this.linked = linked
        this.enabled = enabled
    }
}