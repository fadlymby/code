"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import susu from "../../public/susu.png";
import Link from "next/link";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", path: "/home" },
    { id: 2, text: "About Us", path: "/about" },
    { id: 3, text: "Product", path: "/product" },
    { id: 4, text: "Member", path: "/team" },
    { id: 5, text: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="bg-green-800 flex justify-between sticky top-0 z-30 items-center h-24 mx-auto px-4 text-white">
      <div className=" pl-10">
      <Link href="/">
        <Image src={susu} alt="" className="w-20 object-cover" />
      </Link>
      </div>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#de9e2f] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            <Link href={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <Link href="/">
          <Image src={susu} alt="" className=" w-16 object-cover" />
        </Link>

        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <Link href={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
