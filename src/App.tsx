import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {RoutesPath} from "@/route/RoutesPath";
import Dashboard from "@/pages/Dashboard";
import TestPage from "@/pages/TestPage";
import Layout from "@/theme/components/Layout";
import NotFound from "@/pages/NotFound";
import RequireAuth from "@/theme/components/hoc/RequireAuth";
import Login from "@/modules/auth/view/Login";
import Articles from "@/pages/Articles";

const App: React.FC = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path={RoutesPath.dashboard} element={
                <RequireAuth>
                    <Layout />
                </RequireAuth>}>
                <Route index element={<Dashboard />} />
                <Route path={RoutesPath.test.test} element={<TestPage />} />
                <Route path={RoutesPath.user.articles} element={<Articles />}/>
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path={RoutesPath.auth.login} element={<Login />}/>
        </>
    ))
    return (<RouterProvider router={router} />);
};

export default App;