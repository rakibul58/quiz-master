import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header w-full mt-12 flex flex-col lg:flex-row items-center bg-green-500 rounded-lg pb-12 lg:pb-0'>
            <img className='w-fit h-fit lg:w-3/5 rounded-lg' src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
            <div className='p-5 mt-4 ld:mt-0'>
                <h1 className='text-white font-bold text-3xl'>Welcome to <span className='italic text-yellow-400'>Quiz Master</span></h1>
                <h4 className='text-white font-semibold text-xl mt-3'>Test your knowledge</h4>
                <p className='text-lg mt-8 mb-10 text-white'>Over 30 Quizzes , 4 Categories and abundance of Knowledge.</p>
                <Link className='border rounded-lg px-4 py-2 bg-yellow-400 text-black font-semibold hover:bg-yellow-500 hover:text-white' to='/blog'>Check Our Blogs</Link>
            </div>
        </div>
    );
};

export default Header;