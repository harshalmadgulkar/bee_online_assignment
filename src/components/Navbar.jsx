import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='flex justify-center px-auto md:gap-20 items-center md:w-full bg-[#FFF2F3]'>
      <div className='text-lg font-bold'>Brandname</div>
      <div className='flex md:gap-60 my-8 items-center'>
        <div className='flex md:gap-5 text-gray-500 font-semibold'>
          <Link>Home</Link>
          <Link>Product</Link>
          <Link>Pricing</Link>
          <Link>Contact</Link>
        </div>
        <div className='flex md:gap-11 font-semibold items-center'>
          <Link className='text-green-500'>Login</Link>
          <Link className='flex items-center gap-4 text-white py-4 px-6 bg-green-500 rounded-lg'>
            Join Us
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
