import {useAppDispatch, useAuth} from "@/hooks/reduxHooks";
import {logout} from "@/modules/auth/store/userSlice";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const {isAuth, email, token} = useAuth()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth]);

    return (
        <>
         <h1 className="text-center">Home page!</h1>
            <div className="text-center">
                {isAuth &&
                <>
                    <h2 className="text-center mt-5">{ email }</h2>
                    <button className="h-10 px-6 rounded-md bg-red-500 text-white mt-5" onClick={() => dispatch(logout(token))}>Logout</button>
                </>
                }
            </div>
        </>
    );
};

export default Dashboard;