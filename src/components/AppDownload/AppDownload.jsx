import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='py-16 flex flex-col items-center gap-8 max-w-xl mx-auto text-center'>
        <p className='text-xl md:text-3xl font-medium text-center'>For Better Experience Download <br /> Tomato App</p>
        <div className='flex'>
            <img src={ assets.play_store } className='h-10 ' alt="" />
            <img src={ assets.app_store } className='h-10 ' alt="" />
        </div>
    </div>
  )
}

export default AppDownload