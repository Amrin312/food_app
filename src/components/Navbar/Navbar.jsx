import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Menu, X } from 'lucide-react';
// import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';
const Navbar = ({ setShowLogin }) => {
  
  const [displayMenu, setDisplayMenu] = useState(false);
  // const { cartItems } = useContext(StoreContext);
  
  return (
    <nav className='px-4 py-4 md:px-8 lg:px-16 md:p-5 flex justify-between items-center shadow-md bg-white sticky top-0 z-50'>
        <img src={assets.logo} alt="" className='h-auto w-[90px]'/>

        {/* Desktop menu  */}

        <div className='hidden md:flex gap-6'>
          <ul className='flex gap-6 font-medium'>
            <Link path='/' className='cursor-pointer hover:text-red-500'>Home</Link>
            <li className='cursor-pointer hover:text-red-500'>Menu</li>
            <li className='cursor-pointer hover:text-red-500'>Mobile-app</li>
            <li className='cursor-pointer hover:text-red-500'>Contact Us</li>
          </ul>

          <img src={assets.search_icon} className='cursor-pointer' alt="" />
          <img src={assets.basket_icon} className='cursor-pointer' alt="" />
          <button onClick={() => setShowLogin(true)} className="bg-red-500 text-white rounded px-3"> Sign up</button>
        </div>


        {/* mobile menu */}
          <div className='flex items-center gap-2 md:hidden'>
            <img src={assets.search_icon} alt="" />
            <img src={assets.basket_icon} alt="" />

            <button className='' >
                { displayMenu ? <X /> : <Menu /> } 
            </button>
          </div>

          {displayMenu &&
            <div className='absolute left-0 top-12 w-full bg-white shadow-md md:hidden'>
              <ul className='flex flex-col gap-4 p-4 font-medium'>
                <li className='cursor-pointer hover:text-red-500'>Home</li>
                <li className='cursor-pointer hover:text-red-500'>Menu</li>
                <li className='cursor-pointer hover:text-red-500'>Mobile-app</li>
                <li className='cursor-pointer hover:text-red-500'>Contact Us</li>
                <li className='cursor-pointer hover:text-red-500'>
                  <button onClick={() => setShowLogin(true)} className="bg-red-500 text-white rounded px-3"> Sign up</button>
                </li>
              </ul>
            </div>
             }
    </nav>
  )
}

export default Navbar