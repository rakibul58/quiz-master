import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-green-500 flex w-full justify-between py-2 items-center">
      <h1 className="lg:ml-28 text-2xl ml-2 font-bold text-white font-mono">Quiz Master</h1>
      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden mr-2 text-white">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <div
        className={`bg-green-500 font-sans text-lg font-semibold text-white p-4 lg:mr-28 absolute flex flex-col justify-center md:flex-row w-full md:w-fit md:static duration-500 ease-in ${
          open ? "top-12" : "top-[-120px]"
        }`}
      >
        <Link className="md:ml-7 ml-0 hover:text-gray-300" to="/">
          Home
        </Link>
        <Link className="md:ml-7 ml-0 hover:text-gray-300" to="/statistics">
          Statistics
        </Link>
        <Link className="md:ml-7 ml-0 hover:text-gray-300" to="/blog">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
