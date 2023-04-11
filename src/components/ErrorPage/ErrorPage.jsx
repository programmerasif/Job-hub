import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Animitio from "../../assets/98642-error-404.json"
import Lottie from "lottie-react";

const ErrorPage = () => {
    const {status,statusText} = useRouteError();
   

    return (
        <>
           <div className='flex flex-col items-center justify-center mx-auto h-[80vh]'>
           <Lottie animationData={Animitio} loop={true} />
            <h3 className='text-3xl font-bold'><span className='text-4xl'>{status? status : '404'}</span> {statusText ? statusText : 'Not Found'}</h3>
            <Link to='/'><button className='btn-primary mt-10'>Back to Home</button></Link>
           </div>
        </>
    );
};

export default ErrorPage;