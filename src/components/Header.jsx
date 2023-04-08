import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BoltIcon ,Bars3Icon} from "@heroicons/react/24/solid";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)



    return (
      <div className=" h-16 bg-pink-200">
        <div className="md:container relative pl-4 pr-4 md:p-0 mx-auto flex justify-between items-center">
          <h1 className="text-4xl">
            <div className="flex justify-center items-center  ">
              <span className=" text-blue-600 ">
                <BoltIcon className="h-6 w-6" />
              </span>
              <Link className="tracking-wide" to="/">
                {" "}
                NextPage
              </Link>
            </div>
          </h1>
          <button className="md:hidden">
            <Bars3Icon className="h-12 w-12 text-gray-600 cursor-pointer" />
          </button>
          <nav className={` md:relative absolute top-0`}>
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
        </div>
      </div>
    );
};

export default Header;