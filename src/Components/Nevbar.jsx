import React from 'react'

const Nevbar = () => {
  return (
   <>
   <div className='flex justify-around items-center h-26 bg-[#2A4F69] text-white'>
    <div className='flex items-center'>
        <img className='h-21' src="logo copy.png" alt="" />
        
    </div>
    <div>
        <ul className='border px-6 py-2 rounded-full'>
            <li className='flex justify-center gap-5'>
                <a>Home</a>
                <a>About US</a>
                <a>Service</a>
                <a>Our Clients</a>
                <a>Our HQ Partners</a>
                <a>Contact US</a>
                <a>Blog </a>
                <a>Events</a>
            </li>
        </ul>
    </div>
   </div>
   </>
  )
}

export default Nevbar
