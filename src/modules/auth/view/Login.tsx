import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {LockClosedIcon} from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useAppDispatch, useAuth} from "@/hooks/reduxHooks";
import {useNavigate} from "react-router-dom";
import {Oval} from "react-loading-icons";
import {setLogin} from "@/modules/auth/store/userSlice";
import {authApi} from "@/modules/auth/api/authApi";

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(50).required(),
}).required();
type FormData = yup.InferType<typeof schema>

const Login = () => {
    const [loading, setLoading] = useState(false)
    const {isAuth} = useAuth()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {login, me} = authApi()

    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }
    }, [isAuth]);

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(schema)
    })

    const disabled = useMemo(() => !isDirty || !isValid || loading, [isDirty, isValid, loading])

    const onSubmit = useCallback(async (data: FormData) => {
        setLoading(true)
        try {
            const res = await login(data.email, data.password)
            const getMe = await me({token: res.data.token})
            dispatch(setLogin({token: res.data.token, id: getMe.data.id, email: getMe.data.email}))
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }, [])


    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                start your 14-day free trial
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        autoComplete="email"
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1
                                                 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2
                                                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                                        placeholder="Email address"
                                        {...register("email")}
                                    />
                                    <p className="text-red-500">{errors.email?.message}</p>
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        autoComplete="current-password"
                                        className="relative block w-full rounded-b-md
                                                border-0 py-1.5 text-gray-900 ring-1 ring-inset
                                                ring-gray-300 placeholder:text-gray-400 focus:z-10
                                                focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                                sm:text-sm sm:leading-6"
                                        placeholder="Password"
                                        {...register("password")}
                                    />
                                    <p className="text-red-500">{errors.password?.message}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className={`
                                    group relative flex w-full justify-center
                                            rounded-md ${disabled ? 'bg-indigo-600/30 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500'} py-2 px-3 text-sm font-semibold
                                            text-white focus-visible:outline
                                            focus-visible:outline-2 focus-visible:outline-offset-2
                                            focus-visible:outline-indigo-600
                                    `}
                                    disabled={disabled}
                                >
                                    {loading ? <Oval height={20} />
                                        : <>
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                            </span>
                                            Login
                                    </>}
                                </button>
                            </div>
                        </form>
                </div>
            </div>
        </>
    );
};

export default Login;
