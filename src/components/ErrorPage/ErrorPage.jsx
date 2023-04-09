import React from 'react';
import { useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid'

const ErrorPage = () => {
    const {status,statusText} = useRouteError();
    console.error(status);

    return (
        <>
           <div className='flex flex-col items-center justify-center mx-auto h-[80vh]'>
           <FaceFrownIcon className="h-32 w-32 text-red-500 text-center" />
            <h3 className='text-3xl font-bold'><span className='text-4xl'>{status}</span> {statusText}</h3>
           </div>
        </>
    );
};

export default ErrorPage;