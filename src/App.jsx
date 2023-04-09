import { Outlet, useLoaderData } from "react-router-dom"
import Header from "./components/Header"
import { createContext, useEffect, useState } from "react"



function App() {


  
  
  return (
    <div className="App">
   
        <Header />
        <Outlet />
    
    </div>
  );
}

export default App
