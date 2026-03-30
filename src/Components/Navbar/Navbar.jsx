import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='bg-base-100 shadow-sm '>
     <div className="navbar  md:max-w-325 mx-auto px-4 md:px-10">
  
      <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className='text-md font-semibold'><a href="">Products</a></li>
        <li className='text-md font-semibold'><a href="">Features</a></li>
        <li className='text-md font-semibold'><a href="">Pricing</a></li>
        <li className='text-md font-semibold'><a href="">Testimonials</a></li>
        <li className='text-md font-semibold'><a href="">FAQ</a></li>
      </ul>
    </div>
    <a className=" text-3xl font-extrabold bg-linear-to-r from-[#7336de] to-[#954ed8] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='text-md font-semibold'><a href="">Products</a></li>
      <li className='text-md font-semibold'><a href="">Features</a></li>
      <li className='text-md font-semibold'><a href="">Pricing</a></li>
      <li className='text-md font-semibold'><a href="">Testimonials</a></li>
      <li className='text-md font-semibold'><a href="">FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end flex ml-4 space-x-3">
    <div className=' flex justify-between items-center space-x-3'>
      <AiOutlineShoppingCart />
     <h3 className="text-lg font-semibold hidden sm:block">Login</h3>
    </div>
    <a className="btn bg-linear-to-r from-[#4e18ad] to-[#8a49c8] rounded-full text-white">Get Started</a>
  </div>
    </div>
    </div>
  );
};

export default Navbar;