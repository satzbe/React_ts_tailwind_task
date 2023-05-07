import React from 'react';
import Button from '../Button';
import { PopupProp } from '../types';

const Header = ({ modalopenclose }: PopupProp) => {

  const openModal = () => {
    modalopenclose(true)
  };

  return (
    <div className='flex justify-between p-4'>
      <div className='justify-self-start'>
        <Button name='Create Jobs' primary={true} action={openModal} />
      </div>
      <h1 className='justify-self-start'>Frontend Task </h1>
      <div />
    </div>
  );
};

export default Header;
