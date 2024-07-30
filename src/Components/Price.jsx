import React from 'react'
import { useSelector} from 'react-redux'
export const Price = () => {
    const price = useSelector((state)=>state.cart.totalPrice)
    const totalQuantity = useSelector((state)=>state.cart.items)

    
  return (

    
    
    <div className=' bottom-0 sm:w-[300px] fixed right-20 sm:h-[300px] p-4 sm:border-2 border-gray-400 mt-5 sm:bottom-[400px]'>
        <h1 className=' text-2xl mt-[100px] sm:mt-0 font-bold sm:text-1xl '>Quantity</h1>
        <h1 className='  font-bold'>{totalQuantity.length}</h1>
        <h1 className=' mt-3 text-2xl sm:mt-8 font-bold sm:text-1xl'>Total Price</h1>
        <h1 className='font-bold  sm:text-1xl'>${price}</h1>

        <button className='mt-3 bg-blue-900 px-24 py-2 sm:mt-10 text-white top-0'>Pay Now</button>
    </div>
  )
}
