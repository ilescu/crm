import axios from 'axios'

export const apiUrl = import.meta.env.VITE_API_URL

export const request = axios.create({
    baseURL: apiUrl,
    withCredentials: true
})

export const authApiSchema = (url: string) => {
    const login = (email: string, password: string) => {
        return request.post(url, {email, password})
    }

    const logout = (config = {}) => {
        return request.get(url, config)
    }

    const me = (config = {}) => {
        return request.get(url, config)
    }
    return { login, logout, me }
}

export const crudApiSchema = (url: string) => {
    const list = (config = {}) => {
        return request.get(url, config)
    }

    const show = (id: number, config = {}) => {
        return request.get(`${url}/${id}`, config)
    }

    const store = (data: any, config = {}) => {
        return request.post(url, data, config)
    }

    const update = (id: number, data: any, config = {}) => {
        return request.put(`${url}/${id}`, data, config)
    }

    const destroy = (id: number, config = {}) => {
        return request.delete(`${url}/${id}`, config)
    }

    return { list, show, store, update, destroy }
}


request.interceptors.request.use(({ token, branchId, headers, ...config }: any) => {
    headers = { 'Content-Type': 'application/json', Accept: 'application/json', 'Branch-Id': branchId || 0, ...headers }
    if (!token) {
        return { ...config, headers }
    }

    return { ...config, headers: { ...headers, Authorization: `Bearer ${token}` } }
})