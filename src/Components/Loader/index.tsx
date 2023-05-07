import React from 'react'

const Loader = () => {
    let circleCommonClasses = 'h-2.5 w-2.5 bg-mainColor rounded-full';

    return (
        <div className='flex justify-center items-center absolute inset-0'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
}

export default Loader
