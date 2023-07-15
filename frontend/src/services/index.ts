import axios, { AxiosRequestConfig } from 'axios'

const BackEndHTTP = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json',
    }
})


class Http {
    async post(path: string, data: any, config?: AxiosRequestConfig<any>){
        return BackEndHTTP.post(path, data, config).then(({ data }) => data).catch(({ response }) => console.log(response))
    }

    async get(path: string, config?: AxiosRequestConfig<any>) {
        return BackEndHTTP.get(path, config).then(({ data }) => data).catch(({ response }) => console.log(response))

    }

    async patch(path: string, data: any, config?: AxiosRequestConfig<any>) {
        return BackEndHTTP.patch(path, data, config).then(({ data }) => data).catch(({ response }) => console.log(response))
    }

    async delete(path: string, config?: AxiosRequestConfig<any>) {
        return BackEndHTTP.delete(path, config).then(({ data }) => data).catch(({ response }) => console.log(response))

    }
}

const RequestHTTP = new Http()

export default RequestHTTP;