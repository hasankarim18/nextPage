import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {

    const data = useLoaderData()

   const {books} = data;

  
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
                        return <Book key={item.isbn13} item={item} />;
                    })
                }
            </div>
        </div>
    );
};

export default Books;