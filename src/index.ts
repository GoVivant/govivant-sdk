import ApiGvv from './api'
import ApiAuth from './api/auth'
import ApiAllergies from './api/allergies'
import ApiCards from './api/cards'
import ApiClaptableCategories from './api/claptable_categories'
import ApiClaptableProducts from './api/claptable_products'
import ApiDeliveryZones from './api/delivery_zones'
import ApiDiets from './api/diets'
import ApiExtras from './api/extras'
import ApiFoodCategory from './api/food_categories'
import ApiIngredients from './api/ingredients'
import ApiMenus from './api/menus'
import ApiOffers from './api/offers'
import ApiOptions from './api/options'
import ApiOrders from './api/orders'
import ApiPaymentMethods from './api/payment_methods'
import ApiPaymentOrders from './api/payment_orders'
import ApiSuboptions from './api/suboptions'
import ApiWhitelabels from './api/whitelabels'
import ApiUsers from './api/users'
import ApiTags from './api/tags'
import ApiBusinesses from './api/businesses'
import ApiCategories from './api/categories'
import ApiCities from './api/cities'
import ApiCountries from './api/countries'
import ApiCustomers from './api/customers'
import ApiIntegrations from './api/integrations'
import ApiInvoices from './api/invoices'
import ApiLogs from './api/logs'
import ApiPlans from './api/plans'
import ApiPoints from './api/points'
import ApiProducts from './api/products'
import ApiRedeems from './api/redeems'
import ApiRules from './api/rules'
import ApiStores from './api/stores'
import ApiSubproducts from './api/subproducts'
import ApiTransactions from './api/transactions'
import ApiReceipts from './api/receipts'

export default class Govivant {

    auth: ApiAuth
    allergies: ApiAllergies
    cards: ApiCards
    claptable_categories: ApiClaptableCategories
    claptable_products: ApiClaptableProducts
    delivery_zones: ApiDeliveryZones
    diets: ApiDiets
    extras: ApiExtras
    food_categories: ApiFoodCategory
    ingredients: ApiIngredients
    menus: ApiMenus
    offers: ApiOffers
    options: ApiOptions
    orders: ApiOrders
    payment_methods: ApiPaymentMethods
    payment_orders: ApiPaymentOrders
    suboptions: ApiSuboptions
    whitelabels: ApiWhitelabels
    users: ApiUsers
    tags: ApiTags
    businesses: ApiBusinesses
    categories: ApiCategories
    cities: ApiCities
    countries: ApiCountries
    customers: ApiCustomers
    integrations: ApiIntegrations
    invoices: ApiInvoices
    logs: ApiLogs
    plans: ApiPlans
    points: ApiPoints
    products: ApiProducts
    redeems: ApiRedeems
    rules: ApiRules
    stores: ApiStores
    subproducts: ApiSubproducts
    transactions: ApiTransactions
    receipts: ApiReceipts

    constructor(api_key: string, dev: boolean, error_handler) {

        const api_gvv = new ApiGvv(api_key, dev, error_handler)

        this.auth = new ApiAuth(api_gvv)
        this.allergies = new ApiAllergies(api_gvv)
        this.cards = new ApiCards(api_gvv)
        this.claptable_categories = new ApiClaptableCategories(api_gvv)
        this.claptable_products = new ApiClaptableProducts(api_gvv)
        this.delivery_zones = new ApiDeliveryZones(api_gvv)
        this.diets = new ApiDiets(api_gvv)
        this.extras = new ApiExtras(api_gvv)
        this.food_categories = new ApiFoodCategory(api_gvv)
        this.ingredients = new ApiIngredients(api_gvv)
        this.menus = new ApiMenus(api_gvv)
        this.offers = new ApiOffers(api_gvv)
        this.options = new ApiOptions(api_gvv)
        this.orders = new ApiOrders(api_gvv)
        this.payment_methods = new ApiPaymentMethods(api_gvv)
        this.payment_orders = new ApiPaymentOrders(api_gvv)
        this.suboptions = new ApiSuboptions(api_gvv)
        this.whitelabels = new ApiWhitelabels(api_gvv)
        this.users = new ApiUsers(api_gvv)
        this.tags = new ApiTags(api_gvv)
        this.businesses = new ApiBusinesses(api_gvv)
        this.categories = new ApiCategories(api_gvv)
        this.cities = new ApiCities(api_gvv)
        this.countries = new ApiCountries(api_gvv)
        this.customers = new ApiCustomers(api_gvv)
        this.integrations = new ApiIntegrations(api_gvv)
        this.invoices = new ApiInvoices(api_gvv)
        this.logs = new ApiLogs(api_gvv)
        this.plans = new ApiPlans(api_gvv)
        this.points = new ApiPoints(api_gvv)
        this.products = new ApiProducts(api_gvv)
        this.redeems = new ApiRedeems(api_gvv)
        this.rules = new ApiRules(api_gvv)
        this.stores = new ApiStores(api_gvv)
        this.subproducts = new ApiSubproducts(api_gvv)
        this.transactions = new ApiTransactions(api_gvv)
        this.receipts = new ApiReceipts(api_gvv)
    }
}