import React from 'react'

const Section4 = () => {
  return (
    <>
    <div className='bg-[#2A4F69] py-20 mt-7'>
      <div className='text-center text-white'>
        <h1 className='text-4xl pt-10 font-bold'>Our Core Services</h1>
        <p className='text-2xl pt-4'>BVInt’s proprietary service suite addresses the needs of both investors <br /> and founders:</p>
      </div>
      <div className=' grid  grid-cols-4 px-5 mt-15 gap-9'>
        <div>
          <img src="mask1.svg" alt="" />
        <p className=' text-center text-white text-2xl'>Independent <br />Valuations </p>
        </div>
       <div>
          <img src="mask2.svg" alt="" />
        <p className='text-center text-white text-2xl'>Advanced Financial <br />  & Risk Modelling </p>
        </div>
        <div>
          <img src="mask3.svg" alt="" />
        <p className='text-center text-white text-2xl'>Impact Valuation </p>
        </div>
        <div>
          <img src="mask4.svg" alt="" />
        <p className='text-center text-white text-2xl'>Strategic Decision <br /> Scorecards</p>
        </div>
        <div>
          <img className='rounded-2xl' src="mask5.svg" alt="" />
        <p className='text-center text-white text-2xl'>Cryptocurrency <br /> & ICO Valuation </p>
        </div>
        <div>
          <img src="mask1.svg" alt="" />
        <p className='text-center text-white text-2xl'>Integrated Reporting </p>
        </div>
        <div>
          <img className='rounded-2xl' src="mask6.svg" alt="" />
        <p className='text-center text-white text-2xl'>Valuation-as-a- <br /> Service (VaaS) </p>
        </div>
        <div>
          <img src="mask1.svg" alt="" />
        <p className='text-center text-white text-2xl'>Express Valuation </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Section4
