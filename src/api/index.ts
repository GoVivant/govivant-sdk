import axios from 'axios'

function getClient(api_key: string, dev: boolean, error_handler = () => { }, clap) {
    const client = axios.create({
        baseURL: `https://govivant-api${dev ? clap ? '-dev-clap' : '-dev' : ''}.herokuapp.com`,
        headers: {
            'Authorization': `Bearer ${api_key}`,
        }
    })

    client.interceptors.response.use(
        res => res,
        error_handler
    )

    return client
}

export default class ApiGvv {

    private client: any

    constructor(api_key: string, dev: boolean, error_handler, clap: boolean) {
        this.client = getClient(api_key, dev, error_handler, clap)
    }

    get(url: string, conf = {}) {
        return this.client.get(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error.response))
    }

    delete(url: string, conf = {}) {
        return this.client.delete(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error.response))
    }

    post(url: string, data = {}, conf = {}) {
        return this.client.post(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error.response))
    }

    put(url: string, data = {}, conf = {}) {
        return this.client.put(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error.response))
    }
}