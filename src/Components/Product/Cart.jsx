import React from 'react';
import cartImage from '../../assets/trolley.png';

const cart = ({cart, setCart}) => {

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    setCart([]); 
  };

  return (
    <div className='max-w-310 mx-auto bg-white rounded-xl p-4 shadow-sm  border border-slate-200'>
      <h2 className='text-3xl font-bold mt-4 mb-8'>Your Cart</h2>

       {
        cart.length === 0 ? (
           <div className='flex flex-col justify-center items-center gap-5 mb-15'>
        <img className='w-40 h-40' src={cartImage} alt="" />
        <p className='text-2xl text-slate-400 text-center'>Your cart is empty</p>
       </div>
        ) :
        (
        <>
        <div className=''>
          {
            cart.map((item) =>(
              <div className="flex items-center max-w-280 mx-auto mb-5 bg-gray-100 shadow-sm  justify-between border border-gray-50 rounded-xl p-4"
                key={item.id}>

                <div className='flex items-center gap-4'>
                <div>
                <img className='bg-violet-100 w-13 h-13 rounded-full p-2' src={item.image} alt="" />
                </div>
                
                <div>
                  <h2 className='text-lg font-bold'>{item.name}</h2>
                  <p className='text-md text-slate-400 font-semibold'>${item.price}</p>
                </div>
                </div>

                <button onClick={() => handleRemove(item.id)} className='text-sm font-bold text-red-400 cursor-pointer hover:text-red-600'>Remove</button>

              </div>
              
            ))}
        </div>

        <div className='max-w-280 mx-auto flex justify-between items-center mb-4'>
          <h3 className='text-xl font-bold'>Total</h3>
          <p className='text-2xl font-bold'>${totalPrice}</p>
        </div>

        <div onClick={handleClearCart} className='text-lg font-bold w-full max-w-280 mx-auto rounded-full bg-linear-to-r from-[#631edb] to-[#7b3fb2] text-white text-center py-3 mb-7 cursor-pointer'>
          <button>Proceed To Checkout</button>
        </div>
        </>  
        

        )
       
       }
    </div>
  );
};

export default cart;