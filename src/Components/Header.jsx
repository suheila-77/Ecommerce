import React from 'react'
import { useSelector } from 'react-redux' // for value
import { Link } from 'react-router-dom'

const Header = ({search}) => {

  const numberOfItem = useSelector((state)=>state.cart.items)
  return (
    <div className=' w-full sm:text-4xl flex gap-2 justify-between bg-black text-white sm:px-20 py-4 px-4 fixed'>
      <h1 className=''>Esuuq</h1>
      <ul className='hidden sm:flex gap-10 text-4xl '>
        <li >Home</li>
        <li>About</li>
      </ul>
<form>
    <input onChange={search} className=' rounded-sm p-2 text-black' type="serach"  placeholder='Search'/>
</form>
    <Link to="/cart"><i  class="fa-solid fa-cart-shopping text-pink-400 text-4xl ">              {numberOfItem.length}</i></Link>
      
    </div>
  )
}

export default Header
