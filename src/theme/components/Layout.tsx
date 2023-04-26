import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {RoutesPath} from "@/route/RoutesPath";

const Layout = () => {
    return (
        <>
            <header className="mt-5 ml-5">
                <Link to={RoutesPath.dashboard}>Dashboard</Link>
                <Link className="ml-5" to={RoutesPath.test.test}>TestPage</Link>
                <Link className="ml-5" to={RoutesPath.user.articles}>Articles</Link>
            </header>
            <main className="container mx-auto px-4">
                <Outlet />
            </main>
            <footer className="text-center mt-5">(c) 2023</footer>
        </>
    )
}

export default Layout;