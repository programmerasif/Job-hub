import React from 'react';
import Img from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;