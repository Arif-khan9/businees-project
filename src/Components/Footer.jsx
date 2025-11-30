import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
  <div className='bg-[#303336]'>
  <div className='flex flex-col md:flex-row items-center justify-between px-5 md:px-20 pt-10 gap-5'>
      <img className='h-20' src="logo copy.png" alt="" />
      <div className='text-white flex items-center gap-4 text-2xl'>
          <FaFacebookSquare />
          <FaTwitter />
          <FaLinkedin />
      </div>
  </div>
  <div className='border-t border-b border-amber-50 py-10 mx-5 md:mx-10 mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 justify-around'>

          <div className='text-white'>
              <h1 className='text-2xl font-bold text-[#2BBAFA] hover:underline decoration-[#2BBAFA]'>Company</h1>
              <a className='hover:underline decoration-[#2BBAFA]'>Home</a><br />
              <a className='hover:underline decoration-[#2BBAFA]'>About Us</a><br />
              <a className='hover:underline decoration-[#2BBAFA]'>Our Clients</a><br />
              <a className='hover:underline decoration-[#2BBAFA]'>Our HQ Partners</a><br />
              <a className='hover:underline decoration-[#2BBAFA]'>Contact Us</a><br />
              <a className='hover:underline decoration-[#2BBAFA]'>Blog</a><br />
              <a className='hover:underline decoration-[#2BBAFA]'>Events</a>
          </div>
          <div className='text-white'>
              <h1 className='text-2xl font-bold text-[#2BBAFA] hover:underline decoration-[#2BBAFA]'>Services</h1>

              <div className='flex items-center gap-3 mt-1'>
                  <div className='h-1 w-1 rounded-full bg-white'></div>
                  <a className='hover:underline decoration-[#2BBAFA]'>Independent Valuations</a>
              </div>
              <div className='flex items-center gap-3 mt-1'>
                  <div className='h-1 w-1 rounded-full bg-white'></div>
                  <a className='hover:underline decoration-[#2BBAFA]'>Advanced Financial & Risk Modelling</a>
              </div>
              <div className='flex items-center gap-3 mt-1'>
                  <div className='h-1 w-1 rounded-full bg-white'></div>
                  <a className='hover:underline decoration-[#2BBAFA]'>Impact Valuation</a>
              </div>
              <div className='flex items-center gap-3 mt-1'>
                  <div className='h-1 w-1 rounded-full bg-white'></div>
                  <a className='hover:underline decoration-[#2BBAFA]'>Strategic Decision Scorecards</a>
              </div>
              <div className='flex items-center gap-3 mt-1'>
                  <div className='h-1 w-1 rounded-full bg-white'></div>
                  <a className='hover:underline decoration-[#2BBAFA]'>Cryptocurrency & ICO Valuation</a>
              </div>
              <div className='flex items-center gap-3 mt-1'>
                  <div className='h-1 w-1 rounded-full bg-white'></div>
                  <a className='hover:underline decoration-[#2BBAFA]'>Integrated Reporting</a>
              </div>
              <div className='flex items-center gap-3 mt-1'>
                  <div className='h-1 w-1 rounded-full bg-white'></div>
                  <a className='hover:underline decoration-[#2BBAFA]'>Valuation-as-a-Service (VaaS)</a>
              </div>
              <div className='flex items-center gap-3 mt-1'>
                  <div className='h-1 w-1 rounded-full bg-white'></div>
                  <a className='hover:underline decoration-[#2BBAFA]'>Express Valuation</a>
              </div>
          </div>

          <div className='text-white'>
              <h1 className='text-2xl font-bold text-[#2BBAFA] hover:underline decoration-[#2BBAFA]'>Company</h1>

              <a className='hover:underline decoration-[#2BBAFA] flex items-center gap-3'>
                  <FaWhatsapp /> +44 (0) 207 692 0877 
                  <MdOutlineAttachEmail /> info@bvint.com
              </a>

              <p className='text-2xl font-bold text-[#2BBAFA] mt-4'>London</p>
              <a className='hover:underline decoration-[#2BBAFA] flex items-center gap-3'>
                  <IoLocationSharp /> Berkeley Suite 35 Berkeley Square <br /> Mayfair,LondonW1J 5BF
              </a>

              <p className='text-2xl font-bold text-[#2BBAFA] mt-4'>Switzerland</p>
              <a className='hover:underline decoration-[#2BBAFA] flex items-center gap-3'>
                  <IoLocationSharp /> Rue de Genève 18 Case postale 306 <br /> 1225 Chêne-Bourg Switzerland
              </a>

              <p className='text-2xl font-bold text-[#2BBAFA] mt-4'>Malta</p>
              <a className='hover:underline decoration-[#2BBAFA] flex items-center gap-3'>
                  <IoLocationSharp /> 6 Sir William Reid Street, Gzira, <br /> Malta
              </a>
          </div>

      </div>
  </div>
  <div className='text-center text-2xl py-6'>
      <h1 className='text-2xl font-bold text-[#2BBAFA] hover:underline decoration-[#2BBAFA]'>
          © Copyright - 2018 BVINT.
      </h1>
      <p className='text-white mt-4'>
          All rights reserved. BVINT is a trade name for Business <br /> Valuation International, Ltd.
      </p>
  </div>

</div>

</>
  )
}

export default Footer
