import React from 'react';
import { inputProps } from '../types';

const TextInput = ({ label, id, value, change, placeHolder, necessary, error }: inputProps) => {
  return <div className='w-full mb-6'>
    <p className='mb-1 font-medium'>{label ? label : <>&nbsp;</>}{necessary && <span className='text-errorClr'>*</span>}</p>
    <input className='w-full border border-borderClr rounded-md p-1' name={id} value={value} onChange={change} placeholder={placeHolder} />
    <p className='text-errorClr mt-1 text-sm'>{error}</p>
  </div>;
};

export default TextInput;
