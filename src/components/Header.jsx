import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BoltIcon ,Bars3Icon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menu = [
      {id:1, name:'home', route:'/'},
      {id:2, name:'books', route:'/books'},
      {id:3, name:'about', route:'/about'},
    ]

    const handleMenu = ()=> {
      setIsMenuOpen(prev => !prev)
    }

    return (
      <>
        <div className="relative bg-white z-40 h-16 flex items-center border-b-2 ">
          <div className="md:container w-full  pl-4 pr-4 md:p-0 mx-auto flex justify-between items-center">
            <div className="text-4xl">
              <div className="flex justify-center items-center  ">
                <span className=" text-blue-600 ">
                  <BoltIcon className="h-6 w-6" />
                </span>
                <Link className="tracking-wide" to="/">
                  {" "}
                  NextPage
                </Link>
              </div>
            </div>

            <nav className={`md:relative  pl-4 md:pl-0 hidden md:block   `}>
              <ul type="none" className="md:flex gap-4 text-2xl">
                {
                  menu.map(item => {
                    return (
                      <li key={item.id} className=" capitalize ">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "active"
                              : "default"
                          }
                          to={item.route}
                        >
                          {" "}
                          {item.name}{" "}
                        </NavLink>
                      </li>
                    );
                  })
                }
               
              </ul>
            </nav>
            {/* mobile menu button */}
            {isMenuOpen ? (
              <button 
              aria-level="Close Menu"
               title='Close Menu'
               onClick={handleMenu} className="md:hidden">
                <Bars3BottomRightIcon className="h-12 w-12 text-gray-600 cursor-pointer duration-150" />
              </button>
            ) : (
              <button
              aria-level="Open Menu"
               title="Open Menu"
               onClick={handleMenu} className="md:hidden">
                <Bars3Icon className="h-12 w-12 text-gray-600 cursor-pointer duration-150" />
              </button>
            )}

            {/* mobile menu button */}
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenu menu={menu} isMenuOpen={isMenuOpen} />
      </>
    );
};

export default Header;



const MobileMenu = ({ isMenuOpen, menu }) => {
  return (
    <div className="relative">
      <nav
        className={`absolute pt-4 duration-300 bg-black bg-opacity-70  text-white md:hidden  pl-4 md:pl-0 block mobile menu 
            ${
              isMenuOpen
                ? "top-0 left-0 w-full z-20  pb-4"
                : "-top-96 w-full -z-20  left-0"
            }
            `}
      >
        <ul type="none" className="flex flex-col gap-4 text-2xl opacity-1">
          {
            menu.map(item => {
              return (
                <li className="capitalize" key={item.id}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 hover:text-blue-400 font-semibold"
                        : "hover:text-blue-400"
                    }
                    to={item.route}
                  >
                    {" "}
                    {item.name}{" "}
                  </NavLink>
                </li>
              );
            })
          }
         
        </ul>
      </nav>
    </div>
  );
};

