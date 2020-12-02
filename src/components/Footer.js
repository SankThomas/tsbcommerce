import React from 'react'

const Footer = () => {
  const validateEmail = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <footer className='flex flex-col items-center justify-center text-white text-center'>
        <div>{/* Enter logo here */}</div>

        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Electronics</button>
          </li>
          <li>
            <button>Furniture</button>
          </li>
        </ul>

        <ul>
          <li>
            <button>Laptops</button>
          </li>
          <li>
            <button>Desktops</button>
          </li>
          <li>
            <button>Featured</button>
          </li>
        </ul>

        <ul>
          <li>
            <button>Terms of Use</button>
          </li>
          <li>
            <button>Privacy Policy</button>
          </li>
          <li>
            <button>Refund Policy</button>
          </li>
        </ul>

        <form
          netlify='true'
          data-netlify-recaptcha='true'
          className='flex flex-col'
          onSubmit={() => validateEmail()}
        >
          <input
            className='rounded p-3 placeholder-red-400 text-center text-red-500 text-sm tracking-widest mt-4'
            type='email'
            name='email'
            id='email'
            placeholder='Your email address'
            required
          />
          <button
            className='bg-red-500 mt-2 rounded p-2 text-sm tracking-widest'
            type='submit'
          >
            Submit
          </button>
          <div data-netlify-recaptcha='true'></div>
        </form>
      </footer>
    </>
  )
}

export default Footer
