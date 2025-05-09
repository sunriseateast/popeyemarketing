import Header from "./Header/Header.jsx";
import { useState,useEffect } from "react";
import "./HeroSection/HeroSection.css";
import "./Midsec/Midsec.css"
import "./Midsec2/Midsec2.css";
import { Outlet} from "react-router-dom";
import Footerfilter from "./Footer/Footerfilter.jsx";
import { ScrollRestoration } from "react-router";


function App() {
  let [hmopen,setHmopen]=useState(false)

  // Disable Scrolling when hmopen is true
  useEffect(() => {
    if (hmopen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  },[hmopen]);
  

  //function get hmopen value from header to blur-out background
  const handleData=(value)=>{
    setHmopen(value)
  }

  return (
    <div className="bg-[#06040D] font-archivo min-h-screen w-full">
       <ScrollRestoration />
        <div className="sticky top-0 left-0 w-full z-10 h-[80px] md:grid content-center justify-center">
          <div className="">
            <Header isOpen={handleData}/>
          </div>
        </div>
        <div className={`relative text-[#F5F5F4] ${hmopen  ? "blur":'transform-gpu transition-all ease-in-out'}`}>
          
          <Outlet context={hmopen}/>

          <div className="h-full w-full md:grid content-center justify-center bg-[#1A1A1D]">
            <div className="mx-[20px]">
              <Footerfilter/>
            </div>
          </div>
        </div>
    </div>  
  )
}

export default App