import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    let error = useRouteError()
    console.log(error);
    return (
        <div className="w-screen h-screen bg-amber-100 flex justify-center items-center">
            <div> 
                <h1 className="text-6xl text-rose-400 ">
                    {error.status} <span> </span> {error.statusText}
                </h1>
                <p className="text-3xl mt-4 text-amber-600" >{error.data}</p>
                <div className="pt-4 text-center mt-12 ">
                   <Link 
                   className="border-l-rose-400
                    bg-green-600
                     text-3xl
                     font-bold
                     text-white p-4 
                     hover:text-green-100
                     transition-all
                     " 
                    to="/"> 
                    Back to Home 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;