"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((current) => !current);
  };
  return (
    <nav className="relative z-10 w-full text-white bg-orange-500">
      <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
        {/* logo */}
        <div className="flex items-center text-2xl h-14">
          <Link href="/">Logo</Link>
        </div>

        {/* menu */}
        <div className="text-2xl sm:hidden">
          {!menu ? (
            <button onClick={toggleMenu}>+</button>
          ) : (
            <button onClick={toggleMenu}>-</button>
          )}
        </div>

        {/* nav-items large screen */}
        <div className="hidden sm:block">
          <NavItem />
        </div>
      </div>
      <div className="block sm:hidden">{!menu ? null : <NavItem mobile />}</div>
    </nav>
  );
};

export default Navbar;
