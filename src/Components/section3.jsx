import React from 'react'

const Section3 = () => {
  return (
   <>
   <div>
     <div className='flex  justify-around bg-[#D0F0FE9C] h-120 mt-20'>
    <div className='flex flex-col gap-5 mt-12'>
       <h1 className='text-4xl font-bold mt-10'>Certification Tiers</h1> 
       <div className='flex items-center gap-5'>
        <div className='h-5 w-5 bg-black rounded-full'></div>
        <p className='text-2xl'>Founder-Ready – for early-stage fundraising and <br /> pitch decks</p>
       </div>
       <div className='flex items-center gap-5'>
        <div className='h-5 w-5 bg-black rounded-full'></div>
        <p className='text-2xl'>Investor-Grade – for VC & PE negotiations</p>
       </div>
       <div className='flex items-center gap-5'>
        <div className='h-5 w-5 bg-black rounded-full'></div>
        <p className='text-2xl'>Board-Use – for strategy & decision-making</p>
       </div>
       <div className='flex items-center gap-5'>
        <div className='h-5 w-5 bg-black rounded-full'></div>
        <p className='text-2xl'>Regulatory-Grade – for audit & compliance</p>
       </div>
       <div className='flex items-center gap-5'>
        <div className='h-5 w-5 bg-black rounded-full'></div>
        <p className='text-2xl'>Credit-Grade – for banks & lenders</p>
       </div>
    </div>
    <div>
        <img  className='rounded-2xl mt-20' src="mask.svg" alt="" />
    </div>
   </div>
    <div>
      <p className='text-center text-2xl mt-7'>Certification is front-and-center, signalling trust, independence, and <br /> purpose-fit reporting</p>
     <div className='flex justify-center'>
       <div className='text-center text-3xl bg-[#2A4F69] w-120 py-3 rounded-xl text-white mt-5'><p>Explore Certification Framework </p></div>
     </div>
    </div>
   </div>
   </>
  )
}

export default Section3
