import React, { useState } from 'react';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [isOpen ,setOpen] = useState(false)
    const handelHamBurger = () => {
        setOpen(!isOpen)
    }
    return (
        <>
            <header className='bg-purple-50 p-5'>
            <nav className='container'>
                <div>
                    <h5 className='text-xl font-bold'>JobCircularHub</h5>
                </div>
                <div className='lg:flex items-center hidden'>
                    <div className='md:bg-none mr-40 container gap-5 text-sm text-gray-600 font-semibold'>
                    <h5>Home</h5>
                    <h5>Statistics</h5>
                    <h5>Applied Jobs</h5>
                    <h5>Blog</h5>
                    </div>
                    <div className='ml-80'>
                        <button className='w-32 btn-primary'>Star Applying</button>
                        
                    </div>
                    
                </div>
               {/* for mobile */}
               <div onClick={handelHamBurger} className='text-center sm:flex md:hidden'>
                        {
                            isOpen == true ?<XMarkIcon  className="h-8 w-8 text-red-500 " />: <Bars3Icon  className="h-8 w-8 text-red-500 " /> 
                        }
                </div>

                <div className={`gap-2 w-60 flex flex-col lg:hidden absolute left-64 text-start text-sm font-semibold bg-white p-5 ${isOpen ==true ? 'top-16 duration-300': '-top-36 duration-300'}`}>
                <h5>Home</h5>
                    <h5>Statistics</h5>
                    <h5>Applied Jobs</h5>
                    <h5>Blog</h5>
                </div>
            </nav>

            </header>
        </>
    );
};

export default Header;