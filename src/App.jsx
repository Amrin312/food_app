import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Cart from './pages/Cart/Cart'
import Orders from './pages/Orders/Orders'
const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  console.log(showLogin);
  
  return (
    
    <div className="min-h-screen flex flex-col">
      { showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <main className='flex-1 mx-4 md:mx-8 lg:mx-16'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/orders" element={<Orders />}></Route>

          {/* <Route path="/mobile-app" element={<Home />}></Route>
          <Route path="/contact-us" element={<Home />}></Route> */}

        </Routes>
      </main>
      <Footer />

    </div>
  )
}

export default App