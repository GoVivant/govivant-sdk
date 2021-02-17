import ApiAuth from './api/auth';
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
