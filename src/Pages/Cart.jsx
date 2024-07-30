import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Price } from '../Components/Price';
import { calculateTotalPrice, removeItemFromCart } from '../redux/reducer/cart';
import {toast, Toaster } from 'react-hot-toast'

const Cart = () => {

    const allItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch()


    const handleRemove=(data)=>{
     dispatch(removeItemFromCart(data))
     dispatch(calculateTotalPrice())
     toast.success("item has been deleted succesfully",{
        position: "top-right"
  })
    }

   
    return (
       
              <div>
                <h1 className='bg-gray-400 text-center p-5 text-3xl font-bold font-sans'>Shopping Cart</h1>
                <div className='flex gap-8 justify-center'>
                    <div className='mr-32 mb-20'>


{
   allItems.length>0?  allItems.map((item)=>{
        return <div className=' w-[400px] ml-[100px] border-2 flex mt-5 items-center gap-6 border-gray-900 px-4 py-5 sm:w-[500px] h-[160px] rounded'>
            <img  className=" ml-10 w-[150px] h-[150px] rounded" src={item.image} alt="" />


            <div>
                <p>{item.title}</p>
                <h1 className='font-bold'>${item.price}</h1>
                </div>
                <i onClick={()=> handleRemove(item)} class="fa-solid fa-x text-2xl"></i>
            </div>

          
    })
    :
    <p>there is no data yet</p>
    }

 
       
                    </div>
                 {allItems.length>0 ? <Price/> : ""}

                </div>
                <Toaster/>
              </div>

                
    );
}

export default Cart;
