import React from 'react';

const Categorycard = ({infos}) => {
  
    const {title,description,image} = infos
    return (
        <>
             <div className='flex items-center justify-around '>
               <div className='bg-purple-50 px-10 py-6 text-start rounded'>
               <img src={image} alt="" className='mb-10 bg-purple-100 p-5 object-cover'/>
                <h5 className='text-xl font-semibold'>{title}</h5>
                <h5 className='text-sm text-gray-600'>{description}</h5>
               </div>
             </div>
        </>
    );
};

export default Categorycard;