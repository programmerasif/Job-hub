import React from 'react';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ShowApplyCard = ({data}) => {
    console.log(data);
    const {companyLogo,position,company,jobType,location,salary,id} = data
    return (
        <div className='flex justify-between items-center bg-gray-50 mb-5 p-10 rounded border border-gray-200'>
            <div className='flex justify-center items-center mx-auto md:w-3/4  gap-10'>
                <div><img src={companyLogo} alt="" className='w-20 h-20'/></div>
                <div className='text-start'>
                    <h3 className='md:text-3xl sm:text-xl font-semibold'>{position}</h3>
                    <h5 className='md:text-xl sm:text-sm font-semibold text-gray-500'>{company}</h5>
                    <p className='border border-sky-400 w-20 text-center my-4 bg-gray-100 rounded'>{jobType}</p>
                    <div className='flex gap-10 text-sm text-gray-500 w-74'>
                        <div className='flex items-center justify-center gap-1'> <MapPinIcon className='h-5 w-5' /> <p>{location}</p></div>
                        <div className='flex items-center justify-center gap-1 '> <CurrencyDollarIcon className='h-5 w-5' /> <p>{salary}</p></div>

                    </div>
                </div>
            </div>
            <div>
                <button className='btn-primary'><Link to={`/jobDetils/${id}`}>View Details</Link></button>
            </div>
        </div>
    );
};

export default ShowApplyCard;