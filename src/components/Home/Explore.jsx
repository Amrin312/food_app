import React from 'react'
import { menu_list } from '../../assets/assets'
const Explore = ({ category, setCategory }) => {

  return (
    <div className='w-full mt-10 '>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Explore our menu</h2>
      <p>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>

      <div className='flex flex-row gap-6 mt-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth select-none mb-8'>

        {menu_list.map((menu, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === menu.menu_name ? 'All' : menu.menu_name)} className='flex flex-col items-center cursor-pointer snap-start' key={index}>
              <div className={`h-24 w-24 md:h-36 md:w-36 rounded-full overflow-hidden shadow ${category === menu.menu_name ? 'border-2 border-red-500 rounded-full p-1' : ''}`}>
                <img src={menu.menu_image} className='h-full w-full object-cover' />
              </div>
              <p className='text-sm md:text-lg font-medium mt-2 text-center'>{menu.menu_name}</p>
            </div>

          )
        })}
      </div>
      <hr />
    </div>

  )
}

export default Explore