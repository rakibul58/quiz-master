import React from 'react';

const Blog = () => {
    return (
        <div className='text-center'>
            <h1 className='my-12 text-4xl font-bold text-green-500'>Our Recent Blogs</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 px-12 gap-8'>
                <div className='shadow-xl p-8 rounded-lg shadow-green-200'>
                    <h4 className='text-green-500 text-2xl font-bold mb-8'>What is the purpose of react router?</h4>
                    <p className='text-lg font-semibold text-gray-600'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                <div className='shadow-xl p-8 rounded-lg shadow-green-200'>
                    <h4 className='text-green-500 text-2xl font-bold mb-8'>How does context api work?</h4>
                    <p className='text-lg font-semibold text-gray-600'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
                </div>
                <div className='shadow-xl p-8 rounded-lg shadow-green-200'>
                    <h4 className='text-green-500 text-2xl font-bold mb-8'>What is useRef?</h4>
                    <p className='text-lg font-semibold text-gray-600'>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;