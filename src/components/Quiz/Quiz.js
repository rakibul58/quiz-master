import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    
    const {id , logo , name , total} = quiz;
    return (
        <div className='rounded-lg shadow-lg shadow-green-200'>
           <img className='bg-green-200 w-full rounded-lg' src={logo} alt="" />
           <div className='text-center py-4 px-6'>
                <h2 className='text-green-500 font-bold text-2xl'>{name}</h2>
                <p className='my-2 text-gray-500 font-semibold text-lg'>Total Quizzes : <span className='text-green-500'>{total}</span></p>
                <Link to={`/quiz/${id}`}><button className='bg-green-500 hover:bg-green-600 flex gap-2 mx-auto w-full py-2 rounded-lg text-white font-sans font-semibold items-center place-content-center'>Start Practice <ArrowRightIcon className='w-6 h-6' /></button> </Link>
           </div>
        </div>
    );
};

export default Quiz;