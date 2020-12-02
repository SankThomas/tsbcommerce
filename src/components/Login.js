import React from 'react'
// import Logo from '../../public/assets/logo.jpg'

const Login = () => {
  return (
    <header className='text-white p-2'>
      <div>{/* <img src="" alt="logo"/> */}</div>

      <nav>
        <ul className='flex justify-end'>
          <li>
            <button>Buy</button>
          </li>
          <li>
            <button>Sell</button>
          </li>
          <li>
            <button>Login</button>
          </li>
          <li>
            <button>SignUp</button>
          </li>
          <li>
            <button>Cart</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Login
