import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets';
const LoginPopup = ({ setShowLogin }) => {

const [currentState, setCurrentState] = useState('Login');

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/30 '>
        <form className='bg-white rounded p-5 w-full max-w-sm shadow-lg overflow-y-auto max-h-[90vh]'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-medium'>{currentState}</h2>
                <img src={assets.cross_icon} onClick={() => setShowLogin(false)} className='w-5 h-5 cursor-pointer' alt="" />
            </div>

            <div className='flex flex-col py-6 gap-4'>
                { currentState === 'Login' ? 
                <></> :
                <input type="text" placeholder="Enter username" className='border border-gray-300 py-1 px-2 rounded outline-none' name="" id="" required />
                
                }
                
                <input type="email" placeholder="Enter Email Id" className='border border-gray-300 py-1 px-2 rounded outline-none' name="" id="" required />

                <input type="password" placeholder="Enter Password" className='border border-gray-300 py-1 px-2 rounded outline-none' name="" id="" required />

                <button className='bg-red-500 text-white p-2 rounded font-medium'>{currentState === 'Login' ? 'Login' : 'Signup'}</button>
            </div>

            <div className='flex flex-start items-baseline gap-2 mb-4 text-sm'>
                <input type="checkbox" name="" required id="" />
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>

            <div className='text-center'>
                {
                    currentState === 'Login' ? 
                    <p>Create a new account? <span className='text-red-500 cursor-pointer' onClick={() => setCurrentState('Sign Up') }>Click Here</span></p> :
                    <p>Already have an account? <span className='text-red-500 cursor-pointer' onClick={() => setCurrentState('Login')}>Login Here</span></p>
                }
            </div>         
        </form>
    </div>
  )
}

export default LoginPopup