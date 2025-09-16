import React from 'react'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='bg-gray-900 text-white px-4 md:px-8 lg:px-16 py-8'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
            <div className='md:col-span-2 flex flex-col items-start gap-4'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum sed iste odit ab maxime quaerat consectetur, praesentium inventore corporis debitis vel amet at non est, labore dolores obcaecati! Doloremque, doloribus!</p>
                <div className='flex gap-2'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div>
                <h4 className='text-2xl mb-2 font-medium'>COMPANY</h4>
                <ul>
                    <li className='hover:text-red-500 cursor-pointer '>Home</li>
                    <li className='hover:text-red-500 cursor-pointer '>About us</li>
                    <li className='hover:text-red-500 cursor-pointer '>Delivery</li>
                    <li className='hover:text-red-500 cursor-pointer '>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <h2 className='text-2xl mb-2 font-medium'>GET IN TOUCH</h2>
                <p>+56 76868778</p>
                <p>contact@tomato.com</p>

            </div>
        </div>
        <hr />
        <div className='text-center pt-4'>
            <p>Copyrights 2024@ Tomato.com - All Right Reserved</p>
        </div>
    </div>
    
  )
}

export default Footer