import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement,reset} from "../redux/reducer/counter"


const Tasbiih = () => {
const dispatch = useDispatch()


    const handleIncrement=()=>{
      dispatch(increment())
    }
    const handleDecrement=()=>{
      dispatch(decrement())
    }
    const handleReset=()=>{
      dispatch(reset())
    }

const value = useSelector((state)=>state.Tasbiih.value)
  return (
    <div className='text-center'>
      <h1  className='text-9xl'>{value}</h1>
      <button onClick={handleIncrement} className=' bg-red-500 text-black px-10 py-4 text-2xl m-4 '>Increment</button>
      <button onClick={handleDecrement} className=' bg-red-500 text-black px-10 py-4 text-2xl m-4'>Decrment</button>
      <button onClick={handleReset} className=' bg-red-500 text-black px-10 py-4 text-2xl m-4'>Reset</button>
      
    </div>
  )
}

export default Tasbiih
