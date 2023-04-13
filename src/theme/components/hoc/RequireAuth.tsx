import React, {useMemo} from "react";
import {useAuth} from "@/hooks/reduxHooks";
import {RoutesPath} from "@/route/RoutesPath";
import {Navigate} from "react-router-dom";

type RoutesProps = {
    children?: React.ReactNode
}

const RequireAuth = ({children}: RoutesProps): JSX.Element | null => {
    const {token} = useAuth()
    const to = useMemo(() => (!!token ? RoutesPath.dashboard: RoutesPath.auth.login), [token])

    if (token) {
        return <>{children}</>
    }

    return <Navigate to={to} />
}

export default RequireAuth