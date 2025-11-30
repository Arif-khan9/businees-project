import React from 'react'

const Section2 = () => {
  return (
   <>
   <div className='flex flex-col-reverse lg:flex-row items-center justify-between mt-20 px-4 lg:px-20 gap-10'>
  
  <div className='text-center lg:text-left'>
    <h1 className='text-3xl sm:text-4xl font-bold leading-snug'>
      The BVInt Certification Advantage
    </h1>

    <p className='text-gray-700 mt-3 text-sm sm:text-base'>
      Every valuation is issued with the 
      <span className='font-semibold'> BVInt Certification Tier </span>,
      <br className='hidden sm:block' />
      a globally recognised seal of credibility.
    </p>
  </div>

  <div>
    <img
      className='rounded-2xl w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[500px]'
      src="maskgroup.svg"
      alt=""
    />
  </div>

</div>

   </>
  )
}

export default Section2
