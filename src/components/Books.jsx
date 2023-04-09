import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {

    const data = useLoaderData()

   const {books} = data;

   console.log(books);
  
    return (
        <div>
            All books
        </div>
    );
};

export default Books;