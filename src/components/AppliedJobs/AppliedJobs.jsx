import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../fakeDb/fakedb';
import ShowApplyCard from '../ShowApplyCard/ShowApplyCard';


const AppliedJobs = () => {
    const [allDatas,setAllData] = useState([])
    const [singledb, setsingldb] = useState([])
    // const[onside ,setOnside] = useState([])
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
        <div className='mt-10 mx-auto md:w-2/4'>
            <div className='flex justify-end gap-6 mb-5'>
            <button className='border border-gray-500 px-6 py-2 rounded' onClick={remotjob}>remot</button>
            <button className='border border-gray-500 px-6 py-2 rounded' onClick={insideJob} >inside</button>
        </div>
            {
                

                singledb.map(data => <ShowApplyCard data={data} key={data.id} />)
            }
        </div>
    );
};

export default AppliedJobs;