import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizPage = () => {
    const topicQuizzes = useLoaderData();
    const {name} = topicQuizzes.data
    return (
        <div className='text-center mt-12'>
            <h2 className='font-bold text-4xl font-mono text-green-500'>Quiz of {name}</h2>
        </div>
    );
};

export default QuizPage;