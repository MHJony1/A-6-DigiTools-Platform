import React from 'react';

const Stats = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-[#5c18d3] to-[#8a49c8] py-10 mt-18">
      <div className="container mx-auto px-4 max-w-275">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-white">
          
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">50K+</h2>
            <p className="text-indigo-100 text-lg">Active Users</p>
          </div>
          {/* divider line */}
          <div className="hidden md:block h-16 w-px bg-white/30"></div>

         
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">200+</h2>
            <p className="text-indigo-100 text-lg">Premium Tools</p>
          </div>

          {/* divider line */}
          <div className="hidden md:block h-16 w-px bg-white/30"></div>

      
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">4.9</h2>
            <p className="text-indigo-100 text-lg">Rating</p>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Stats;