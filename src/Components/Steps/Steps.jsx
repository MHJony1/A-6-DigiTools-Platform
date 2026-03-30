import React from 'react';
import userImage from "../../assets/user.png";
import PackageImage from "../../assets/package.png";
import rocketImage from "../../assets/rocket.png";

const Steps = () => {
  return (
    <div className='bg-gray-100  mt-20 mb-20 pb-25 pt-10'>
      <div className='container mx-auto px-4 max-w-275 py-12 text-center space-y-3'>
      <h2 className='text-3xl md:text-4xl font-extrabold '>Get Started in 3 Steps</h2>
      <p className='text-gray-400 text-sm md:text-md'>Start using premium digital tools in minutes, not hours.</p>
      </div>
      {/* steps card layout container */}
     <div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 md:gap-1 justify-items-center  container mx-auto max-w-300'>
       <div className='shadow-sm w-90 h-90 rounded-2xl relative  bg-white'>
         <div className='absolute top-2 right-2 bg-linear-to-br from-[#7336de] to-[#954ed8] text-white w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold shadow-lg '>01</div>
        <div className='flex flex-col py-22 px-2 justify-center items-center'>
          <img className='bg-violet-100 rounded-full p-3' src={userImage} alt="User" />
          <h3 className='text-2xl font-bold mb-3 mt-2'>Create Account</h3>
          <p className='text-sm text-center text-gray-400'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
        </div>
       </div>

       <div className='shadow-sm w-90 h-90 rounded-2xl relative  bg-white'>
         <div className='absolute top-2 right-2 bg-linear-to-br from-[#7336de] to-[#954ed8] text-white w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold shadow-lg '>02</div>
        <div className='flex flex-col py-22 px-4 justify-center items-center'>
          <img className='bg-violet-100 rounded-full p-3' src={PackageImage} alt="Package" />
          <h3 className='text-2xl font-bold mb-3 mt-2'>Choose Products</h3>
          <p className='text-sm text-center text-gray-400'>Browse our catalog and select the tools <br /> that fit your needs.</p>
        </div>
       </div>

       <div className='shadow-sm w-90 h-90 rounded-2xl relative  bg-white'>
         <div className='absolute top-2 right-2 bg-linear-to-br from-[#7336de] to-[#954ed8] text-white w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold shadow-lg '>03</div>
        <div className='flex flex-col py-22 px-4 justify-center items-center'>
          <img className='bg-violet-100 rounded-full  object-cover p-3' src={rocketImage} alt="Rocket" />
          <h3 className='text-2xl font-bold mb-3 mt-2'>Start Creating</h3>
          <p className='text-sm text-center text-gray-400'>Download and start using your premium <br /> tools immediately.</p>
        </div>
       </div>
       
       
        
      </div>
     </div>
    </div>
  );
};

export default Steps;