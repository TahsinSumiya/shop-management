import React from 'react'
import { Link } from 'react-router-dom'
import GetProducts from './products/GetProducts'

export default function Home() {
  return (
    <>
      <div className='h-screen bg-black'>
        <div className='p-10 flex justify-end'><Link to='/addproducts' class="bg-yellow-600 hover:bg-yellow-300 text-white  text-2xl font-bold py-2 px-4 rounded">
  Add products
</Link></div>
<div className='h-screen bg-black overflow-y-auto'> 
<GetProducts/>
</div>
      </div>
    </>
  )
}
