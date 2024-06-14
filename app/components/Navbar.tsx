"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-20 lg:h-28 ">
      <div className="max-w-screen-3xl h-full mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/assets/icon.png" alt="icon.png" width={150} height={50} />
        </Link>
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-bold">
          <Link href="/">
            <li className="hover:text-main-color">Browse Jobs</li>
          </Link>
          <Link href="/">
            <li className="hover:text-main-color">Companies</li>
          </Link>
          <Link href="/">
            <li className="hover:text-main-color">Campus Hiring</li>
          </Link>
          <Link href="/">
            <li className="hover:text-main-color">Government Jobs</li>
          </Link>
          <Link href="/">
            <li className="hover:text-main-color">News</li>
          </Link>
          <Link href="/">
            <li className="hover:text-main-color">Resources</li>
          </Link>
          <Link href="/">
            <li className="hover:text-main-color">Download App</li>
          </Link>
        </ul>
        <div className="hidden lg:inline-flex gap-10 items-center">
          <button className="text-black hover:text-main-color">Sign In</button>
          <button className="text-black hover:text-main-color">Register</button>
          <button className="text-white bg-button-color rounded-lg px-4 py-2 font-medium hover:bg-white hover:text-button-color hover:border hover:border-button-color">
            Employers
          </button>
        </div>
        <div className="inline-flex lg:hidden ">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white px-4">
          <ul className="flex flex-col items-center gap-4 mt-4 uppercase text-sm font-bold">
            <Link href="/">
              <li className="hover:text-main-color" onClick={() => setMenuOpen(false)}>Browse Jobs</li>
            </Link>
            <Link href="/">
              <li className="hover:text-main-color" onClick={() => setMenuOpen(false)}>Companies</li>
            </Link>
            <Link href="/">
              <li className="hover:text-main-color" onClick={() => setMenuOpen(false)}>Campus Hiring</li>
            </Link>
            <Link href="/">
              <li className="hover:text-main-color" onClick={() => setMenuOpen(false)}>Government Jobs</li>
            </Link>
            <Link href="/">
              <li className="hover:text-main-color" onClick={() => setMenuOpen(false)}>News</li>
            </Link>
            <Link href="/">
              <li className="hover:text-main-color" onClick={() => setMenuOpen(false)}>Resources</li>
            </Link>
            <Link href="/">
              <li className="hover:text-main-color" onClick={() => setMenuOpen(false)}>Download App</li>
            </Link>
            <div className="flex flex-col gap-4 mt-4 items-center">
              <button className="text-black hover:text-main-color" onClick={() => setMenuOpen(false)}>Sign In</button>
              <button className="text-black hover:text-main-color" onClick={() => setMenuOpen(false)}>Register</button>
              <button className="text-white bg-button-color rounded-lg px-4 py-2 font-medium hover:bg-white hover:text-button-color hover:border hover:border-button-color" onClick={() => setMenuOpen(false)}>
                Employers
              </button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
