import React from 'react';
import {LockClosedIcon} from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();
type FormData = yup.InferType<typeof schema>;

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: FormData) => console.log(data);

    return (
        <>
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
                        className="group relative flex w-full justify-center
                                rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold
                                text-white hover:bg-indigo-500 focus-visible:outline
                                focus-visible:outline-2 focus-visible:outline-offset-2
                                focus-visible:outline-indigo-600"
                    >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                        Sign in
                    </button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;