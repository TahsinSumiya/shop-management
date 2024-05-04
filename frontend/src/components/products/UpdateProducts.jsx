import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateProduct, selectProducts } from '../../store/ProductSlice';
import { useNavigate } from 'react-router-dom';
function UpdateProducts() {
  const { id } = useParams(); // Fetch the product ID from the URL params
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
const navigate = useNavigate()
  // Find the product by ID
  const product = products.find((product) => product.id === id);

  useEffect(() => {
    // Populate form fields with product data
    if (product) {
      setProductName(product.productName);
      setDescription(product.description);
      setPrice(product.price);
      setImage(product.image);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the updateProduct action with the updated product data
    dispatch(updateProduct({ id: product._id, updatedData: { productName, description, price, image } }));
    navigate('/')
  };

  return (
<div className="flex bg-black  items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <h2 className="flex justify-center text-amber-400 p-10 text-3xl">Update Product</h2>
        <div className="mb-4">
          <label className="text" class="block mb-2 text-sm font-medium text-amber-400">Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="bg-amber-300 border border-amber-500 text-black font-semibold  text-sm rounded-lg
            focus:ring-amber-500 focus:border-amber-700 block w-full p-2.5 
       "
          />
        </div>
        <div className="mb-4">
          <label className="text" class="block mb-2 text-sm font-medium text-amber-400">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-amber-300 border border-amber-500 text-black font-semibold  text-sm rounded-lg
            focus:ring-amber-500 focus:border-amber-700 block w-full p-2.5 
       "
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="text" class="block mb-2 text-sm font-medium text-amber-400">Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="bg-amber-300 border border-amber-500 text-black font-semibold  text-sm rounded-lg
            focus:ring-amber-500 focus:border-amber-700 block w-full p-2.5 
       "
          />
        </div>
        <div className="mb-4">
          <label className="text" class="block mb-2 text-sm font-medium text-amber-400">Image:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="bg-amber-300 border border-amber-500 text-black font-semibold  text-sm rounded-lg
            focus:ring-amber-500 focus:border-amber-700 block w-full p-2.5 
       "
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="text-white bg-amber-300 hover:bg-amber-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
       "
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProducts;
