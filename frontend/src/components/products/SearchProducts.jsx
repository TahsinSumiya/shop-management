import React, { useState } from 'react';

import { selectProducts,deleteProduct } from '../../store/ProductSlice';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
export default function SearchProducts() {
    const products = useSelector(selectProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDelete = async (id) => {
    // Dispatch the deleteProduct action with the product ID
    await dispatch(deleteProduct({ id }));
    window.location.reload(); // Refresh the page after deletion
  };
  
  return (
    <>
      <div className="search-product bg-black h-screen">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        
        className='bg-amber-300 border my-5 border-amber-500 text-black font-semibold  text-sm rounded-lg
        focus:ring-amber-500 focus:border-amber-700 block w-full p-2.5 
      " placeholder="name@flowbite.com'
      />
      <ul>
      {filteredProducts.map((product) => (
          <div key={product.id} className='flex justify-center items-center m-4'>
            <div className="w-screen flex flex-col items-center bg-amber-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-amber-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-y-auto">
              <img className="object-cover w-36 h-36 rounded-t-lg md:rounded-none md:rounded-l-lg" src={product.image} alt={product.productName}/>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{product.productName}</h5>
                <p className="mb-3 font-normal text-white dark:text-gray-400">{product.description}</p>
                <p className="mb-3 font-normal text-white dark:text-gray-400">Tk <span>{product.price}</span></p>
              </div>
              <div className='mx-20'>
                <p className='text-white hover:underline hover:cursor-pointer  text-lg'>Add to cart</p>
                <div className='flex '>
                  <Link to={`/update?s=${product._id}`} className='text-white hover:underline hover:cursor-pointer px-2 text-lg'>Update</Link>
                  <button onClick={() => handleDelete(product._id)} className='text-white hover:underline hover:cursor-pointer px-2 text-lg'>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
    </>
  )
}
