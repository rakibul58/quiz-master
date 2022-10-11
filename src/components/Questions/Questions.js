import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const Questions = ({question , count}) => {
    const {options , correctAnswer} = question;
    const [answer , setAnswer] = useState(false);
    // console.log(options[0]);
    const handleCheckAnswer = (answer) =>{
        if(correctAnswer === answer){
            alert('correct answers');
        }else{
            alert('wrong answer')
            return 
        }
    }
    return (
        <div className='rounded-lg shadow-lg shadow-green-200 p-8 mb-20 w-fit lg:w-2/3 mx-auto'>
            <EyeIcon onClick={()=>setAnswer(!answer)} className='h-6 w-6 ml-auto'></EyeIcon>
            <h2 className='font-bold text-green-500 lg:text-xl'>Quiz {count}: {question.question}</h2>
            <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    options.map(option => <button className='border-2 border-green-200 hover:bg-green-200 text-gray-500 text-sm sm:font-semibold py-3 px-2 rounded-lg' onClick={()=>handleCheckAnswer(`${option}`)}>{option}</button>)
                }
                
            </div>
            <div className={`font-semibold mx-auto mt-8 ${answer?'block' : 'hidden'}`}>Correct Answer : <span className='text-green-500 font-bold'>{correctAnswer}</span></div>
        </div>
    );
};

export default Questions;