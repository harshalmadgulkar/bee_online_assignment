import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeBanner = () => {
  return (
    <div className='flex flex-row bg-[#FFF2F3] w-full items-center justify-center gap-8'>
      <div className='flex flex-col ml-36 gap-8'>
        <div className='font-semibold text-[#96BB7C] '>Welcome</div>
        <div className='font-semibold text-7xl text-[#252B42]'>
          Best Learning Opportunities
        </div>
        <div className='text-xl w-80 font-normal text-[#737373]'>
          Our goal is to make online education work for everyone
        </div>
        <div className='flex gap-3'>
          <Link className='py-4 px-10 bg-[#96BB7C] font-bold text-white rounded-md '>
            Join Us
          </Link>
          <Link className='py-4 px-10 ring-[#96BB7C] ring-1 font-bold text-[#96BB7C] rounded-md '>
            Learn More
          </Link>
        </div>
      </div>
      <img src='../../public/girlbookposter.png' alt='girl_book_img' />
    </div>
  );
};

export default WelcomeBanner;
