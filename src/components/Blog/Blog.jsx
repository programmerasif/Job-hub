import React from 'react';

const Blog = () => {
    return (
        <div className='bg-sky-100'>
            <div className='sm:w-full md:w-8/12 flex justify-start items-center mx-auto  '>
            <div className='text-start mt-8'>
                <div className='p-10 bg-gray-50 border-2 border-gray-200 rounded mb-8'>
                <h5 className='text-sky-500 text-2xl font-semibold'>1.When should we use context API?</h5>
                <h5 className='text-gray-600 font-semibold text-sm'>Ans: When we have to avoid props drilling. In large application ,we have to share state or props one Component to multipule components.The Context API helps share data between components which you can’t easily share with props, for example, complex data objects. In that case ,if we dont use context API ,we could make a mess and also making our website faster, we have to use context API.</h5>
                </div>
                
                <div className='p-10 bg-gray-50 border-2 border-gray-200 rounded mb-8'>
                <h5 className='text-sky-500 text-2xl font-semibold'>2.What React is Custom Hooks?</h5>
                <h5 className='text-gray-600 font-semibold text-sm'>Ans : In react Custom Hooks is one kind of re-useable JavaScript function which we create by ourselves and can use these any special situation.When we want to share the logic between other components, we can extract it to a separate function.</h5>
                </div>
                
                <div className='p-10 bg-gray-50 border-2 border-gray-200 rounded mb-8'>
                <h5 className='text-sky-500 text-2xl font-semibold'>3.What is useRef?</h5>
                <h5 className='text-gray-600 font-semibold text-sm'>Ans : useRef is a react's Hook .The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. It  returns a mutable ref object.introduced with other hooks in React version 16.8 and is mainly used for creating a reference of the DOM element or directly accessing it inside a functional component. </h5>
                </div>
                
                <div className='p-10 bg-gray-50 border-2 border-gray-200 rounded mb-8'>
                <h5 className='text-sky-500 text-2xl font-semibold'>4.What is useMemo?</h5>
                <h5 className='text-gray-600 font-semibold text-sm'>Ans useMemo is also a react Hook . when we need to optimised or improve our Application's performance, we can use useMemo.useMemo returns a memoized value so that we can render our specific components or function.</h5>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Blog;