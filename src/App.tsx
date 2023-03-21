import React from 'react';
import {Link, Outlet} from "react-router-dom";

const App: React.FC = () => {

    return (
        <>
            <div className="mt-5 flex">
                <Link to="/" className="btn btn-primary">Home</Link>
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

export default App;