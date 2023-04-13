import React from 'react';
import {Link} from "react-router-dom";
import {RoutesPath} from "@/route/RoutesPath";
import {useAuth} from "@/hooks/reduxHooks";

const NotFound = () => {
    const {isAuth} = useAuth();
    return (
        <>
            <div className="container">
                {/* BEGIN: Error Page */}
                <div className="error-page flex flex-col lg:flex-row items-center justify-center h-screen text-center lg:text-left">
                    <div className="text-black mt-10 lg:mt-0">
                        <div className="intro-x text-8xl font-medium">404</div>
                        <div className="intro-x text-xl lg:text-3xl font-medium mt-5">Oops. This page has gone missing.</div>
                        <div className="intro-x text-lg mt-3 pb-5">You may have mistyped the address or the page may have moved.</div>

                        <Link
                            to={RoutesPath.dashboard}
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                            Back to {isAuth ? 'Dashboard' : 'Login'}
                        </Link>
                    </div>
                </div>
                {/* END: Error Page */}
            </div>
        </>
    );
};

export default NotFound;