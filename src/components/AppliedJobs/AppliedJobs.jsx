import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../fakeDb/fakedb';
import ShowApplyCard from '../ShowApplyCard/ShowApplyCard';


const AppliedJobs = () => {
    const [allDatas,setAllData] = useState([])
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
         })},[])

    console.log(allDatas);
    return (
        <div className='mt-10 mx-auto md:w-2/4'>
            {
                allDatas.map(data => <ShowApplyCard data={data}/>)
            }
        </div>
    );
};

export default AppliedJobs;