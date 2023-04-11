import React from 'react';
import Image from '../../assets/Icons/Group 9969.png'

const Footer = () => {
    return (
        <div className='bg-black px-10'>
            <div className='grid md:grid-cols-5 sm:grid-cols-1 sm:items-start sm:justify-start md:text-start sm:w-[100%] md:w-4/5 mx-auto text-white p-10 gap-10'>
                <div>
                    <h3 className='mb-8 text-2xl font-semibold '>CareerHub</h3>
                    <p className='md:w-4/5 sm:w-[100%] sm:text-center md:text-start'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='flex sm:items-center md:items-center justify-center gap-4 '>
                        <img src={Image} alt=""  className=''/>
                      </div>
                </div>

                <div className='sm:w-[100%] mb-10'>
                    <h3 className='md:mb-8 text-2xl font-semibold'>Company</h3>
                    <p className='md:mb-4 sm:mb-4'>About us</p>
                    <p className='md:mb-4 sm:mb-4'>Work</p>
                    <p className='md:mb-4 sm:mb-4'>Latest News</p>
                    <p className='md:mb-4 sm:mb-4'>Careers</p>
                </div>

                <div>
                    <h3 className='md:mb-8 sm:mb-4 text-2xl font-semibold'>Support</h3>
                    <p className='md:mb-4 sm:mb-4'>Help Desk</p>
                    <p className='md:mb-4 sm:mb-4'>Sales</p>
                    <p className='md:mb-4 sm:mb-4'>Become a Partner</p>
                    <p className='md:mb-4 sm:mb-4'>Developers</p>
                </div>

                <div>
                    <h3 className='md:mb-8 sm:mb-6 text-2xl font-semibold'> Product</h3>
                    <p className='md:mb-4 sm:mb-1'>Prototype</p>
                    <p className='md:mb-4 sm:mb-1'>Plans & Pricing</p>
                    <p className='md:mb-4 sm:mb-1'>Customers</p>
                    <p className='md:mb-4 sm:mb-4'>Integrations</p>
                </div>
                <div>
                    <h3 className='md:mb-8 sm:mb-4 text-2xl font-semibold'>Contact</h3>
                    <p className='md:mb-4 sm:mb-4'>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <hr />
            <div className='flex justify-between items-center text-gray-400 w-4/5 mx-auto mt-5 mb-8 gap-8'>
                <p>@2023 JOB_CIRCULAR_HUB. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;