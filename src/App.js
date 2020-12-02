import React from 'react'
import Login from './components/Login'
import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <h2 className='bg-red-500 py-2 text-xl text-white text-semibold text-center max-w-6xl mx-auto md:text-2xl lg:text-3xl'>
        Do not attempt to purchase anything herein. The website is still under
        development and all the items and images are placeholders. No
        functionality works yet. Do not be scammed!
      </h2>
      <Login />
      <Header />
      <Products />
      <Footer />
    </>
  )
}

export default App
