import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemTocart, calculateTotalPrice } from '../redux/reducer/cart'
import {toast, Toaster } from 'react-hot-toast'

const Product = ({items}) => {

  const dispatch = useDispatch()

  const handleCartItem =()=>{
    dispatch(addItemTocart(items))
    dispatch(calculateTotalPrice())


    toast.success("item has been added succesfully",{
      position: "top-right"
})
  }
  return (
    <div className='w-full h-[400px] sm:w-[300px] p-2 rounded m-3 border-2 border-black h-[350px] mt-[8npm i @reduxjs/toolkit0px] '>
      <img className=' w-full h-[200px]' src={items.image} alt="" />
      <div className=' flex justify-between mt-2'>
        <h1 className=' text-2xl  font-bold'>{items.title.substring(0,10)}</h1>
        <h1  className=' text-2xl  font-bold'>{items.category.name}</h1>
      </div>
      <div id='box' className='flex justify-between m-6'>
        <h1 className='text-2xl my-1 font-semibold'>{items.price}</h1>
       
       
      
        <i onClick={handleCartItem} id='btn' class="fa-solid fa-plus  mt-1 text-2xl hidden sm:block"></i>
      </div>
      <Toaster/>
    </div>
  )
}

export default Product
