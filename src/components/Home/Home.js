import React from 'react';
import Header from '../Header/Header';
import Quizes from '../Quizes/Quizes';

const Home = () => {
    return (
        <div className='mx-48'>
            <Header></Header>
            <Quizes></Quizes>
        </div>
    );
};

export default Home;