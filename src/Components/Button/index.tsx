import React from 'react';
import { ButtonProps } from '../types';

const Button = ({ name, action, primary, additionalClass }: ButtonProps) => {
  return (
    <div
      className={`px-4 py-2  
      ${additionalClass}
      ${primary ? 'text-lightFont bg-mainColor' : 'text-mainColor'}
      border-mainColor border rounded-md cursor-pointer w-max`}
      onClick={action}
    >
      {name}
    </div>
  );
};

export default Button;
