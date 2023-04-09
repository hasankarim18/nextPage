import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {

    const data = useLoaderData()

   const {books} = data;

   console.log(books);
  
    return (
        <div className="my-container">
            <div className=" 
             grid
             gap-2
             sm:gap-4
             grid-cols-1
             sm:grid-cols-2
             md:grid-cols-3 
            lg:grid-cols-4
            
            ">
                {
                    books.map(item => {
                        return (
                          <div
                            className="books_card "
                            key={item.isbn13}
                          >
                            <img
                              className="mx-auto object-cover w-full h-56 md:h-64 xl:h-80  "
                              src={item.image}
                              alt=""
                            />
                            <div className="bg-black
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
                             ">
                              
                                <p>{item.title}</p> <br />
                                <p>{item.subtitle.substring(0, 45)}...</p> <br />
                                <p className="mt-auto">Price: {item.price}</p>
                              
                            </div>
                          </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Books;