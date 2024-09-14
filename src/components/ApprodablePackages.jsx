import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { FaTv } from 'react-icons/fa';

const ApprodablePackages = () => {
  return (
    <div className='container flex flex-row my-40 mx-auto gap-8'>
      <div className='flex flex-col gap-9'>
        <div className='font-bold text-4xl text-[#252B42]'>
          Approdable Packages
        </div>
        <div className='font-normal text-sm text-[#737373] '>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </div>
        <div className='flex flex-row items-center gap-3 font-bold text-base text-[#96BB7C] '>
          Learn More
          <FaGreaterThan />
        </div>
      </div>
      <div>
        <div>
          <div className='p-5 rounded-xl bg-[#96BB7C] '>
            <FaTv color='white' size={32} />
          </div>
          <div className='font-bold text-base'>Certified Teacher</div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ApprodablePackages;
