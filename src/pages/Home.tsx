import React from 'react';
import {useAppDispatch, useAppDispatchAndSelector, useAppSelector} from "@/hooks/reduxHooks";
import {decrement, increment} from "@/store/slices/demo/demoSlice";

const Home = () => {

    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <>
         <h1 className="text-center">Home page!</h1>
            <div className="text-center">
                <div className="mt-5">{count}</div>
                <button className="h-10 px-6 rounded-md bg-blue-500 text-white" onClick={() => dispatch(increment())}>Increment</button>
                <button className="h-10 px-6 rounded-md bg-red-500 text-white" onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </>
    );
};

export default Home;