import React, { useState } from 'react';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const [isOpen ,setOpen] = useState(false)
    const handelHamBurger = () => {
        setOpen(!isOpen)
    }
    return (
        <>
            <header className='bg-sky-100 p-5'>
            <nav className='container'>
                <div>
                    <Link to='/'><h5 className='text-xl font-bold'>JOB_CIRCULAR_HUB</h5></Link>
                </div>
                <div className='lg:flex items-center hidden'>
                    <div className='md:bg-none mr-40 container gap-5 text-sm text-gray-600 font-semibold'>
        
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-sky-300' : 'default:'}>
                            Home
                    </NavLink>
                    <NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-sky-300' : 'default:'}>
                        Statistics
                    </NavLink>
                    <NavLink to="/appliedJobs" className={({ isActive }) => isActive ? 'text-sky-300' : 'default:'}>
                            Applied Jobs
                    </NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-sky-300' : 'default:'}>
                        Blog
                    </NavLink>
                    </div>
                    <div className='ml-80'>
                        <button className='w-32 btn-primary'>Star Applying</button>
                        
                    </div>
                    
                </div>
               {/* for mobile */}
               <div onClick={handelHamBurger} className='text-center sm:flex md:hidden'>
                        {
                            isOpen == true ?<XMarkIcon  className="h-8 w-8 text-sky-500 " />: <Bars3Icon  className="h-8 w-8 text-sky-500 " /> 
                        }
                </div>

                <div className={`gap-2 w-60 flex flex-col lg:hidden absolute left-16 text-start text-sm font-semibold bg-white rounded p-5 ${isOpen ==true ? 'top-16 duration-300': '-top-36 duration-300'}`}>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-sky-300' : 'default:'}>
                            Home
                    </NavLink>
                    <NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-sky-300' : 'default:'}>
                        Statistics
                    </NavLink>
                    <NavLink to="/appliedJobs" className={({ isActive }) => isActive ? 'text-sky-300' : 'default:'}>
                            Applied Jobs
                    </NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-sky-300' : 'default:'}>
                        Blog
                    </NavLink>
                </div>
            </nav>

            </header>
        </>
    );
};

export default Header;