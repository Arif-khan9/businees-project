import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between bg-[#2A4F69] text-white px-4 py-3">

        <div className="flex items-center">
          <img className="h-16 md:h-21" src="logo copy.png" alt="" />
        </div>

        <div className="hidden md:block">
          <ul className="border px-6 py-2 rounded-full">
            <li className="flex justify-center gap-5">
              <a>Home</a>
              <a>About US</a>
              <a>Service</a>
              <a>Our Clients</a>
              <a>Our HQ Partners</a>
              <a>Contact US</a>
              <a>Blog</a>
              <a>Events</a>
            </li>
          </ul>
        </div>

        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          <CiMenuBurger />
        </div>

      </div>

      {open && (
        <div className="md:hidden bg-[#2A4F69] text-white px-6 py-4">
          <ul className="flex flex-col gap-3 text-center">
            <a>Home</a>
            <a>About US</a>
            <a>Service</a>
            <a>Our Clients</a>
            <a>Our HQ Partners</a>
            <a>Contact US</a>
            <a>Blog</a>
            <a>Events</a>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
