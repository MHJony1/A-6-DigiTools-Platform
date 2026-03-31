import React, { use, useState } from 'react';
import ProductsCard from './ProductsCard';
import Cart from './Cart';

const Products = ({productsData}) => {
  const product = use(productsData);
  const [active, setActive] = useState('products');
  const [cart, setCart] = useState([]);

  return (
    <div className='mt-20 mb-20'>

      <div className='text-center'>
      <h1 className='text-3xl md:text-5xl font-bold mb-4'>Premium Digital Tools</h1>
      <p className='text-sm text-gray-400'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </div>

    {/* Tab Buttons Section */}
      <div className='flex justify-center mt-4 mb-12'>
        <div className='bg-gray-100 p-1 rounded-full flex items-center shadow-inner'>
          <button 
            onClick={() => setActive('products')}
            className={`px-8 py-2 rounded-full font-bold transition-all ${active === 'products' ? 'bg-linear-to-r from-[#631edb] to-[#7b3fb2] text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Products
          </button>
          <button 
            onClick={() => setActive('cart')}
            className={`px-8 py-2 rounded-full font-bold transition-all ${active === 'cart' ? 'bg-linear-to-r from-[#631edb] to-[#7b3fb2] text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
          >
           <span>{`Cart (${cart.length})`}</span>
          </button>
        </div>
      </div>

      {/* Conditional Rendering based on Tab */}
      <div>
        {active === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:max-w-300  mx-auto px-4">
            {
              product.map((card => <ProductsCard key={card.id} card={card} cart={cart} setCart={setCart} />))
            }
          </div>
        ) : (

            <Cart cart={cart} setCart={setCart} ></Cart>
        )}
      </div>


    </div>
   
  );
};

export default Products;