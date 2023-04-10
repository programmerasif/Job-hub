import React from 'react';

const JobCatagoriCard = ({jData}) => {
    console.log(jData);
    const {companyLogo,company,position,jobType,location,salary} = jData
    return (
        <div className='flex justify-start items-center bg-gray-100 p-8 rounded '>
            <div className='text-start'>
            <img src={companyLogo} className='w-20 h-16 mb-6' alt="" />
            <p className='text-2xl font-semibold text-gray-600 mb-2'>{position}</p>
            <p className='text-sm font-semibold text-gray-500 mb-3'>{company}</p>
            
            <div className='border border-sky-500 w-20 flex justify-center items-center rounded bg-purple-50 mb-3'>
            <p >{jobType}</p>
            </div>
            <div className='flex items-center justify-between gap-8 mb-3 text-sm font-semibold text-gray-400'>
                <p>location : {location}</p>
                <p>Salary : {salary}</p>
            </div>
            <button className='btn-primary'>View Details</button>
            </div>
        </div>
    );
};

export default JobCatagoriCard;