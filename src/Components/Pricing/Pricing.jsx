import React, { use } from 'react';
import PricingCard from './PricingCard';

const Pricing = ({ pricingData }) => {
  const pricing = use(pricingData);
  console.log(pricing);

  return (
    <div>
     <div className='text-center mb-8'>
       <h1 className='text-3xl md:text-5xl font-bold mb-4'>Simple, Transparent Pricing</h1>
      <p className='text-md text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

      <div className='grid grid-cols-1 md:grid-cols-3 max-w-300 mx-auto'>
        {
          pricing.map(card => 
            <PricingCard key={card.id} card={card}/>
          )
        }
      </div>
     </div>
    </div>
  );
};

export default Pricing;