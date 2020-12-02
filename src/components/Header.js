import React, { useState } from 'react'
// import {FaCart} from 'react-icons/fa'

const Header = () => {
  // eslint-disable-next-line
  const [term, setTerm] = useState('')

  return (
    <header className='text-white p-2 mb-4'>
      <nav>
        <ul className='flex flex-wrap'>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Electronics</button>
          </li>
          <li>
            <button>Furniture</button>
          </li>
          <li>
            <button>Computers</button>
          </li>{' '}
          {/* Add dropdown menu here to show laptops and desktops*/}
          <li>
            <button>Featured</button>
          </li>
          <li>
            <button>{/* <FaCart /> */}</button>
          </li>
          <li>
            <button>WishList</button>
          </li>
        </ul>
      </nav>

      <form className='flex justify-end'>
        <input
          className='rounded rounded-r-none p-3 text-sm text-red-500 placeholder-red-500 tracking-widest'
          type='search'
          name='search'
          id='search'
          placeholder='Search item'
        />
        <button
          className='bg-red-500 p-1 border text-sm tracking-widest'
          type='submit'
        >
          Search
        </button>
      </form>
    </header>
  )
}

export default Header
