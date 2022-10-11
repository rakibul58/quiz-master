import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizzes = useLoaderData();
    // console.log(quizzes.data)
    return (
        <div className='mx-4 lg:mx-48'>
            <Header></Header>
            <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-12'>
            {
                quizzes.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
            </div>
        </div>
    );
};

export default Home;