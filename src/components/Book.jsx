import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({item}) => {
    return (
      <Link to={`/books/${item.isbn13}`}>
        <div className="books_card ">
          <img
            className="mx-auto object-cover w-full h-56 md:h-64 xl:h-80  "
            src={item.image}
            alt=""
          />
          <div
            className="bg-black
                             w-full
                             rounded-md 
                            h-full
                             text-white
                             p-2
                             bg-opacity-75 absolute inset-0 
                             opacity-0 hover:opacity-100
                             duration-500
                             transition-opacity
                             cursor-pointer
                             flex flex-col
                             "
          >
            <p>{item.title}</p> <br />
            <p>{item.subtitle.substring(0, 45)}...</p> <br />
            <p className="mt-auto">Price: {item.price}</p>
          </div>
        </div>
      </Link>
    );
};

export default Book;