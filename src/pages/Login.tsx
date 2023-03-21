import React from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import LoginForm from "@/modules/auth/components/LoginForm";

const Login = () => {
    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <LoginForm/>
                </div>
            </div>
        </>
    )
};

export default Login;