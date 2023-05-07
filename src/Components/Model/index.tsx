import React from 'react';
import { ModalProps } from '../types';


const Model = ({ visible, showClose, closeModal, children }: ModalProps) => {
  if (!visible) return null;

  //Close modal when icon click
  const close = () => closeModal(false)

  return <div className="fixed inset-0 flex justify-center items-center">
    <div className='bg-default relative w-[577px] min-h-[564px] mx-auto p-8 border border-borderClr rounded-md flex flex-col'>
      {showClose &&
        <div className='absolute cursor-pointer top-1 right-1' onClick={close}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>}
      {children}
    </div>
  </div>;
};

export default Model;
