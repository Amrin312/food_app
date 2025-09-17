import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';

const Orders = () => {
    const { getTotalcartAmount } = useContext(StoreContext);
  return (
    <form className='my-4 md:my-8 flex flex-col md:flex-row justify-between item-start gap-12'>
        <div className='w-full'>
            <h1 className='text-lg md:text-2xl font-medium mb-4'>Delivery Information</h1>
            
            <div className='flex flex-col gap-4 mb-4'>
                <input type="text" className='px-2 py-1 outline-none border border-gray-300 rounded' placeholder="First name"/>
                <input type="text" className='px-2 py-1 outline-none border border-gray-300 rounded' placeholder="last name" />
            </div>

            <div className='flex flex-col gap-4 mb-4'>
                <input type="email" className='px-2 py-1 outline-none border border-gray-300 rounded' placeholder="Email Address"/>
                <input type="text" className='px-2 py-1 outline-none border border-gray-300 rounded' placeholder="Street" />
            </div>

            <div className='flex flex-col gap-4 mb-4'>
                <input type="text" className='px-2 py-1 outline-none border border-gray-300 rounded' placeholder="City"/>
                <input type="text" className='px-2 py-1 outline-none border border-gray-300 rounded' placeholder="State" />
            </div>

            <div className='flex flex-col gap-4 mb-4'>
                <input type="text" className='px-2 py-1 outline-none border border-gray-300 rounded' placeholder="Zip code"/>
                <input type="text" className='px-2 py-1 outline-none border border-gray-300 rounded' placeholder="Country" />
            </div>

            <div className='flex flex-col gap-4 mb-4'>
                <input type="number" className='px-2 py-1 outline-none border border-gray-300 rounded' placeholder="Phone"/>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex flex-1 flex-col gap-2'>
                <h2 className='text-lg md:text-2xl font-medium mb-2'>Cart Totals</h2>
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
                        <b>$ {getTotalcartAmount() + getTotalcartAmount() === 0 ? 0 : 2}</b>
                    </div>
                
                </div>

                <button className='bg-red-500 text-white p-2 rounded cursor-pointer w-full md:w-1/2 font-medium text-base mt-6'>Proceed to checkout</button>
            </div>
        </div>
    </form>
  )
}

export default Orders