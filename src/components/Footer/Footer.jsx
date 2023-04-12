import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='grid md:grid-cols-4 sm:grid-cols-2 w-4/5 mx-auto text-white gap-10 md:text-start sm:text-center py-8'>
                <div className='md:mb-8 sm:mb-6  font-semibold'>
                    <h3 className='md:mb-4 sm:mb-4 text-2xl'>CareerHub</h3>
                    <p className='md:mb-4 sm:mb-4'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div>
                        <img src={Image} alt=""  className=''/>
                    </div>
                </div>
                {/* two */}
                <div>
                   <h3 className='md:mb-8 sm:mb-4 text-2xl font-semibold'>Support</h3>
                    <p className='md:mb-4 sm:mb-4'>Help Desk</p>
                    <p className='md:mb-4 sm:mb-4'>Sales</p>
                    <p className='md:mb-4 sm:mb-4'>Become a Partner</p>
                    <p className='md:mb-4 sm:mb-4'>Developers</p>
                </div>
                {/* three  */}
                <div>
                   <h3 className='md:mb-8 sm:mb-6 text-2xl font-semibold'> Product</h3>
                    <p className='md:mb-4 sm:mb-1'>Prototype</p>
                    <p className='md:mb-4 sm:mb-1'>Plans & Pricing</p>
                    <p className='md:mb-4 sm:mb-1'>Customers</p>
                    <p className='md:mb-4 sm:mb-4'>Integrations</p>
                </div>
                {/* four  */}
                <div>
                    <h3 className='md:mb-8 sm:mb-4 text-2xl font-semibold'>Contact</h3>
                    <p className='md:mb-4 sm:mb-4'>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <hr className='mb-5 border border-gray-700'/>
            <div className='bg-black text-gray-500 flex justify-between items-center w-3/4 mx-auto pb-8'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;