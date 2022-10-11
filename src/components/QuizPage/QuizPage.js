import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizPage = () => {
    const topicQuizzes = useLoaderData();
    const {name , questions} = topicQuizzes.data;
    let count = 0;
    return (
        <div className='text-center mt-12'>
            <h2 className='font-bold text-4xl font-mono text-green-500'>Quiz of {name}</h2>
            <div className='mt-12 px-4'>
                {
                    questions.map(question => <Questions
                    key={question.id}
                    question={question}
                    count={++count}
                    ></Questions>)
                }
            </div>
        </div>
    );
};

export default QuizPage;