import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets';
const LoginPopup = ({ setShowLogin }) => {

const [currentState, setCurrentState] = useState('Login');

  return (
    <div className='bg-white absolute h-f'>
        <form>
            <div>
                <h2>{currentState}</h2>
                <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt="" />
            </div>

            <div>
                { currentState === 'Login' ? 
                <></> :
                <input type="text" placeholder="Enter username" name="" id="" required />
                
                }
                
                <input type="email" placeholder="Enter Email Id" name="" id="" required />
                <input type="password" placeholder="Enter Password" name="" id="" required />
                <button>{}</button>
            </div>

            <div>
                <input type="checkbox" name="" required id="" />
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>

            {
                currentState === 'Login' ? 
                <p>Create a new account? <span onClick={() => setCurrentState('Sign Up') }>Click Here</span></p> :
                <p>Already have an account? <span onClick={() => setCurrentState('Login')}>Login Here</span></p>
            }

            
            
        </form>
    </div>
  )
}

export default LoginPopup