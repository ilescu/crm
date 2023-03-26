import {authApiSchema} from "@/api/api";
export const authApi = () => {
    const {login} = authApiSchema('login')
    const {logout} = authApiSchema('logout')
    const {me} = authApiSchema('me')

    return {login, logout, me}
}