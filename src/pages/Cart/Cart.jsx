import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const {cartItems, food_list, removefromCart, getTotalcartAmount} = useContext(StoreContext);
    const navigate = useNavigate();

  return (
    <div className='my-10 md:my-20'>
        <div >
            <div className='grid grid-cols-6 items-center gap-2 text-xs md:text-base font-medium'>
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
            {
                food_list.map((item, index) => {
                    if(cartItems[item._id]){
                        return (
                            <div key={index}>
                                <div className='grid grid-cols-6 items-center gap-2 my-2'>
                                    <img src={item.image} alt="" className='w-6 h-6 md:w-12 md:h-12' />
                                    <p className='text-xs md:text-base'>{item.name}</p>
                                    <p className='text-xs md:text-base'>$ {item.price}</p>
                                    <p className='text-xs md:text-base'>{cartItems[item._id]}</p>
                                    <p className='text-xs md:text-base'>$ {item.price * cartItems[item._id]}</p>
                                    <img onClick={() => removefromCart(item._id)} src={assets.cross_icon} alt="" className='cursor-pointer h-2 w-2 md:h-4 md:w-4' />
                                </div>
                                <hr />
                            </div>

                        )
                    }
                })
            }
        </div>

        <div className='mt-10 flex flex-col-reverse md:flex-row justify-between gap-16 w-full'>
            <div className='flex flex-1 flex-col gap-2'>
                <h2 className='text-lg font-medium'>Cart Totals</h2>
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between'>
                        <p className='text-sm md:text-base'>Sub Total</p>
                        <p>$ {getTotalcartAmount()}</p>
                    </div>

                    <hr />

                    <div className='flex justify-between'>
                        <p className='text-sm md:text-base'>Delivery Fee</p>
                        <p>$ {getTotalcartAmount() === 0 ? 0 : 2}</p>
                    </div>

                    <hr />

                    <div className='flex justify-between'>
                        <b className='text-sm md:text-base'>Total Price</b>
                        <b>$ { getTotalcartAmount() === 0 ? 0 : getTotalcartAmount() + 2}</b>
                    </div>
                
                </div>

                <button className='bg-red-500 text-white p-2 rounded cursor-pointer w-full md:w-1/2 font-medium text-base mt-4' onClick={() => navigate('/orders')}>Proceed to checkout</button>
            </div>

            <div className='flex flex-1 flex-col gap-4'>
                <div>
                    <p className='text-sm md:text-base'>If you have a promo code , Enter it here</p>
                    <div className='flex gap-2 mt-2'>
                        <input type="text" className='border p-1 md:p-2 rounded w-full' placeholder='Enter Promo code' />
                        <button className='bg-red-500 text-white p-1 md:p-2 rounded'>Submit</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Cart