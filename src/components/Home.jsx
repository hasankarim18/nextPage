import React from 'react';
import Lottie from "lottie-react";
import education from '../assets/education.json'
import {Link} from 'react-router-dom'
import { ShoppingCartIcon } from "@heroicons/react/24/solid";


const Home = () => {
    return (
      <div>
        <div className=" my-container mx-auto grid grid-cols-1 md:grid-cols-2 ">
          <div className="order-2 md:order-1">
            {/* Text Content */}
            <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6 lg:mt-8">
                <div>
                  <p className="badge">On Sale!</p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  A reader lives a <br className="hidden md:block" /> thousand
                  lives{" "}
                  <span className="inline-block text-blue-400">
                    before he dies
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Books are a uniquely portable magic. Books serve to show a man
                  that those original thoughts of his aren’t very new after all.
                  The man who does not read good books is no better than the man
                  who can’t.
                </p>
              </div>
              <div className="flex flex-col items-center md:flex-row">
                <Link to="/books" className="btn md:w-auto md:mr-4">
                  <div className="inline-flex items-center justify-center w-full h-full">
                    <p className="mr-3">Visit Store</p>
                    <ShoppingCartIcon className="w-5 text-gray-100" />
                  </div>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div>
              <Lottie
                className=" h-96 "
                animationData={education}
                loop={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;