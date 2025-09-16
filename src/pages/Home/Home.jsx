import React from 'react'
import { useState } from 'react'
import Header from '../../components/Home/Header'
import Explore from '../../components/Home/Explore'
import DisplayFoods from '../../components/Home/DisplayFoods'

import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
    const [category, setCategory] = useState('All');

    return(
        <div className='mt-2'>
            <Header />
            <Explore category={category} setCategory={setCategory} />
            <DisplayFoods category={category} />
            <AppDownload />
        </div>
    )
}

export default Home;