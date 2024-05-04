import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts, selectProductsStatus, selectProductsError , deleteProduct} from '../../store/ProductSlice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function GetProducts() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);
const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error}</div>;
  }
  const handleDelete = async (id) => {
    // Dispatch the deleteProduct action with the product ID
    await dispatch(deleteProduct({ id }));
    window.location.reload(); // Refresh the page after deletion
  };
  
  return (
    <div className='h-screen bg-black overflow-y-auto flex flex-col items-center justify-center'>
      <h2 className='text-amber-600 text-3xl py-6 my-6'>Product List</h2>
      <div className="w-full ">
        {products.map((product) => (
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
      </div>
    </div>
  );
}

export default GetProducts;
