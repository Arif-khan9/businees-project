import React from 'react'

const Section4 = () => {
  return (
    <>
      <div className='bg-[#2A4F69] py-20 mt-7'>

        <div className='text-center text-white'>
          <h1 className='text-4xl pt-10 font-bold'>Our Core Services</h1>
          <p className='text-2xl pt-4'>
            BVInt’s proprietary service suite addresses the needs of both investors <br className='hidden sm:block' />
            and founders:
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 mt-15 gap-10'>

          <div className='flex flex-col items-center'>
            <img src="mask1.svg" alt="" />
            <p className='text-center text-white text-2xl mt-3'>
              Independent <br /> Valuations
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <img src="mask2.svg" alt="" />
            <p className='text-center text-white text-2xl mt-3'>
              Advanced Financial <br /> & Risk Modelling
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <img src="mask3.svg" alt="" />
            <p className='text-center text-white text-2xl mt-3'>Impact Valuation</p>
          </div>

          <div className='flex flex-col items-center'>
            <img src="mask4.svg" alt="" />
            <p className='text-center text-white text-2xl mt-3'>
              Strategic Decision <br /> Scorecards
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <img className='rounded-2xl' src="mask5.svg" alt="" />
            <p className='text-center text-white text-2xl mt-3'>
              Cryptocurrency <br /> & ICO Valuation
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <img src="mask1.svg" alt="" />
            <p className='text-center text-white text-2xl mt-3'>Integrated Reporting</p>
          </div>

          <div className='flex flex-col items-center'>
            <img className='rounded-2xl' src="mask6.svg" alt="" />
            <p className='text-center text-white text-2xl mt-3'>
              Valuation-as-a- <br /> Service (VaaS)
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <img src="mask1.svg" alt="" />
            <p className='text-center text-white text-2xl mt-3'>Express Valuation</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Section4
