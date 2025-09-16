import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import Foods from './Foods'

const DisplayFoods = ({ category }) => {

    const { food_list } = useContext(StoreContext);

    return (
        <div className='mt-8'>
            <h1 className='text-xl font-bold'>Top Dishes Near You</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
                { food_list?.map((food, index) => {
                    if(category === 'All' || category === food.category){
                        return (
                            <Foods u_id={index} id={food._id} name={food.name} image={food.image} price={food.price} description={food.description} category={food.category}/>
                        )
                    }
                    
                }) }
            </div>

        </div>
  )
}

export default DisplayFoods