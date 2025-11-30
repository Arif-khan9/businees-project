import React from 'react'

const Section7 = () => {
  return (
    <>
    <div className='px-5 sm:px-10 lg:px-20'>

  <div className='flex items-center gap-3.5 mt-7'>
    <div className='h-3 w-3 bg-black rounded-full'></div>
    <p className='text-xl sm:text-2xl'>
      IFAC – International Federation of Accountants
    </p>
  </div>

  <div className='flex items-center gap-3.5 mt-3'>
    <div className='h-3 w-3 bg-black rounded-full'></div>
    <p className='text-xl sm:text-2xl'>
      IFAC – International Federation of Accountants Forum of Firms – Global network of independent valuation firms
    </p>
  </div>
  <div className='flex flex-col lg:flex-row mt-10 gap-10 lg:gap-30 items-center'>

    <img className=' lg:max-w-none' src="group3.svg" alt="" />

    <div>
      <p className='text-[#6293B1] text-[40px] sm:text-[50px] lg:text-[64px] font-[700] lg:mt-25 text-center lg:text-left'>
        We have 300+ <br /> clients across <br /> 30+ countries
      </p>
    </div>

  </div>

</div>

    </>
  )
}

export default Section7
