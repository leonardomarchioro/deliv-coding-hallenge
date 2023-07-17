import axios, { AxiosRequestConfig } from 'axios';
import { toast } from "react-toastify";

const BackEndHTTP = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json',
    }
})


class Http {
    async post(path: string, data: any, config?: AxiosRequestConfig<any>, successMessage?: string){
        return BackEndHTTP.post(path, data, config).then(({ data }) => { 
            successMessage && toast.success(successMessage)
            return data}).catch(({ response }) => toast.error(response.data.message))
    }

    async get(path: string, config?: AxiosRequestConfig<any>) {
        return BackEndHTTP.get(path, config).then(({ data }) => data).catch()

    }

    async patch(path: string, data: any, config?: AxiosRequestConfig<any>, successMessage?: string) {
        return BackEndHTTP.patch(path, data, config).then(({ data }) => { 
            successMessage && toast.success(successMessage)
            return data}).catch(({ response }) => toast.error(response.data.message))
    }

    async delete(path: string, config?: AxiosRequestConfig<any>, successMessage?: string) {
        return BackEndHTTP.delete(path, config).then(({ data }) => { 
            successMessage && toast.success(successMessage)
            return data}).catch(({ response }) => toast.error(response.data.message))

    }
}

const RequestHTTP = new Http()

export default RequestHTTP;