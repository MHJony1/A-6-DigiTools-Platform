import React from 'react';
import groupImage from '../../assets/group.png';
import bannerImage from '../../assets/banner.png';

const Banner = () => {
  return (
    <div className='max-w-300 mx-auto mt-5 flex flex-col md:flex-row justify-between items-center '>
      <div className=' text-center md:text-left space-y-4'>
        {/* badge */}
        <span className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-[#E1E7FF] border border-violet-200 text-violet-700 text-xs font-bold tracking-wide">
            <img src={groupImage} alt="" />
            New: AI-Powered Tools Available
          </span>
          {/* heading */}
           <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>
          {/* paragraph */}
           <p className="text-md text-gray-500 leading-relaxed max-w-md">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore Products.
          </p>
            {/* buttons */}
            <div className='flex items-center justify-center md:justify-start gap-3 mt-1'>
              <button className="px-4 py-3 hover:from-[#4c14ad] hover:to-[#713ab0] rounded-full bg-linear-to-r from-[#5e19d4] to-[#8a49c8] hover:bg-violet-700 active:scale-95 text-white text-md font-semibold shadow-lg shadow-violet-200 transition-all duration-200 hover:-translate-y-0.5">
              Explore Products
            </button>
             <button className="flex items-center gap-2 px-4 py-3 rounded-full font-bold border-2 border-violet-400 
             bg-linear-to-r from-[#5e19d4] to-[#8a49c8] bg-clip-text text-transparent  active:scale-95 text-md transition-all duration-200 hover:-translate-y-0.5">
              <span className="w-5 h-5  rounded-full border border-gray-300 flex items-center justify-center">
                <svg className="w-2.5 h-2.5   text-gray-600 ml-px" viewBox="0 0 10 12" fill="currentColor">
                  <path d="M1 1l8 5-8 5V1z" />
                </svg>
              </span>
              Watch Demo
            </button>
            </div>

      </div>
      <div>
        <img className='w-100 h-120 md:w-125 md:h-136 mt-9' src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;