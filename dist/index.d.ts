import ApiAuth from './api/auth';
import ApiAllergies from './api/allergies';
import ApiCards from './api/cards';
import ApiClaptableCategories from './api/claptable_categories';
import ApiClaptableProducts from './api/claptable_products';
import ApiDeliveryZones from './api/delivery_zones';
import ApiDiets from './api/diets';
import ApiExtras from './api/extras';
import ApiFoodCategory from './api/food_categories';
import ApiIngredients from './api/ingredients';
import ApiMenus from './api/menus';
import ApiOffers from './api/offers';
import ApiOptions from './api/options';
import ApiOrders from './api/orders';
import ApiPaymentMethods from './api/payment_methods';
import ApiPaymentOrders from './api/payment_orders';
import ApiSuboptions from './api/suboptions';
import ApiWhitelabels from './api/whitelabels';
import ApiUsers from './api/users';
import ApiTags from './api/tags';
import ApiBusinesses from './api/businesses';
import ApiCategories from './api/categories';
import ApiCities from './api/cities';
import ApiCountries from './api/countries';
import ApiCustomers from './api/customers';
import ApiIntegrations from './api/integrations';
import ApiInvoices from './api/invoices';
import ApiLogs from './api/logs';
import ApiPlans from './api/plans';
import ApiPoints from './api/points';
import ApiProducts from './api/products';
import ApiRedeems from './api/redeems';
import ApiRules from './api/rules';
import ApiStores from './api/stores';
import ApiSubproducts from './api/subproducts';
import ApiTransactions from './api/transactions';
import ApiReceipts from './api/receipts';
export default class Govivant {
    auth: ApiAuth;
    allergies: ApiAllergies;
    cards: ApiCards;
    claptable_categories: ApiClaptableCategories;
    claptable_products: ApiClaptableProducts;
    delivery_zones: ApiDeliveryZones;
    diets: ApiDiets;
    extras: ApiExtras;
    food_categories: ApiFoodCategory;
    ingredients: ApiIngredients;
    menus: ApiMenus;
    offers: ApiOffers;
    options: ApiOptions;
    orders: ApiOrders;
    payment_methods: ApiPaymentMethods;
    payment_orders: ApiPaymentOrders;
    suboptions: ApiSuboptions;
    whitelabels: ApiWhitelabels;
    users: ApiUsers;
    tags: ApiTags;
    businesses: ApiBusinesses;
    categories: ApiCategories;
    cities: ApiCities;
    countries: ApiCountries;
    customers: ApiCustomers;
    integrations: ApiIntegrations;
    invoices: ApiInvoices;
    logs: ApiLogs;
    plans: ApiPlans;
    points: ApiPoints;
    products: ApiProducts;
    redeems: ApiRedeems;
    rules: ApiRules;
    stores: ApiStores;
    subproducts: ApiSubproducts;
    transactions: ApiTransactions;
    receipts: ApiReceipts;
    constructor(api_key: string, dev: boolean, error_handler: any);
}
