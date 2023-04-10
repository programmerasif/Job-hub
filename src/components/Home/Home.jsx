import React from 'react';
import Img from '../../assets/All Images/P3OLGJ1 copy 1.png'
import { useLoaderData } from 'react-router-dom';
import Categorycard from '../CategoryCard/Categorycard';

const Home = () => {
    const data = useLoaderData()
    
    return (
        <div>
            {/* banner section */}
            <section className=' bg-purple-50'>
                <div className='md:flex justify-between items-center w-4/5 mx-auto'>
                <div className='md:w-[50%] p-5 flex flex-col justify-start'>
                    <h3 className='md:text-5xl text-3xl font-bold text-start md:leading-[60px] '>
                    One Step <br /> Closer To Your <br /><span>Dream Job</span>
                    </h3>
                    <p className='text-start md:w-[60%] mt-7 text-gray-500 text-sm'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-primary w-32 mt-5'>Get Started</button>
                </div>
                <div className='md:w-1/2'>
                   <img src={Img}alt="" />
                </div>
                </div>
            </section>
            {/*Job Category List section  */}
            <section className='mt-36'>
                <h4 className='text-2xl md:text-3xl font-semibold mb-10'>Job Category List</h4>
                <p className='text-sm text-gray-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-1 md:grid-cols-4 w-4/5 mx-auto mt-10  gap-5'>
                {
                    data.map(infos => <Categorycard  key={infos.id} infos={infos}/>)
                }
                </div>
            </section>
        </div>
    );
};

export default Home;