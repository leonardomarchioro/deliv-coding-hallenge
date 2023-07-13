import axios, { AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

const token = Cookies.get('authToken') || null


const BackEndHTTP = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json',
    }
})


class RequestHTTP {
    async post(path: string, data: any, config?: AxiosRequestConfig<any>){
        return BackEndHTTP.post(path, data, config).then(({ data }) => data).catch(({ response }) => console.log(response))
    }

    async get(path: string, config?: AxiosRequestConfig<any>) {
        return BackEndHTTP.get(path, config).then(({ data }) => data).catch(({ response }) => console.log(response))

    }
}

export default new RequestHTTP()