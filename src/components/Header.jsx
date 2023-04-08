import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BoltIcon ,Bars3Icon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import './Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenu = ()=> {
      setIsMenuOpen(prev => !prev)
    }

    return (
      <>
        <div className="relative z-40 h-16 flex items-center bg-pink-200">
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
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 hover:text-blue-500 font-semibold"
                        : "hover:text-blue-500"
                    }
                    to="/"
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 hover:text-blue-500 font-semibold"
                        : "hover:text-blue-500"
                    }
                    to="/books"
                  >
                    {" "}
                    Books{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 hover:text-blue-500 font-semibold"
                        : "hover:text-blue-500"
                    }
                    to="/about"
                  >
                    {" "}
                    About{" "}
                  </NavLink>
                </li>
              </ul>
            </nav>
            {/* mobile menu button */}
            {isMenuOpen ? (
              <button onClick={handleMenu} className="md:hidden">
                <Bars3BottomRightIcon className="h-12 w-12 text-gray-600 cursor-pointer duration-150" />
              </button>
            ) : (
              <button onClick={handleMenu} className="md:hidden">
                <Bars3Icon className="h-12 w-12 text-gray-600 cursor-pointer duration-150" />
              </button>
            )}

            {/* mobile menu button */}
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenu isMenuOpen={isMenuOpen} />
      </>
    );
};

export default Header;



const MobileMenu = ({ isMenuOpen }) => {
  return (
    <div className="relative">
      <nav
        className={`absolute duration-300  md:hidden  pl-4 md:pl-0 block mobile menu 
            ${
              isMenuOpen
                ? "top-0 left-0 w-full z-20 bg-green-200 pb-4"
                : "-top-96 w-full -z-20 bg-green-200 left-0"
            }
            `}
      >
        <ul type="none" className="flex flex-col gap-4 text-2xl opacity-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 hover:text-blue-500 font-semibold"
                  : "hover:text-blue-500"
              }
              to="/"
            >
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 hover:text-blue-500 font-semibold"
                  : "hover:text-blue-500"
              }
              to="/books"
            >
              {" "}
              Books{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 hover:text-blue-500 font-semibold"
                  : "hover:text-blue-500"
              }
              to="/about"
            >
              {" "}
              About{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

