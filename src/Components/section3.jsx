import React from 'react'

const Section3 = () => {
  return (
   <>
<div>
  <div className='flex flex-col-reverse lg:flex-row justify-around bg-[#D0F0FE9C] mt-20 px-4 py-10 lg:py-0 lg:h-120'>

    <div className='flex flex-col gap-5 mt-12 w-full lg:w-1/2'>
      <h1 className='text-3xl sm:text-4xl font-bold mt-10 text-center lg:text-left'>Certification Tiers</h1>

      <div className='flex items-start gap-5'>
        <div className='h-5 w-5 bg-black rounded-full mt-1'></div>
        <p className='text-xl sm:text-2xl'>
          Founder-Ready – for early-stage fundraising and <br className='hidden sm:block'/> pitch decks
        </p>
      </div>

      <div className='flex items-start gap-5'>
        <div className='h-5 w-5 bg-black rounded-full mt-1'></div>
        <p className='text-xl sm:text-2xl'>Investor-Grade – for VC & PE negotiations</p>
      </div>

      <div className='flex items-start gap-5'>
        <div className='h-5 w-5 bg-black rounded-full mt-1'></div>
        <p className='text-xl sm:text-2xl'>Board-Use – for strategy & decision-making</p>
      </div>

      <div className='flex items-start gap-5'>
        <div className='h-5 w-5 bg-black rounded-full mt-1'></div>
        <p className='text-xl sm:text-2xl'>Regulatory-Grade – for audit & compliance</p>
      </div>

      <div className='flex items-start gap-5'>
        <div className='h-5 w-5 bg-black rounded-full mt-1'></div>
        <p className='text-xl sm:text-2xl'>Credit-Grade – for banks & lenders</p>
      </div>
    </div>

    <div className='flex justify-center w-full lg:w-auto'>
      <img className='rounded-2xl mt-10 lg:mt-20 w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[500px]' src="mask.svg" alt="" />
    </div>

  </div>

  <div className='px-4'>
    <p className='text-center text-lg sm:text-xl lg:text-2xl mt-7'>
      Certification is front-and-center, signalling trust, independence, and <br className='hidden sm:block' /> purpose-fit reporting
    </p>

    <div className='flex justify-center'>
      <div className='text-center text-2xl bg-[#2A4F69] w-full sm:w-96 py-3 rounded-xl text-white mt-5'>
        <p>Explore Certification Framework</p>
      </div>
    </div>
  </div>
</div>


   </>
  )
}

export default Section3
