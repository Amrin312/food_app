import React, { useContext } from 'react'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const Foods = ({ u_id, id, name, image, price, description, category }) => {

    const {cartItems, setCartItems, addToCart, removefromCart} = useContext(StoreContext);

  return (
    <div key={id} className='shadow-md rounded mb-8'>
        <div className='relative'>
            <img src={image} alt={name} className='h-42 w-full rounded-t-lg' />
            { !cartItems[id]
                ? <img src={ assets.add_icon_white } onClick={() =>addToCart(id) } className='cursor-pointer absolute bottom-2 right-2' alt="" />
                : <div className='flex gap-2 items-center p-2 absolute bottom-2 right-2 bg-white rounded-full'>
                    <img src={ assets.remove_icon_red } onClick={() => removefromCart(id)} alt="" />
                    <p>{cartItems[id]}</p>
                    <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
                </div>
            }
        </div>
        
        <div className='p-4'>
            <div className='py-4 flex justify-between items-center'>
                <p className='text-sm font-bold '>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>

            <p className='text-gray-600 text-base mb-2'>{description}</p>
            <p className='font-bold text-lg text-red-600'>${price}</p>
            {/* <p>{category}</p> */}

        </div>
        

    </div>
  )
}

export default Foods