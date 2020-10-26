import ApiGvv from './api'
import ApiAuth from './api/auth'
import ApiUsers from './api/users'
import ApiTags from './api/tags'
import ApiBusinesses from './api/businesses'
import ApiCategories from './api/categories'
import ApiCities from './api/cities'
import ApiCountries from './api/countries'
import ApiCustomers from './api/customers'
import ApiIntegrations from './api/integrations'
import ApiPoints from './api/points'
import ApiProducts from './api/products'
import ApiRedeems from './api/redeems'
import ApiRules from './api/rules'
import ApiStores from './api/stores'
import ApiTransactions from './api/transactions'
import ApiReceipts from './api/receipts'

export default class Govivant {

    auth: ApiAuth
    users: ApiUsers
    tags: ApiTags
    businesses: ApiBusinesses
    categories: ApiCategories
    cities: ApiCities
    countries: ApiCountries
    customers: ApiCustomers
    integrations: ApiIntegrations
    points: ApiPoints
    products: ApiProducts
    redeems: ApiRedeems
    rules: ApiRules
    stores: ApiStores
    transactions: ApiTransactions
    receipts: ApiReceipts

    constructor(api_key: string, dev: boolean) {

        const api_gvv = new ApiGvv(api_key, dev)

        this.auth = new ApiAuth(api_gvv)
        this.users = new ApiUsers(api_gvv)
        this.tags = new ApiTags(api_gvv)
        this.businesses = new ApiBusinesses(api_gvv)
        this.categories = new ApiCategories(api_gvv)
        this.cities = new ApiCities(api_gvv)
        this.countries = new ApiCountries(api_gvv)
        this.customers = new ApiCustomers(api_gvv)
        this.integrations = new ApiIntegrations(api_gvv)
        this.points = new ApiPoints(api_gvv)
        this.products = new ApiProducts(api_gvv)
        this.redeems = new ApiRedeems(api_gvv)
        this.rules = new ApiRules(api_gvv)
        this.stores = new ApiStores(api_gvv)
        this.transactions = new ApiTransactions(api_gvv)
        this.receipts = new ApiReceipts(api_gvv)
    }
}