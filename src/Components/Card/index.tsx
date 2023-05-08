import React from 'react';
import { CardProps } from '../types';
import Button from '../Button';
import axios from 'axios';
import { MockApiUrl } from '../Resources';

const Card = (props: CardProps) => {
  const { jobTitle, company, industry, type, location, id, minexperience, maxexperience, minsalary, maxsalary, employees, setLoader, sendId } = props;

  const editAction = () => {
    sendId(id);
  }
  const deleteAction = () => {
    axios.delete(`${MockApiUrl}/${id}`).then(res => setLoader(true))
  }

  return (
    <div className='max-w-[830px] w-full h-[320px] flex py-4 px-6 m-6 bg-default rounded-md relative'>
      <div className='flex justify-end absolute top-5 right-5'>
        <div className='cursor-pointer' onClick={editAction}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-mainColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </div>
        <div className='cursor-pointer' onClick={deleteAction}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>

        </div>
      </div>
      <img
        src={require('../../Assets/logo.png')}
        alt='logo'
        className='w-[50px] h-[50px] mr-[8px]'
      />
      <div>
        <p className='text-xl'>{jobTitle}</p>
        <p className='text-md'>{company} - {industry}</p>
        <p className='text-md text-plh mb-6'>{location} ({type})</p>
        <p className='text-md mb-2'>Part-time (9.00 am - 5.00 pm IST)</p>
        {(minexperience && maxexperience) && <p className='text-md mb-2'>Experience ({minexperience} - {maxexperience} years)</p>}
        {(minsalary && maxsalary) && <p className='text-md mb-2'>INR (₹) {minsalary} - {maxsalary}</p>}
        {employees && <p className='text-md mb-6'>{employees} employees</p>}
        <div className='flex'>
          <Button action={editAction} name='Apply Now' primary={true} additionalClass='mr-6' />
          <Button action={editAction} name='External Apply' primary={false} />

        </div>
      </div>
    </div>
  );
};

export default Card;
