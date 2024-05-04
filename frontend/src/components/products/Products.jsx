import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  addProduct } from '../../store/ProductSlice';
import GetProducts from './GetProducts';

export default function Products() {

  const dispatch = useDispatch();
  const [productName, setproductName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ productName,image, price, description }));
    // Clear the form fields after submission
    setproductName('');
    setPrice('');
    setImage('')
    setDescription('');
    alert('add')
  };
  return (
    <div className='bg-black h-screen'>
      
<h1 className='flex justify-center text-amber-400 p-10 text-3xl'>Add Products</h1>
<form class="max-w-sm mx-auto"onSubmit={handleSubmit}>
<div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-amber-400 ">Product Name</label>
    <input type="text"
          id="name"
          value={productName}
          onChange={(e) => setproductName(e.target.value)}  class="bg-amber-300 border border-amber-500 text-black font-semibold  text-sm rounded-lg
     focus:ring-amber-500 focus:border-amber-700 block w-full p-2.5 
   " placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-amber-400 ">Product detail</label>
    <input  id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required class="bg-amber-300 border border-amber-500 text-black font-semibold text-sm rounded-lg
     focus:ring-amber-500 focus:border-amber-700 block w-full p-2.5 
   " placeholder="name@flowbite.com" />
  </div> 
  <div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-amber-400 ">Image</label>
    <input  id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required class="bg-amber-300 border border-amber-500 text-black font-semibold text-sm rounded-lg
     focus:ring-amber-500 focus:border-amber-700 block w-full p-2.5 
   " placeholder="name@flowbite.com" />
  </div> 
   <div class="mb-5">
    <label for="number" class="block mb-2 text-sm font-medium text-amber-400 ">Price</label>
    <input type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required class="bg-amber-300 border border-amber-500 text-black font-semibold text-sm rounded-lg
     focus:ring-amber-500 focus:border-amber-700 block w-full p-2.5 
   " placeholder="name@flowbite.com"  />
  </div>
  <button type="submit" class="text-white bg-amber-300 hover:bg-amber-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
<div className='h-screen overflow-y-auto'> 
<GetProducts/>
</div>

    </div>
  )
}
