import React from 'react'

const Section8 = () => {
  return (
   <>
    <div className='bg-[#EAE8E8] py-20 flex justify-around items-center'>
        <div>
            <p className='text-[20] font[400] text-[#555555]'>OUR HAPPY CLIENTS</p>
            <h3 className='text-[64px] font-[700] text-[#6293B1]'>Some of <br />our clients</h3>
        </div>
      <div className='grid grid-cols-3 gap-5'>
        <div className='bg-white h-33 w-37 '><img src="logo7.svg" alt="" /></div>
        <div className='bg-white h-33 w-37 '><img src="logo6.svg" alt="" /></div>
        <div className='bg-white h-33 w-37 '><img src="logo5.svg" alt="" /></div>
        <div className='bg-white  h-33 w-37'><img src="logo4.svg" alt="" /></div>
        <div className='bg-white h-33 w-37 '><img src="logo3.svg" alt="" /></div>
        <div className='bg-white h-33 w-37 '><img src="logo2.svg" alt="" /></div>
      </div>
    </div>
    <div className='bg-[#2BA9E2] py-10'>
    <p className='text-center text-[32px] font-[700px] text-white'>Your valuation is your most powerful asset. <br />With BVInt, it becomes certified, defensible, and globally investor-ready.</p>
    <div className='flex justify-between text-center items-center px-10 mt-10'>
        <div className='bg-[#0C5CB1]  text-white px-3 rounded-sm'>
            <p className='text-[32px] font-700px'>Request a Consultation</p>
        </div>
         <div className='bg-[#0C5CB1]  text-white px-3 rounded-sm '>
            <p className='text-[32px] font-700px'>Book a Demo</p>
        </div>
    </div>
    </div>
   </>
  )
}

export default Section8
