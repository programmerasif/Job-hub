import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../fakeDb/fakedb';
import { CurrencyDollarIcon,CalendarDaysIcon,PhoneIcon,AtSymbolIcon,MapPinIcon } from '@heroicons/react/24/solid'



const JobDetils = () => {
    const detils = useLoaderData()
    const id = useParams().detilId
  const [singleData,setSingleData] = useState({})
  
  
   useEffect(() =>{
   const sData =  detils.find(data => data.id == id)
   setSingleData(sData)
   
//    add to local storage 
   },[id])
   const handeldata =() =>{
    addToDb(singleData.id)
}

   const {jobDescription,responsibility,education,experience,salary,position} = singleData
    return (
        <div >
            <div className='grid md:grid-cols-2 sm:grid-cols-1 items-center justify-around w-4/5 mx-auto mt-8 gap-10 sm:p-1 md:p-10'>

            <div className='text-start'>
                <h3 className='mb-7 text-sm '><span className='text-2xl font-bold'>Job Description :</span> {jobDescription}</h3>
                <h3 className='mb-7'> <span className='text-2xl font-bold '>Job Responsibility:</span>{responsibility}</h3>
                <h3 className='mb-7'><span className='text-2xl font-bold'>Educational Requirements:</span> <br />{education}</h3>
                <p>  <span className='text-2xl font-bold'>Job Exprience :</span><br />{experience}</p>
            </div>

            {/* second div */}
            <div className=' text-start  md:w-1/2 sm:w-screen bg-sky-50 p-6'>
            <h3 className='text-2xl font-bold'>Job Detils</h3>
                    <hr className='text-2xl font-bold'/>
                    <br />
                    <div>
                        <p className='text-sm text-gray-500'><span className='text-xl font-semibold text-black'> <CurrencyDollarIcon className=" inline mr-2 h-5 w-5 text-blue-500" />Salary :</span>{salary}</p>
                        <p className='text-sm text-gray-500'><span className='text-xl font-semibold text-black'> <CalendarDaysIcon className=" inline mr-2 h-5 w-5 text-blue-500" />Job Title :</span> {position}</p>
                    </div>
                    <br />
                    <h3 className='text-xl font-semibold'>Contact Information</h3>
                    <br />
                    <p className='text-sm text-gray-500'><span className='text-black'> <PhoneIcon className=" inline mr-2 h-5 w-5 text-blue-500" />Phone : </span>01750-** 00 *0</p>
                    <p className='text-sm text-gray-500'><span className='text-black'> <AtSymbolIcon className=" inline mr-2 h-5 w-5 text-blue-500" />Email :</span> info@gmail.com</p>
                    <p className='text-sm text-gray-500'><span className='text-xl font-semibold'><span className='text-black'> <MapPinIcon className=" inline mr-2 h-5 w-5 text-blue-500" />Address :</span></span>{singleData.location}</p>
                    <Link to="/"> <button className='btn-primary w-[100%] mt-10' onClick={handeldata}>Apply Now</button></Link>
            </div>

            </div>
        </div>
    );
};

export default JobDetils;