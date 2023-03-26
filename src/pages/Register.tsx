import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "@/hooks/reduxHooks";

const Register = () => {
    const {isAuth} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }
    }, [isAuth])

    return (
        <>
            <h1 className="text-center">Register</h1>
        </>
    );
};

export default Register;