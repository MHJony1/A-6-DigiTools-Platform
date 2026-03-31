import React from 'react';
import { Check } from 'lucide-react';


const PricingCard = ({card}) => {
  const { plan, tagline, price, currency, billing_cycle, features, button_text, is_popular } = card;
  
  // console.log(card);
  return (
    <div className={`relative p-8 mx-auto w-full max-w-95 mt-10 mb-22 rounded-3xl flex flex-col justify-between h-auto border transition-all duration-300 ${
      is_popular 
      ? 'bg-linear-to-r from-[#631edb] to-[#7b3fb2] text-white scale-105 shadow-xl border-transparent z-10' 
      : 'bg-gray-100 text-slate-800 border-slate-100 shadow-sm hover:shadow-md'
    }`}>

      <div className='flex-1'>
        {/* popular badge */}
      {is_popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-2xl uppercase tracking-wider shadow-sm">
          Most Popular
        </div>
      )}
      
      <div className='text-left'>
        <h3 className='text-2xl font-bold'>{plan}</h3>
        <p className='text-md'>{tagline}</p>
      </div>

      <div className='text-left mt-6 mb-6'>
        <span className='text-4xl font-bold'>{currency}{price}</span>
        <span className={`text-md  ${is_popular ? 'text-white' :  'text-slate-500'}`}>{billing_cycle}</span>
      </div>

      <ul className="space-y-4 mb-10">
        {
          features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm font-medium">
            <Check className={`w-5 h-5 ${is_popular ? 'text-white' : 'text-emerald-500'}`} />
            {feature}
          </li>
        ))}
      </ul>
      </div>
      

      <div className='mt-auto'>
        <button className={`w-full text-md py-3 rounded-full font-bold  transition-all active:scale-95 ${
        is_popular 
        ? 'bg-white text-[#7336de] hover:bg-indigo-50' 
        : 'bg-linear-to-r from-[#631edb] to-[#7b3fb2] text-white hover:opacity-90'
      }`}>
        {button_text}
      </button>
      </div>
      
    </div>
  );
};

export default PricingCard;