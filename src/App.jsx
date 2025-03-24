import Header from "./Header/Header.jsx";
import Herofilter from "./HeroSection/Herofilter.jsx";
import { useState } from "react";
import Midsecfilter from "./Midsec/Midsecfilter.jsx";
import "./HeroSection/HeroSection.css"

function App() {
  let [hmopen,setHmopen]=useState(false)
  return (
    <div className="bg-[#06040D] font-archivo min-h-screen w-full">
        <div className="relative z-10 ">
          <Header isOpen={setHmopen}/>
        </div>
        <div className={`relative z-0 text-[#F5F5F4] ${hmopen  ? "blur":'transform-gpu transition-all ease-in-out'}`}>
          <div className="h-full w-full md:grid content-center justify-center hero">
            <div className="mx-[20px]">
              <Herofilter/>
            </div>
          </div>
          <div className="h-full w-full md:grid content-center justify-center">
            <div className="mx-[20px]">
              <Midsecfilter/>
            </div>
          </div>
        </div> 
    </div>  
  )
}

export default App