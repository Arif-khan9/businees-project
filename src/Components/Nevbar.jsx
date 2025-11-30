import React from 'react'

const Nevbar = () => {
  return (
   <>
   <div className='flex flex-col md:flex-row justify-between md:justify-around items-center h-auto md:h-26 bg-[#2A4F69] text-white px-4 py-3'>

    <div className='flex items-center mb-3 md:mb-0'>
        <img className='h-16 md:h-21' src="logo copy.png" alt="" />
    </div>

    <div className='w-full md:w-auto'>
        <ul className='border px-4 md:px-6 py-2 rounded-full'>
            <li className='flex flex-wrap md:flex-nowrap justify-center gap-3 md:gap-5 text-sm md:text-base'>

                <a>Home</a>
                <a>About US</a>
                <a>Service</a>
                <a>Our Clients</a>
                <a>Our HQ Partners</a>
                <a>Contact US</a>
                <a>Blog</a>
                <a>Events</a>

            </li>
        </ul>
    </div>

</div>

   </>
  )
}

export default Nevbar
