import {logout} from "@/modules/auth/store/userSlice";
import {useAppDispatch, useAuth} from "@/hooks/reduxHooks";

const Dashboard = () => {
    const {email, token} = useAuth()
    const dispatch = useAppDispatch()
    return (
        <>
         <h1 className="text-center">Dashboard</h1>
            <div className="text-center">
                <>
                    <h2 className="text-center mt-5">{ email }</h2>
                    <button className="h-10 px-6 rounded-md bg-red-500 text-white mt-5" onClick={() => dispatch(logout(token))}>Logout</button>
                </>
            </div>
        </>
    );
};

export default Dashboard;