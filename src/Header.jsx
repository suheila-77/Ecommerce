import React from 'react'

const Header = ({search}) => {
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
      <i class="fa-solid fa-cart-shopping text-pink-400 text-4xl "></i>

    </div>
  )
}

export default Header
