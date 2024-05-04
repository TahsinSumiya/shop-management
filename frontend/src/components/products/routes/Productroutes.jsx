import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Products from '../Products'
import Home from '../../Home'
import UpdateProducts from '../UpdateProducts'
import SearchProducts from '../SearchProducts'
export default function Productroutes() {
  return (
    <>
    <div className='h-screen'>
      <Routes>

<Route exact path='/addproducts' element={<Products/>} />
<Route exact path='/' element={<Home/>} />
<Route exact path='/update' element={<UpdateProducts/>} />
<Route exact path='/searchproducts' element={<SearchProducts/>} />
</Routes>
</div>
    </>
  )
}
