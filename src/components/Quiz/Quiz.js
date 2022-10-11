import React from 'react';

const Quiz = ({quiz}) => {
    const {logo} = quiz;
    return (
        <div className='bg-gray-400'>
           <img src={logo} alt="" />
        </div>
    );
};

export default Quiz;