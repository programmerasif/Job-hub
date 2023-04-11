import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../fakeDb/fakedb';



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
        <div className='sm:flex-row md:flex justify-center items-center md:w-4/5 sm:w-screen p-8 mx-auto h-[80vh]'>
            <div className='md:w-[55%] sm:w-[100] text-start md:mb-0 sm:mb-10 '>
                <h3 className='mb-7 text-sm'><span className='text-2xl font-bold'>Job Description :</span> {jobDescription}</h3>
                <h3 className='mb-7'> <span className='text-2xl font-bold '>Job Responsibility:</span>{responsibility}</h3>
                <h3 className='mb-7'><span className='text-2xl font-bold'>Educational Requirements:</span> <br />{education}</h3>
                <p>  <span className='text-2xl font-bold'>Job Exprience :</span><br />{experience}</p>
            </div>
            <div className='md:w-[45%] sm:w-[100] text-start  '>
                <div className='flex flex-col justify-center items-start rounded bg-sky-100 md:w-1/2 sm:w-screen p-10'>
                    <h3 className='text-2xl font-bold'>Job Detils</h3>
                    <hr className='text-2xl font-bold'/>
                    <br />
                    <div>
                        <p className='text-sm text-gray-500'><span className='text-xl font-semibold text-black'>Salary :</span>{salary}</p>
                        <p className='text-sm text-gray-500'><span className='text-xl font-semibold text-black'>Job Title :</span> {position}</p>
                    </div>
                    <br />
                    <h3 className='text-xl font-semibold'>Contact Information</h3>
                    <br />
                    <p className='text-sm text-gray-500'><span className='text-black'>Phone : </span>01750-** 00 *0</p>
                    <p className='text-sm text-gray-500'><span className='text-black'>Email :</span> info@gmail.com</p>
                    <p className='text-sm text-gray-500'><span className='text-xl font-semibold'><span className='text-black'>Address :</span></span>{singleData.location}</p>
                    <Link to="/"> <button className='btn-primary w-[100%] mt-10' onClick={handeldata}>Apply Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetils;