import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../fakeDb/fakedb';
import ShowApplyCard from '../ShowApplyCard/ShowApplyCard';


const AppliedJobs = () => {
    const [allDatas,setAllData] = useState([])
    const [singledb, setsingldb] = useState([])
    useEffect(() =>{
         const applied = getShoppingCart()
         const applyedId = Object.keys(applied)
         fetch(`/jobcirculer.json`)
         .then(res => res.json())
         .then(db => 
            {

            const data = [];
            applyedId.forEach(id => {
                data.push(db.find( d => d.id == id))
            })
            setAllData(...allDatas,data)
            setsingldb(...singledb,data)
         })},[])

const remotjob = () =>{
    const remotdata = allDatas.filter(d => d.jobType == 'Remote')
    setsingldb(remotdata) 
}
const insideJob = () =>{
    const indordata = allDatas.filter(d => d.jobType != 'Remote')
    setsingldb(indordata);  
}



    return (

        
        <>
            <div>
               <div>{singledb.length == false ? <h5 className='bg-sky-100 p-6 flex items-center justify-center gap-10 text-2xl font-bold mb-10 mt-10'>No Application Availabal</h5> : <h5 className='bg-sky-100 p-6 flex items-center justify-center gap-10 text-2xl font-bold mb-10 mt-10'>There are {singledb.length} Job Applications</h5>}
               <hr className='border border-gray-200' /></div>
             </div>

           <div className={`mt-10 mx-auto sm:w-screen md:w-2/4 `}>
              <div className='flex justify-end gap-6 mb-5'>
           <div className={`${singledb.length == false ? 'hidden': ''}`}>
          <button className='border border-gray-500 px-6 py-2 rounded mr-2' onClick={remotjob}>remot</button>
            <button className='border border-gray-500 px-6 py-2 rounded' onClick={insideJob} >inside</button>
          </div>
          </div>
            {
             singledb.map(data => <ShowApplyCard data={data} key={data.id} />)
            }
        </div>
        </>

        
    );
};

export default AppliedJobs;