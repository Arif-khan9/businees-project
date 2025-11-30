import React from 'react'

const Section = () => {
  return (
   <>
   <div className='bg-[url("/background.jpg")] bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] px-4 sm:px-10 md:px-20 flex flex-col justify-center'>
  <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
    Independent. <br /> Advanced. <br /> Globally Trusted.
  </h1>

  <p className='text-white mt-4 text-sm sm:text-base md:text-lg'>
    Investor-aligned valuations built on advanced <br className='hidden sm:block' />
    probabilistic models and global standards.
  </p>

  <button className='text-white bg-gray-600 px-4 py-2 mt-4 w-fit rounded'>
    Get a Valuation
  </button>
</div>

   </>
  )
}

export default Section
