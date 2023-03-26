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

request.interceptors.request.use(({ token, branchId, headers, ...config }: any) => {
    headers = { 'Content-Type': 'application/json', Accept: 'application/json', 'Branch-Id': branchId || 0, ...headers }
    if (!token) {
        return { ...config, headers }
    }

    return { ...config, headers: { ...headers, Authorization: `Bearer ${token}` } }
})