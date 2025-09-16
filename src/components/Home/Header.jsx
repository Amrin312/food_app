import React from 'react'
import header_img from "../../assets/header_img.png";


const Header = () => {
  return (
    <div className='relative bg-no-repeat bg-cover bg-center h-screen rounded mt-4 md:mt-8' style={{ backgroundImage: `url(${header_img})` }} >
      {/* <div className='absolute inset-0 bg-black/50 rounded'></div> */}
        <div className='relative flex flex-col h-full items-center gap-6 justify-center p-4'>
            <h1 className='text-white text-4xl sm:text-4xl font-medium md:text-7xl'>Order your fav food here</h1>
              <p className='text-white text-lg font-medium md:text-2xl hidden md:block'> Choose from a diverse menu featuring a delectable array of dishes crafted with the finest
              ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your
              dining experience, one delicious meal at a time.
              </p>
            <button className='bg-white rounded text-lg px-6 py-2 md:text-xl shadow-lg'>View more</button>
        </div>
    </div>
  )
}

export default Header