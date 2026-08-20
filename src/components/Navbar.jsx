import { Bell, ChevronDown, Mail, Menu, Search } from 'lucide-react'
import React from 'react'
import  Image  from '../assets/imgg.jpg';

function Navbar() {
    return (
<nav className='flex border-b border-slate-700 justify-around items-center'>
      

    <div className="flex relative w-96">
        
  <Search
    size={18}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
  />

  <input
    type="text"
    placeholder="Search here..."
    className="w-full pl-10 pr-20 py-3 text-white bg-slate-900 rounded-lg"
  />
</div>
<div className="relative text-white">
  <Bell />

  <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
    3
  </span>
</div>
<div className="relative text-white">
  <Mail />

  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
    3
  </span>
</div>
<div className="h-8 w-px bg-slate-700"></div>
<div className='flex justify-center  contenet-center text-nowrap text-white'>
  <span>
    <h1 className='text-2xl'>Faizan Ahmad</h1>

  <p className='text-gray-400'>Web Developer</p>
  </span>
  
<div className=' rounded-lg p-2 items-center gap-1 mt-3'>

  <img
  src={Image}
  alt="Faizan Ahmad"
  className="w-10 h-10 rounded-full object-cover"
/>

</div>
<ChevronDown className='mt-7' size={18} />
</div>




</nav>    )
}


export default Navbar