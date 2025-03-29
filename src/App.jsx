import Header from "./Header/Header.jsx";
import Herofilter from "./HeroSection/Herofilter.jsx";
import { useState,useEffect } from "react";
import Midsecfilter from "./Midsec/Midsecfilter.jsx";
import "./HeroSection/HeroSection.css"
import "./Midsec2/Midsec2.css"
import Midsec2filter from "./Midsec2/Midsec2filter.jsx";

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
  }, [hmopen]);

  console
  return (
    <div className="bg-[#06040D] font-archivo min-h-screen w-full">
        <div className="sticky top-0 left-0 w-full z-10 h-[80px] md:grid content-center justify-center">
          <div className="">
            <Header isOpen={setHmopen}/>
          </div>
        </div>
        <div className={`relative text-[#F5F5F4] ${hmopen  ? "blur":'transform-gpu transition-all ease-in-out'}`}>
          <div className="h-full w-full md:grid content-center justify-center hero">
            <div className="mx-[20px]">
              <Herofilter/>
            </div>
          </div>
          <div className="h-full w-full md:grid content-center justify-center">
            <div className="mx-[20px]">
              <Midsecfilter open={hmopen}/>
            </div>
          </div>
          <div className="h-full w-full md:grid content-center justify-center bg-[#1A1A1D]">
            <div className="mx-[20px]">
              <Midsec2filter/>
            </div>
          </div>
          {/* <div className="h-full w-full md:grid content-center justify-center bg-pink-500">
            <div className="mx-[20px]">
              <Midsec2filter/>
            </div>
          </div> */}
        </div> 
    </div>  
  )
}

export default App