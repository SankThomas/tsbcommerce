import React, { useState } from 'react'
import products from '../products-data.json'
import { BsHeart } from 'react-icons/bs'

const Products = () => {
  const [items, setItems] = useState(products)
  // const [isLoading, setIsLoading] = useState(true)

  const removeItem = (id) => {
    let newItems = products.filter((product) => product.id !== id)
    setItems(newItems)
  }

  const refreshItems = () => {
    setItems(items)
  }

  return (
    <>
      <section className='grid grid-cols-1 gap-6 p-5 md:grid-cols-2 md:px-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {products.map((product) => {
          const { id, name, price, image } = product

          return (
            <article className='product-card' key={id}>
              <img src={image} alt={name} className='rounded rounded-b-none' />
              <div className='bg-gray-200 p-4 rounded rounded-t-none'>
                <div>
                  <h3>{name}</h3>
                  <p>{price}</p>
                </div>
                <div className='flex items-center justify-between'>
                  <div>
                    <button
                      className='bg-red-500 text-white p-1 rounded mt-3 text-sm tracking-wide'
                      onClick={() => removeItem(id)}
                    >
                      Not Interested
                    </button>
                  </div>

                  <div className='mt-3 hover:cursor-pointer'>
                    <BsHeart />
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </section>
      <div className='text-center'>
        <button
          className='bg-red-500 p-1 text-white rounded hover:bg-red-400 tracking-wider'
          onClick={() => refreshItems()}
        >
          Refresh
        </button>
      </div>
    </>
  )
}

export default Products
