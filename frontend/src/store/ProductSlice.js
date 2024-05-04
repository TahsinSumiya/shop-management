import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk for adding a product
export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/products/', productData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Define the async thunk for get products
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get('http://localhost:8000/api/getproducts/');
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
// Define the async thunk for update products
  export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async ({ id, updatedData }, { rejectWithValue }) => {
      try {
        const response = await axios.put(`http://localhost:8000/api/updateproducts/${id}`, updatedData);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  // Define the async thunk for delete products
  export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async ({ id }) => {
      try {
        const response = await axios.delete(`http://localhost:8000/api/deleteproducts/${id}`);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  );
// Create a products slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      })


      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload; 
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      })

      

      .addCase(updateProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = state.products.map((product) =>
          product.id === action.payload.id ? { ...product, ...action.payload } : product
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      })



      .addCase(deleteProduct.pending, (state) => {
        state.status = 'loading';
      })

 
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const deletedProductId = action.payload; 
        state.products = state.products.filter(product => product.id !== deletedProductId);
      })
      
  
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      });
  }
});

export default productsSlice.reducer;

export const selectProducts = (state) => state.products.products;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;
