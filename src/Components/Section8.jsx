import React from 'react'

const Section8 = () => {
  return (
   <>
   <div className='bg-[#EAE8E8] py-20 flex flex-col md:flex-row md:justify-around md:items-center px-5 md:px-20 gap-10'>
  <div className='text-center md:text-left'>
      <p className='text-[20px] font-[400] text-[#555555]'>OUR HAPPY CLIENTS</p>
      <h3 className='text-[40px] md:text-[64px] font-[700] text-[#6293B1]'>
        Some of <br /> our clients
      </h3>
  </div>

  <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
    <div className='bg-white h-33 w-37 flex items-center justify-center'><img src="logo7.svg" alt="" /></div>
    <div className='bg-white h-33 w-37 flex items-center justify-center'><img src="logo6.svg" alt="" /></div>
    <div className='bg-white h-33 w-37 flex items-center justify-center'><img src="logo5.svg" alt="" /></div>
    <div className='bg-white h-33 w-37 flex items-center justify-center'><img src="logo4.svg" alt="" /></div>
    <div className='bg-white h-33 w-37 flex items-center justify-center'><img src="logo3.svg" alt="" /></div>
    <div className='bg-white h-33 w-37 flex items-center justify-center'><img src="logo2.svg" alt="" /></div>
  </div>
</div>

<div className='bg-[#2BA9E2] py-10 px-5 md:px-20'>
  <p className='text-center text-[22px] md:text-[32px] font-[700] text-white'>
    Your valuation is your most powerful asset. <br />
    With BVInt, it becomes certified, defensible, and globally investor-ready.
  </p>

  <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 mt-10'>
      <div className='bg-[#0C5CB1] text-white px-5 py-3 rounded-sm text-center'>
          <p className='text-[24px] md:text-[32px] font-[700]'>Request a Consultation</p>
      </div>
      <div className='bg-[#0C5CB1] text-white px-5 py-3 rounded-sm text-center'>
          <p className='text-[24px] md:text-[32px] font-[700]'>Book a Demo</p>
      </div>
  </div>
</div>

   </>
  )
}

export default Section8
