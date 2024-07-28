"use client";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navlinks";
import {Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./menuoverlay";


const navLinks = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Sobre Mí",
    path: "/sobremi",
  },
  {
    title: "servicios",
    path: "/servicios",
  },
  {
    title: "Proyectos",
    path: "/proyectos",
  },
  {
    title: "Contacto",
    path: "/contacto",
  },
  
];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  

  return (
    <nav className="mx-auto  top-0 left-0 right-0 z-20 bg-[#2C3E50]">
      <div className="flex container lg:py-8 flex-wrap items-center justify-between mx-auto px-4 py-4">
        <Link
          href={"/"}
          className="text-5xl m-0  md:text-7xl text-white ml-10  "
          alt=" fa Desarrollo web"
          title="Logo fa desarrollo web"
        >
          <p className="m-0 p-0 font-bold font-sans"> {"{"}<span className="text-4xl md:text-6xl font-semibold font-serif m-0 p-0">FA</span>{"}"} </p>
        </Link>
        <div className="mobile-menu block md:hidden ">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2  text-white "
              title="Open menu"
            >
              <Bars3Icon className="h-12 w-12 "/>
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2  text-slate-200 hover:text-white hover:border-white text-xl font-semibold"
              title="Open menu" 
            >
              <XMarkIcon className="h-12 w-12" title="close menu" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Header;