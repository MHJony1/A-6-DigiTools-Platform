import React from 'react';

const CTA = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-[#4e19ab] to-[#9d51e4] py-20 px-4">
      <div className="max-w-275 mx-auto text-center text-white">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>

        {/* Description */}
        <p className="text-indigo-100 text-sm md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block" />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          {/* Solid White Button */}
          <button className="bg-white text-[#7336de] px-8 py-3 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all active:scale-95 shadow-lg">
            Explore Products
          </button>

          {/* Outline Button */}
          <button className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-[#7336de] transition-all active:scale-95">
            View Pricing
          </button>
        </div>

        {/* End Text  */}
        <div className="flex flex-wrap justify-center items-center gap-1 md:gap-4 text-indigo-100 text-sm md:text-base opacity-80">
          <span>14-day free trial</span>
          <span className="hidden md:inline text-xl">•</span>
          <span>No credit card required</span>
          <span className="hidden md:inline text-xl">•</span>
          <span>Cancel anytime</span>
        </div>

      </div>
    </div>
    </div>
  );
};

export default CTA;