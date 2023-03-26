import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {useAuth} from "@/hooks/reduxHooks";

const App: React.FC = () => {
    const {isAuth} = useAuth()
    return (
        <>
            <div className="mt-5 flex">
                {isAuth && <Link to="/" className="btn btn-primary">Home</Link>}
                {!isAuth &&
                    <>
                        <Link to="/login" className="btn btn-primary">Login</Link>
                        <Link to="/register" className="btn btn-primary">Register</Link>
                    </>
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

export default App;